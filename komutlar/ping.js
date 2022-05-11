const { MessageEmbed, MessageAttachment } = require('discord.js'); 

exports.run = (client, message, args) => { 
 let y1 = new MessageAttachment(`https://flamingtext.com//net-fu/proxy_form.cgi?imageoutput=true&script=strongman-logo&text=${client.ws.ping}+MS`, 'p1.png') // Yahuda Yaptı <3 // Yahuda Yaptı <3 // Yahuda Yaptı <3 // Yahuda Yaptı <3 // Yahuda Yaptı <3
 let y2 = new MessageEmbed() 
 .attachFiles(y1) 
 .setColor('YELLOW') 
 .setImage('attachment://p1.png')
 .setTitle("🏓 Ping, Pong !") 
.setFooter(`${message.author.tag} Tarafından istendi.`, message.author.avatarURL()) 
 message.channel.send(y2) 
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ping"
};
 