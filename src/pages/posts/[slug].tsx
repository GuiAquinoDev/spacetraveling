import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { RichText } from "prismic-dom";
import { FiCalendar, FiClock, FiUser } from "react-icons/fi";
import { createClient } from "../../services/prismic";
import { readingTime } from "../../utls/readingTime";
import styles from "./styles.module.scss";

interface Publications {
  slug: string;
  firstPublicationDate: string;
  lastPublicationDate: string;
  title: string;
  author: string;
  reading: string;
  banner: {
    url: string;
  };
  content: {
    heading: string;
    body: {
      text: string;
    }[];
  }[];
}

interface PublicationsProps {
  publications: Publications;
}

export default function Post({ publications }: PublicationsProps) {
  return (
    <>
      <Head>
        <title>Posts | spacetraveling</title>
      </Head>
      <main className={styles.postContainer}>
        <img src={publications.banner.url} />
        <article>
          <section>
            <h1>{publications.title}</h1>

            <div className={styles.postInfos}>
              <time>
                <FiCalendar size={20} />
                {publications.firstPublicationDate}
              </time>
              <span>
                <FiUser size={20} />
                {publications.author}
              </span>
              <span>
                <FiClock size={20} />
                {publications.reading}
              </span>
            </div>

            <div>
              {publications.firstPublicationDate !==
                publications.lastPublicationDate && (
                <span>
                  * editado em <time>{publications.lastPublicationDate }</time>
                </span>
              )}
            </div>

            {publications.content.map((post) => (
              <div className={styles.postMain}>
                <h2>{post.heading}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(post.body),
                  }}
                />
              </div>
            ))}
          </section>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;
  const prismic = createClient({});
  const response = await prismic.getByUID("posts", String(slug), {});

  const publications = {
    uid: response.uid,
    firstPublicationDate: format(
      new Date(response.first_publication_date),
      "d' 'MMM' 'yyyy'",
      {
        locale: ptBR,
      }
    ),
    lastPublicationDate: format(
      new Date(response.last_publication_date),
      "d' 'MMM' 'yyyy', às 'hh':'mm'",
      {
        locale: ptBR,
      }
    ),
    title: response.data.title,
    banner: response.data.banner,
    author: response.data.author,
    content: response.data.content,
    reading: readingTime(response.data.content),
  };

  return {
    props: {
      publications,
    },
  };
};
