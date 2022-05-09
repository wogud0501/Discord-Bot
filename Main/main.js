// Client initial setting / 클라이언트 초기 세팅
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ allIntents });
const { token } = require('your config.json path here.');

client.once ()


// Client login code / 클라이언트 로그인 코드
client.login(token);