const client = require('../../index');
const { EmbedBuilder } = require('discord.js');

client.on('messageCreate', async (message) => {
  if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(client.config.prefix)) return;

  const [ cmd, ...args ] = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
  if(!command) return;

  if(command.owner === true) {
    if(message.author.id !== process.env.developer) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Sorry this command only for bot developer!')
        ]
      });
    };
  };

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