const discord = require("discord.js");
const bot = new discord.Client({disableEveryone: true});
const lib = require("./lib/functions");
const config = require("./config.json");

//Command Handler
bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map()
//bot.mongoose = require('./utils/mongoose')

lib.setup(bot);

module.exports = {
  bot: bot
};

//bot.mongoose.init();
bot.on('error', console.error); 
