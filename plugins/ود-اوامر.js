let handler = m => m;
handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];

  if (/^اوامر$/i.test(m.text)) {
    let vn =  'https://files.catbox.moe/xfn28n.mp3' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }


  return !0;
};
export default handler;
