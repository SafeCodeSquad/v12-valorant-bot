const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_jp: Japon                                               
 **Sınıf**:
 Düellocu

 **Yetenekler**
**[C]** FAKE AT
Etkinleştirildiğinde ayak seslerini taklit eden bir yanılsama KUŞAN. Yanılsamayı etkinleştirerek ileri göndermek için ATEŞ ET. Yanılsamayı yerleştirmek için ALT. ATIŞ'a bas. Devre dışı halde duran yanılsamayı etkinleştirmek için KULLAN'a bas.
**[Q]** KÖR NOKTA
Kararsız bir boyut parçacığını gerçeklikten koparıp almak için KUŞAN. Parçacığı fırlatmak için ATEŞ ET. Fırlattığın parçacık sert bir yüzeye çarptığında kör edici bir ışık saçar.
**[E]** ÇATKAPI
Bir boyut geçidi küresi KUŞAN. Küreyi ilerletmek için ATEŞ ET. Küreyi yerleştirmek için ALT. ATIŞ'a bas. Kürenin bulunduğu konuma ışınlanmak için küreyi ETKİNLEŞTİR.
**[X] ** BOYUTLARARASI GEÇİŞ
Boyutlararasını görebilen bir maske KUŞAN. Yoru'nun boyutuna geçmek için ATEŞ ET. Yoru'nun boyutundayken dışarıdaki düşmanlar tarafından görülemez ve onlardan etkilenmezsin.
 **Hikayesi**
Japon Yoru, gerçeklikte açtığı geçitlerden geçerek düşman hattına sinsice sızıyor. Yanılsamalardan ve kaba kuvvetten eşit oranda faydalanarak hedeflerini göz açıp kapayıncaya kadar indiriyor..`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/864225597123067936/874166610594787368/Yoru_1920x1080.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['yoru'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'yoru',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};