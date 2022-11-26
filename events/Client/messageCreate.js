const client = require('../../index');
const { EmbedBuilder } = require('discord.js');

client.on('messageCreate', async (message) => {
  if(message.author.bot || !message.guild) return;

  const [ cmd, ...args ] = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

  if(!command) return;
  await command.run(client, message, args).catch((error) => {
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setColor('Red')
        .setDescription('Something went wrong with the commands.')
      ]
    });
    console.log(error);
  });
}); 