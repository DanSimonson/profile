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

      if (entries.items) {
        return {
          items: entries.items,
        };
      }
    } catch (error) {
      console.log(`Error getting carousel: ${error.message}`);
    }
  };
  return { getCarousel };
};

export default useContentful;
