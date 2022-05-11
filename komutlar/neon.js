const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_ph: Filipin                                              
 **Sınıf**
<:dellocu:873075918011248670> Düellocu

 **Yetenekler**
 **[C]** **Hız Şeridi**
Önüne doğru, kısa veya bir yüzeye çarpana kadar ilerleyen iki enerji hattı çıkarmak için ATEŞ ET. Bu enerji hatları, görüşü engelleyen ve içinden geçen düşmanlara hasar veren statik elektrik duvarlarına dönüşür.
**[Q]** **Elektro Ok**
ANINDA bir enerji oku fırlat. Ok bir kere seker. Ok bir yüzeye çarptığında sersemletici bir patlamayla altındaki zemine elektrik akımı verir.
**[E]** **Yüksek Devir**
Neon'u hızlandırmak için ANINDA gücünü odakla. Yükü dolduğunda, ALT. ATIŞ'la elektrikli kayma hareketini etkinleştir. Her iki skorda bir kayma hareketinin yükü dolar.
**[X]** **Enerji Patlaması**
Neon'un tüm gücünü ve hızını kısa bir süreliğine etkinleştir. Gücünü, hareket ederken isabetliliği yüksek olan ölümcül bir ışın saldırısına dönüştürmek için ATEŞ ET. Aldığın her skorla birlikte bekleme süresi sıfırlanır.
 **Hikayesi**
 Filipinli Ajan Neon, şoke edici bir hızla öne atılır ve bedeninin ürettiği biyoelektrik dalgalarını düşmanların üstüne salar. Düşmanları gafil avlamak için yarışırcasına koşar ve hepsini yıldırım hızıyla indirir.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/918022125833580574/934374744055242782/i1641533066009241.jpeg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['neon'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'neon',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};