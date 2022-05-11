const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/725543161950240810/725590624287326340/Haven.png")
.setDescription(`**Haven**
​
**Butan, Timpu**
Butan'ın Timpu kentinden esinlenerek yapıldı, koordinatları 27°28'A' N 89°38'WZ' E.
​
Terk edilmiş bir manastırın avlusunda kapışan ajanlar üç bölgeyi de kontrol altına alabilmek için birbirini yiyor.
​
Kontrol altına alınacak çok bölge var, fakat savunucuların ele geçireceği fazladan bina daha saldırgan şekilde püskürtme yapabilmeleri için faydalı olabilir.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/725543161950240810/725590739563577364/HavenMiniMap.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['haven'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'haven',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};