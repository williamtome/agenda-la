const now = new Date()

// dias possíveis
// desconsiderando sábados e domingos.
const possibleDays = []
for (let i = 0; i < 20; i++) {
  now.setDate(now.getDate() + 1)
  const dayOfWeek = now.getDay()

  if (dayOfWeek !== 0 && dayOfWeek !== 6) {
    possibleDays.push({
      date: now.toString(),
      dayOfWeek,
    })
  }
}

// console.log(possibleDays)

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

/*
  console.log({
    now,
    day: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
    dayOfWeek: now.getDay(),
  })
 */
