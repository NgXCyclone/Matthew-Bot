const Discord = require("discord.js")
const bot = require("../index.js")
const responses = require("../responses.json")

module.exports.run = async (bot, message, args) => {

    let random = responses.messages[Math.floor(Math.random() * responses.messages.length)]

    message.channel.send(random)

}

  exports.help = {
  name: "randomme",
  aliases: []
}
