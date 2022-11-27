const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'ban',
  alises: [],
  owner: false,
  description: 'Ban someone from the server',
  run: async (client, message, args) => {
    if(!message.member.permissions.has('BanMembers')) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription("You don't have permission to do that!")
        ]
      });
    };

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    let reason = args.slice(1).join(' ') || 'Bad member.'

    if(!member) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Please mention someone to ban!')
        ]
      });
    } else if (member.id === message.author.id) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('You cannot ban yourself!')
        ]
      });
    } else if(!member) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('I cannot find a member with that ID!')
        ]
      });
    } else {
      let banned = await member.ban({ reason: reason });
      if(!banned) {
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setColor('Red')
            .setDescription("It's kinda weird but I can't ban him.")
          ]
        });
      } else {
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setColor('Green')
            .setDescription(`${member.user.tag} just got banned by ${message.author} with reason: ${reason}`)
          ]
        });
      };
    };
  },
};