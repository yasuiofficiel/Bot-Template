const client = require('../index')
const arrayOfStatus = [
    `🕋・Bienvenue sur SiwaFlix`,
]
    
    client.on('ready', () => {

        console.log('----------------------------')
        console.log(`|✅ connecté au client: ${client.user.username}`)
        console.log('----------------------------')    

        setInterval(() => {
            client.user.setPresence({activities: [{name: arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)] }], status: 'dnd', type: "WATCHING" })
        }, 5000)
    })