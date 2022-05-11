const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Operatör**
**TÜRLER//KESKİN NİŞANCI TÜFEKLERİ**
**4700 :coin:**
Bu acımasız, sürgülü keskin nişancı tüfeği iki farklı çok güçlü yakınlaştırma ayarına sahip. Hareket halinde kullanılması neredeyse imkânsız fakat attığı mermiler o kadar güçlü ki tek bir atışla bütün bir takımın sonunu getirebilir.`)
	 .setColor(ayarlar.embedrenk)
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['operatör'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'operatör',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};