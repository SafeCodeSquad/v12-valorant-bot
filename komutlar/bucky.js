const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(` **Bucky**
**TÜRLER//Pompalı Tüfekler**
**850 :coin:**
 Ağır ama isabetli Bucky'nin temel atışı, dar köşeleri tutmak ve yakın çatışmalara dalmak için ideal. Alternatif atışıysa hedefleri orta menzilde vurur..`)
.setColor(ayarlar.embedrenk)
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['bucky'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'bucky',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};