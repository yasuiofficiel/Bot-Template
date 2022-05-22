const { Client, CommandInteraction, MessageEmbed } = require("discord.js");

module.exports = {
    name: "ping",
    description: "retourne le ping du client",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {

        let embed = new MessageEmbed()
        .setTitle('Ping du Client')
        .setColor('2f3136')
        .setDescription(`**${client.ws.ping} ms !**`)
        interaction.followUp({ embeds: [embed]});
    },
};