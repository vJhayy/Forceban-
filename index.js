//Este serán 2 comandos para la forceban, no usaré handler porque es algo relativamente rapido y facil y para los gilis, usaré megadb y no mongodb porque se confunden
const Discord = require('discord.js'); //Declaramos discord
const client = new Discord.Client(); //Usamos el constructor del cliente
//Client
client.config = require('./config.json'); //Config
client.db = require('megadb'); //Db del bot
client.guild = client.guilds.resolve(client.config.server_pruebas); //Server de donde se banearan los users de la forceban

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
            let id = args[1];
            if(!id || isNaN(id)) return; //Si la ID no es un numero o no pone una ID, retorna
            try{
            client.guild.members.ban(id, {reason: "Forceban" , days: 7);
                                          
            }catch(e){
            let filtro = client.guild.members.cache.filter((gili) => id.includes(gili.id));
                if(e && !filtro.first()){
                //Si el usuario no esta en el server de tu bot, y tampoco puede banearlo significa que la ID ingresada es incorrecta
                    return message.channel.send('La ID ingresada es incorrecta');
                }else {
                //Si por el contrario el user esta en el server y no lo puede banear
                    return message.channel.send('Revisa mis permisos en mi servidor oficial');
                }
            }
                
            
        }
    }
  
});
