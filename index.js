const Discord = require("discord.js")
const client = new Discord.Client(
    { intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES", "GUILD_BANS"] }
)

client.login("OTMzODM4MDg0ODYzMzE2MDI4.YenWfQ.64wyFfTCaZ42B8ozM60yi6MqegY")

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
        .setThumbnail("")

    message.channel.send({ embeds: [embed] })
}

if (message.content == "/insulta Gianmarco") {
    var embed = new Discord.MessageEmbed()
        .setTitle("Cheddire, è un....")
        .setDescription("Gianmarco è una testa di Minchia abissale, è così tanto stronzo che è milanista.")
        .setThumbnail("")

    message.channel.send({ embeds: [embed] })
}

})