module.exports = {
    name: 'help',
    description: 'A normal help command! Shows commands & command usage!',
    execute(message, args){

        const { MessageEmbed } = require('discord.js');

        const rulesEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Help Menu')
        .setThumbnail('https://media.giphy.com/media/nsMN804lmRPJDGpDcy/giphy.gif')
        .setAuthor('SlickNodes BOT')
        .setDescription('This is our help menu. We will actively keep updating this with more commands. Our prefix is s!')
        .addFields(
            { name: 's!help', value: 'Pulls up the help menu.' },
            { name: 's!invite', value: 'Gives you a server invite.' },
            { name: 's!ping', value: 'Says "Pong!" back.' },
            { name: 's!purge', value: 'Deletes certain amount messages at the same time.'},
            { name: 's!rules', value: 'Gives you a shortcut to the rules channel.'},
     )
        .setTimestamp()
        .setFooter('SlickNodes BOT');

    message.author.send(rulesEmbed);
    message.react('✅');

        const replyEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setDescription('*Woosh!* A message with the help menu was sent in your DMS!')
            .setTimestamp()
            .setFooter('SlickNodes BOT');
        message.channel.send(rulesEmbed);

    }
}