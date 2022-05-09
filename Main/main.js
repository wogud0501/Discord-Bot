const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ allIntents });
const { token } = require('/Users/wogud0501/Desktop/DISCORD BOT/Discord-Bot/config/config.json');

client.login(token);