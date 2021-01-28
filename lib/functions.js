const fs = require("fs");
const path = require("path");

function find_nested(dir, pattern) {
  
  let results = [];
  
  fs.readdirSync(dir).forEach(inner_dir => {
    
    
    inner_dir = path.resolve(dir, inner_dir);
    const stat = fs.statSync(inner_dir);
    
    if(stat.isDirectory()) {
      results = results.concat(find_nested(inner_dir, pattern));
    }
    
    if (stat.isFile() && inner_dir.endsWith(pattern)) {
      results.push(inner_dir);
    }
    
  });
  
  return results;
  
}

//console.log(find_nested("./commands", ".js"))
const cmd_files = find_nested("./commands", ".js");

module.exports.setup = (bot) => {
  
  fs.readdir("./handlers/", (err, files) => {
  if (err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  
  if (jsfiles.length <= 0) return console.log("There are no events!");
  
  console.log(`Loading ${jsfiles.length} events...`);
  jsfiles.forEach((f, i) => {
    require(`../handlers/${f}`);
    console.log(`${i + 1}: ${f} loaded!`);

  });
});
  
  
  if (cmd_files.length <= 0) return console.log("There are no commands!");
  cmd_files.forEach(file => {
    const props = require(file);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => {
      bot.aliases.set(alias, props.help.name);
    });
  });
  console.log(`LOADED ${cmd_files.length} COMMANDS`);
};