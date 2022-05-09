// Client initial setting / 클라이언트 초기 세팅
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ allIntents });
const { token } = require('your config.json path here.');

client.once('ready', () => {
    console.log('Ready! / 준비 완료!');
    client.user.setActivity('Use this if you want to indicate what your bot is doing. / 당신의 봇이 하고 있는 것을 적고 싶을때 사용하시면 됩니다. 만약 이 기능이 필요 없을 경우 삭제 가능합니다.')
    client.user.setStatus('Use this if you want to indicate what your is status. / 당신의 봇의 상태를 알려주고 싶을때 사용하시면 됩니다. 만약 이 기능이 필요 없으실 경우 지우셔도 됩니다.')
})


// Client login code / 클라이언트 로그인 코드
client.login(token);