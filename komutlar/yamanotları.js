const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args) => {
let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(" [Yama Notlarına Erişmek İçin Tıkla](https://playvalorant.com/tr-tr/news/game-updates/valorant-4-08-yama-notlari/)")
.setColor("#00d6ff")
.setFooter("Adoncia ❤️ Valorant")
.setImage("https://cdn.discordapp.com/attachments/918022125833580574/970303278699130940/fade-ajan-rehber-21.jpg")
message.channel.send(embed)
	  }
	  exports.conf = {
  aliases: ['yamanotları'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'yamanotları',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};