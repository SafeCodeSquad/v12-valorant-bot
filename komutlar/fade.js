const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_tr: Türkiye                                             
 **Sınıf**
 Öncü

 **Yetenekler**
 **[C]** **Ecel**
Bir Ecel KUŞAN. Ecel’i düz bir hatta ileriye yollamak için ATEŞ ET. Ecel, koni şeklindeki görüş alanında bulunan herhangi bir düşmana veya düşmanın bıraktığı ize kilitlenip hedefinin peşine takılır ve yakalarsa hedefin görüşünü kısıtlar. Ecel’i nişangâhının baktığı yöne doğru ilerletmek için ATEŞ ETME Düğmesi'ni BASILI TUT.
 **[Q]** **Mıhla**
Kâbus mürekkebinden küre kuşan. Küreyi fırlatmak için ATEŞ ET. Küre belli bir süre sonra yere çarpar. Mürekkep küresi yere çarptıktan sonra patlar ve düşmanların içinden normal yollarla çıkamayacağı bir bölge oluşturur. Uçuşu sırasında küreyi yere erken indirmek için yeteneği TEKRAR KULLAN.
 **[E]** **Musallat**
Kâbuslardan fırlamış bir varlık kuşan. Küreyi fırlatmak için ATEŞ ET. Küre belli bir süre sonra yere çarpar. Yere çarpan küre, kâbuslardan fırlamış bir varlığa dönüşür ve bu varlık, görüş alanı içinde kalan düşmanların yerini açığa çıkarır. Düşmanlar bu varlığı yok edebilir. Uçuşu sırasında küreyi yere erken indirmek için yeteneği TEKRAR KULLAN.
 **[X]** **Gece Karanlığı**
Korkunun gücünü KUŞAN. Duvarların içinden geçebilen bir kâbus enerjisi göndermek için ATEŞ ET. Bu enerji rakibe doğru giden bir iz oluşturmanın yanında rakibi sağır eder ve çürüme uygular.
**Hikayesi**
Türk kelle avcısı Fade, düşmanların sırlarını gasp etmek için saf kâbus gücünü kullanır. Korkuyla uyum içinde çalışarak hedeflerini avlar ve hedeflerinin işini bitirmeden önce en büyük korkularını açığa çıkarır.`)
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/918022125833580574/970303278699130940/fade-ajan-rehber-21.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['fade'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'fade',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};