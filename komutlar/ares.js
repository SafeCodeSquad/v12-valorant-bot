const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`
**Ares**
**TÜRLER//AĞIR SİLAHLAR**
**1550 :coin:**
Ares, büyük şarjörü sayesinde bastırma ateşi açmak veya bir araya toplanmış gruplara ağır hasar vermek için ideal bir silah.`)
.setColor(ayarlar.embedrenk)
.setFooter(ayarlar.footer)
message.channel.send(embed)	  
	  }
exports.conf = {
aliases: ['ares'],
permLevel: 0,
kategori: "Moderasyon",
};

exports.help = {
  name: 'ares',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};