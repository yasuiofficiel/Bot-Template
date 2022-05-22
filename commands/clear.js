const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'clear',
    description: `permet de supprimer des message`,
    type: 'CHAT_INPUT',
    Permissions: ['MANAGE_MESSAGES'],
    options: [
        {
            name: 'nombre',
            description: 'nombre de message a supprimer',
            type: 10,
            required: true
        },
],

    /** 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {

        var number = interaction.options.getNumber('nombre')

        if (number >= 1 && number <= 100) {
            interaction.channel.bulkDelete(number);

            let Succembed = new MessageEmbed()
            .setColor('2f3136')
            .setTitle(`👤 | Moderateur : ${interaction.user.username}`)
            .setDescription(`**` + number + ` message(s) supprimé avec succés**`)

        interaction.channel.send({embeds: [Succembed]})

        }else {
            let Errembed = new MessageEmbed()
            .setColor('2f3136')
            .setTitle(`❌ | Erreur`)
            .setDescription('le nombre de messages supprimés dois étre situé entre 1 et 100')
            interaction.channel.send({embeds: [Errembed]})
        }
    
     }
}