const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Odin**
**TÜRLER//AĞIR SİLAHLAR**
**3200 :coin:**
Baskı kuran ve yüksek hasar veren atışları aynı zamanda şaşırtıcı derecede isabetli. Kısa menzildeki düşmanları mermi yağmuruna tutabilir ve alternatif atışını kullanarak kanlı canlı bir tarete dönüşebilirsin.`)
.setColor(ayarlar.embedrenk)
	  message.channel.send(embed)
	  }
	  exports.conf = {
  aliases: ['odin'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'odin',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};