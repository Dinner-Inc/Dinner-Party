const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDE0NzQ4NDI2NTg1MTEyNTc3.DZ8-oA.Ts3a0RdfdjkzYcnIIFhx7onB3aE);
