import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_ID,
    host: "preview.contentful.com",
  });

  const getCarousel = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "carousel",
        select: "fields",
      });

      let uniqueEntries = [];
      entries.items.forEach((obj) => {
        for (let p in obj) {
          if (obj[p].index >= 0 && obj[p].index !== "undefined") {
            uniqueEntries.push(obj[p]);
          }
        }
      });
      return uniqueEntries;
    } catch (error) {
      console.log(`Error getting carousel: ${error.message}`);
    }
  };
  return { getCarousel };
};

export default useContentful;
