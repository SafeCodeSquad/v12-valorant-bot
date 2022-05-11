const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Ajan Sıralaması Aşağıda Rolleriyle Birlikte Belirtilmiştir**
ASTRA
BREACH
BRIMSTONE
CHAMBER
CYPHER
FADE
JETT 
KAY/0                          
KILLJOY
 Neon
OMEN
PHOENIX
RAZE
REYNA
SAGE
KYE
SOVA
VIPER
YORU`)
.setColor(ayarlar.embedrenk)
.setFooter(ayarlar.footer)
message.channel.send(embed)
	  }
	  exports.conf = {
  aliases: ['ajanlar'],
  permLevel: 0,
  kategori: "Moderasyon",
};
exports.help = {
  name: 'ajanlar',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};