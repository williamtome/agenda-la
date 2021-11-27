require('dotenv').config()
const { Client } = require('@notionhq/client')

const databaseId = process.env.NOTION_DB_AGENDA_NEG

const read = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })
  const data = await notion.databases.query({
    database_id: databaseId,
    page_size: 10,
  })
  data.results.forEach((result) => {
    const blockedDate = result.properties.Date.date.start
    console.log(blockedDate)
  })
}

read()
