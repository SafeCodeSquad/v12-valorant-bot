const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))

.setDescription(`**Köken**
:flag_fr: Fransa                                             
 **Sınıf**
 Gözcü

 **Yetenekler**
  **[C]** **Kartvizit**
 Düşmanlar için etrafı tarayan bir tuzak YERLEŞTİR. Görünen düşmanlar tuzağın menzili içine girdiğinde, tuzak geri sayıma başlar. Tuzak devreye girdiğinde etki alanını stabil olmayan bir hale getirerek içinde bulunan düşmanları yavaşlatır.
  **[Q]** **Kelle Avcısı**
Ağır bir tabanca kuşanmak için ETKİNLEŞTİR. Tabancanın ALTERNATİF ATIŞI nişan almanı sağlar.
 **[E]** **Buluşma**
İki tane IŞINLAYICI yerleştir. Işınlayıcılardan birinin menzilinde ve yerde dururken, TEKRAR ETKİNLEŞTİREREK hızlıca diğer ışınlayıcıya ışınlan. Işınlayıcıları TEKRAR YERLEŞTİRMEK üzere bıraktığın yerden alabilirsin.
 **[X]** **Keskin Tarz**
Doğrudan isabet ettiği düşmanları anında öldüren güçlü ve özel bir keskin nişancı tüfeği kuşanmak için ETKİNLEŞTİR. Düşmanı öldürdüğün yerde, içine giren düşmanları yavaşlatan bir etki alanı oluşur
 **Hikayesi**
 Her daim şık ve tam teçhizat dolaşan Fransız silah tasarımcısı Chamber, ölümcül isabetliliğiyle rakipleri ortadan kaldırıyor. Özel yeteneklerini kullanarak görüş mesafesi sağlar, uzaktaki rakipleri avlar ve her plana mükemmel bir şekilde uyum sağlar.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/918022125833580574/918028174976245771/Chamber_Article_Banner_1920x1080.jpeg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['chamber'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'chamber',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};