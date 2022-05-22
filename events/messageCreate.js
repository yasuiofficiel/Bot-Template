const client = require('../index');

client.on("messageCreate", async (message) => {
    if (message.author.bot || !message.guild || !message.content.toLowerCase().startsWith(client.config.prefix)) return;

    const args = message.content.slice(client.config.prefix.length).trim().split(" ");
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases?.includes(cmd));

    if (!command) return;
    if (command) {

        // User Permissions Check
        if (!message.member.permissions.has(command.Permissions || [])) return message.reply({
            content: `${process.env.FAILURE_EMOJI} You need \`${command.Permissions || []}\` permissions to run this command`,
            ephemeral: true,
        });
        
        await command.run(client, message, args) // Running the Command
    }
});