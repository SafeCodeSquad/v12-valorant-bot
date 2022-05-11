	const { MessageEmbed } = require('discord.js');

exports.run = async (client, message, args) => {


let embed = new MessageEmbed()
.setAuthor(message.author.tag , message.author.avatarURL({ dynamic: true }))
.setDescription(`**Köken**
:flag_au: Avustralya
**Sınıf**
 Öncü
**Yetenekler**
**[C]** DOĞANIN ŞİFASI
İyileştiren bir figür KUŞAN. Şifa gücünü odaklayarak menzil içinde ve görüş hattındaki takım arkadaşlarını iyileştirmek için ATEŞ TUŞUNU BASILI TUT. Bu yetenek, şifa gücü tamamen tükenene kadar birden fazla kez kullanılabilir. Skye kendisini iyileştiremez.
**[Q]** AV PEŞİNDE
Bir Tazmanya kaplanı figürü KUŞAN. Avcıyı gönderip onu kontrol etmek için ATEŞ ET. Hayvanı kontrol ederken birden ileri atılarak sarsıcı bir patlamaya sebep olmak ve doğrudan isabet alan düşmanlara hasar vermek için ATEŞ ET.
**[E]** KILAVUZ IŞIK
Bir şahin figürü KUŞAN. Şahini ileri göndermek için ATEŞ ET. Şahini nişangâhının baktığı tarafa yöneltmek için ATEŞ TUŞUNU BASILI TUT. Şahini havada uçarken kör edici bir bombaya çevirmek için yeteneği TEKAR KULLAN; bu özellik menzili veya görüş hattı içinde bir düşman olup olmadığını doğrular.
**[X]** İZSÜRENLER
Bir İzsüren figürü KUŞAN. En yakındaki üç düşmanın peşine düşecek üç tane İzsüren göndermek için ATEŞ ET. Bir İzsüren hedefine ulaştığında, hedefin görüşünü kısıtlar.
**Hikayesi**
Aramıza Avustralya'dan katılan Skye, beraberinde getirdiği vahşi hayvan ordusuyla birlikte çatışmayı iyiden iyiye kızıştırıyor. Düşmana ayak bağı olan hayvanları ve takım arkadaşlarını iyileştirme yetisiyle, takımının gücünü pekiştiriyor ve takımdaki herkesi kolluyor.`)
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/864225597123067936/874153389259358270/Skye_1920x1080_Banner.jpeg")
	  message.channel.send(embed)
	  
	  }
	  exports.conf = {
  aliases: ['skye'],
  permLevel: 0,
  kategori: "Moderasyon",
};

exports.help = {
  name: 'skye',
  description: 'İstediğiniz kullanıcının Bannerını verir.',
  usage: 'banner <Kullanıcı Adı>',
};