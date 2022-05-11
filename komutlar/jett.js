const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {

let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))

.setDescription(`**Köken**
:flag_kr: Güney Kore                                              
 **Sınıf**
Düellocu

 **Yetenekler**
  **[C]** **Duman Bulutu**
HEMEN yaptığın atış, yüzeye çarptığında patlayarak kısa süreliğine görüşü kısıtlayan bir sis bulutuna dönüşür. Duman bulutuna nişangâhın yönünde falso vermek için yetenek tuşuna BASILI TUT.
 **[Q]** **Hafifle**
Jett'i HEMEN havaya doğru fırlat.
 **[E]** **Rüzgâr Gibi**
Jett'i hareket ettiği yönde HEMEN fırlat. Jett hareketsiz durursa ileriye doğru atılır.
 **[X]** **Keskin Fırtına**
Düşmanı öldürdüğünde yük dolduran, oldukça isabetli bıçaklar KUŞAN. Hedefine tek bir bıçak fırlatmak için ATEŞ ET. Kalan tüm hançerleri hedefine fırlatmak için ALTERNATİF ATIŞ kullan.
 **Hikayesi**
Anavatanı Güney Kore'yi temsil eden Jett'in çevik ve darbelerden kaçmaya dayalı dövüş tarzı, başkalarının alamadığı riskleri almasını sağlar. Her çatışmada üstünlüğünü belli eder ve rakipleri daha nerede olduğunu anlamadan onları kesip biçmeye başlar..`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/870968633768153138/maxresdefault-4.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['jett'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'jett',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};