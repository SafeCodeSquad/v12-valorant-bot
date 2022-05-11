const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Lig Sıralaması Aşağıda Belirtilmiştir**
Demir
 Bronz
 Gümüş
 Altın
 Platin
 Elmas
 Ölümsüzlük
 Radyant`)
	 .setColor("RANDOM")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['ligler'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'ligler',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};