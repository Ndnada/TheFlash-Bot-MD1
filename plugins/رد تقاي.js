//*رد بوت الدسوقي 

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^يابوت$/i.test(m.text)) { 
     responses = [ 
 'هيحح شو بدك مني 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بخير|بخير الحمد لله $/i.test(m.text)) { 
     responses = [ 
'*دايما يارب 💎🩵*'
     ]; 
 }else if (/^كداب|شرير$/i.test(m.text)) { 
     responses = [ 
'*مظلوم اككيد😩❤‍🔥*'
     ]; 
   }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
'*بي التيكت بتعها🙂*'
   ]; 
   }else if (/^بوت بتحبني؟|بوت بتحبنى$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^بوت بتكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااه اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   } else if (/^عرص|ي عرص|شرموط|ي شرموط|لبوه|ي لبوه$/i.test(m.text)) { 
     responses = [ 
'*صلي علي النبي ي حب م كده 👳🏻‍♂️*'
     ]; 
     }else if (/^🌚|😉|🥹$/i.test(m.text)) { 
     responses = [ 
       '😘',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^اه$/i.test(m.text)) { 
     responses = [ 
       '*الشارع الوراه​​​​​❣️*',  

     ];
     }else if (/^بكرهك$/i.test(m.text)) { 
     responses = [ 
       '*طيب 🐦💔*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباحو كسم مدارس♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^.menu$/i.test(m.text)) { 
     responses = [ 
       '*غلط اكتب .اوامر*',  
     ];
            }else if (/^خخخخ$/i.test(m.text)) { 
     responses = [ 
       '*خوخ ومنجا وسوق العبور♥*',  
     ];
    }else if (/^بوسه|هات بوسه|.بوسه|kiss$/i.test(m.text)) { 
     responses = [ 
        '*محححححححح 💋🫦*' ,  
     ];
    }else if (/^اسكت$/i.test(m.text)) { 
     responses = [ 
        '*مش بمزاجك بلص اسكت انت ☺️❤️*' ,  
     ];
    }else if (/^ملك 🥺💗$/i.test(m.text)) { 
     responses = [ 
        '*دي قلب مطوري دي روح مطوري ده مطوري يوسف الدسوقي بيحبها فشخ و ربنا بيدمنها اوي و ملوش الا غرها ربنا يدمهم لبعض و ي رب يكونو من نصيب بعض ادعلهم 🥹💘💘💘💘💘💘💘💘💘💘💘🥹*' ,  
     ];
    }else if (/^ملل$/i.test(m.text)) { 
     responses = [ 
         '*بص انا عارف انك مبضون وانا برضو مبضون و مطوري برضو مبضون بس نعمل ايه هي الدنيا بضان كده ايه الجديد 🙂💔*'  ,  
     ];
    }else if (/^وحشتني|واحشتني$/i.test(m.text)) { 
     responses = [ 
         '*انت اكتر عمتا 🥹💘*'  ,  
     ];
    }else if (/^طارق$/i.test(m.text)) { 
     responses = [ 
         '*ميا عشان شرقت 🐦❤️‍🩹*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك عمتا 🥹💗*'  ,  
     ];
     }else if (/^كلموني$/i.test(m.text)) { 
     responses = [ 
         '*تعي بف 🫦❤️‍🔥*'  ,  
     ];
    }else if (/^بوت احتاويني|بوت احتاويني|احتاويني|احتويني$/i.test(m.text)) { 
     responses = [ 
         '*تعي في حضني ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^بموت فيك$/i.test(m.text)) { 
     responses = [ 
         '*بدمنك 🥺❤️*'  ,  
     ];
    }else if (/^بعشقك$/i.test(m.text)) { 
     responses = [ 
         '*قلبي اصلا ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🌚❤️*'  ,  
     ];
    }else if (/^بدمنك$/i.test(m.text)) { 
     responses = [ 
         '*ي بختي اصلا 🥺❤️✨*'  ,  
     ];
    }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
         '*كسمين امك لو اسكونر لمحك هينيكك 😒*'  ,  
     ];
    }else if (/^حبوني$/i.test(m.text)) { 
     responses = [ 
         '*بحبك و بموت فيك و بدمنك و بعشقك ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​🥹​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️*'  ,  
     ];
    }else if (/^بوسي$/i.test(m.text)) { 
     responses = [ 
         '*بحب بوسي بموت في بوسي بعشق بوسي بدمن بوسي بوسي دي قلبي من جوه 🥺💋🫦💘*'  ,  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
