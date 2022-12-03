const { glob } = require('glob');
const { promisify } = require('util');
const globPromise = promisify(glob);

module.exports = async (client) => {
  const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
  commandFiles.map((value) => {
    const file = require(value);
    const splitted = value.split('/');
    const directory = splitted[splitted.length - 2];

    if(file.name) {
      const properties = { directory,  ...file };
      client.commands.set(file.name, properties);
    };
  });

  const eventFiles = await globPromise(`${process.cwd()}/events/**/*.js`);
  eventFiles.map((value) => require(value));

  const fun = await globPromise(`${process.cwd()}/commands/fun/*.js`); // fun
  fun.map((value) => {
    const file = require(value);
    const splitted = value.split('/');
    const directory = splitted[splitted.length - 2];

    if(file.name) {
      const properties = { directory,  ...file };
      client.fun.set(file.name, properties);
    };
  });

  const moderation = await globPromise(`${process.cwd()}/commands/moderation/*.js`); // moderation
  moderation.map((value) => {
    const file = require(value);
    const splitted = value.split('/');
    const directory = splitted[splitted.length - 2];

    if(file.name) {
      const properties = { directory,  ...file };
      client.moderation.set(file.name, properties);
    };
  });

  const utility = await globPromise(`${process.cwd()}/commands/utility/*.js`); // utility
  utility.map((value) => {
    const file = require(value);
    const splitted = value.split('/');
    const directory = splitted[splitted.length - 2];

    if(file.name) {
      const properties = { directory,  ...file };
      client.utility.set(file.name, properties);
    };
  });

  const image = await globPromise(`${process.cwd()}/commands/utility/*.js`); // image
  image.map((value) => {
    const file = require(value);
    const splitted = value.split('/');
    const directory = splitted[splitted.length - 2];

    if(file.name) {
      const properties = { directory,  ...file };
      client.image.set(file.name, properties);
    };
  });
};