import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const sounds4 = "./media/الصدمه.mp3";
  const chat = global.db.data.chats[m.chat];
  if (/^تست$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    await m.reply(`*شغال يزمكس😺*`);
    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
  }
  return !0;
};
export default handler;
