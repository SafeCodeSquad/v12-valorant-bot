const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/881607578658959390/885995966208028682/Fracture_Screenshot-8.jpeg")
.setDescription(` **FRACTURE**
​
Çok gizli bir araştırma tesisi, başarısızlıkla sonuçlanan bir radyanit deneyinden sonra ikiye ayrıldı. Haritadaki farklı habitatlar sayesinde iki farklı seçime sahip olan savunanlar, saldıranları kendi bölgelerinde karşılayabilir ya da saldırıyla başa çıkabilmek için hazırlık yapabilir.`)
	 .setColor(ayarlar.embedrenk)
	 .setImage("https://cdn.discordapp.com/attachments/881607578658959390/885995994628644874/Fracture_Map_Website_Asset_TR-TR.jpeg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['fracture'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'fracture',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};