const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(` 
**TÜRLER//Beylik Silahlar**
Klasik                           
Shorty
Frenzy
Ghost
Sheriff
**TÜRLER//HAFİF MAKİNELİLER**
Stinger
Spectre
**TÜRLER//POMPALI TÜFEKLER**
Bucky
Judge
**TÜRLER//Tüfekler**
Bulldog
Guardian
Phantom
Vandal
**TÜRLER // KESKİN NİŞANCI TÜFEKLERİ**
Marshal
Operatör
**TÜRLER // AĞIR SİLAHLAR**
Ares
Odin
**TÜRLER // YAKIN DÖVÜŞ**
Bıçak`)
	 .setColor("RANDOM")
	.setFooter(`${message.member.displayName} tarafından istendi!`, message.author.avatarURL({ dynamic: true }))
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['silahlar'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'silahlar',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};