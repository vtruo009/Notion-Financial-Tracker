// Using import causes ES5 error for private properties
const { Client } = require('@notionhq/client');
import { NOTION_SECRET, NOTION_DATABASE_ID } from "../config/environment";
import { Page } from "./mixins";

const notion = new Client({
    auth: NOTION_SECRET,
});

/**
 * EXAMPLES; DELETE WHEN CREATE ENDPOINT IMPLEMENTED
 */
// const exPage = await notion.pages.create({
//     parent: {
//         type: 'database_id',
//         database_id: NOTION_DATABASE_ID,
//     },
//     properties: {
//         'Item': {
//             type: 'title',
//             title: [{
//                 type: 'text',
//                 text: {
//                     content: 'Ground Beef'
//                 }
//             }],
//         },
//         'Category': {
//             type: 'multi_select',
//             multi_select: [
//                 {
//                     name: 'Protein',
//                     color: 'blue',
//                 }
//             ]
//         },
//         'Price': {
//             type: 'number',
//             number: 9.99
//         }
//     }
// });

/**
 * Sample return response for create
 {
  object: 'page',
  id: '7de95bf9-304b-4707-9984-76c4f8f24e0b',
  created_time: '2023-06-04T15:34:00.000Z',
  last_edited_time: '2023-06-04T15:34:00.000Z',
  created_by: { object: 'user', id: 'dc08ff15-a031-4fa8-a779-5250aad12d82' },
  last_edited_by: { object: 'user', id: 'dc08ff15-a031-4fa8-a779-5250aad12d82' },
  cover: null,
  icon: null,
  parent: {
    type: 'database_id',
    database_id: '371c8ec7-b429-4d67-b6d9-2aec8f9161bd'
  },
  archived: false,
  properties: {
    Price: { id: 'LaaT', type: 'number', number: 9.99 },
    Category: { id: 'jqEq', type: 'multi_select', multi_select: [Array] },
    Item: { id: 'title', type: 'title', title: [Array] }
  },
  url: 'https://www.notion.so/Ground-Beef-7de95bf9304b4707998476c4f8f24e0b'
}
 */

export async function createPage() {
    const example: Page = {
      parent: {
        type: 'database_id',
        database_id: 'aweoifao;wejf'
      },
      properties: {
        multi_select: {
          name: 'a;wefoia'
        }
      }
    }
}

