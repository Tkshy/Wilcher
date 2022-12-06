const client = require('../../index');
const { EmbedBuilder } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

client.on('messageCreate', async (message) => {
  let prefix = await db.get(`prefix_${message.guild.id}`) || 'wr.'
  if(message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(prefix)) return;

  const [ cmd, ...args ] = message.content.slice(prefix.length).trim().split(/ +/g);
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