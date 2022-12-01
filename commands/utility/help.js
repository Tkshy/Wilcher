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
      let cmd = args[0];

      if(!cmd) {
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setColor('Red')
            .setDescription('Please mention command that you want to see the description!')
          ]
        });
      };

      let command = client.commands.get([...client.commands.keys()].find(x => x.toLowerCase() === cmd.toLowerCase()));
      if(!command) {
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setColor('Red')
            .setDescription('Command not found.')
          ]
        });
      } else {
        message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setTitle(`Information about the command`)
            .setColor('DarkAqua')
            .setDescription(`Command name: ${command.name}\nCommand description: ${command.description}\nCommand owner: ${command.owner ? 'Yes' : 'No'}`)
            .setFooter({ text: `Requested by ${message.author.tag}` })
            .setTimestamp()
          ]
        });
      };
    } else if(choice === 'fun') {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('DarkAqua')
          .setAuthor({ name: `${client.user.username} Command List`, iconURL: client.user.displayAvatarURL({ format: 'png' }) })
          .setDescription(`This is a command category for \`Fun\`\nRun \`${prefix}help <command>\` to see info for that command.\n\n`)
          .setFooter({ text: 'Fun Page ~ ©️ Tokioshy 2022' })
        ]
      });
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