const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_se: İsveç
**Sınıf**
<:nc:873078321565564958> Öncü
**Yetenekler**
**[C]** **Artçı Sarsıntı**
Termonükleer bir yük KUŞAN. Duvarın içinden geçtikten sonra zamanla gerçekleşen patlamalar için ATEŞ ET. Patlayan yük, etki alanında kalan herkese ağır hasar verir.
**[Q]** **Gözkamaştıran**
Kör edici bir yük KUŞAN. Duvarın içinden geçtikten sonra art arda hızla gerçekleşen patlamalar için ATEŞ ET. Patlayan yük, ona bakan herkesi kör eder.
**[E]** **Fayhattı**
Sismik bir darbe KUŞAN. Mesafeyi arttırmak için BASILI TUT. Bir sarsıntı oluşturarak etki alanında ve alan hattı üzerinde kalan tüm oyuncuları sarsmak için SERBEST BIRAK.
**[X]** **Zelzele**
Sismik bir yük KUŞAN. Geniş, koni biçimindeki bir alanda tüm zemini dalga dalga etkileyen bir deprem için ATEŞ ET. Deprem, ona yakalanan herkesi sarsar ve havaya savurur.
**Hikayesi**
İnsanüstü güçlere sahip İsveçli Breach, düşman zemininde sert bir şekilde yolu açan, hedeflenebilir bir kinetik dalga gönderir. Sebep olduğu hasar ve darbe, savaşın dengelerini değiştirecek niteliktedir`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871217196221726790/breach.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['breach'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'breach',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};