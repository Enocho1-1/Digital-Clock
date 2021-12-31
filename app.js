
const clockDiv = document.querySelector('div.clock'),
       dateDiv = document.querySelector('div.date')


function updateTime() {
  const date = new Date(),
        hour = formatTime(date.getHours()),
        time = formatTime(date.getMinutes()),
        seconds = formatTime(date.getSeconds())

  clockDiv.textContent = `${hour}:${time}: ${seconds}`
}

function formatTime(time) {
  if(time < 10) {
    return '0' + time
  }
  return time
}

setInterval(updateTime, 1000)

function todayDate(){
  const date = new Date(Date.now()),
        day = date.getDate(),
        month = date.getMonth() + 1,
        year = date.getFullYear()

  return `Date: ${month}/${day} / ${year}`
}


dateDiv.textContent = `${todayDate()}`


