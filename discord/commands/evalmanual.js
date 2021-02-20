const { RichEmbed } = require('discord.js');

exports.run = async (client, message, args, level, r, unbClient) => {


    if (args.length === 0) {
        message.channel.send("No message found")
        return;
    }
    // if no args given

    const suggestConfig = client.config.suggestions;


    var suggestionsID = args[1].toLowerCase();
    var acceptOrReject = args[0].toLowerCase();
    //divide up the accept/deny and messageID

    if (acceptOrReject === "accept" || acceptOrReject === "deny") {

    }
    else {
        message.channel.send(acceptOrReject + " Isn't valid. Use accept or deny.")
        return;
    }
    //if a/d doesn't = a/d then they spelt it wrong so let them know

    const command = message;
    //use this instead of message in the following block to reply to command

    var channelID = args[2].toLowerCase();
    const suggestionPollChannel = message.guild.channels.get(channelID);

    suggestionPollChannel.fetchMessage(suggestionsID)
        .then(message => {
            
    

            message.embeds.forEach((embed) => {
                const messageAuthor = embed.author.name;
                const messageAuthorPfp = embed.author.iconURL;
                const messageContent = embed.description;
                const messageTime = embed.timestamp;

                var newPollEmbed = new RichEmbed()
                    .setDescription(messageContent)
                    .setAuthor(messageAuthor, messageAuthorPfp)
                    .setTimestamp(messageTime)


                if (acceptOrReject === "accept") {
                    newPollEmbed.setColor(suggestConfig.acceptedColour);
                    newPollEmbed.setColor(suggestConfig.acceptedColour);
                    newPollEmbed.setFooter(`Suggestion was accepted`);
                } else {
                    newPollEmbed.setColor(suggestConfig.rejectedColour);
                    newPollEmbed.setColor(suggestConfig.rejectedColour);
                    newPollEmbed.setFooter(`Suggestion was rejected`);
                }

                message.edit(newPollEmbed);

                command.react('👌');   // :ok_hand:

            })




        })



        


    
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["manualeval", "sgev", "evalman", "maneval"],
  permLevel: "Oil",
  channelPerms: "All",
  userCooldown: false,
  globalCooldown: false,
  cooldownDuration: 0
};

exports.help = {
  name: "evalmanual",
  category: "Moderating",
  description: "Updates the colour of the suggestion embeds - but manually.",
    usage: "evalmanual <accept/deny> <messageID>"
};
