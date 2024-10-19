
 // https://chat.whatsapp.com/JTHZch9OGP5FwLjHddGCWi
let handler = async (m, { conn, text }) => {
  let tagme = `https://wa.me/+${m.sender.replace(`+`)}/?text=حقوق+بوتك`
  let mylink = [m.sender]
  conn.reply(m.chat, tagme, m, { contextInfo: { mylink }})
}
handler.help = ['✓ ◡̈⃝ ✓│رابطي🧸💜']
handler.tags = ['group']
handler.command = /^لينكي$/i
}
handler.group = false
}
export default handler
