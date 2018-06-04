// Discord.js bot
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setActivity("pg!help", {type: 'WATCHING'});
});

client.on('message', (message) => {
     if(command === "/purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
}
);
client.on("guildMemberAdd", (member) => {
    const guild = member.guild;
    if (!newUsers[guild.id]) newUsers[guild.id] = new Discord.Collection();
    newUsers[guild.id].set(member.id, member.user);
  
    if (newUsers[guild.id].size > 0) {
      const userlist = newUsers[guild.id].map(u => u.toString()).join(" ");
      guild.channels.get(guild.id).send("Welcome to our Selver\n" + userlist);
      newUsers[guild.id].clear();
    }
  });
  
  client.on("guildMemberRemove", (member) => {
    const guild = member.guild;
    if (newUsers[guild.id].has(member.id)) newUsers.delete(member.id);
  });

client.login('NDUzMjg3NTM5OTY1Njg5ODU2.Dfcseg.WAUgtpWSi8wciebsY335DSHtbwM');




