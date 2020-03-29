import Taro, { Component, Config } from '@tarojs/taro'
import { Image, View } from '@tarojs/components'
import { AtDivider } from 'taro-ui'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '关于本小程序'
  }

  onShareAppMessage() {
    return {
      title: 'i新闻',
      desc: 'Taro 开源微信新闻小程序',
      path: '/pages/index/about'
    }
  }

  render() {
    return (
      <View className="about">
        <View className="at-article">
          <View className="at-article__content">
            <View className="at-article__section">
              <AtDivider content="开源说明" />
              <View className="at-article__p">
                本小程序利用云函数自动实时抓取https://weixin.sogou.com网站的新闻
              </View>
              <View className="at-article__p">
                由于新闻类小程序审核不能通过，配置不了业务域名，访问不了，所以开源
              </View>
              <AtDivider content="开发环境" />
              <View className="at-article__p">
                Window10, Node v10.15.1, Yarn v1.22.4, Taro CLI 2.0.7
              </View>
              <AtDivider content="注意事项" />
              <View className="at-article__p">
                下载本项目后修改project.config.json为你的小程序appid,
                通过微信开发者开发工具，右键点击云函数->上传并部署:云端安装依赖
                微信开发者开发工具，勾选不校验合法域名
              </View>
              <View className="at-article__p">
                新闻详情微信开发者开发工具，看不了图片，是因为微信公众号的图片防盗链
              </View>
              <View className="at-article__p">
                新闻详情真机访问不了，会提示请在微信客户端打开链接
              </View>
              <AtDivider content="技术栈" />
              <View className="at-article__p">
                Taro, Taro UI, Typescript, React, cheerio
              </View>
              <AtDivider content="欢迎赞赏，请我喝杯咖啡" />
              <Image
                className="at-article__img"
                src="./donate.jpg"
                mode="widthFix"
                lazyLoad
                showMenuByLongpress
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
