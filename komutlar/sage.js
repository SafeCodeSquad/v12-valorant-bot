const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_cn: Çin
**Sınıf**
Gözcü
**Yetenekler**
**[C]** Bariyer Küresi
Bir bariyer küresi KUŞAN. Sert bir duvar oluşturmak için ATEŞ ET. ALTERNATİF ATIŞ, hedefleyiciyi döndürür.
**[Q]** Yavaşlatan Küre
Bir yavaşlatma küresi KUŞAN. Yere temas ettiğinde patlayarak bir süre yerde kalan ve oluşturduğu alanda kalan oyuncuları yavaşlatan bir yavaşlatma küresi göndermek için ATEŞ ET.
**[E]** Can Küresi
Bir iyileştirme küresi KUŞAN. Nişangâhını hasar almış bir silah arkadaşına doğrult ve onu zaman içinde iyileştirmek için ATEŞ ET. Sage hasar aldıysa, zaman içinde kendini iyileştirmek için ALTERNATİF ATIŞ kullan.
**[X]** Diriliş
Bir diriltme yeteneği KUŞAN. Nişangâhını dost bir cesede doğrult ve onu hayata döndürmek için ATEŞ ET. Silah arkadaşın kısa bir sürenin ardından tamamen iyileşmiş olarak hayata döner.
**Hikayesi**
Çinli ve kapı gibi Sage gittiği her yerde kendini ve takımını güvende tutar. Öldürülen silah arkadaşlarını hayata döndürme yeteneği ve agresif saldırıları bertaraf edebilmesiyle, cehennemvari savaş meydanında etrafına huzur verir.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871263015129980978/valorant-sage-esportimes.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['sage'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'sage',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};