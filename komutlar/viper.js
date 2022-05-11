const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))

.setDescription(`**Köken**
:flag_us: ABD
**Sınıf**
Kontrol Uzmanı
**Yetenekler**
[C] Asit Havuzu
Bir kimyasal fırlatıcı KUŞAN. Yere çarptığında parçalanan bir kapsül fırlatmak için ATEŞ ET. Oluşturduğu uzun süreli kimyasal alanda kalan düşmanlar hasar alır ve yavaşlar.
[Q] Zehir Bulutu
Bir gaz salgılayıcı KUŞAN. Tur boyunca devamlı yerde kalacak salgılayıcıyı fırlatmak için ATEŞ ET. Yakıt kullanarak zehirli bir duman bulutu oluşturmak için YENİDEN KULLAN. Bu yetenek birden fazla kez YENİDEN KULLANILABİLİR ve yerden alınarak YENİDEN YERLEŞTİRİLEBİLİR.
[E] Zehir Perdesi
Bir gaz salgılayıcı fırlatıcı KUŞAN. Gaz salgılayıcıları uzun bir hat boyunca yerleştirmek için ATEŞ ET. Yakıt kullanarak zehirli bir duman bulutu oluşturmak için YENİDEN KULLAN. Bu yetenek birden fazla kez YENİDEN KULLANILABİLİR.
[X] Viper'ın İni
Bir kimyasal püskürtücü KUŞAN. Viper'ın etrafında her yöne doğru kimyasal bir bulut oluşturmak için ATEŞ ET. Oluşan geniş bulut, içinde kalan oyuncuların görüşünü kısıtlar ve azami canlarını azaltır.
**Hikayesi**
Amerikalı kimyacı Viper zehir yüklü, çeşit çeşit kimyasal cihazıyla savaş alanını kontrol altında tutarken düşmanın görüşünü de alt üst eder. Avını zehriyle değilse bile aklıyla mutlaka avcunun içine alır...`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/870982118723964938/Valorant-Viper-Rehberi--Viper-Nasil-Oynanir.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['viper'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'viper',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};