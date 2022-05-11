const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))

.setDescription(`**Köken**
:flag_de: Almanya
**Sınıf**
 Gözcü
**Yetenekler**
**[C]** Nanosürü
Nanosürü bombası KUŞAN. Bombayı fırlatmak için ATEŞ ET. Nanosürü bir yere isabet ettiği anda gizlenir. Hasar veren nano robot sürüsünü salmak için Nanosürü'yü ETKİNLEŞTİR
**[Q]** Alarm Botu
Gizli bir Alarm Botu KUŞAN. Menzili içine giren düşmanların peşine düşen bir robot göndermek için ATEŞ ET. Robot hedefine ulaştığında patlar ve hedefi Savunmasız hale getirir. Gönderdiğin botu geri çağırmak için KUŞANMA TUŞUNU BASILI TUT.
**[E]** Taret
Bir taret KUŞAN. 180 derecelik bir koni içindeki düşmanlara ateş eden bir taret yerleştirmek için ATEŞ ET. Gönderdiğin botu geri çağırmak için KUŞANMA TUŞUNU BASILI TUT.
**[X]** Tecrit
Tecrit cihazını KUŞAN. Cihazı yerleştirmek için ATEŞ ET. Uzun bir hazırlık süresinin ardından cihazın etki alanında kalan düşmanların hepsi alıkoyulur. Bu cihaz düşmanlar tarafından yok edilebilir.
**Hikayesi**
Alman dâhi Killjoy, kendi icatlarından oluşan cephaneliğiyle savaş meydanını kontrol altına alır. Cihazlarının verdiği hasar rakiplerini durdurmaya yetmezse robotlarının yardımıyla rakiplerini zayıflatarak onların ortadan kaldırılmalarını kolaylaştırır..`)
	 .setColor("#ffdf00")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871302073034096650/valorant-killjoy.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['killjoy'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'killjoy',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};