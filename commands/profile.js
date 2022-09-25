const { SlashCommandBuilder } = require('@discordjs/builders');

module.export = {
    data: new SlashCommandBuilder()
        .setName('프로필 정보')
        .setDescription('프로필 정보를 표시합니다.'),
        async execute(interaction) {
            return interaction.reply(`당신의 이름: ${interaction.user.username}\n당신의 아이디: ${interaction.user.id}\n당신의 프로필: ${interaction.user.profile}`);  
        }
}