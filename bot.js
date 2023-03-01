let time = {
  
  time_remains: function (time_input) {
    let timeInMS = Date.parse(time_input) - Date.now()
    if (timeInMS / 1000 >= 1) {
      let seconds = timeInMS / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      let days = hours / 24;
      let time =
        `Time Remaining  :${Math.floor(days)} Days \n
                          ${Math.floor(hours % 24)} Hours \n
                          ${Math.floor(minutes % 60)} Minutes \n
                          ${Math.floor(seconds % 60)} Seconds`
      return time;
    }
    else { return "Opps, Seems Like The Date's Already Elapsed" }
  },

  time_until: function (time_input) {
    let timeInMS = Date.now() - Date.parse(time_input)
    if (timeInMS / 1000 >= 1) {
      let seconds = timeInMS / 1000;
      let minutes = seconds / 60;
      let hours = minutes / 60;
      let days = hours / 24;
      let time =
        `Time After  :${Math.floor(days)} Days \n
                      ${Math.floor(hours % 24)} Hours \n
                      ${Math.floor(minutes % 60)} Minutes \n
                      ${Math.floor(seconds % 60)} Seconds`
      return time;
    }
    else { return "Opps, Seems Like The Date's Yet To Come" }
  },

  time: () => { return new Date() }
}

const Discord = require("discord.js.old")
const client = new Discord.Client()

client.on("message", msg => {
  if (/\$_time\s*/.test(msg.content)) { msg.channel.send("The Time Is " + time.time()); }
  if (/\$time_until\s* .+/.test(msg.content)) { msg.channel.send(time.time_until(msg.content.replace(/\$time_until\s*/, ''))); }
  if (/\$time_remains\s* .+/.test(msg.content)) { msg.channel.send(time.time_remains(msg.content.replace(/\$time_remains\s*/, ''))); }
  if (/\$start\s*/.test(msg.content)) {
    let s = 0
    let mes = msg.channel.send("0 : 0 : 0")
    let is = setInterval(() => {
      let minutes = s / 60;
      let hours = minutes / 60;
      mes.then(s=>s.edit(`${Math.floor(hours)} : ${Math.floor(minutes) % 60} : ${Math.floor(s) % 60}`))
      s++
      client.on('message', message => {
        if (/\$start\s*/.test(message.content)) { message.channel.send('Stop The StopWatch First') }
        if (/\$stop\s*/.test(message.content)) { message.channel.send('Stopped The StopWatch'); clearInterval(is) }
        if (/\$lap\s*/.test(message.content)) { message.channel.send(mes.content) }
       
      })
    }, 1000);
    }
    if(msg.content=='$dev'){
      msg.channel.send(`Developer: Aditya Nambiar
      Hosted By: YT .`)
    }
})

client.login('MTA3OTQ2Mzk0ODQ1NTI2MDIzMA.GTh_iQ.jP6JCLOTTRCJ8y58gv2fI8G5XpjQf0oTQQ50Is')