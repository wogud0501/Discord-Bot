// TODO 밴 로거 제작.
// Client initial setting / 클라이언트 초기 세팅
const Discord = require('discord.js');
const allIntents = new Discord.Intents(32767);
const client = new Discord.Client({ allIntents });
const { token } = require('your config.json path here.');

// Client Response Code and Bot status Set up Code / 클라이언트 응답 코드 및 봇 상태 설정 코드
client.once('ready', () => {
    console.log('Ready! / 준비 완료!');
    client.user.setActivity('Use this if you want to indicate what your bot is doing. / 당신의 봇이 하고 있는 것을 적고 싶을때 사용하시면 됩니다. 만약 이 기능이 필요 없을 경우 삭제 가능합니다.')
    client.user.setStatus('Use this if you want to indicate what your is status. / 당신의 봇의 상태를 알려주고 싶을때 사용하시면 됩니다. 만약 이 기능이 필요 없으실 경우 지우셔도 됩니다.')
})
// Logger Code / 로거 코드.
client.on('messageDelete', async message => {
    if (!message.guild) return;
    const fetchedLogs = await message.guild.fetchedLogs({
       limit : 99,
       type: 'MESSAGE_DELETE',
    });
    const deletionLog = fetchedLogs.entries.all();

    if (!deletionLog) return console.log(`매세지는 ${message.author.tag}에 의해 삭제 되었습니다, 다만 관련된 감사 로그를 찾지 못했습니다.`)

    const { executor, target } = deletionLog;

    if (target.id === message.author.id) {
        console.log(`A message by ${message.author.tag} was deleted by ${executor.tag}`);
    } else {
        console.log(`매세지는 ${message.author.tag} 에 의해 삭제 되었습니다만 누가 삭제 했는지는 모르겠습니다.`)
    }
})
client.on('guildMemberRemove', async member => {
    const fetchedLogs = await member.guild.fetchAuditLogs({
        limit : 3,
        type : 'MEMBER_KICK',
    });
    const kickLog = fetchedLogs.entries.all();

    if (!kickLog) return console.log(`${member.user.tag}가 서버를 떠났어요. 아마 자신의 의지로 떠난거겠죠.`)

    const { executor, target } = kickLog;

    if (target.id === member.id) {
        console.log(`${member.user.tag}가 서버를 나갔어요. ${executor.tag}가 추방했어요!`);
    } else {
        console.log(`${member.user.tag}가 서버를 나갔어요. 하지만 누가 추방했는지는 모르겠네요.`)
    }
})


// Client login code / 클라이언트 로그인 코드
client.login(token);    