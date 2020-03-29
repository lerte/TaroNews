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
async function getNews(url) {
  let news = []
  const html = await fetch(url)
  const $ = cheerio.load(html)

  Array.from(Array(20).keys()).map((index, item) => {
    news.push({
      image: $('.img-box a img')[index].attribs['src'],
      href: $('.txt-box h3 a')[index].attribs['href'],
      title: $('.txt-box h3 a')[index].children[0].data,
      subtitle: $('.txt-box .txt-info')[index].children[0].data,
      author: $('.txt-box .account')[index].children[0].data,
      time: $('.txt-box .s2')[index].attribs['t']
    })
  })
  return news
}

exports.main = async event => {
  const url = event.url || 'https://weixin.sogou.com'
  return await getNews(url)
}
