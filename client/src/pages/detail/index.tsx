import Taro, { Component, Config } from '@tarojs/taro'
import { WebView } from '@tarojs/components'

export default class Index extends Component {
  config: Config = {
    navigationBarTitleText: '新闻详情'
  }
  render() {
    return <WebView src={this.$router.params.href} />
  }
}
