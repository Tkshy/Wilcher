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
        .setTitle(`Informasi seputar ${client.user.username} bot!`)
        .setFields(
          { name: '**Uptime:**', value: `${ms(client.uptime)}` },
          { name: '**Kecepatan Bot:**', value: `${client.ws.ping}ms` },
          { name: '**Total Server:**', value: `${client.guilds.cache.size} server.` },
          { name: '**Total Pengguna:**', value: `${client.guilds.cache.reduce((a, g) => a + g.memberCount, 0).toLocaleString()} Pengguna.` },
          { name: '**Total Perintah:**', value: `${client.commands.size} Perintah.` },
          { name: '**Versi Discord:**', value: `${discordjsVersion}` }
        )
        .setThumbnail(client.user.displayAvatarURL({ forceStatic: true }))
      ]
    });
  },
};