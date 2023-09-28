const chalk = require("chalk")
const fs = require("fs")
const dotenv = require('dotenv')

dotenv.config();

//
global.domain = 'kyuu.tokopannep.xyz'
global.apikey = 'ptla_mPnGPknLClnC5TPcGIKG0O9e60wJInG0FXruoRsv4Bd'
global.capikey = 'ptlc_B9Jod73kSTQZGbqwc2yheWw7VGoLgL37gQYFJrASTrr'
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

global.wtf = 'kikyy'
//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = process.env.OPENAI_API_KEY

//batas
global.APIKeys = {
    'https://api.shinoa.xyz/docs': '451C1A14'
}

//owmner v card
global.owner = ['6282144323683'] //ur owner number
global.ownernomer = "6282144323683" //ur owner number2
global.ownername = "Deni Setiawan" //ur owner name
global.ytname = "hmm" //ur yt chanel name
global.socialm = "jgn spam owner njg" //ur github or insta name
global.location = "Sulawesi Selatan, Indonesia " //ur location

//new
global.botname = "DICODING BOT"
global.ownernumber = '62821443236832144323683'
global.ownername = '6282144323683'
global.ownerNumber = ["6282144323683@s.whatsapp.net"]
global.ownerweb = "https://www.youtube.com/@YTKyuuTense"
global.websitex = "https://Bakso kontol"
global.wagc = "https://chat.whatsapp.com/GxpCNxNd7w99fjSzHJPwGL"
global.themeemoji = '🚩'
global.wm = "Fxyz"
global.wmbot = "Created By Kyuu"
global.botscript = 'kamu nanyeak escehnya?' //script link
global.packname = "𝐈 𝐧 𝐮 𝐦 𝐚 𝐤 𝐢 - 𝐁 𝐨 𝐭"
global.author = "𝐈 𝐧 𝐮 𝐦 𝐚 𝐤 𝐢"
global.creator = "6282144323683@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.hituet = 0
global.running = "Panel Pterodactyl"
//media target
global.thum = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/cheemspic.jpg") //ur thumb pic

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Nih',
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})