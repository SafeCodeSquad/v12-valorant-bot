const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(` **Guardian**
**TÜRLER//Tüfekler**
**2250 :coin:**
Özel bir keskin nişancı tüfeği. Diğer tüfeklere oranla çok daha ağır ve taşınması çok daha zor fakat bir o kadar da isabetli ve güçlü. Orta ve uzun menzilde görüş açına giren düşmanları patır patır avlayabilirsin..`)
	 .setColor("RANDOM")

	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['guardian'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'guardian',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};