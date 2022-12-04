const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'evaluation',
  aliases: ['eval'],
  owner: true,
  run: async (client, message, args) => {
    let clean = text => {
      if(typeof(text) === 'string') return text.replace(/`/g, '`' + String.fromCharCode(8203)).replace(/@/g, '@' + String.fromCharCode(8203));
      else
      return text;
    }
 
    try {
      const code = args.join(' ').replace(/\`\`\`(?:[^\s+]\n)?(.*?)\n?\`\`\`/gs, "$1");
      
      if(!code) {
        return message.channel.send({
          embeds: [
            new EmbedBuilder()
            .setColor('Red')
            .setDescription('Please input a code to evaluation.')
          ]
        });
      };

      let evaled = eval(code);
      let lmao = message.content.slice(' '.length).trim().split(/ +/);
      lmao.shift().toLowerCase().split(' ')[0]
      let output = clean(evaled);

      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('DarkAqua')
          .setAuthor({ name: 'Evaluating a code', iconURL: client.user.displayAvatarURL({ extension: 'png' }) })
          .setDescription(`\`\`\`js\n${output}\`\`\``)
        ]
      });
    } catch (err) {
      message.channel.send({
        embeds: [
          new EmbedBuilder()
          .setColor('Red')
          .setAuthor({ name: 'You got a error', iconURL: client.user.displayAvatarURL({ extension: 'png' }) })
          .setDescription(`\`\`\`xl\n${clean(err)}\n\`\`\``)
        ]
      });
    };
  },
};