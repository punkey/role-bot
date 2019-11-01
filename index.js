const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.on('ready', function(){
    console.log('Ready!')
})

client.on('message', function(message){
    if(message.content === 'Hello')
    {
        message.channel.send('Hello,'  +  message.author  +  'How are u!');
    }
    if(message.content == 'Join')
    {
        message.member.send('Welcome to the Server')
        let memberRole = message.member.guild.roles.find("name", "Member");
        message.member.addRole(memberRole);
    }
})


client.login(process.env.BOT_TOKEN);
