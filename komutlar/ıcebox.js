const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/872349185456873602/icebox_1.jpeg")
.setDescription(`**ICEBOX**
Sıradaki savaş meydanı kutup soğuğunun hüküm sürdüğü gizli bir Kingdom kazı alanı. İki Spike yerleştirme bölgesi de kar yığınları ve metal parçalarıyla korunduğu için keskin nişancılık hünerlerinin önemini vurguluyor. Çelik halatları kendi lehinize kullanarak bir anda düşmanların üstüne çökebilirsiniz...`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/872349199054831647/Icebox_Map_Website_Asset-tur.jpeg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['ıcebox'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'ıcebox',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};