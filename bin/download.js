const path = require('path');
const request = require('request');
const fs = require('fs');

const gerUrl = i => `https://webim-1252463788.file.myqcloud.com/assets/emoji/emoji_${i}@2x.png`

const download = async () => {
  for (let i = 0; i < 142; i++) {
    const url = gerUrl(i)
    try {
      await downloadFile(url, path.join(__dirname, '../download/', `emoji_${i}@2x.png`))
    } catch (e) {
      console.log(e, `${url}下载失败`)
    }
    if (i === 141) {
      console.log('下载完毕')
    }
  }
}

download()

function downloadFile(uri, filename) {
  var stream = fs.createWriteStream(filename)
  return request(uri).pipe(stream)
}
