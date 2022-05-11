const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(` **Ghost**
**TÜRLER//Beylik Silahlar**
**Ücretsiz**
Ghost hem isabetli hem de hedefi kaçırma ihtimaline karşı büyük bir şarjöre sahip. Uzaktaki hedefler için atış hızını kontrol altında tutmak gerekli. Rakiplerin burnunun ucunu gördüğün an tetiğe bas....`)
	 .setColor("RANDOM")

	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['ghost'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'ghost',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};