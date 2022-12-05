const { EmbedBuilder, PermissionsBitField } = require('discord.js');
const moment = require('moment');

module.exports = {
  name: 'whois',
  alises: [],
  owner: false,
  run: async (client, message, args) => {
    var permissions = [];
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if(member.permissions.has('KickMembers')){
      permissions.push('Kick Members');
    };
        
    if(member.permissions.has('BanMembers')){
      permissions.push('Ban Members');
    };
        
    if(member.permissions.has('Administrator')){
      permissions.push('Administrator');
    };
    
    if(member.permissions.has('ManageMessages')){
      permissions.push('Manage Messages');
    };
        
    if(member.permissions.has('ManageChannels')){
      permissions.push('Manage Channels');
    }
        
    if(member.permissions.has('MentionEveryone')){
      permissions.push('Mention Everyone');
    };
    
    if(member.permissions.has('ManageNicknames')){
      permissions.push('Manage Nicknames');
    };
    
    if(member.permissions.has('ManageRoles')){
      permissions.push('Manage Roles');
    };
    
    if(member.permissions.has('ManageWebhooks')){
      permissions.push('Manage Webhook');
    };

    if(member.permissions.has('ManageEmojisAndStickers')){
      permissions.push('Manage Emojis and Stickers');
    };

    if(member.permissions.has('ViewAuditLog')){
      permissions.push('View Audit Log');
    };

    if(member.permissions.has('ManageGuild')){
      permissions.push('Manage Server');
    };

    if(member.permissions.has('ModerateMembers')){
      permissions.push('Timeout Members');
    };

    if(member.permissions.has('ManageThreads')){
      permissions.push('Manage Threads');
    };

    if(member.permissions.has('ManageEvents')){
      permissions.push('Manage Events');
    };
    
    if(permissions.length == 0){
      permissions.push('No permission.');
    };

    let Position = member.id == message.guild.ownerId ? 'Owner' : member.permissions.has('Administrator') ? 'Admin' : member.permissions.has('KickMembers') ? 'Moderator' : member.permissions.has('ManageMessages') ? 'Volunteer' : 'Member'
    
    message.channel.send({
      embeds: [
        new EmbedBuilder()
        .setAuthor({ name: `${member.user.tag}`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
        .setColor('DarkAqua')
        .setFooter({ text: `ID: ${message.author.id}` })
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .addFields({ name: '__Join the server:__ ', value: `${moment(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}` })
        .addFields({ name: '__Account created:__', value: member.user.createdAt.toLocaleString() })
        .addFields({ name: '\n__Position as:__ ', value: `${Position}` })
        .addFields({ name: `\n__Role list [${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length}]__`, value: `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id }>`).join(' **|** ') || 'None'}` })
        .addFields({ name: '\n__Permissions:__ ', value: `${permissions.join(` | `)}` })
        .setTimestamp()
      ]
    })
  },
};