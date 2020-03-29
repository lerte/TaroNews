import Taro, { Component } from '@tarojs/taro'
import { View, OpenData } from '@tarojs/components'
import { AtGrid, AtList, AtListItem, AtAvatar } from 'taro-ui'

import './me.scss'

export default class Home extends Component {
  state: any = {
    icons: [
      {
        value: 'analytics',
        iconInfo: {
          value: 'analytics'
        }
      },
      {
        value: 'bell',
        iconInfo: {
          value: 'bell'
        }
      },
      {
        value: 'blocked',
        iconInfo: {
          value: 'blocked'
        }
      },
      {
        value: 'bookmark',
        iconInfo: {
          value: 'bookmark'
        }
      },
      {
        value: 'bullet-list',
        iconInfo: {
          value: 'bullet-list'
        }
      },
      {
        value: 'calendar',
        iconInfo: {
          value: 'calendar'
        }
      },
      {
        value: 'add-circle',
        iconInfo: {
          value: 'add-circle'
        }
      },
      {
        value: 'subtract-circle',
        iconInfo: {
          value: 'subtract-circle'
        }
      },
      {
        value: 'check-circle',
        iconInfo: {
          value: 'check-circle'
        }
      },
      {
        value: 'close-circle',
        iconInfo: {
          value: 'close-circle'
        }
      },
      {
        value: 'add',
        iconInfo: {
          value: 'add'
        }
      },
      {
        value: 'subtract',
        iconInfo: {
          value: 'subtract'
        }
      },
      {
        value: 'check',
        iconInfo: {
          value: 'check'
        }
      },
      {
        value: 'close',
        iconInfo: {
          value: 'close'
        }
      },
      {
        value: 'clock',
        iconInfo: {
          value: 'clock'
        }
      },
      {
        value: 'credit-card',
        iconInfo: {
          value: 'credit-card'
        }
      },
      {
        value: 'download-cloud',
        iconInfo: {
          value: 'download-cloud'
        }
      },
      {
        value: 'download',
        iconInfo: {
          value: 'download'
        }
      },
      {
        value: 'equalizer',
        iconInfo: {
          value: 'equalizer'
        }
      },
      {
        value: 'external-link',
        iconInfo: {
          value: 'external-link'
        }
      },
      {
        value: 'eye',
        iconInfo: {
          value: 'eye'
        }
      },
      {
        value: 'filter',
        iconInfo: {
          value: 'filter'
        }
      },
      {
        value: 'folder',
        iconInfo: {
          value: 'folder'
        }
      },
      {
        value: 'heart',
        iconInfo: {
          value: 'heart'
        }
      },
      {
        value: 'heart-2',
        iconInfo: {
          value: 'heart-2'
        }
      },
      {
        value: 'star',
        iconInfo: {
          value: 'star'
        }
      },
      {
        value: 'star-2',
        iconInfo: {
          value: 'star-2'
        }
      },
      {
        value: 'help',
        iconInfo: {
          value: 'help'
        }
      },
      {
        value: 'alert-circle',
        iconInfo: {
          value: 'alert-circle'
        }
      },
      {
        value: 'home',
        iconInfo: {
          value: 'home'
        }
      },
      {
        value: 'iphone-x',
        iconInfo: {
          value: 'iphone-x'
        }
      },
      {
        value: 'iphone',
        iconInfo: {
          value: 'iphone'
        }
      },
      {
        value: 'lightning-bolt',
        iconInfo: {
          value: 'lightning-bolt'
        }
      },
      {
        value: 'link',
        iconInfo: {
          value: 'link'
        }
      },
      {
        value: 'list',
        iconInfo: {
          value: 'list'
        }
      },
      {
        value: 'lock',
        iconInfo: {
          value: 'lock'
        }
      },
      {
        value: 'mail',
        iconInfo: {
          value: 'mail'
        }
      },
      {
        value: 'map-pin',
        iconInfo: {
          value: 'map-pin'
        }
      },
      {
        value: 'menu',
        iconInfo: {
          value: 'menu'
        }
      },
      {
        value: 'message',
        iconInfo: {
          value: 'message'
        }
      },
      {
        value: 'money',
        iconInfo: {
          value: 'money'
        }
      },
      {
        value: 'numbered-list',
        iconInfo: {
          value: 'numbered-list'
        }
      },
      {
        value: 'phone',
        iconInfo: {
          value: 'phone'
        }
      },
      {
        value: 'search',
        iconInfo: {
          value: 'search'
        }
      },
      {
        value: 'settings',
        iconInfo: {
          value: 'settings'
        }
      },
      {
        value: 'share-2',
        iconInfo: {
          value: 'share-2'
        }
      },
      {
        value: 'share',
        iconInfo: {
          value: 'share'
        }
      },
      {
        value: 'shopping-bag-2',
        iconInfo: {
          value: 'shopping-bag-2'
        }
      },
      {
        value: 'shopping-bag',
        iconInfo: {
          value: 'shopping-bag'
        }
      },
      {
        value: 'shopping-cart',
        iconInfo: {
          value: 'shopping-cart'
        }
      },
      {
        value: 'streaming',
        iconInfo: {
          value: 'streaming'
        }
      },
      {
        value: 'tag',
        iconInfo: {
          value: 'tag'
        }
      },
      {
        value: 'tags',
        iconInfo: {
          value: 'tags'
        }
      },
      {
        value: 'trash',
        iconInfo: {
          value: 'trash'
        }
      },
      {
        value: 'upload',
        iconInfo: {
          value: 'upload'
        }
      },
      {
        value: 'user',
        iconInfo: {
          value: 'user'
        }
      },
      {
        value: 'loading',
        iconInfo: {
          value: 'loading'
        }
      },
      {
        value: 'loading-2',
        iconInfo: {
          value: 'loading-2'
        }
      },
      {
        value: 'loading-3',
        iconInfo: {
          value: 'loading-3'
        }
      },
      {
        value: 'file-audio',
        iconInfo: {
          value: 'file-audio'
        }
      },
      {
        value: 'file-code',
        iconInfo: {
          value: 'file-code'
        }
      },
      {
        value: 'file-generic',
        iconInfo: {
          value: 'file-generic'
        }
      },
      {
        value: 'file-jpg',
        iconInfo: {
          value: 'file-jpg'
        }
      },
      {
        value: 'file-new',
        iconInfo: {
          value: 'file-new'
        }
      },
      {
        value: 'file-png',
        iconInfo: {
          value: 'file-png'
        }
      },
      {
        value: 'file-svg',
        iconInfo: {
          value: 'file-svg'
        }
      },
      {
        value: 'file-video',
        iconInfo: {
          value: 'file-video'
        }
      },
      {
        value: 'align-center',
        iconInfo: {
          value: 'align-center'
        }
      },
      {
        value: 'align-left',
        iconInfo: {
          value: 'align-left'
        }
      },
      {
        value: 'align-right',
        iconInfo: {
          value: 'align-right'
        }
      },
      {
        value: 'edit',
        iconInfo: {
          value: 'edit'
        }
      },
      {
        value: 'font-color',
        iconInfo: {
          value: 'font-color'
        }
      },
      {
        value: 'text-italic',
        iconInfo: {
          value: 'text-italic'
        }
      },
      {
        value: 'text-strikethrough',
        iconInfo: {
          value: 'text-strikethrough'
        }
      },
      {
        value: 'text-underline',
        iconInfo: {
          value: 'text-underline'
        }
      },
      {
        value: 'arrow-up',
        iconInfo: {
          value: 'arrow-up'
        }
      },
      {
        value: 'arrow-down',
        iconInfo: {
          value: 'arrow-down'
        }
      },
      {
        value: 'arrow-left',
        iconInfo: {
          value: 'arrow-left'
        }
      },
      {
        value: 'arrow-right',
        iconInfo: {
          value: 'arrow-right'
        }
      },
      {
        value: 'chevron-up',
        iconInfo: {
          value: 'chevron-up'
        }
      },
      {
        value: 'chevron-down',
        iconInfo: {
          value: 'chevron-down'
        }
      },
      {
        value: 'chevron-left',
        iconInfo: {
          value: 'chevron-left'
        }
      },
      {
        value: 'chevron-right',
        iconInfo: {
          value: 'chevron-right'
        }
      },
      {
        value: 'play',
        iconInfo: {
          value: 'play'
        }
      },
      {
        value: 'pause',
        iconInfo: {
          value: 'pause'
        }
      },
      {
        value: 'stop',
        iconInfo: {
          value: 'stop'
        }
      },
      {
        value: 'prev',
        iconInfo: {
          value: 'prev'
        }
      },
      {
        value: 'next',
        iconInfo: {
          value: 'next'
        }
      },
      {
        value: 'reload',
        iconInfo: {
          value: 'reload'
        }
      },
      {
        value: 'repeat-play',
        iconInfo: {
          value: 'repeat-play'
        }
      },
      {
        value: 'shuffle-play',
        iconInfo: {
          value: 'shuffle-play'
        }
      },
      {
        value: 'playlist',
        iconInfo: {
          value: 'playlist'
        }
      },
      {
        value: 'sound',
        iconInfo: {
          value: 'sound'
        }
      },
      {
        value: 'volume-off',
        iconInfo: {
          value: 'volume-off'
        }
      },
      {
        value: 'volume-minus',
        iconInfo: {
          value: 'volume-minus'
        }
      },
      {
        value: 'volume-plus',
        iconInfo: {
          value: 'volume-plus'
        }
      },
      {
        value: 'camera',
        iconInfo: {
          value: 'camera'
        }
      },
      {
        value: 'image',
        iconInfo: {
          value: 'image'
        }
      },
      {
        value: 'video',
        iconInfo: {
          value: 'video'
        }
      },
      {
        value: 'sketch',
        iconInfo: {
          value: 'sketch'
        }
      }
    ]
  }
  goToAbout() {
    Taro.navigateTo({
      url: '/pages/about/index'
    })
  }
  render() {
    return (
      <View className="me">
        <View className="header"></View>
        <View className="profile">
          <View className="at-row at-row__align--center">
            <View className="at-col at-col-3 at-col--auto">
              <AtAvatar circle openData={{ type: 'userAvatarUrl' }}></AtAvatar>
            </View>
            <View className="at-col">
              <OpenData type="userNickName" />
            </View>
          </View>
        </View>
        <View className="card">
          <AtGrid mode="square" columnNum={4} data={this.state.icons} />
        </View>
        <AtList>
          <AtListItem
            title="关于本小程序"
            arrow="right"
            onClick={this.goToAbout}
            iconInfo={{ size: 25, color: '#8b2708;', value: 'alert-circle' }}
          />
        </AtList>
      </View>
    )
  }
}
