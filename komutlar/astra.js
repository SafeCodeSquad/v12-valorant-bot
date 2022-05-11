const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setThumbnail("https://cdn.discordapp.com/emojis/871593482127564870.png?v=1")
.setDescription(`**Köken**
:flag_gh: Gana
**Sınıf**
Kontrol Uzmanı
**Yetenekler**
**[C]** **ÇEKİM ALANI**
Astral Yolcu halindeyken yıldız yerleştir (X). Çekim Alanı oluşturmak için bir yıldızı ETKİNLEŞTİR. Etki alanı içindeki oyuncular merkeze çekilir ve ardından merkez patlayarak içerideki oyuncuları savunmasız hale getirir.
**[Q]** **NOVA DARBESİ**
Astral Yolcu halindeyken yıldız yerleştir (X). Patlayarak Nova Darbesi oluşturması için bir yıldızı ETKİNLEŞTİR. Nova Darbesi kısa bir süre güç topladıktan sonra patlayarak etki alanı içindeki tüm oyuncuları sersemletir.
**[E]** **YILDIZ BULUTU**
Astral Yolcu halindeyken yıldız yerleştir (X). Dönüşerek Yıldız Bulutu (duman) oluşturması için bir yıldızı ETKİNLEŞTİR. Bir yıldızı Kozmik Çözünüm'le geri almak için kullan (F). Geri alınan yıldızı belli bir süre sonra tekrar yerleştirebilirsin. Kozmik Çözünüm, dönmeden önce yıldızın yerinde kısa süreliğine sahte bir Yıldız Bulutu oluşturur.
**[X]** **ASTRAL YOLCU**
 "TEMEL ATIŞ tuşuyla yıldız yerleştirebileceğin Astral Yolcu haline geçmek için ETKİNLEŞTİR (X). Yerleştirilen yıldızlar daha sonra etkinleştirilerek Nova Darbesi, Yıldız Bulutu ve Çekim Alanı'na dönüştürülebilir. Kozmik Ayrım yeteneği hazır olduğunda, Astral Yolcu halindeyken İKİNCİL ATIŞ tuşuna basarak nişan al ve TEMEL ATIŞ tuşuna basarak iki konum seç. Seçtiğin bu iki nokta arasında sonsuz bir Kozmik Ayrım bağlantısı oluşur. Kozmik Ayrım mermileri engeller ve sesleri büyük oranda bastırır.
**Hikayesi**
Ganalı ajan Astra, kozmosun enerjisini kullanarak savaş meydanını lehine değiştirebiliyor. Astral yolculuğu üzerinde tam kontrole sahip olması ve engin stratejik öngörüsüyle, düşmanın bir sonraki hamlesinden her zaman birkaç ışık yılı önde.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/864225597123067936/873424703962873936/valorant-astra.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['astra'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'astra',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};