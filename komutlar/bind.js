const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/725543161950240810/725587555428335696/Bind.png")
.setDescription(`**Fas, Rabat**
Fas'ın Rabat kentinden esinlenerek yapıldı, koordinatları 34°2'A' N 6°51'Z' W.
​
İki bölge var. Ortası yok. Ya sağı seçeceksin ya da solu.
​
İki tarafta da saldıranların kullanabileceği yollar ve rakipleri arkadan vurmaya yardımcı olacak tek yönlü ışınlayıcılar bulunuyor..`)
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/725543161950240810/725590053656723508/BindMiniMap.png")
message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['bind'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'bind',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};