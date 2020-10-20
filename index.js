const Discord = require('discord.js');
const db = require("easy.database")
const { set } = require('mongoose');
const registros = new db("mod-logs")
const client = new Discord.Client();

const CommandsEmbed = new Discord.MessageEmbed()
	.setColor('BLUE')
	.setTitle('Mis Comandos')
	.setURL(' https://cdn.discordapp.com/attachments/333609869540065282/753684616983871528/assistant.png ')
	.setAuthor('AssistantBot', 'https://cdn.discordapp.com/attachments/333609869540065282/753684616983871528/assistant.png', 'https://discord.gg/awCSadC')
	.setDescription('Estos son mis comandos')
	
	.addFields(
		{ name: 'A!comandos', value: 'aqui!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'A!pretty', value: 'Algo tierno saldra <3', inline: true },
		{ name: 'A!youtube', value: 'Aparecera el la pagina oficial de youtube!', inline: true },
    { name: 'A!creador', value: 'Comando para saber quien es mi creador uwu', inline: true },
    { name: 'A!cualesminombre', value: 'con este comando aparecera tu nombre!', inline: true }
    )
	
	.setFooter('Recuerda que mi prefix es "A!" ')
	.setTimestamp()
	.setFooter('Recuerda que mi prefix es "A!" ', 'https://cdn.discordapp.com/attachments/333609869540065282/753684616983871528/assistant.png');
const SupportEmbed = new Discord.MessageEmbed()
	.setColor('#FFFFFF')
	.setTitle('Soporte Tecnico')
	.setURL(' https://cdn.discordapp.com/attachments/333609869540065282/753784740573872128/images.png ')
	.setAuthor('AssistantBot', 'https://cdn.discordapp.com/attachments/333609869540065282/753784740573872128/images.png', 'https://discord.gg/awCSadC')
	.setDescription('Consulta Soporte Tecnico aqui')
	.setThumbnail('https://cdn.discordapp.com/attachments/333609869540065282/753784740573872128/images.png')
	.addFields(
		{ name: 'Commando para soporte', value: 'A!support' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Comandos', value: 'A!commands', inline: true },
		{ name: 'Servidor De discord', value: ' https://discord.gg/YzPmTPf ', inline: true },
	)
	.addField('Mas tecnicas de soporte proximamente!', 'mas comandos proximamente!', true)
	.setImage('https://cdn.discordapp.com/attachments/333609869540065282/753684616983871528/assistant.png')
	.setTimestamp()
	.setFooter('Recuerda que mi prefix es "A!" ', 'https://cdn.discordapp.com/attachments/333609869540065282/753684616983871528/assistant.png');
    const activities_list = [
        "Di A!comandos! para abrir mi menu de comandos!", 
        "Si aparezco en DND (Do not disturb) significa que me estan actualizando!",
        "Estoy en 9 Servidores! Muchas Gracias!", 
        "Siendo un robot normal y corriente",
        "Di: A!comandos / AssistantBot V.1.4"
        ]; // creates an arraylist containing phrases you want your bot to switch through.
    
  client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 10000); // Runs this every 10 seconds.
    });
    
    function presence(){
        client.user.setPresence({
            status:"online",
            activity: {
              name: "Di: A!comandos / AssistantBot V.1.3",
              type: "WATCHING"
            }
        })
      }
      client.on("ready", () => {
         console.log("Presencia Lista!");
         presence();
      });
      
    
client.on('ready', () => {
    console.log('Bot Now connected!');
    presence();
});    
    console.log('El bot se a logeado')
     // los estatus que se pueden poner: online, idle, invisible, dnd
 
    
    console.log('Bot status: ');

   
    const testChannel = client.channels.Message
    console.log(testChannel)
    
    


client.on('message', msg => {
    if(msg.author.bot) return
    if(msg.content.startsWith('hola bot')) {
    msg.channel.send(`Hola ${msg.author}`)
    }
    if (msg.author.bot) return 
    if (msg.content.includes('A!invite')) {
        const InivteEmbed = new Discord.MessageEmbed()
            .setColor('ORANGE')
            .setTitle('Invite')
            .setURL('https://discord.com/api/oauth2/authorize?client_id=753315315827474575&permissions=8&scope=bot')
            msg.channel.send(InivteEmbed);
        
        }
    if(msg.author.bot) return
    if (msg.content.includes('A!cualesminombre')) {
       const CualesminombreEmbed = new Discord.MessageEmbed()
       .setColor("#FFFFFF")
       .setTitle("Cual es tu nombre?")
       .setDescription(`Tu nombre es ${msg.author}`)
       .setImage(' https://cdn.discordapp.com/attachments/754041429122220103/754111174391365652/9k.png ')
        msg.channel.send(CualesminombreEmbed);

    }
    if(msg.author.bot) return
    if (msg.content.includes('A!comandos')) {
        msg.channel.send(CommandsEmbed);
    }
    
    if(msg.author.bot) return
    if (msg.content === 'A!youtube') {
        const youtubeembed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Youtube")
        .setDescription(" https://www.youtube.com "
        )
        
      msg.channel.send(youtubeembed) 
      }
      if(msg.author.bot) return
    if (msg.content === 'prueba') {
        const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
     .setAuthor(client.user.username, client.user.displayAvatarURL({format: "png", dynamic: true}))
    .setDescription(`Mi primer embed version 12 prueba`)
    .setThumbnail (msg.author.displayAvatarURL({format: "png", dynamic: true}))
   
        msg.channel.send(embed) 
    }
    if(msg.author.bot) return
    if (msg.content === 'A!support') {
        msg.channel.send(SupportEmbed) 
    }
    if(msg.author.bot) return
    if (msg.content === 'A!creador') {
        const CreatorEmbed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setTitle("Este es mi creador")
      .setDescription("Mi creador es memocrackenxd#1510")
      .setImage(
        " https://cdn.discordapp.com/attachments/333609869540065282/754412362211262564/memocrac_logo.gif "
        )
    msg.channel.send(CreatorEmbed) 
    }
    

      if(msg.author.bot) return
    if (msg.content === 'A!pretty') {
        const prettyembed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setTitle("Pretty")
      .setDescription("Como dijiste algo bonito/tierno Uwu")
      .setImage(
        " https://cdn.discordapp.com/attachments/333609869540065282/753379298974629898/9k.png "
        )
    msg.channel.send(prettyembed) 
    }
    
});
 client.login('NzUzMzE1MzE1ODI3NDc0NTc1.X1kZjw.Q9bejuPz7ol2NfEZ8a8TL4vxG0k');
