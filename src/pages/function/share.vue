<template>
  <view>
    <button type="default" @click="uniShare">显示</button>
    <button class="renzheng" v-on:click="fenxiang" open-type="share">转发邀请</button>
  </view>

</template>
<script>
import UniShare from '../../uni_modules/uni-share/js_sdk/uni-share';
const uniShare = new UniShare();
export default {
  onBackPress({ from }) {
    console.log(from);
    if (from == 'backbutton') {
      this.$nextTick(function () {
        uniShare.hide()
      })
      return uniShare.isShow;
    }
  },
  methods: {
    uniShare() {
      uniShare.show({
        content: { //公共的分享参数配置  类型（type）、链接（herf）、标题（title）、summary（描述）、imageUrl（缩略图）
          type: 0,
          href: 'https://uniapp.dcloud.io/',
          title: '标题',
          summary: '描述',
          imageUrl: 'https://img-cdn-aliyun.dcloud.net.cn/stream/icon/__UNI__HelloUniApp.png'
        },
        menus: [{
          "img": "../../static/logo.png",
          "text": "微信好友",
          "share": { //当前项的分享参数配置。可覆盖公共的配置如下：分享到微信小程序，配置了type=5
            "provider": "weixin",
            "scene": "WXSceneSession"
          }
        },
        {
          "img": "../../static/logo.png",
          "text": "微信朋友圈",
          "share": {
            "provider": "weixin",
            "scene": "WXSceneTimeline"
          }
        },
        {
          "img": "../../static/logo.png",
          "text": "微信小程序",
          "share": {
            provider: "weixin",
            scene: "WXSceneSession",
            type: 5,
            miniProgram: {
              id: '123',
              path: '/pages/list/detail',
              webUrl: '/#/pages/list/detail',
              type: 0
            },
          }
        },

        ],
        cancelText: "取消分享",
      }, e => { //callback
        console.log(uniShare.isShow);
        console.log(e);
      })
    },
    fenxiang() {
      uni.share({
        provider: "weixin",
        title: "uniapp",
        scene: "WXSceneSession",
        type: 1,
        summary: "我正在使用HBuilderX开发uni-app，赶紧跟我一起来体验！",
        success: function (res) {
          console.log("success:" + JSON.stringify(res));
        },
        fail: function (err) {
          console.log("fail:" + JSON.stringify(err));
        }
      })

    }
  }
}
</script>