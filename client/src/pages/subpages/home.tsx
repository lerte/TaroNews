import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import { AtTag, AtTabs, AtTabsPane, AtButton } from 'taro-ui'

import './home.scss'

export default class Home extends Component {
  state: any = {
    loading: false,
    current: 0,
    apis: [
      {
        name: '热门',
        url: 'https://weixin.sogou.com'
      },
      {
        name: '搞笑',
        url: 'https://weixin.sogou.com/pcindex/pc/pc_1/pc_1.html'
      },
      {
        name: '养生堂',
        url: 'https://weixin.sogou.com/pcindex/pc/pc_2/pc_2.html'
      },
      {
        name: '私房话',
        url: 'https://weixin.sogou.com/pcindex/pc/pc_3/pc_3.html'
      },
      {
        name: '八卦精',
        url: 'https://weixin.sogou.com/pcindex/pc/pc_4/pc_4.html'
      },
      {
        name: '科技咖',
        url: 'https://weixin.sogou.com/pcindex/pc/pc_5/pc_5.html'
      },
      {
        name: '财经迷',
        url: 'https://weixin.sogou.com/pcindex/pc/pc_6/pc_6.html'
      }
    ],
    banner: [],
    news: []
  }
  getDateDiff(t) {
    const minute = 1000 * 60
    const hour = minute * 60
    const day = hour * 24
    const month = day * 30
    const now = new Date().getTime()
    const diffValue = now - t * 1000
    if (diffValue < 0) {
      return
    }
    const monthC = diffValue / month
    const weekC = diffValue / (7 * day)
    const dayC = diffValue / day
    const hourC = diffValue / hour
    const minC = diffValue / minute
    let result = ''
    if (monthC >= 1) {
      result = `${parseInt(monthC.toString())}月前`
    } else if (weekC >= 1) {
      result = `${parseInt(weekC.toString())}周前`
    } else if (dayC >= 1) {
      result = `${parseInt(dayC.toString())}天前`
    } else if (hourC >= 1) {
      result = `${parseInt(hourC.toString())}小时前`
    } else if (minC >= 1) {
      result = `${parseInt(minC.toString())}分钟前`
    } else {
      result = '刚刚'
    }
    return result
  }
  async handleClick(value) {
    this.setState({
      current: value
    })
    const news = await this.getNews(this.state.apis[value].url)
    this.setState({
      news
    })
  }
  getBanner() {
    Taro.cloud
      .callFunction({
        name: 'getBanner',
        data: {
          url: 'https://weixin.sogou.com'
        }
      })
      .then(res => {
        this.setState({
          banner: res.result
        })
      })
  }
  async getNews(url) {
    this.setState({
      loading: true
    })
    const { result } = await Taro.cloud.callFunction({
      name: 'getNews',
      data: {
        url
      }
    })
    this.setState({
      loading: false
    })
    return result
  }
  async loadMore() {
    const currentPage = this.state.news.length / 20
    const url = `https://weixin.sogou.com/pcindex/pc/pc_${this.state.current}/${currentPage}.html`
    const news = await this.getNews(url)
    this.setState({
      news: this.state.news.concat(news)
    })
  }
  goToDetail(href) {
    Taro.navigateTo({
      url: '/pages/detail/index?href=' + encodeURIComponent(href)
    })
  }
  async componentDidMount() {
    this.getBanner()
    const news = await this.getNews(this.state.apis[this.state.current].url)
    this.setState({
      news: this.state.news.concat(news)
    })
  }
  render() {
    const { current, news, banner } = this.state
    const News = news.map((item, index) => {
      return (
        <View
          key={index}
          className="card"
          onClick={this.goToDetail.bind(this, item.href)}
        >
          <View className="at-row at-row__align--center at-row__justify--between">
            <View className="at-col at-col-4">
              <Image
                mode="aspectFill"
                className="image"
                style="height: 128px;"
                src={decodeURIComponent(item.image)
                  .split('&')[1]
                  .slice(4)}
                lazyLoad={true}
              />
            </View>
            <View
              className="at-col at-col-8 at-col--wrap"
              style="padding: 0 8px;"
            >
              <View className="title">{item.title}</View>
              <View className="subtitle">{item.subtitle}</View>
              <View className="at-row">
                <View className="at-col at-col-4 at-col--auto">
                  <AtTag type="primary" active={true} size="small" circle>
                    {item.author}
                  </AtTag>
                </View>
                <View className="at-col">
                  <AtTag type="primary" active={true} size="small" circle>
                    {this.getDateDiff(item.time)}
                  </AtTag>
                </View>
              </View>
            </View>
          </View>
        </View>
      )
    })
    return (
      <View className="home">
        <Swiper
          indicatorColor="#fff"
          indicatorActiveColor="#8b2708"
          circular
          autoplay
          indicatorDots
        >
          {banner.map((item, index) => {
            return (
              <SwiperItem key={index}>
                <Image
                  key={index}
                  style="width:100%;"
                  src={item.image}
                  onClick={this.goToDetail.bind(this, item.href)}
                />
              </SwiperItem>
            )
          })}
        </Swiper>
        <AtTabs
          current={current}
          scroll
          tabList={this.state.apis.map(item => {
            return { title: item.name }
          })}
          onClick={this.handleClick.bind(this)}
        >
          {this.state.apis.map((item, index) => {
            return (
              <AtTabsPane key={index} current={current} index={index}>
                {News}
              </AtTabsPane>
            )
          })}
        </AtTabs>
        <AtButton
          customStyle="margin: 0 8px 8px;"
          type="primary"
          loading={this.state.loading}
          onClick={this.loadMore.bind(this)}
        >
          {this.state.loading ? '加载中...' : '加载更多'}
        </AtButton>
      </View>
    )
  }
}
