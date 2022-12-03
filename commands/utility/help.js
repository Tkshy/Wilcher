const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, AllowedMentionsTypes } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB();

module.exports = {
  name: 'help',
  aliases: ['h'],
  owner: false,
  description: 'See information about the command',
  run: async (client, message, args) => {
    let prefix = await db.get(`prefix_${message.guild.id}`) || client.config.prefix;
    let choice = args[0];

    if(choice) {
      let cate = args[0];
      if(cate.toLowerCase() === 'fun' || cate.toLowerCase() === 'image' || cate.toLowerCase() === 'moderation' || cate.toLowerCase() === 'utility') {
        if(cate.toLowerCase() === 'fun') {
          return message.channel.send({
            embeds: [
              new EmbedBuilder()
              .setColor('DarkAqua')
              .setAuthor({ name: 'Fun Command List', iconURL: client.user.displayAvatarURL({ format: 'png' }) })
              .setDescription('Soon!')
              .setFooter({ text: 'Fun Page ~ ©️ Tokioshy 2022' })
            ]
          });
        };
  
        if(cate.toLowerCase() === 'image') {
          return message.channel.send({
            embeds: [
              new EmbedBuilder()
              .setColor('DarkAqua')
              .setAuthor({ name: 'Image Command List', iconURL: client.user.displayAvatarURL({ format: 'png' }) })
              .setDescription('Soon!')
              .setFooter({ text: 'Image Page ~ ©️ Tokioshy 2022' })
            ]
          });
        };
  
        if(cate.toLowerCase() === 'moderation') {
          return message.channel.send({
            embeds: [
              new EmbedBuilder()
              .setColor('DarkAqua')
              .setAuthor({ name: 'Moderation Command List', iconURL: client.user.displayAvatarURL({ format: 'png' }) })
              .setDescription('Soon!')
              .setFooter({ text: 'Moderation Page ~ ©️ Tokioshy 2022' })
            ]
          });
        };
  
        if(cate.toLowerCase() === 'utility') {
          return message.channel.send({
            embeds: [
              new EmbedBuilder()
              .setColor('DarkAqua')
              .setAuthor({ name: 'Utility Command List', iconURL: client.user.displayAvatarURL({ format: 'png' }) })
              .setDescription('Soon!')
              .setFooter({ text: 'Utility Page ~ ©️ Tokioshy 2022' })
            ]
          });
        };
      } else {
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setColor('Red')
            .setDescription('Categories not found.')
          ]
        });
      };
    } else {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('DarkAqua')
          .setAuthor({ name: `${client.user.username} Command List`, iconURL: client.user.displayAvatarURL({ format: 'png' }) })
          .setDescription(`Hello \`${message.author.username}\`!\nMy prefix in \`${message.guild.name}\` is \`${prefix}\`\nRun \`${prefix}help <Categories>\` to see command in tha category.\n\n**Command Categories**\n🤣・\`Fun\`\n🖼️・\`Image\`\n⛔・\`Moderation\`\n⚙️・\`Utility\`\n\n_If you **need help** or **have trouble** using any **command** or **find bug**, you can also join our [**Bot Support**](https://discord.gg/tMMgdGNcP3) Discord server._`)
          .setFooter({ text: 'Main Page ~ ©️ Tokioshy 2022' })
        ]
      })
    };
  },
};