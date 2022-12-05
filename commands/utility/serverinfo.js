const { EmbedBuilder, ChannelType } = require('discord.js');
const moment = require('moment')

module.exports = {
  name: 'serverinfo',
  aliases: ['si'],
  owner: false,
  run: async (client, message) => {
    let owner = await message.guild.fetchOwner();

    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setColor('DarkAqua')
        .setTitle(`Informatin about ${message.guild.name}`)
        .setFields(
          { name: '**__Owner Server:__**', value: `${owner.user.tag}` },
          { name: '**__Created at:__**', value: `${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).format('LTS')} ${moment(message.guild.createdTimestamp).fromNow()}`},
          { name: '**__Total Channels:__**', value: `${message.guild.channels.cache.filter(c => c.type === ChannelType.GuildText).size} Text Channel\n${message.guild.channels.cache.filter(c => c.type === ChannelType.GuildVoice).size} Voice Channel\n${message.guild.channels.cache.size} Total Channels`},
          { name: '**__Total Members:__**', value: `${message.guild.members.cache.filter(member => !member.user.bot).size} Real members\n${message.guild.members.cache.filter(member => member.user.bot).size} Bots\n${message.guild.members.cache.size} Total Members` },
          { name: '**__Total Roles:__**', value: `${message.guild.roles.cache.size} roles` }
        )
        .setThumbnail(message.guild.iconURL({ extension: 'png', forceStatic: true }))
        .setFooter({ text: `ID: ${message.guild.id}` })
        .setTimestamp()
      ]
    });
  },
};