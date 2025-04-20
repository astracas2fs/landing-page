import { Client } from '@notionhq/client';

// Initialize the Notion client
const notion = new Client({
  auth: import.meta.env.VITE_NOTION_API_KEY,
});

const databaseId = import.meta.env.VITE_NOTION_DATABASE_ID;

export const addEmailToNotion = async (email: string) => {
  try {
    const response = await notion.pages.create({
      parent: {
        database_id: databaseId!,
      },
      properties: {
        Email: {
          title: [
            {
              text: {
                content: email,
              },
            },
          ],
        },
        'Signup Date': {
          date: {
            start: new Date().toISOString(),
          },
        },
      },
    });
    
    return response;
  } catch (error) {
    console.error('Error adding email to Notion:', error);
    throw error;
  }
};
