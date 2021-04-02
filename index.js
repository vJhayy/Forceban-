//Este serán 2 comandos para la forceban, no usaré handler porque es algo relativamente rapido y facil y para los gilis, usaré megadb y no mongodb porque se confunden
const Discord = require('discord.js'); //Declaramos discord
const client = new Discord.Client(); //Usamos el constructor del cliente
//Client
client.config = require('./config.json'); //Config
client.db = require('megabd'); //Db del bot
//
let prefix = client.config.prefix;
//Eventos 
client.on('ready', async() =>{
console.log(client.user.tag+' forceban lista!');
});
client.on('message' , async message =>{

    let args = message.content.slice(prefix.length).trim().split(/ +/g);

  
});
