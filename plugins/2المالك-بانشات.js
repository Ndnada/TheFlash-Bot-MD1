//import _translate from "./_translate.js"
//const tradutor = _translate.plugins.owner_unbanchat
// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.

const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply('*تم فك حظري لي بس كدا هيصدعوني​​​​​​​​​​​​​​​🥺*');
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })

};
handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat|بانشات_فك|انبانشات$/i;
handler.rowner = true;
export default handler;
