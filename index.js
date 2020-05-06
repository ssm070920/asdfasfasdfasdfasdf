const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.argv.length == 2 ? process.env.token : "";
const moment = require("moment");
require("moment-duration-format");
const welcomeChannelName = "안녕하세요";
const byeChannelName = "안녕히가세요";
const welcomeChannelComment = "어서오세요.";
const byeChannelComment = "안녕히가세요.";

client.on('ready', () => {
  console.log(`${client.user.tag} 온라인!`);
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "일반인"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
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
  if(message.content == '!서버정보') {
    let embed = new Discord.RichEmbed()
    let img = 'https://postfiles.pstatic.net/MjAyMDA1MDRfMTYx/MDAxNTg4NTE4OTQ5NTMy.r7sC0SYx8ntaKn8eRNhUHa1DqnAdEhPpYV_lo0uZgiog.oHl1sUkm7G6mUQG_4kWDBRTlHQyTaIFA2rFLn95YL1sg.PNG.vb0877/%ED%8C%80%EC%A0%9C%EB%84%A4%EC%8B%9C%EC%8A%A4_%EB%A1%9C%EA%B3%A0.png?type=w773';
    var duration = moment.duration(client.uptime).format(" D [일], H [시간], m [분], s [초]");
    embed.setColor('#186de6')
    embed.setAuthor('server info of Team Genesis Bot', img)
    embed.setFooter(`Team Genesis Bot`)
    embed.addBlankField()
    embed.addField('RAM usage',    `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`, true);
    embed.addField('running time', `${duration}`, true);
    embed.addField('user',         `${client.users.size.toLocaleString()}`, true);
    embed.addField('server',       `${client.guilds.size.toLocaleString()}`, true);
    // embed.addField('channel',      `${client.channels.size.toLocaleString()}`, true);
    embed.addField('Discord.js',   `v${Discord.version}`, true);
    embed.addField('Node',         `${process.version}`, true);

    let arr = client.guilds.array();
    let list = '';
    list = `\`\`\`css\n`;

    for(let i=0;i<arr.length;i++) {
      // list += `${arr[i].name} - ${arr[i].id}\n`
      list += `${arr[i].name}\n`
    }
    list += `\`\`\`\n`
    embed.addField('list:',        `${list}`);

    embed.setTimestamp()
    message.channel.send(embed);
  }
  else if(message.content == '!명령어') {
    let helpImg = 'https://images-ext-1.discordapp.net/external/RyofVqSAVAi0H9-1yK6M8NGy2grU5TWZkLadG-rwqk0/https/i.imgur.com/EZRAPxR.png';
    let commandList = [
      {name: '!서버주소', desc: '사용할수 있는 명령어를 보여드림니다'},
      {name: '!디스코드주소', desc: 'dm으로 전체 공지를 보넴니다'},
      {name: '!카폐주소', desc: '텍스트를 지움니다'},
      {name: '!카카오톡주소', desc: '해당 채널의 초대 코드 표기'},
      {name: '!청소 <숫자>', desc: '사용할수 있는 명령어를 보여드림니다'},
    ];
    let commandStr = '';
    let embed = new Discord.RichEmbed()
      .setAuthor('Help of Team Genesis Bot', helpImg)
      .setColor('#186de6')
      .setFooter(`Team Genesis Bot`)
      .setTimestamp()

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
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



client.login(token);
