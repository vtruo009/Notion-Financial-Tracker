// Using import causes ES5 error for private properties
const { Client } = require('@notionhq/client');
import {
    NOTION_SECRET,
    NOTION_DATABASE_ID
} from './config/environment';

async function main() {
    
    // const exDatabase = await notion.databases.query({
    //     database_id: NOTION_DATABASE_ID,
    // });
}

main()
    .then(resp => {
        console.log(resp);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })
