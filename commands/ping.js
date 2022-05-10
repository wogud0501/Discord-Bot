const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('핑')
        .setDescription('퐁으로 대답함'),
    async execute(interaction) {
        await interaction.reply('퐁!')
    }
}