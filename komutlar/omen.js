const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:question: Bilinmiyor                                             
 **Sınıf**:
Kontrol Uzmanı

 **Yetenekler**
[C] Gizli Adım
Bir gölge yürüyüşü yeteneği KUŞAN ve menzil göstergesini görüntüle. Kısa bir beklemenin ardından işaretli konuma ışınlanmak için ATEŞ ET.
[Q] Paranoya
HEMEN ileri fırlayan bir gölge atışı yap. Kısa süreliğine, dokunduğu herkesin görüş menzilini kısıtlar. Bu atış doğrudan duvarlardan geçebilir.
[E] Karanlık Örtü
Bir gölge küresi KUŞAN ve menzil göstergesini görüntüle. Gölge küresini işaretli konuma fırlatmak için ATEŞ ET. Görüş kısıtlayan uzun süreli bir gölge küresi oluşturur. Hedef alma esnasında işaretçiyi daha uzağa götürmek için ALTERNATİF ATIŞI BASILI TUT, işaretçiyi daha yakına getirmek için yetenek tuşunu BASILI TUT.
[X] Gölgelerin İçinden
Bir taktik harita KUŞAN. Seçili konuma ışınlanmaya başlamak için ATEŞ ET. Omen, ışınlanma esnasında Gölge suretine bürünür ve düşmanları onu yok ederek ışınlanmayı iptal edebilir.
 **Hikayesi**
Bir anının hayaleti olan Omen gölgelerin içinde avlanır. Düşmanlarını kör eder, savaş alanını boydan boya kat eder ve paranoyanın, onun ne taraftan saldıracağını anlamaya çalışan rakiplerinin damarlarında gezinmesini sağlar..`)
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/870899186806194237/870970898411307028/omen-valorant.jpg")
message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['omen'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'omen',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};