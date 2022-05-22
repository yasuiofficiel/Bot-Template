const { Collection, Client } = require('discord.js');
const client = new Client({intents: ["GUILDS","GUILD_MEMBERS","GUILD_BANS","GUILD_INTEGRATIONS","GUILD_WEBHOOKS","GUILD_INVITES","GUILD_VOICE_STATES","GUILD_PRESENCES","GUILD_MESSAGES","GUILD_MESSAGE_REACTIONS","GUILD_MESSAGE_TYPING","DIRECT_MESSAGES","DIRECT_MESSAGE_REACTIONS","DIRECT_MESSAGE_TYPING"]});
const { token } = require('./config.json');

module.exports = client;

client.config = require("./config.json");
client.slashCommands = new Collection()
client.aliases = new Collection()

require("./handler")(client);

client.login(token)