const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_br: Brezilya                                               
 **Sınıf**:
 Düellocu

 **Yetenekler**
  **[C]** Bombot
Bir Bombot KUŞAN. Göndermek için ATEŞ ET; bot yerde düz bir hat halinde ilerler ve duvarlardan seker. Bombot önündeki koni şeklindeki alana giren tüm düşmanlara kilitlenir ve onları kovalar. Yakalayabilirse, ağır hasar vererek patlar.
 **[Q] ** Patlayıcı Çanta
HEMEN, zemine yapışan bir Patlayıcı Çanta fırlat. Elinden çıkan çantayı patlatmak için TEKRAR KULLAN. İsabet ettiği her şeye hasar verir ve onları yerinden oynatır. Raze bu yeteneğinden doğrudan hasar almaz fakat çok yükseğe fırlatılırsa düşme hasarı alabilir.
  **[E] ** Renk Tesirli Bomba
Bir parça tesirli el bombası KUŞAN. Fırlatmak için ATEŞ ET. Hasar veren bomba, her biri menzilindeki herkese hasar veren bombacıklar oluşturur.
  **[X] ** Nefes Kesen
Bir roketatar KUŞAN. Temas ettiği her şeye muazzam alan hasarı veren bir roket fırlatmak için ATEŞ ET.
 **Hikayesi**
Bomba gibi bir kişiliğe ve kocaman silahlara sahip olan Raze, aramıza Brezilya'dan katılıyor. Kafa göz dalan oyun tarzıyla düşmanları saklandıkları deliklerden çıkarmakta ve dar alanları ''bam bam bam'' temizlemekte üstüne yok.`)
	 .setColor("RANDOM")
	 .setImage("https://cdn.discordapp.com/attachments/870899186806194237/870954562352205854/raze-valorant-riot-video-game-duvar-kagidi-73398_L.jpg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['raze'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'raze',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};