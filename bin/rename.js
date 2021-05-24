const path = require('path')
const fs = require('fs')

const emojis = fs.readdirSync(path.join(__dirname, '../download'))

emojis.forEach(name => {
  fs.copyFileSync(path.join(__dirname, '../download', name), path.join(__dirname, '../files/', name.replace('@2x','')))
})