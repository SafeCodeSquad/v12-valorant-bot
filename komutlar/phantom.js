const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Phantom**
**TÜRLER//Tüfekler**
**2900 :coin:**
Sana fazla yaklaşmaya cesaret eden olursa tam otomatik silahının nimetlerinden faydalanarak kontrollü seri atışlarla düşmanlarının hayatını karartabilirsin. En iyi performansı almak için sabit dururken ateşle..`)
.setColor("RANDOM")

message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['phantom'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'phantom',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};