const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_mx: Meksika
**Sınıf**
Düellocu
**Yetenekler**
**[C]** Kem Göz
Yok edilebilir, ruhtan bir küre KUŞAN. Gözü yakın mesafede ileri doğru kullanmak için ETKİNLEŞTİR. Göz, ona bakan tüm düşmanların uzağı görmesini engeller.
**[Q]** Sömür
Reyna'nın öldürdüğü düşmanlar, arkalarında 3 saniyeliğine Ruh Küreleri bırakır. HEMEN yakınlardaki bir ruh küresini tüket ve kısa süreliğine hızla can yenile. Bu yetenekle 100'ü geçen can yenilemeleri zamanla azalır. İMPARATORİÇE etkinse yetenek otomatik şekilde, küreyi harcamadan kullanılır.
**[E]** Azlet
Yakınlardaki bir ruh küresini HEMEN tüketerek kısa süreliğine saydamlaş. İMPARATORİÇE etkinse, aynı zamanda görünmez olursun.
 **[X]** İmparatoriçe
HEMEN bir coşku haline geçersin. Atış, kuşanma ve doldurma hızı ciddi şekilde artar. Düşman öldürmek, süreyi yeniler.
**Hikayesi**
Meksika'nın kalbinden kopup gelmiş Reyna teke tek çatışmalarda düşmanını ezer ve aldığı her skorla daha da coşar. Yapabilecekleri tamamen saf beceri gerektirir ve onu ciddi şekilde performansa dayalı kılar..`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/871288489696710656/reyna-valorant-rehber.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['reyna'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'reyna',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};