const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} 온라인!`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if (message.content == '!서버주소') {
    message.reply('Clueonline.kr');
  }
  if (message.content == '!디스코드주소') {
    message.reply('```https://discord.gg/pFSrsg```');
  }
  if (message.content == '!카폐주소') {
    message.reply('```https://cafe.naver.com/clueonline/```');
  }
  if (message.content == '!카카오톡주소') {
    message.reply('```https://open.kakao.com/o/gWOUiN5b```');
  }
  if (message.content == '!청소') {
    message.reply('**채팅창을 청소할 수 있다 ( 관리자만 가능 )**');
  }
  if (message.content === '!명령어') {
    let img =
      'https://cdn.discordapp.com/attachments/700700907519737931/707234149446189086/0f286dd12592ed8d.png';
    let embed = new Discord.RichEmbed()
      .setTitle('명령어 목록')
      .setAuthor('클루온라인', img)
      .setThumbnail(img)
      .addField('!서버주소', '서버주소를 알려줍니다.\n')
      .addField('!디스코드주소', '디스코드 주소를 알려줍니다.\n')
      .addField('!카폐주소', '카폐 주소를 알려줍니다.\n')
      .addField('!카카오톡주소', '카카오톡 주소를 알려줍니다.\n')
      .addField('!청소 <숫자>', '채팅청소를 할수있습니다.\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('제작자 : K O H#1908', img);

    message.channel.send(embed);
  }
  if (message.content === '/온') {
    message.delete();  
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send(
        `<@${message.author.id}> ` +
          '명령어를 수행할 관리자 권한을 소지하고 있지않습니다.'
      );
    }
    let img =
      'https://cdn.discordapp.com/attachments/700700907519737931/707234149446189086/0f286dd12592ed8d.png';
    let embed = new Discord.RichEmbed()
      .setTitle('서버가 열렸습니다')
      .setColor(0x00ff3c)
      .setAuthor('클루온라인', img)
      .setThumbnail(img)
      .addField(' 카페', 'https://cafe.naver.com/clueonline\n')
      .addField('디스코드', 'https://discord.gg/tW7fs7H\n')
      .addField('카카오톡', 'https://open.kakao.com/o/gWOUiN5b\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('클루온라인 관리진', img);

    message.channel.send(embed);
  }
  if (message.content === '/오프') {
    message.delete();
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send(
        `<@${message.author.id}> ` +
          '명령어를 수행할 관리자 권한을 소지하고 있지않습니다.'
      );
    }
    let img =
      'https://cdn.discordapp.com/attachments/700700907519737931/707234149446189086/0f286dd12592ed8d.png';
    let embed = new Discord.RichEmbed()
      .setTitle('서버가 닫혔습니다')
      .setColor(0xff0000)
      .setAuthor('클루온라인', img)
      .setThumbnail(img)
      .addField('카페', 'https://cafe.naver.com/clueonline\n')
      .addField('디스코드', 'https://discord.gg/tW7fs7H\n')
      .addField('카카오톡', 'https://open.kakao.com/o/gWOUiN5b\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('클루온라인 관리진', img);

    message.channel.send(embed);
  }
  if (message.content === '/리붓') {
    message.delete();  
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send(
        `<@${message.author.id}> ` +
          '명령어를 수행할 관리자 권한을 소지하고 있지않습니다.'
      );
    }
    let img =
      'https://cdn.discordapp.com/attachments/700700907519737931/707234149446189086/0f286dd12592ed8d.png';
    let embed = new Discord.RichEmbed()
      .setTitle('서버가 다시시작됩니다')
      .setColor(0xf6ff00)
      .setAuthor('클루온라인', img)
      .setThumbnail(img)
      .addField(' 카페', 'https://cafe.naver.com/clueonline\n')
      .addField('디스코드', 'https://discord.gg/tW7fs7H\n')
      .addField('카카오톡', 'https://open.kakao.com/o/gWOUiN5b\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('클루온라인 관리진', img);

  message.channel.send(embed);
}
if (message.content === '/점검') {
  message.delete();  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) {
    return message.channel.send(
      `<@${message.author.id}> ` +
        '명령어를 수행할 관리자 권한을 소지하고 있지않습니다.'
    );
  }
  let img =
    'https://cdn.discordapp.com/attachments/700700907519737931/707234149446189086/0f286dd12592ed8d.png';
  let embed = new Discord.RichEmbed()
    .setTitle('서버가 점검중입니다')
    .setColor(0xff7200)
    .setAuthor('클루온라인', img)
    .setThumbnail(img)
    .addField(' 카페', 'https://cafe.naver.com/clueonline\n')
    .addField('디스코드', 'https://discord.gg/tW7fs7H\n')
    .addField('카카오톡', 'https://open.kakao.com/o/gWOUiN5b\n')
    .addBlankField()
    .setTimestamp()
    .setFooter('클루온라인 관리진', img);


message.channel.send(embed)
}
  if(message.content.split(' ')[0] == '!청소') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    }

    var clearLine = message.content.substring(3);
    var isNum = !isNaN(clearLine)

    if(isNum && (clearLine <= 0 || 100 < clearLine)) {
      message.channel.send("1부터 99까지의 숫자만 입력해주세요.")
      return;
    } else if(!isNum) { // c @바부 3 // c <@124125125125> 3
      if(message.content.split('<@').length == 2) {
        if(isNaN(message.content.split(' ')[2])) return;

        var user = message.content.split(' ')[1].split('<@!')[1].split('>')[0];
        var count = parseInt(message.content.split(' ')[2])+1;
        const _limit = 10;
        let _cnt = 0;

        message.channel.fetchMessages({limit: _limit}).then(collected => {
          collected.every(msg => {
            if(msg.author.id == user) {
              msg.delete();
              ++_cnt;
            }
            return !(_cnt == count);
          });
        });
      }
    } else {
      message.channel.bulkDelete(parseInt(clearLine)+1)
        .then(() => {
          AutoMsgDelete(message, `<@${message.author.id}> ` + parseInt(clearLine) + "개의 메시지를 삭제했습니다");
        })
        .catch(console.error)
    }
  }
});

async function AutoMsgDelete(message, str, delay = 3000) {
  let msg = await message.channel.send(str);

  setTimeout(() => {
    msg.delete();
  }, delay);
}



client.login('NzAxNDcyNjE1ODQ3NjkwMjcx.XrF4nA.Vbp_BcQMMe4hHTXJwxuoTYQsy80');
