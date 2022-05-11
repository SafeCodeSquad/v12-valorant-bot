const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))

.setDescription(`**Köken**
:flag_ma: Fas
**Sınıf**
 Gözcü
**Yetenekler**
 **[C]** **Bubi Tuzağı**
Bir bubi tuzağı KUŞAN. Hedef konuma yok edilebilir, gizli bir bubi tuzağı yerleştirmek için ATEŞ ET. Yerleştirilen konum ile karşısındaki duvar arasına bir hat çekilir. Yakalanan rakipler cihazı zamanında yok edemedikleri takdirde kısa süre içinde kısıtlanır, açığa çıkar ve sarsılırlar. Bu yetenek yerinden alınabilir ve YENİDEN YERLEŞTİRİLEBİLİR.
 **[Q]** **Siber Kafes**
Siber kafesi HEMEN Cypher'ın önüne fırlat. İçinden geçen düşmanların görüşünü engelleyen ve onları yavaşlatan bir alan oluşturmak için etkinleştir.
 **[E]** **Gizli Kamera**
Bir gizli kamera KUŞAN. Gizli kamerayı hedef konuma yerleştirmek için ATEŞ ET. Bu yeteneği YENİDEN KULLAN ve kamera görüşünü kontrol et. Kamera kontrolü sendeyken ATEŞ ET ve işaretleyen bir iğne fırlat. Bu iğne, isabet ettiği herhangi bir oyuncunun konumunu açığa çıkarır.
 **[X]** **Nöron Hırsızı**
Nişangâhından gördüğün ölü bir düşman üzerinde ANINDA kullan ve hayatta olan diğer tüm düşmanların konumunu ortaya çıkar.
**Hikayesi**
Faslı bilgi uzmanı ve tek kişilik gözetleme ağı Cypher, düşmanın her hareketini bilir, her sırrını duyar ve her manevrasını görür. Cypher'ın gözleri hep üzerinizdedir.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871284231089836082/cypher-esportimes-1.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['cypher'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'cypher',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};