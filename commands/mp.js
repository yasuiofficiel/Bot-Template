const { Client, CommandInteraction, MessageEmbed, Permissions } = require('discord.js');

module.exports = {
    name: 'mp',
    description: `permet d'envoyé un message a un membre depuis le bot`,
    type: 'CHAT_INPUT',
    Permissions: ['MANAGE_MESSAGES'],
    options: [
        {
            name: 'membre',
            description: '@ le mombre a qui vous voulez envoyer le message',
            type: 6,
            required: true,
        },
        {
            name: 'content',
            description: 'entré le message a envoyé au membre',
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
        let user = interaction.options.getMember("membre")

            const staff = new MessageEmbed()
            .setTitle(`Message de ${interaction.user.username}`)
            .setDescription(`**` + msg +`**`)
            .setColor("#2f3136")
            user.send({ embeds: [staff] });
    }
}   