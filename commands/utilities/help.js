const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  aliases: ['h'],
  owner: false,
  description: 'See information about the command',
  run: async (client, message, args) => {
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
      return message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('DarkAqua')
          .setAuthor({ name: 'List of commands from Wilcher', iconURL: client.user.displayAvatarURL({ format: 'png' })})
          .setThumbnail(client.user.displayAvatarURL({ format: 'png' }))
          .setDescription('This is a description')
          .setFooter({ text: `Use ${client.config.prefix}help <cmd name> for help`, iconURL: client.user.displayAvatarURL({ format: 'png' })})
          .setTimestamp()
        ]
      });
    };
  },
};