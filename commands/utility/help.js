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
    } else {
      return message.reply({
        embeds: [
          new EmbedBuilder()
          .setColor('00FFFF')
          .setAuthor({ name: `${client.user.username} Commnad List`, iconURL: client.user.displayAvatarURL({ format: 'png' })})
          .setDescription(`My prefix in \`${message.guild.name}\` is \`${prefix}\`\nPlease swap the Buttons to see the help category pages\nRun \`${prefix}help <command>\` to see info for that command.\n\n**Command Categories**\n🤣・\`Fun\`\n🖼️・\`Image\`\n⛔・\`Moderation\`\n⚙️・\`Utility\`\n\n_If you **need help** or **have trouble** using any **command** or **find a bug**, you can also join our [Bot Support](https://discord.gg/tMMgdGNcP3) Discord Server_`)
          .setImage('https://media.discordapp.net/attachments/1033544540574986252/1046718597436813382/standard_1.gif')
          .setFooter({ text: `Main Page ~ ©️ Tokioshy 2022` })
        ],
        components: [
          new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
            .setStyle('Success')
            .setCustomId('lefttoutility')
            .setEmoji('◀️'),
            new ButtonBuilder()
            .setStyle('Primary')
            .setCustomId('home')
            .setEmoji('🏠'),
            new ButtonBuilder()
            .setStyle('Secondary')
            .setCustomId('delete')
            .setEmoji('1046723999205437460'),
            new ButtonBuilder()
            .setStyle('Success')
            .setCustomId('righttofun')
            .setEmoji('▶️'),
          )
        ],
        allowedMentions: {
          repliedUser: false
        }
      });
    };
  },
};