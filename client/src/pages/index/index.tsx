import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'

import './index.scss'

import Home from './../subpages/home'
import Me from './../subpages/me'

export default class Index extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: 'i新闻'
  }

  state = {
    current: 0
  }

  onShareAppMessage() {
    return {
      title: 'i新闻',
      desc: 'Taro 开源微信新闻小程序',
      path: '/pages/index/index'
    }
  }

  handleClick(value) {
    if (value == 1) {
    }
    switch (value) {
      case 0:
        Taro.setNavigationBarTitle({
          title: 'i新闻'
        })
        break
      case 1:
        Taro.setNavigationBarTitle({
          title: '我的'
        })
        break
    }
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <View className="container" style="position:relative;">
        {this.state.current == 0 ? <Home /> : <Me />}
        <View className="fixHideContent"></View>
        <AtTabBar
          fixed
          tabList={[
            { title: 'i新闻', iconType: 'bullet-list' },
            { title: '我的', iconType: 'user' }
          ]}
          current={this.state.current}
          onClick={this.handleClick.bind(this)}
        />
      </View>
    )
  }
}
