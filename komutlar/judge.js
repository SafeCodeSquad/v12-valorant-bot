const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Judge**
**TÜRLER//Pompalı Tüfekler**
**1850 :coin:**
Judge, sabit dururken isabetli olsa da art arda hızlı bir şekilde ateş ederken kontrolden çıkabilir.

Temel atışı kısa menzildeki hedefleri vurdu mu oturtur. Bir kol uzaklığındaki herkesi indirerek yargı dağıtmak için sabit durmalısın...`)
	 .setColor("RANDOM")
	 
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['judge'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'judge',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};