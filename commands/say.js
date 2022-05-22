const { Client, CommandInteraction, MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'say',
    description: `permet de faire une annonce`,
    type: 'CHAT_INPUT',
    Permissions: ['MANAGE_MESSAGES'],
    options: [
        {
            name: 'contenu',
            description: 'entré l annonce',
            type: 3,
            required: true
        },
],

    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction, member) => {

        let msg = interaction.options.getString("content")

            const staff = new MessageEmbed()
            .setTitle(`Annonce de ${interaction.user.username}`)
            .setDescription(`**` + msg +`**`)
            .setColor("#2f3136")
            interaction.channel.send({ embeds: [staff] });
    }
}   