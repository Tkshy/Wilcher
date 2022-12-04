const { version: discordjsVersion, EmbedBuilder } = require('discord.js');
const ms = require('pretty-ms');

module.exports = {
  name: 'botinfo',
  aliases: ['bi'],
  owner: false,
  run: async (client, message) => {
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setColor('DarkAqua')
        .setTitle(`Information about ${client.user.username} bot!`)
        .setFields(
          { name: '**Uptime:**', value: `${ms(client.uptime)}` },
          { name: '**Bot ping:**', value: `${client.ws.ping}ms` },
          { name: '**Total Server:**', value: `${client.guilds.cache.size} server.` },
          { name: '**Total Users:**', value: `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0).toLocaleString()} Users.` },
          { name: '**Total Commands:**', value: `${client.commands.size} Commands.` },
          { name: '**Discord Version:**', value: `${discordjsVersion}` }
        )
        .setThumbnail(client.user.displayAvatarURL({ forceStatic: true }))
      ]
    });
  },
};