import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface PostFormatProps {
    uid: string
    first_publication_date: string,
    data: {
        title: string,
        subtitle:string
        author: string,
    }
}

    
export function postFormat(response: PostFormatProps[]) {
    
   const newPost = response.map((post) => {
    return {
      slug: post.uid,
        title: post.data.title,
      subtitle: post.data.subtitle,
      author: post.data.author,
      publishedAt: format(
        new Date(post.first_publication_date),
        "d' 'MMM' 'yyyy'",
        {
          locale: ptBR,
        }
      ),
    };
       
   })
    
    return newPost
}