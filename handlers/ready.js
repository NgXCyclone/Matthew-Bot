const {bot} = require('../index.js');
const config = require("../config.json");

bot.login(process.env.BOT_TOKEN)

bot.on("ready", async () => {

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('I, The Twat is Ready'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)); 


setInterval(async () => {
    const statuslist = [
      //`Updating | Unavailable`,
      `Being a Scottish Twat`, 
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
    //  bot.user.setStatus("available");
      bot.user.setActivity(`${statuslist[random]}`, { url: 'https://www.twitch.tv/monstercat', type: 'STREAMING' });

    } catch (error) {
      console.error(error);
    }
  }, 15000);


  console.log(`${bot.user.tag} is ready`);

});
