const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ping',
  aliases: [],
  owner: false,
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setColor('DarkAqua')
        .setDescription(`🏓 Pong! | \`${client.ws.ping}\`ms.`)
      ]
    });
  },
};