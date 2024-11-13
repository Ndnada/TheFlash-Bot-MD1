let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*بوت؟*`
    try {
        await conn.updateProfileName(text)
        m.reply('*تم التغيير😎*')
    } catch (e) {
        console.log(e)
        throw `*فيه خطأ*`
    }
}
handler.help = ['setbotname <نص>']
handler.tags = ['owner']
handler.command = /^(𝐍𝐀𝐃𝐀_𝐁𝐎𝐓)$/i

handler.owner = true

export default handler
