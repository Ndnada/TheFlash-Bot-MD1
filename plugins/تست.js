//*رد بوت اسكونر 

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^تيست$/i.test(m.text)) { 
     responses = ['*𝐖𝐎𝐑𝐊𝐈𝐍𝐆..💋*']; 
 }
  if (/^تيست$/i.test(m.text)) {
    let vn =     'https://qu.ax/cZJu'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }   
   return !0 
 }; 

 export default handler;
