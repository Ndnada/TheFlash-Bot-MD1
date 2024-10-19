import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    const uptime = process.uptime();
    const uptimeString = `${Math.floor(uptime / 60)} دقائق ${Math.floor(uptime % 60)} ثواني`;
    m.react('😍');

    if (device !== 'desktop' && device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://qu.ax/ScUij.jpg'}}, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: `\n◞❐ *وقـت الـتـشـغـيـل: ${uptimeString}*`.trim() },
            footer: { text: ` *ممنوع سب للبوت لانك سبيت للبوت = سبيت المطور تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور المطور* ◞❐wa.me/201098829097`.trim() },  
            header: {
                title: `◞❐*نورت يحب قائمة الاوامر*\n*◞❐ تفضل القائمة يا:* @${mentionId.split('@')[0]}`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '⌝قـائـمـه الاوامـر⌞',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧|قسم المشرفين|🔧',
                                             description: '🔧|اسكونر12|🔧',
                                            id: 'ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧|قسم الاعضاء│🔧‎',
                                            description: '🔧|اسكونر1.|🔧‎',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│قسم الديني│🔧',
                                            description: '🔧│اسكونر2.|🔧',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧|قسم الايديت|🔧',
                                            description: '🔧|اسكونر3.|🔧',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│ قسم التحميل │🔧',
                                            description: '🔧│اسكونر4.│🔧',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│قسم الـتحـويل│🔧',
                                            description: '🔧│اسكونر5.│🔧',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '⚙️│قسم الادوات│⚙️',
                                            description: '⚙️│اسكونر6.│⚙️',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│قسم البنك│🔧',
                                            description: '🔧|اسكونر7.|🔧',
                                            id: 'ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│قسم الاصوات│🔧',
                                            description: '🔧│اسكونر8.│🔧',
                                            id: '.ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧قسم الانمي|‏|🔧',
                                            description: '🔧|اسكونر9.│🔧',
                                            id: 'ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│قسم المطور│🔧',
                                            description: '🔧│اسكونر10.│🔧',
                                            id: 'ESCONAR-BOT'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧│مطوري│🔧',
                                            description: '🔧│اسكونر11.│🔧',
                                            id: '.المطور'
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'مطوري😘',
                            url: 'https://wa.me/201098829097',
                            merchant_url: ''
                        })
                    },
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'call',
                            id: '.صوره'
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };        

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(menu)$/i;
export default handler;
