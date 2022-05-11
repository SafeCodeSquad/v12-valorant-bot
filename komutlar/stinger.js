const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Stinger**
**TÜRLER//Hafif Makineler**
**950 :coin:**
 Bu hafif makineli silah, orta ve uzun menzilde benzerlerine oranla çok daha etkili fakat bunun için atış hızı ve hareketlilikten ödün verir.

Etrafa mermi yağdırırken 20 mermilik şarjörünü çatır çatır yese de orta menzilde dürbün kullanarak kontrollü atışlar yapıldığında ölümcül sonuçlara yol açar....`)
	 .setColor(ayarlar.embedrenk)
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['stinger'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'stinger',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};