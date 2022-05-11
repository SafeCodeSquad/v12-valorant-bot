const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_us: ABD
**Sınıf**
Kontrol Uzmanı
**Yetenekler**
**[C]** **Kuvvet İşareti**
Bir kuvvet işareti KUŞAN. Kuvvet işaretini Brimstone'un önüne atmak için ATEŞ ET. Yere inen kuvvet işareti oyunculara SeriAtış sağlayan bir alan oluşturur.
 **[Q]** **Yakıcı**
Bir yangın bombası atar KUŞAN. Yerde durduğu anda infilak eden bir bomba fırlatmak için ATEŞ ET. Yerde bir süre kalan alev bölgesi, içindeki oyunculara hasar verir.
 **[E]** **Dumanlı Hava Sahası**
Bir taktik harita KUŞAN. Brimstone'un duman bulutlarının ineceği konumları belirlemek için ATEŞ ET. ALTERNATİF ATIŞ ile onayla ve seçili alanda görüşü kısıtlayan uzun süreli duman bulutları oluştur.
 **[X]** **Uydu Saldırısı**
Bir taktik harita KUŞAN. Seçili konuma bir süre yerde kalan bir uydu saldırısı lazeri fırlatmak için ATEŞ ET. Seçili alanda kalan oyuncular zaman içinde yüksek hasar alır.
**Hikayesi**
Aramıza ABD'den katılan Brimstone'un hava araçları sayesinde takımı her zaman 1-0 öndedir. Gereken her türlü işlevselliği titizlikle ve güvenli bir mesafeden sağlaması, muharebe alanında bu kumandanı eşsiz kılar....`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871015484546502696/valorant-brimstone-esportimes-1024x576.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['brimstone'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'brimstone',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};