import { RichText } from "prismic-dom";

interface ReadingTime {
  heading: string;
  body: {
    text: string;
  }[];
}


export function readingTime(content: ReadingTime[]) {

  const [{body,heading}] = content

  if (heading || !body) {
    const totalWords = content.reduce((total, contentItem) => {
      const bodyLength = RichText.asText(contentItem.body).split(" ").length;

      total += contentItem.heading.split(" ").length + bodyLength;

      return total;
    }, 0);

    const calculateReadingtime = Math.ceil(totalWords / 200);

    return `${calculateReadingtime} minutes`;
  }

  return "Loading...";
}
