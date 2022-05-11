const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`
 .ascent
 // ASCENT
 .bind
 // BIND
 .breeze
 // Breeze
 .haven
 // HAVEN
 .split
 // SPLIT
 .ıcebox
 // ICEBOX`)
	 .setColor("RANDOM")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['haritalar'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'haritalar',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};