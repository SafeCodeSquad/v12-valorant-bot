const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**.ajanlar:** ajanları gösterir **.ajanismi:** belirli bir ajanı gösterir
**.haritalar:** haritaları gösterir **.haritaismi:** belirli bir haritayı gösterir
**.silahlar:** silahları gösterir **.silahismi:** belirli bir silahı gösterir
**.ligler:** ligleri gösterir
botu davet etmek için tıkla [Davet](https://discord.com/oauth2/authorize?client_id=847638268790702100&scope=bot&permissions=0)`)
.setColor("#00d6ff")
.setFooter("Adoncia ❤️ Valorant")
message.channel.send(embed)
	  }
	  exports.conf = {
  aliases: ['yardım'],
  permLevel: 0,
  kategori: "Moderasyon",
};
exports.help = {
  name: 'yardım',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};