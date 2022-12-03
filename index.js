const { Client, Collection } = require('discord.js');
const client = new Client({ intents: 3276796 });
module.exports = client;
require('dotenv').config();

client.commands = new Collection();
client.config = require('./config');

require('./handler')(client);

client.login(process.env.token);