const cloud = require('wx-server-sdk')
const https = require('https')
const cheerio = require('cheerio')

cloud.init()

function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url)
    req.on('response', res => {
      let finalData = ''
      res.on('data', data => {
        finalData += data
      })
      res.on('end', date => {
        resolve(finalData.toString())
      })
    })
  })
}
async function getBanner(url) {
  let banners = []
  const html = await fetch(url)
  const $ = cheerio.load(html)

  $('.sd-slider-item').each((index, item) => {
    banners.push({
      href: item.attribs.href,
      image: $('.sd-slider img')[index].attribs.src
    })
  })
  return banners
}

exports.main = async () => {
  return await getBanner('https://weixin.sogou.com')
}
