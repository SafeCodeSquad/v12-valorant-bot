const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Spectre**
**TÜRLER//Hafif Makineler**
**1600 :coin:**
 Her işin üstesinden gelebilen bu silah kısa ve orta menzilde hasar, atış hızı ve isabetliliği müthiş dengeli bir şekilde aynı potada eritiyor.

Haritaların köşelerini rakipler için kâbusa dönüştüren bu silahla uzun mesafedeki rakipleri indirmek için sana düşen tek şey iyi nişan almak.....`)
	 .setColor(ayarlar.embedrenk)
	 .setImage("https://cdn.discordapp.com/attachments/918022125833580574/921812543129940029/SPECTREE.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['spectre'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'spectre',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};