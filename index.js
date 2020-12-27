const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 's!';
const token = process.env.TOKEN;

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setActivity('for s!help | BETA', { type: 'WATCHING' });

});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'testcommand') {
        message.channel.send('yuuuuuuutub');
    };
    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    if (command === 'purge') {
        client.commands.get('purge').execute(message, args);
    }
    if (command === 'rules') {
        message.channel.send('You can find the rules in <#771121403968749620>.')
    }

    if(command === 'help') {
        
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



  }

  if(command === 'invite'){
    message.channel.send('https://discord.gg/RnUVHKxuND is your permanent invite.')
    
  }


  if (command === 'kick') {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("❌ **Please make sure you have the 'Kick Members' permission on this server to use this command!**")
                const user = message.mentions.users.first() || args[1]
                if (!user) {
                    return message.channel.send("Please Mention the User you want to Kick")
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
                    if (member.hasPermission('KICK_MEMBERS')) return message.channel.send("I can't kick Admins/Moderators");
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






});

client.login(token)
setTimeout(() => process.exit(), 120 * 1000)
