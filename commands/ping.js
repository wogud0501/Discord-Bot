const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("핑")
  .setDescription("퐁으로 대답해요!"),
  async execute(interaction) {
    return interaction.reply(`지연시간은 ${Date.now() - message.createdTimestamp}ms에요! API 지연시간은 ${Math.round(client.ws.ping)}이에요!`)
  }
};
