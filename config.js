const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUUvU0ozM2tDMEtoVjlTREl1RXhqNnlmZXFPQ05NRDhya0Z5Mkg4VXpIWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUFOWGhLbHhrM25pb1prbjlsbUZOTzNSSVN3dEx0T201TE5oZFA0UEN4MD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSEVaRGI3cGNEMTQrYXpQelk4bnJWMHNrTmxYMnZpV0grZ2Z3QTYvQTFnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYNGltZnRibGl4TnhtL2RDb0VmQmxmd3lFaE1Ocmo3OGFZcnJrZUpMM3pFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFFUlRKQ1BRQTI2L0psbVZWS3FwTmszNFZFSGVWSXp4TTFOU3dobUlYMmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkplVUF0N3U3ZHQ1cWFzcFFYcWUyZkVPbzZXZThGSjBlbUJGTS80cXJLaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk10SHVQSWc0MlFyNnhpVEVoWk83UFdLZW40MzN6TE5HU3hrdXdyT2FXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVcwVVRIaDBxSm85VVRTUk5reldsQnZnQ2RlNVRIRFgycG5pckx1SGRRZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdZK1BmUVo0K04xczdQZHVaY25LUHJqQStadGx2SmhiZm5XakMyTVZzMnVPZ0plV3ZqZ3lzczI5Ymp4amF5ZVZUQVZPUm5NZkN1U2lrUHdvUXRSS2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAxLCJhZHZTZWNyZXRLZXkiOiJQYWd1OUVENWNZczJoaVdqZFpHbWltS0pRWTdSd1RqUzRybW43aXk0VGNVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZTUM0NVBBMyIsIm1lIjp7ImlkIjoiMjM0OTEyMDE4NTc0NzoxOUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIzOTUzNTA5MDg2NDE2NDoxOUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s2dzdKc0NFS2ZMNk1RR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9DQ2hFMXlNKzJwdjkvZjg1b2Z0bjNsblNSZlVMcnVOSE5Dd1pkd3pTUTA9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9sK2lPdE1ocUVOU1luc0VaV01vWFFaclhwdDZkTVdWVXdqNGdJZHVobi9CRTVrMithYXhNaVpoOUFNYTQrRG9uTTZOWHZOVE14ZmN3SlB4NzIxNkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJud3VCTElwVldOTFRCSTFBUmpOWWp6ejU5NVZRcGhtcmdVQ21KQUFFRHNWQ1ZTRW5lVTFvUlRDQkhqZ01zSGd4T0R2VnBIY0dDbElPMkJ3MmgwMzRodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxMjAxODU3NDc6MTlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGdnb1JOY2pQdHFiL2YzL09hSDdaOTVaMGtYMUM2N2pSelFzR1hjTTBrTiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUNBPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU0OTMyNjUwLCJsYXN0UHJvcEhhc2giOiIyUDFZaGYiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFBRCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY QUEEN DANI-MD 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/tawf5r.png",
MENU_VIDEO_URL: process.env.MENU_VIDEO_URL || "https://files.catbox.moe/0bnxn4.mp4",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ⵕUEEṈ-DȺṈƗ-MD  ",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "danixdami md",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348054671458",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*DAMĪNĪ*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Damini and his wife🌚*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/tawf5r.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> i'm Dami's wifee💅",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "2348054671458",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
