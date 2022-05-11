const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Shorty**
**TÜRLER//Beylik Silahlar**
**150 :coin:**
Bu hızlı, kısa namlulu pompalı tüfek kısa menzilde ölümcüldür fakat iki kere ateşlendikten sonra doldurulması gerekir. Uzun menzilli silahlarla birlikte güzel iş görür..`)
	 .setColor("RANDOM")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['shorty'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'shorty',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};