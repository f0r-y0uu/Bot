const os = process
global.DeveloperMode = 'false' //true Or false
global.owner = ['33623746892', '6289678391870'] || os.env["OWNER_NUMBER"]// Put your number here
global.linkGC = ['http://bit.ly/Grupgabutbotv1']
global.mods = ['33623746892', '6289678391870'] // Want some help?
global.prems = ['33623746892', '6289678391870'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  vhtear: 'https://vhtear.com',
  zeks: 'https://api.zeks.xyz',
  clph: 'https://recoders-area.caliph.repl.co'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'cf6ab5c2c1bb1b5d'
  'https://api.xteam.xyz': 'cf6ab5c2c1bb1b5d',
  'https://recoders-area.caliph.repl.co': 'FreeApi',
  'https://vhtear.com': 'AdiOfficial404',
  'https://api.zeks.xyz': 'apivinz'
}

// Sticker WM
global.packname = 'ini wm'
global.author = 'Ag-Bot'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
