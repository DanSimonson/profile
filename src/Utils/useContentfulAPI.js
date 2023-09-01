import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_ID,
    host: "preview.contentful.com",
  });

  /**
       * const tifOptionsES6 = Object.keys(tifs).map(key => 
    	<option key={key} value={key}>{tifs[key]}</option>
    )
       */
  /**
   *
   * <select>{tifOptionsES6}</select>
   */
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

      let uniqueEntries = [];
      entries.items.forEach((obj) => {
        for (let p in obj) {
          if (obj[p].index >= 0 && obj[p].index !== "undefined") {
            console.log("obj[p]: ", obj[p]);
            uniqueEntries.push(Object.values(obj[p]));
          }
        }
      });
      console.log("uniqueEntries: ", uniqueEntries);
      // return uniqueEntries;
    } catch (error) {
      console.log(`Error getting carousel: ${error.message}`);
    }
  };
  return { getCarousel };
};

export default useContentful;
