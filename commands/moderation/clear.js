const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'clear',
  aliases: ['c', 'purge'],
  owner: false,
  description: 'Clear some message in the channel',
  run: async (client, message, args) => {
    if(!message.member.permissions.has('ManageMessages')) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription("You don't have permission to do that!")
        ]
      });
    };

    if(!args[0]) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Please specific how much message do you want to delete.')
        ]
      });
    };

    if(isNaN(args[0])) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Please input a number, not a string or other.')
        ]
      });
    };
    
    if(args[0] > 100 || args[0] < 1) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('I only can delete message from 1 - 100.')
        ]
      });
    };
  
    message.channel.bulkDelete(args[0]).then((msg) => {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Green')
          .setDescription(`Successfully deleted ${msg.size} message(s) in this channel.`)
        ]
      }).then((success) => {
        setTimeout(() => success.delete(), 4000);
      });
    }).catch((error) => {
      console.log(error);
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription("It's look like I can delete the message. Make sure I have **Manage Message** permission in this server or make sure the message age is **less than 2 weeks!**")
        ]
      });
    });
  },
};