// Client initial setting / 클라이언트 초기 세팅
const Discord = require('discord.js');
const intents = new Discord.Intents(32767);
const client = new Discord.Client({ intents });
const { token } = require('./config.json');

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
client.on('guildBanAdd', async ban => {
    const fetchedLogs = await ban.guild.fetchAuditLogs({
        limit: 1,
        type: 'MEMBER_BAN_ADD',
    });
    const banLog = fetchedLogs.entries.first();

    if (!banLog) return console.log(`${ban.user.tag}s는 ${ban.guild.name}에게 밴을 당했지만 감사 로그를 찾지 못했어요.`)
    const { executor, target } = banLog;
    if (target.id === ban.user.id) {
        console.log(`${ban.user.tag}는 ${ban.guild.name}에게 정의의 망치를 쳐 맞았어요! 음. ${executor.tag}가 권력을 마음대로 사용했나 보군요.`)
    } else {
        console.log(`${ban.user.tag}는 ${ban.user.guild}에게 정의의 망치를 후드려 맞긴 했는데 누구한테 맞았는지도 모르겠어요. 알아서 잘 찾아보세요~`)
    }
    
})

// Client login code / 클라이언트 로그인 코드
client.login(token);    