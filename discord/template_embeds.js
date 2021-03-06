const Discord = require('discord.js')

let BaseEmbed = () => {
    return new Discord.MessageEmbed()
        .setColor('#888888')
        .setFooter('Tillice v2')
}


let ErrorEmbed = () => {
    return new Discord.MessageEmbed()
        .setColor('#B10c06')
        .setFooter('Tillice v2')
        .setImage('https://i.imgur.com/5b3Misq.png')
}

let fwFlavoredEmbed = (color) => {
    let newEmbed = new Discord.MessageEmbed()
        switch(color) {
            case "red":
                newEmbed.setColor('#ff0000')
                newEmbed.setThumbnail('https://i.imgur.com/Mi8J0fq.png')
                break;
            case "orange":
                newEmbed.setColor('#ff8800')
                newEmbed.setThumbnail('https://media.discordapp.net/attachments/703431121857282108/711885744280436736/3_5.png')
                break;
            case "yellow":
                newEmbed.setColor('#ffff00')
                newEmbed.setThumbnail('https://i.imgur.com/WB8mUHl.png')
                break;
            case "green":
                newEmbed.setColor('#00ff00')
                newEmbed.setThumbnail('https://i.imgur.com/MNKwjES.jpg')
                break;
            case "blue":
                newEmbed.setColor('#0000ff')
                newEmbed.setThumbnail('https://i.imgur.com/IymoMsy.png')
                break;
            case "purple":
                newEmbed.setColor('#880088')
                newEmbed.setThumbnail('https://i.imgur.com/rZFSCIP.jpg')
                break;
            case "mod":
                newEmbed.setColor('#ffffff')
                newEmbed.setThumbnail('https://cdn.discordapp.com/attachments/506018154078666752/590846311775862785/yeghet.png')
                break;
            default:
                newEmbed.setColor('#888888')
                break;
        }       
        newEmbed.setFooter('Tillice v2')

        return newEmbed
}

module.exports.GeneralHelpEmbed = (HelpResponseStruct) => {
    let Embed = BaseEmbed()
    // Use the struct we built to populate an embed
    Object.keys(HelpResponseStruct).forEach( category => {
        Embed.addField(category, HelpResponseStruct[category].join(', '))
    })
    return Embed
}


module.exports.CommandHelpEmbed = (CommandName, CommandHelp) => {
    let Embed = BaseEmbed()
    Embed.addField(CommandName, CommandHelp)
    return Embed
}


module.exports.SendImageEmbed = (ImageURL, Caption) => {
    let Embed = BaseEmbed()
    Embed.setImage(ImageURL)
    Embed.setTitle(Caption)
    return Embed
}


module.exports.SendEmbed = (Title, Text) => {
    let Embed = BaseEmbed()
    Embed.setTitle(Title)
    Embed.setDescription(Text)
    return Embed
}


module.exports.SendErrorEmbed = (Title, Text) => {
    let Embed = ErrorEmbed()
    Embed.setTitle(Title)
    Embed.setDescription(Text)
    return Embed
}

module.exports.RequestEmbed = (user, type, request) => {
    let Embed = BaseEmbed()
    Embed.setTitle(`New ${type} Request`)
    Embed.setDescription(`From user ${user} requesting ${request}`)

    return Embed
}

module.exports.ReportEmbed = (reporter, user, reason) => {
    let Embed = BaseEmbed()
    Embed.setTitle(`Report Issued by ${reporter}`)
    Embed.setDescription(`Reporting ${user} for: ${reason}`)
    return Embed
}

module.exports.topicSuggestion = (user, suggestion) => {
    let Embed = BaseEmbed()
    Embed.setTitle(`Suggestion by ${user}`)
    Embed.setDescription(suggestion)
    return Embed
}

module.exports.SkeletonEmbed = () => {
    return BaseEmbed()
}

module.exports.suggestionVotingEmbed = (user, userPfp, suggestion, link) => {
    let Embed = BaseEmbed()
    Embed.setAuthor(`Suggestion by ${user}`, userPfp)
    .setDescription(suggestion)
    .setTimestamp()
    .addField('Talk about it!', `[Jump to discussion](${link})`)
    return Embed
}

module.exports.suggestionDiscussionEmbed = (user, userPfp, suggestion, link) => {
    let Embed = BaseEmbed()
    Embed.setAuthor(`Suggestion by ${user}`, userPfp)
    .setDescription(suggestion)
    .setTimestamp()
    .addField('Talk about it!', `[Vote on it](${link})`)
    return Embed
}

module.exports.redditInfoEmbed = (color, username, creationDate, totalKarma, linkKarma, commentKarma, awarderKarma, awardeeKarma) => {
    let Embed = fwFlavoredEmbed(color)
    Embed.setTitle(username)
    Embed.setDescription(`[${username}](https://reddit.com${username})`)
    Embed.addField('Flair', color, true)
    Embed.addField('Account created', creationDate, true)
    Embed.addField('Total Karma', totalKarma, true)
    Embed.addField('Karma Breakdown', `Post karma: ${linkKarma}\nComment Karma: ${commentKarma}\nAwarder Karma: ${awarderKarma}\nAwardee Karma: ${awardeeKarma}`)
    return Embed
}

module.exports.CountEmbed = (color, subreddit) => {
    let Embed = BaseEmbed()

    Embed.setTitle(`Count for ${subreddit}`)

    return Embed
}