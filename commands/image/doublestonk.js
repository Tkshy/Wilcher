const { AttachmentBuilder, EmbedBuilder } = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
  name: 'doublestonk',
  aliases: [],
  owner: false,
  run: async (client, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if(!member) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Mention someone to doublestonk with them!')
        ]
      });
    } else if(member.id === message.author.id) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Doublestonk alone huh?')
        ]
      });
    };

    let avatar = member.user.displayAvatarURL({ forceStatic: true, extension: 'png' });
    let img = await new DIG.Bed().getImage(`${message.author.displayAvatarURL({ extension: 'png', forceStatic: true })}`, `${avatar}`);

    message.channel.send({
      files: [
        new AttachmentBuilder(img).setName('doublestonk.png')
      ]
    });
  },
};