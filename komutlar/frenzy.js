const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(` **Frenzy**
**TÜRLER//Beylik Silahlar**
**450 :coin:**
Hafif makineli tabanca hareket ederken ateş etme konusunda benzerlerinden sıyrılır. Yüksek atış hızı nedeniyle kontrol etmek biraz zor olabilir; o yüzden orta menzilde kısa seriler halinde ateşlemeyi dene...`)
	 .setColor("RANDOM")

	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['frenzy'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'frenzy',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};