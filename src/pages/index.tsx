import Head from "next/head";
import styles from "./styles.module.scss";
import { FiCalendar, FiUser } from "react-icons/fi";

import { GetStaticProps } from "next";
import { createClient } from "../services/prismic";

import Link from "next/link";
import { useState } from "react";
import { postFormat } from "../utls/postFormat";

interface Post {
  uid: string;
  first_publication_date: string;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostProps {
  postsContent: {
    posts: Post[];
    next_page: string;
  };
}

export default function Home({ postsContent }: PostProps) {
  const { posts } = postsContent;

  const [nextPage, setNextPage] = useState(postsContent.next_page);
  const [newPost, setNewPost] = useState(postFormat(posts));

  async function handleLoadPosts() {
    const response = await fetch(nextPage).then((data) => data.json());

    setNextPage(response.next_page);

    const { results } = response;

    const newPostContent = postFormat(results);

    setNewPost([...newPost, ...newPostContent]);
  }

  return (
    <div>
      <Head>
        <title>Home | spacetraveling</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {newPost.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <strong>{post.title}</strong>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <div className={styles.author}>
                <span>
                  <FiCalendar size={20} />
                  <time>{post.publishedAt}</time>
                </span>
                <span>
                  <FiUser size={20} />
                  {post.author}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {nextPage && (
          <button type="button" onClick={handleLoadPosts}>
            Carregar mais posts
          </button>
        )}
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({});

  const response = await client.getByType("posts", {
    pageSize: 1,
    orderings: {
      field: "first_publication_date",
      direction: "desc",
    },
  });

  const postsContent = {
    next_page: response.next_page,
    posts: response.results,
  };

  return {
    props: {
      postsContent,
    },
    revalidate: 60 * 5, // 5 minutes
  };
};
