const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_ru: Rusya Federasyonu
**Sınıf**
 Öncü
**Yetenekler**
**[C]** Baykuş Dron
Bir baykuş dron KUŞAN. Baykuş dronu göndermek ve hareketlerini kontrol etmek için ATEŞ ET. Dronun kontrolü sendeyken ATEŞ ET ve işaretleyen bir iğne fırlat. Bu iğne, isabet ettiği herhangi bir oyuncunun konumunu açığa çıkarır.
**[Q]** Şok Oku
Şok okuna sahip bir yay KUŞAN. Patlayıcıyı ileri yollamak için ATEŞ ET. Ok çarpışma anında infilak eder ve yakındaki oyunculara hasar verir. Atış mesafesini uzatmak için BASILI TUTARAK ATEŞ ET. Oku iki kereye kadar sektirmek için ALTERNATİF ATIŞ kullan.
**[E]** Keşif Oku
Keşif okuna sahip bir yay KUŞAN. Keşif okunu ileri yollamak için ATEŞ ET. Ok çarpışma anında etkinleşir ve görüş hattı yakınında kalan düşmanların konumunu ortaya çıkarır. Atış mesafesini uzatmak için BASILI TUTARAK ATEŞ ET. Oku iki kereye kadar sektirmek için ALTERNATİF ATIŞ kullan.
**[X]** Avcı'nın Hiddeti
Üç adet duvar delici enerji patlaması ateşleyen bir yay KUŞAN. Sova'nın önünde, bir hat üzerinde enerji patlamaları oluşturmak ve hatta yakalanan düşmanlara hasar verip konumlarını açığa çıkarmak için ATEŞ ET. Bu yetenek, yetenek sayacı etkinken iki kez daha YENİDEN KULLANILABİLİR.
**Hikayesi**
Rusya'nın uçsuz bucaksız tundralarında yetişen Sova düşmanlarını acımasız bir verimlilik ve titizlikle tespit eder, izlerini sürer ve onları yok eder. Özel yayı ve sıra dışı iz sürme yetenekleri ile ondan kaçsanız da asla saklanamazsınız.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871292404211253268/Valorant-Sova-Ozellikleri-ve-Taktikleri.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['sova'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'sova',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};