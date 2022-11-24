const { Client, Collection } = require('discord.js');
const client = new Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent'] });
module.exports = client;

client.commands = new Collection();
client.config = require('./config');

require('./handler')(client);

client.login(client.config.token);