const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))

.setDescription(`**Köken**
:flag_gb: Birleşik Krallık
**Sınıf**
Düellocu
**Yetenekler**
**[C]** Ateşten Duvar
Bir ateş duvarı KUŞAN. İlerleyen, içinden geçenlerin görüşünü engelleyen ve onlara hasar veren ateş duvarını göndermek için ATEŞ ET. Ateş duvarını nişangâhın yönünde bükmek için BASILI TUTARAK ATEŞ ET.
**[Q]** Falso
Kavisli giden ve fırlatıldıktan kısa bir süre sonra patlayan bir işaret küresi KUŞAN. İşaret küresine sola doğru yön vermek için ATEŞ ET; küre patladığında onu gören tüm oyuncular kör olur. Küreyi sağa doğru göndermek için ALTERNATİF ATIŞ kullan.
**[E]** Yakar Top
Bir alev topu KUŞAN. Yere temas ettiğinde ya da bir gecikmenin ardından patlayan alev topunu fırlatmak için ATEŞ ET. Yerde bir süre kalan alev bölgesi düşmanlara hasar verir.
**[X]** Yakardöner
Phoenix'in bulunduğu konumu HEMEN işaretle. Yetenek etkinken ölmek veya süresinin dolması yeteneği sonlandırır ve Phoenix'i işaretlenen konumda dolu canla hayata döndürür.
**Hikayesi**
Aramıza Birleşik Krallık'tan katılan ve yıldızlardan aldığı gücü dövüş stilinin her noktasına yansıtan Phoenix, savaş alanını alevlerle ve patlamalarla aydınlatır. Arkasında destek olsun olmasın, bildiği gibi savaşmak için ileri atılacağından şüpheniz olmasın.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871294973155377152/Phoenix_1.png")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['phoenix'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'phoenix',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};