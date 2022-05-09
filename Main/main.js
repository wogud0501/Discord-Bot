const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ allIntents });
const { token } = require('your config.json path here.');

client.login(token);