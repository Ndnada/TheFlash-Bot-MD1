let handler = async (m, { command, text }) => m.reply(`
*◈╎𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐒 𝐍𝐀𝐃𝐀💋╎◈*
  
*السؤال:* ${text}
*الاجابة:* ${['اه','ممكن','في الاغلب اه','ف الاغلب لا','لا','مستحيل'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['pregunta <texto>?']
handler.tags = ['kerang']
handler.command = /^هل$/i
export default handler
