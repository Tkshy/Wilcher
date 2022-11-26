const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  aliases: [],
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setColor('DarkAqua')
        .setDescription('Pong!')
      ]
    });
  },
}; 