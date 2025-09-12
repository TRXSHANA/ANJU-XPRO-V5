//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUl4L21yelpURnBLSE1tdkhwQjRVQTVZRlhvaWo0OGFaejVrYWk4THdYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidm00ay9CbEFNWktNVjc5aXhZKzB3cEhFbzNkdll3Qmw0TFhBR3NDRFAwTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRS0k0ZXhRSDR2TXZiMlRYOTRUMUMxSUUzTmFBdXoyNENZemNOYVZZa1VNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMTJneUpQZ3ZnV3dIN0JtS1dqUnJZbVQ3RFJCRnVhOGNYVFNIY2tlQUFRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitISkh4SlBHL0kreU9qRFIxUFNhMlR4dERGODZ3WjIyc1ozRzZqYXc4VkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhSMWZBNDBwS2hHdEFVbFdiWnZINlhWNXVtcU9VdzRDMy9ZcmY1Y3d0bXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0ZFUUZ5MklDcW5hRWlyYlVoaDdnb29ycFpCTXBJMjZ5dkhGL2JYU0gxMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicE1mZno0eFpockFRYk4wclRwMkNaQThEeGdtRFFKczdHY0I0NzRhSm5HND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhWbm83d0FCZDZ2enNsQ0tqMTBKVzdUbnlyK0xWaTh6VC9YRlhCV1YxK2E0V3h3cFZtck9QUnhjNlRmMDl2MDg1SDJUdkx5cENMSDl1NnRseHVJTWp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI1LCJhZHZTZWNyZXRLZXkiOiI1dHJBQjhzQUtKVk9lTXdDRFJnOWFHWFNDcGNiVS9URWx4UWUvUEU2Uk5VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwOTI3MjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNzgxMUFGMTA1RDIyNDg0QzhGQ0E0M0VDNzU1NUIyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc3MDgzOTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwOTI3MjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDNjNGRDk1RkM1MkM2NzJGN0JDN0YwODBEOTFBQUJCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc3MDgzOTV9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzEwOTI3MjI4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFDQjI5RUQ2N0M0NThBNDY4QTE4MDE4QzVBQjI0ODdCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc3MDgzOTZ9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkxRTlBFQ0hSIiwibWUiOnsiaWQiOiI5NDcxMDkyNzIyODoyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTAyNDY1NjM4ODIyMDg4OjJAbGlkIiwibmFtZSI6IlNhaGFuIERpc3NhbmF5YWthIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQUHNydmtERU55QWtzWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI2TmMxN3BRczlEQll3RlRoV3pKSUZZaVVzVk9Pa0UxSzFSM2lnRVlCVlNNPSIsImFjY291bnRTaWduYXR1cmUiOiJxdlhjQ3J4Mml1Y1NNNTFPV29JMnMxWVRtNzdxNzh0ZUpSNWpFYjJJemxHaVB2ME5MTlhDWlhPNVk1ekxDSzY0Z3JKMkNZUy9OMWdZZDNjUjdPY3NBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiazIvSHBtQ3B4NXg3bUhVc3VMRGR6ZTZwa2lneVNQWUN1RkxORlF0NEFGbzVDYnJPbnJhbnYyUzVkOHpMSTh2UjJHWGl6blU4N0JxMmd6YktwdU15aUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDcxMDkyNzIyODoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVqWE5lNlVMUFF3V01CVTRWc3lTQldJbExGVGpwQk5TdFVkNG9CR0FWVWoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NzcwODM5MywibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMT2wifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "710927228",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
