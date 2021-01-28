const Discord = require("discord.js")
const bot = require("../index.js")

module.exports.run = async (bot, message, args) => {

    message.channel.send({embed: {color: "RANDOM", description: `**<@${bot.user.id}>insultme:** I will insult you\n\n**<@${bot.user.id}>randomme:** I will send a random message I always say to people`}})

}

  exports.help = {
  name: "help",
  aliases: []
}
