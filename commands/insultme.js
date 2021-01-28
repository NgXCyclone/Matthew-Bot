const Discord = require("discord.js")
const bot = require("../index.js")
const responses = require("../responses.json")

module.exports.run = async (bot, message, args) => {

    let random = responses.insults[Math.floor(Math.random() * responses.insults.length)]

    message.channel.send(random)

}

  exports.help = {
  name: "insultme",
  aliases: []
}
