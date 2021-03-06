//Get discord.js
const Discord = require('discord.js');
const bot = new Discord.Client();
coust token ='process.env.token';

const gacha = require('./gacha');

//Set listener on 'ready'
bot.on('ready', () => {
  console.log('พร้อม!');
});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'ประมูล5') {
    message.channel.sendMessage(gacha.pull5());
  }
});

bot.on('message', message => {
  if (message.content === 'ประมูล4') {
    message.channel.sendMessage(gacha.pull4());
  }
});

bot.on('message', message => {
  if (message.content === 'ประมูล3') {
    message.channel.sendMessage(gacha.pull3());
  }
});

bot.on('message', message => {
  if (message.content === 'ประมูล2') {
    message.channel.sendMessage(gacha.pull2());
  }
});

bot.login('token');
