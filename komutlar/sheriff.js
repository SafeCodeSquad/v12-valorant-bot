const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/attachments/870899186806194237/870954342549700618/VALORANT_1.png")
.setDescription(`**Sheriff**
**TÜRLER//Beylik Silahlar**
**800 :coin:**
Vurdu mu oturtan mermileri ateşlerken ciddi anlamda geri teper. Uzmanlaşmak için sabır ve kararlılık gerekir.

Sheriff'in hakkını verebilirsen rakiplerini bozuk para gibi harcayabilirsin.....`)
	 .setColor("RANDOM")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['sheriff'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'sheriff',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};