const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
	  .setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Bıçak**
**TÜRLER//YAKIN DÖVÜŞ**
**Ücretsiz**
Ne yapacağını şaşırdığında veya mermilerin suyunu çektiğinde bunu kullan. Hızlı koşmanı, nesneleri daha hızlı parçalamanı veya alternatif atışla düşmanları arkadan tek vuruşla indirmeni sağlar..`)
	 .setColor(ayarlar.embedrenk)
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['bıçak'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'bıçak',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};