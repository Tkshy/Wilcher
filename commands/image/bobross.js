const { AttachmentBuilder } = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
  name: 'bobross',
  aliases: [],
  owner: false,
  run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    let avatar = member.user.displayAvatarURL({ forceStatic: true, extension: 'png', size: 4096 });
    let img = await new DIG.Bobross().getImage(avatar);

    message.channel.send({
      files: [
        new AttachmentBuilder(img).setName('bobross.png')
      ]
    });
  },
};