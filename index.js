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
    //Si el mensaje es de un MD o el autor es un bot o el mensaje no empieza con el prefix, retorna
if(message.channel.type === "dm" || message.author.bot || !message.content.startsWith(prefix)) return;
    
    
    //Args
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
//Commmand
    let cmd = args.shift().toLowerCase();
    
    //DB
    const forceban = new client.db('Forceban');
    
    
    //Cmds
    if(cmd === "force"){
        //Si la ID del autor del mensaje no esta en el array de la config de developers del bot, retorna
        if(!client.config.developers.includes(message.author.id); return;
        let metodo = args[0];
        if(!metodo) return; //Si no introduce el metodo, retorna
        metodo = args[0].toLowerCase(); 
        
        
        if(metodo === "add"){
        //si escribe como metodo add  
            
            
        }
    }
  
});
