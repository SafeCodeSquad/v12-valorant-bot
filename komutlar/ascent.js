const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/725543161950240810/725585600995917834/Ascent.png")
.setDescription(` **Ascent**
​
**İtalya, Venedik**
İtalya'nın Venedik kentinden esinlenerek yapıldı, koordinatları 45°26'BF' N 12°20'Q' E.
​
Ascent, sahip olduğu iki bölge nedeniyle küçük çatışmalara ve sürtüşmelere sahne olan açık bir oyun alanı gibi.
​
İki bölgede de güçlendirilmiş, tekrar açılamayan bomba kapıları bulunuyor. Bu kapılar bir kere kapandı mı geçmek için ya kapıları yok etmeli ya da başka bir yol bulmalısın. Mümkün olduğunca az alan kaybetmeye çalış..`)
.setColor(ayarlar.embedrenk)
.setImage("https://cdn.discordapp.com/attachments/725543161950240810/725589045048246333/AscentMiniMap.png")
message.channel.send(embed) 
	  }
	  exports.conf = {
  aliases: ['ascent'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'ascent',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};