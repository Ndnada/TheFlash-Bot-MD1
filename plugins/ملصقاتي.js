import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
 
    const s = [
"https://telegra.ph/file/9c406077983f9fe65c578.png",
"https://telegra.ph/file/ae5e5bfbc98cb7825f8ac.jpg",
              "https://telegra.ph/file/ae5e5bfbc98cb7825f8ac.jpg",
             "https://telegra.ph/file/ae5e5bfbc98cb7825f8ac.jpg",
             "https://telegra.ph/file/ae5e5bfbc98cb7825f8ac.jpg",
             "https://telegra.ph/file/d870091e1b346afd2d30f.png",
             "https://telegra.ph/file/f7799a1459cac6eb1346c.png",
             "https://telegra.ph/file/4e84292a76a07ab824228.png",
             "https://telegra.ph/file/ae5e5bfbc98cb7825f8ac.jpg"
    ];  
    
    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}

handler.customPrefix = /(مطور|المطور|الدعم|دعم|اسكونر|سكونر)$/i;
handler.command = new RegExp
handler.exp = 50
export default handler
