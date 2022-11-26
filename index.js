const { Client, Collection } = require('discord.js');
const client = new Client({ intents: ['Guilds', 'GuildMessages', 'MessageContent'] });
module.exports = client;
require('dotenv').config();

client.commands = new Collection();
client.config = require('./config');

require('./handler')(client);

client.login(process.env.token);