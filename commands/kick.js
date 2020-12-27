const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: "description",
    execute(messagr, client, args) {
if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Please make sure you have the 'Kick Members' permission on this server to use this command!")
            const user = message.mentions.users.first() || args[1]
            if (!user) {
                return message.channel.send("Please Mention the User you want to Kick!")
            }

            let kickReason = args.slice(2).join(" ");
            if (!args[2]) {
                kickReason = "Unspecified"
            }

            const kickEmbed = new Discord.MessageEmbed()
                .setTitle(`A user was Kicked!`)
                .addField("Kicked By", message.author)
                .addField("Reason", kickReason)
                .setFooter("Time Kicked", client.user.displayAvatarURL())
                .setTimestamp(new Date())
                .setColor("RANDOM")

            if (user) {
                const member = message.guild.member(user);
                if (member.hasPermission('MANAGE_GUILD')) return message.channel.send("I can't kick Admins/Moderators!");
                else;
                if (member) {
                    member.kick({ reason: kickReason }).then(() => {
                        message.channel.send(kickEmbed);
                    }).catch(err => {
                        message.reply('I was unable to kick the member');
                        console.log(err);
                    });
                } else {
                    message.reply("That user isn\'t in this server!")
                }
            } else {
                message.reply('for me to kick someone from the server, you need to mention the person you want to kick!')
            }
    }
}