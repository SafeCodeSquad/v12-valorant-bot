const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:question: Bilinmiyor                                              
 **Sınıf**
 Öncü
 **Yetenekler**
**[C]** **PARÇA/Tesirli**
Patlayıcı bir şarapnel KUŞAN. Şarapneli fırlatmak için ATEŞ ET. Şarapnel yere yapışır, sonrasında birden fazla kez patlar ve tam merkezinde bulunanlara neredeyse ölümcül hasar verir.
**[Q]** **FLAŞ/Bellek**
Bir kör edici bomba KUŞAN. Bombayı fırlatmak için ATEŞ ET. Kör edici bomba kısa bir süre sonra patlayarak görüş menzili içinde bulunan herkesi kör eder.
**[E]** **SIFIR/Noktası**
Düşmanları sindirmeni sağlayan bir bıçak KUŞAN. Bıçağı fırlatmak için ATEŞ ET. Bıçak isabet ettiği ilk yüzeye saplanır ve patladığında menzili içindeki herkesi sindirir.
**[X]** **İPTAL/Komut**
KAY/O, kutuplaşmış radyanit enerjisiyle aşırı yüklenerek ANINDA güçlenir ve bulunduğu konumdan devasa enerji dalgaları yayar. Enerji dalgalarının isabet ettiği düşmanlar kısa bir süreliğine sindirilir.
 **Hikayesi**
KAY/O, radyantları etkisiz hale getirmek için üretilmiş bir savaş makinesi. Düşmanlarının yeteneklerini sindirerek rakiplerin karşı koyma yetisini bastırır. Böylece hem kendisini hem de takım arkadaşlarını korur.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/864225597123067936/873431907445137408/1152788.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['kayo'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'kayo',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};