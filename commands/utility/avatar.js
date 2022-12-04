const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'avatar',
  aliases: ['av', 'profile', 'pp'],
  owner: false,
  run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    let process = await message.guild.members.cache.get(member.id);
    if(!process) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('I cannot find a member with that ID.')
        ]
      });
    } else {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setTitle(`${member.user.tag}`)
          .setColor('DarkAqua')
          .setImage(member.user.displayAvatarURL({ extension: 'png', forceStatic: true, size: 4096 }))
        ]
      });
    }
  },
};