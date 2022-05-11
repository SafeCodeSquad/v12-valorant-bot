const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Vandal**
**TÜRLER//Tüfekler**
**2900 :coin:**
Fakat uzun süreli ateş edildiğinde isabetliliği azalır. Vandal, arada mesafe varken de yüksek hasar vermeye devam eder ve odaklanarak hedefe tek mermiyle kafa atışı yapanları ödüllendirir.`)
.setColor(ayarlar.embedrenk)
message.channel.send(embed)
	  }
	  exports.conf = {
  aliases: ['vandal'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'vandal',
  description: 'vandal.',
  usage: 'vandal',
};