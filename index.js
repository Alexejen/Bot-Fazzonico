const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_BANS"] }
)

client.login(process.env.token)

client.on("ready", () => {
    console.log("Bot ONLINE")
})

client.on("messageCreate", (message) => {

    if (message.content == "/W") {
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
            message.channel.send("EMOTE DEL FAZZONE")
        }
                
    if (message.content == "/Dimmi la tua opinione su: Alessio Di Bella") {
        var embed = new Discord.MessageEmbed()
            .setTitle("Alessio")
            .setDescription("Penso che sia una testa di cazzo solo perché è juventino")
            .setThumbnail("")

        message.channel.send({ embeds: [embed] })
    }

if (message.content == "/Dimmi la tua opinione su: Mirko Gennaro") {
    var embed = new Discord.MessageEmbed()
        .setTitle("Mirko AKA Einstein")
        .setDescription("È la persona più intelligente che abbia mai conosciuto")
        .setThumbnail("https://tse3.mm.bing.net/th?id=OIP.H_RCN-7OWOx9Sq38cQ2ulAHaJf&pid=Api&P=0&w=128&h=164")

    message.channel.send({ embeds: [embed] })
}

if (message.content == "/insulta Gianmarco") {
    var embed = new Discord.MessageEmbed()
        .setTitle("Cheddire, è un....")
        .setDescription("Gianmarco è una testa di Minchia abissale, è così tanto stronzo che è milanista.")
        .setThumbnail("https://tse4.mm.bing.net/th?id=OIP.yVC9bENRQofvjpg-CtsmOwAAAA&pid=Api&P=0&w=155&h=155")

    message.channel.send({ embeds: [embed] })
}

if (message.content == "/comandi") {
    message.channel.send("i comandi sono i seguenti: /Dimmi la tua opinione su: Mirko Gennaro, /Dimmi la tua opinione su: Alessio Di Bella, /insulta Gianmarco, /W ; brutto coglione, si prega il rispetto della punteggiatura giusta dei comandi quindi se vuoi che funzionino devi fare copia incolla, rincoglionito")
}

})
