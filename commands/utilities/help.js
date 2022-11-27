const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  aliases: ['h'],
  owner: false,
  description: 'See information about the command',
  run: async (client, message, args) => {
    let cmd = args[0];

    if(!cmd) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Please mention command that you want to see the description!')
        ]
      });
    };

    let command = client.commands.get([...client.commands.keys()].find(x => x.toLowerCase() === cmd.toLowerCase()));
    if(!command) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Command not found.')
        ]
      });
    } else {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setTitle(`${command.name} Infomation`)
          .setColor('DarkAqua')
          .setDescription(`Description: ${command.description}`)
        ]
      });
    };
  },
};