require('dotenv').config()
const { Client } = require('@notionhq/client')

const databaseId = process.env.NOTION_DB_AGENDAMENTOS

const register = {
  Confirmado: { id: 'dvvr', type: 'checkbox', checkbox: false },
  Pacientes: {
    id: 'UAA%3A',
    type: 'rich_text',
    rich_text: [{ text: { content: 'Tulio Faria' } }],
  },
  Date: {
    id: 'cuHN',
    type: 'date',
    date: { start: '2021-11-05T10:00:00.000-03:00', end: null },
  },
  Tags: { id: 'kf__', type: 'multi_select', multi_select: [] },
  Name: {
    id: 'title',
    type: 'title',
    title: [{ text: { content: 'Tulio Faria' } }],
  },
}

const insert = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const inserted = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: register,
  })
  console.log(inserted)

  /*
  const data = await notion.databases.query({
    database_id: '9212e204bd2245e8886b4d5c5d67347e',
    page_size: 10,
  })
  data.results.forEach((result) => {
    const properties = result.properties
    // console.log(properties)
    console.log(properties.Name.title[0].text.content)
    console.log(properties.Pacientes.rich_text)
  })*/
}

insert()
