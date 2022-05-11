const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(` **Bulldog**
**TÜRLER//Tüfekler**
**2050 :coin:**
Bu sağlam canavarla atış şeklini sen belirlersin. Alternatif atışı, dürbünle bakarken sana yaklaşmaya çalışan orta veya uzun menzildeki düşmanları isabetli, kısa seri atışlarla savuşturmanı sağlar.`)
.setColor(ayarlar.embedrenk)

	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['bulldog'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'bulldog',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};