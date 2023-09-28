import { createClient } from "contentful";

export const GetAPI = async () => {
  const client = createClient({
    space: process.env.REACT_APP_SPACE_ID,
    accessToken: process.env.REACT_APP_ACCESS_ID,
    host: "preview.contentful.com",
  });
  try {
    // client.getEntries()
    // const entries = await client.getEntries({
    //   content_type: "carousel",
    //   select: "fields",
    // });
    const entries = await client.getEntries();
    if (entries.items) {
      return {
        items: entries.items,
      };
    }
  } catch (error) {
    console.log(`Error getting carousel: ${error.message}`);
  }
};
