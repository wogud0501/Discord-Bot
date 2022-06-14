const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('프로필')
        .setDescription('자신의 프로필일 알려줍니다.'),
    async execute(interaction) {
        await interaction.reply('퐁!')
    }
}