const client = require('../../index');

client.on('ready', () => {
  console.log(`Ready and up as ${client.user.tag}!`);
}); 