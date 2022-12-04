const { EmbedBuilder, AttachmentBuilder } = require('discord.js');
const DIG = require('discord-image-generation');

module.exports = {
  name: 'presentation',
  aliases: [],
  owner: false,
  run: async (client, message, args) => {
    let presen = args.join(' ');
    
    if(!presen) {
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setDescription('Type something to create the image.')
        ]
      });
    };

    let img = await new DIG.LisaPresentation().getImage(`${presen}`);
    message.channel.send({
      files: [
        new AttachmentBuilder(img).setName('presentation.png')
      ]
    });
  },
};