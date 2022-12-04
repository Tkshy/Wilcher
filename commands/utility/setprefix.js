const { EmbedBuilder } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  name: 'setprefix',
  aliases: ['sp'],
  owner: false,
  run: async (client, message, args) => {
    if(!message.member.permissions.has('Administrator')) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription("You don't have permission to do that!")
        ]
      });
    };

    let prefix = args[0];
    if(!prefix) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Please mention the prefix for this bot.')
        ]
      });
    } else if(prefix.lenth > 5) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('The maximum prefix is 5 characters.')
        ]
      });
    } else if(prefix === await db.get(`prefix_${message.guild.id}`)) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('This server already set the prefix same as you type before.')
        ]
      });
    };

    await db.set(`prefix_${message.guild.id}`, prefix);
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setColor('Green')
        .setDescription(`My prefix in \`${message.guild.name}\` is \`${prefix}\` now!`)
      ]
    });
  },
};