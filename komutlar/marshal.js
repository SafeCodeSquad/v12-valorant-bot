const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Marshal**
**TÜRLER//KESKİN NİŞANCI TÜFEKLERİ**
**950 :coin:**
Bir kere yakınlaştırılabilen dürbüne sahip, çevik ve levyeli keskin nişancı tüfeğiyle etrafta koşturan düşmanları keklik gibi avlayabilirsin. Yavaş atış hızı nedeniyle attığını vurmalısın yoksa saldırıya açık hale gelirsin..`)
	 .setColor("RANDOM")

	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['marshal'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'marshal',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};