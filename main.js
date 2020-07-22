const Discord = require('discord.js');

const client = new Discord.Client();

const {prefix, token } = require('./config.json')

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    }

client.once('ready', () => {
    console.log('terminalbot == online');
    }); 

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[1];
    let argOne = messageArray[2];

    switch(command) {
        case "su":
            suFunction(message);
                break;
        case "mkdir":
            mkdirFucntion(message, args);
                break;

        default:
            message.channel.send('PLease provide a command');
    }  
}); 






client.login(token);




