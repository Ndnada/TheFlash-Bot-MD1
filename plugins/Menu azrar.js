import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto, prepareWAMessageMedia } = pkg;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor((ms % 3600000) / 60000);
    let s = Math.floor((ms % 60000) / 1000);
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
}

const handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {
    let d = new Date();
    d.setTime(d.getTime() + 3600000); // تعديل وقت الساعة بإضافة ساعة
    let locale = 'ar';
    let week = d.toLocaleDateString(locale, { weekday: 'long' });
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    let _time = process.uptime() * 1000;
    let time = clockString(_time);
    let _uptime = process.uptime() * 1000;
    let uptime = clockString(_uptime);
    let user = global.db.data.users[m.sender] || {};
    let name = conn.getName(m.sender) || 'مستخدم';
    let { dollar = 0, joincount = 0, diamond = 0 } = user;
    let { exp = 0, gold = 0, level = 0, role = 'مستخدم' } = user;
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length;
    let more = String.fromCharCode(8206);
    let readMore = more.repeat(850);
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const mentionId = m.key.participant || m.key.remoteJid;

    await conn.sendMessage(m.chat, { react: { text: '📀', key: m.key } });

    // إرسال المقطع الصوتي أولاً
    await conn.sendMessage(m.chat, { 
        audio: { 
            url: 'https://f.uguu.se/tUvRXbBz.mp3' 
        }, 
        mimetype: 'audio/mpeg', 
        ptt: true 
    }, { quoted: m });

    // تجهيز الصورة والقائمة
    const images = [
        'https://qu.ax/nPJB.jpg',
        'https://qu.ax/nPJB.jpg',
        'https://qu.ax/nPJB.jpg',
        'https://qu.ax/nPJB.jpg',
        'https://qu.ax/nPJB.jpg', 
        'https://qu.ax/nPJB.jpg',
    ];

    const randomImage = images[Math.floor(Math.random() * images.length)];

    var messa = await prepareWAMessageMedia({ image: { url: randomImage } }, { upload: conn.waUploadToServer });

    // إرسال القائمة
    conn.relayMessage(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: {
                    body: {
                        text: `˼👑˹↜ مـࢪحـبـا بـك/ي @${mentionId.split('@')[0]}
⌊🪪┇مـعـلـومـاتـك┇🪪⌉
❐═━━━═╊⊰👑⊱╉═━━━═❐
【⚜┇مـــســـتواك ⟣  ${level} 】
【💫┇رتـبـتـك ⟣  ${role} 】
【💷┇فــلــوســك ⟣  ${dollar} 】
【🪙┇الــذهــب ⟣  ${gold} 】
【🦇┇الـنـقـاط ⟣  ${exp} 】
●━── ⊱•┇«👑»┇•⊰ ──━●
⌊🤖┇الــبــوت┇🤖⌉
●━── ⊱•┇«👑»┇•⊰ ──━●
【🦇┇اسم البوت ⟣  اسـڪونر 】
【📌┇الـتـشـغـيل ⟣  ${uptime} 】
【📅┇الــيــوم ⟣  ${week} 】
【🗓┇الـتـاريـخ ⟣  ${time} 】
【🎶┇الــمــســتـخـدمـيـن ⟣  ${rtotalreg} 】
❐═━━━═╊⊰👑⊱╉═━━━═❐`
                    },
                    footer: {
                        text: 'By © ESCØNAR ELREŽŽEL'
                    },
                    header: {
                        title: '',
                        hasMediaAttachment: true,
                        imageMessage: messa.imageMessage,
                    },
                    nativeFlowMessage: {
                        buttons: [
                            {
                                name: 'single_select',
buttonParamsJson: JSON.stringify({
    title: '⌈🦇╎اوامــر الــبــوت╎🦇⌋',
    sections: [
        {
            title: '⌈🦇╎اوامــر الــمــطــور╎🦇⌋',
            highlight_label: 'By © ESCØNAŔ & ELREŽŽEL',
            rows: [
                { header: 'تعريف المطور', title: '⌈🦇╎تعريف المطور╎🦇⌋', description: 'تعرف على المطور', id: '.المعرف', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: 'قائمه المطور', title: '⌈🦇╎قسم المطور╎🦇⌋', description: 'قسم خاص بالمطور فقط', id: '.ق3', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' }
            ]
        },
        {
            title: '⌈🦇╎القسم الاول╎🦇⌋',
            highlight_label: 'By © ESCØNAR  ，ELREŽŽEL',
            rows: [
                { header: '⌈🛡╎قائمة التنزيلات╎🛡⌋', title: '⌈🦇╎التنزيلات╎🦇⌋', description: 'جميع التحميلات هنا', id: '.ق4', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🔍╎قائمة البحث╎🔍⌋', title: '⌈🦇╎البحث╎🦇⌋', description: 'بحث في مختلف المواقع', id: '.ق11', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🦇╎قائمة الAi╎🦇⌋', title: '⌈🌟╎Ai╎🌟⌋', description: 'قسم الذكاء الاصطناعي', id: '.ق7', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' }
            ]
        },
        {
            title: '⌈🦇╎القسم الثاني╎🦇⌋',
            highlight_label: 'By © ESCØNAR  ，ELREŽŽEL',
            rows: [
                { header: '⌈🌟╎قائمة التسلية╎🌟⌋', title: '⌈🤡╎التسلية╎🤡⌋', description: 'جميع العاب التسلية', id: '.ق13', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈📺╎قائمة الاديت╎📺⌋', title: '⌈🦇╎الاديت╎🦇⌋', description: 'اوامر الايديت', id: '.ق14', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🕹╎قائمة الالعاب╎🕹⌋', title: '⌈🕹╎الالعاب╎🕹⌋', description: 'جميع الالعاب هنا', id: '.ق5', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' }
            ]
        },
        {
            title: '⌈🦇╎القسم الثالث╎🦇⌋',
            highlight_label: 'By © ESCØNAR  ，ELREŽŽEL',
            rows: [
                { header: '⌈🦇╎قائمة الاعضاء╎🦇⌋', title: '⌈🌟╎الاعضاء╎🌟⌋', description: 'قسم خاص بي الاعضاء', id: '.ق1', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🌟╎قائمة الالقاب╎🌟⌋', title: '⌈🦇╎الالقاب╎🦇⌋', description: 'تعريف امر الالقاب', id: '.ق15', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🦹╎قائمة المشرفين╎🦹⌋', title: '⌈🦸╎المشرفين╎🦸⌋', description: 'قسم خاص بي المشرفين', id: '.ق10', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' }
            ]
        },
        {
            title: '⌈🦇╎القسم الثالث╎🦇⌋',
            highlight_label: 'By © ESCØNAR  ，ELREŽŽEL',
            rows: [
                { header: '⌈🕋╎قائمة الدين╎🕋⌋', title: '⌈🌟╎الدين╎🌟⌋', description: 'قسم خاص بالاوامر الاسلامية', id: '.ق2', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈♻╎قائمة التحويلات╎♻⌋', title: '⌈💤╎التحويلات╎💤⌋', description: 'اوامر التحويلات', id: '.ق6', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🪛╎قائمة الادوات╎🪛⌋', title: '⌈🧰╎الادوات╎🧰⌋', description: 'اوامر ادوات', id: '.ق12', highlght_label: 'By © ESCØNAR  ，ELREŽŽEL' }          
            ]

        },
        {
            title: '⌈🦇╎قسم الرابع╎🦇⌋',
            highlight_label: 'By © ESCØNAR  ，ELREŽŽEL',
            rows: [
                { header: '⌈🚨╎قائمة الدعم╎🚨⌋', title: '⌈🚨╎الدعم╎🚨⌋', description: 'قائمة الدعم', id: '.الدعم', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
                { header: '⌈🏛╎قائمة البنك╎🏛⌋', title: '⌈🌟╎البنك╎🌟⌋', description: 'قائمة اوامر البنك المتنوعة', id: '.بنكك', highlight_label: 'By © ESCØNAR  ，ELREŽŽEL' },
            ]
        }
    ]
}),
messageParamsJson: "ESCONAR & BOT"
},
{
    name: "quick_reply",
    buttonParamsJson: JSON.stringify({
        display_text: "⌈🤖╎الــيوتـيـوب╎🤖⌋",
        id: "https://youtube.com/@es_conar1?si=f0PgS-AGCecEJnPW"
    })
},
{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "⌈🌟╎الــمــطــور╎🌟⌋",
        url: "https://wa.me/201098829097",
        merchant_url: "https://wa.me/201060007820"
    })
},
{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "⌈🤖╎قناة البوت╎🤖⌋",
        url: "https://whatsapp.com/channel/0029VasNaVr7T8bPaW6E1Z1u",
        merchant_url: "https://whatsapp.com/channel/0029VasNaVr7T8bPaW6E1Z1u"
    })
},
{
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "⌈🚨╎جروبي╎🚨⌋",
        url: "https://whatsapp.com/channel/0029VasNaVr7T8bPaW6E1Z1u",
        merchant_url: "https://whatsapp.com/channel/0029VasNaVr7T8bPaW6E1Z1u"
    })}
]
                        }
                    }
                }
            }
    
    
    }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['اوامر'];

export default handler;
