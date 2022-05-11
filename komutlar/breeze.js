const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/872354027868917760/breeze_1.jpeg")
.setDescription(`**BREEZE**
Bu tropik cennetteki tarihi yıkıntıları ve deniz kenarındaki mağaraları keşfe çıkın. Ama arkanızı kollayacak ajanlara ihtiyacınız var. Açık alanlarda ve uzun menzilli çatışmalarda buna ihtiyacınız olacak. Dikkati elden bırakmadığınız sürece Breeze'de su akar, yolunu bulur.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/872354059292647424/breeze_1a.jpeg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['breeze'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'breeze',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};