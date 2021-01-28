const {bot} = require('../index.js');

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type != "text") return;

		let prefix = `<@${bot.user.id}>`
    let args = message.content.slice(prefix.length).trim().split(' ');
	  let cmd = args.shift().toLowerCase();
 	  let command;
  
 		const regex = new RegExp(`^<@!?${bot.user.id}>( |)$`);
 		if (message.content.match(regex)) {
	message.channel.send(`My prefix is ${prefix} you fucking twat, also use ${prefix}help`).catch(err => console.log(err));
	}
  
  if (!message.content.startsWith(prefix)) return;
  
  if (bot.commands.has(cmd)) {
    command = bot.commands.get(cmd);
   } else {
    command = bot.commands.get(bot.aliases.get(cmd));
   }
  
  if (command) command.run(bot, message, args).catch(console.error);
	


	});
