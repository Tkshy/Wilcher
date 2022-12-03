const { Client, Collection } = require('discord.js');
const client = new Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildBans'] });
module.exports = client;
require('dotenv').config();

client.commands = new Collection();
client.fun = new Collection();
client.moderation = new Collection();
client.image = new Collection();
client.utility = new Collection();
client.config = require('./config');

require('./handler')(client);

client.login(process.env.token);