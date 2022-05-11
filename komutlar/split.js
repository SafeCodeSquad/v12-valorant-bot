const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/725543161950240810/725591259238105138/Split.png")
.setDescription(`**Japonya, Tokyo/Shibuya**
Japonya'nın Tokyo kentinin Shibuya semtinden esinlenerek yapıldı, koordinatları 35°41'CD' N 139°41'WX' E.
​
Uzağa kaçmak istiyorsan yukarı gitmen lazım.
​
Birkaç farklı bölgenin tam ortasında yükselen merkez noktası, iki tane yükseltici halat yardımıyla hızlı bir şekilde hareket etme imkânı tanıyor. Her bir bölgede kontrolü sağlayabilmek için hayati öneme sahip iki dev kule bulunuyor. Gözün göklerden gelebilecek tehlikelerde olsun.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/725543161950240810/725591396752556072/SplitMiniMap.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['split'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'split',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};