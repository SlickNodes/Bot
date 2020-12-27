module.exports = {
    name: 'ping',
    description: "This command pings!",
    execute(message, args){
        message.channel.send('Pong!');
    }
}