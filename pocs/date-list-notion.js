require('dotenv').config()
const { Client } = require('@notionhq/client')

const databaseId = process.env.NOTION_DB_AGENDAMENTOS

const read = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })
  const data = await notion.databases.query({
    database_id: databaseId,
    page_size: 100,
  })

  const blockedDays = data.results.map(
    (result) => result.properties.Date.date.start
  )
  console.log(blockedDays)

  const now = new Date()

  const isWeekend = (dayOfWeek) => dayOfWeek === 0 && dayOfWeek === 6
  const zeroPad = (number) => (number < 10 ? '0' + number : number.toString())
  const toDateString = (date) =>
    `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(
      date.getDate()
    )}`
  const isBlocked = (date) => blockedDays.indexOf(date) >= 0

  // dias possíveis
  // desconsiderando sábados e domingos.
  const possibleDays = []
  for (let i = 0; i < 20; i++) {
    now.setDate(now.getDate() + 1)
    const dayOfWeek = now.getDay()

    if (!isWeekend(dayOfWeek) && !isBlocked(toDateString(now))) {
      possibleDays.push({
        date: now.toString(),
        dayOfWeek,
      })
    }
  }

  // dada uma lista de dias, separa as semanas
  let firstDay = null
  const weeks = []
  possibleDays.forEach((day) => {
    if (firstDay === null) {
      firstDay = day
    }
    if (day.dayOfWeek === 5) {
      weeks.push({
        start: firstDay,
        end: day,
      })
      firstDay = null
    }
  })

  console.log(weeks)
}

read()

/*
  console.log({
    now,
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
    dayOfWeek: now.getDay(),
  })
 */
