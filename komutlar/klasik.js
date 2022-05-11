const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**KLASİK**
**TÜRLER//Beylik Silahlar**
**Ücretsiz**
Hareketsiz haldeyken temel atışlar isabetli bir şekilde hedefe ulaşır. Yakın çatışmalarda kullanılabilecek bir seri atış moduna sahip.`)
	 .setColor("RANDOM")

	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['klasik'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'klasik',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};