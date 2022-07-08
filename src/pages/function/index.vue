<template>
  <view class="u-page">
    <u-list @scrolltolower="scrolltolower">
      <u-list-item v-for="(item, index) in indexList" :key="index">
        <u-cell :title="`${item.name}`" @click="handleClick(item)">
        </u-cell>
      </u-list-item>
    </u-list>
  </view>
</template>

<script>
export default {
  data() {
    return {
      indexList: [
        {
          name: '地图定位以及访问摄像11头',
          url: '/pages/location/index'
        },
        {
          name: '图片存储到本地相册',
          url: '/pages/function/album'
        },
        {
          name: '语音交互',
          url: '/pages/function/record'
        },
        {
          name: '录屏',
          url: '/pages/function/screencap'
        },
        {
          name: '拖拽',
          url: '/pages/function/drag'
        },
        {
          name: 'SQLite',
          url: '/pages/function/sqlite'
        },
        {
          name: '分享',
          url: '/pages/function/share'
        },
        {
          name: '拍照添加水印',
          url: '/pages/function/photo'
        },
        {
          name: '测试',
          url: '/pages/function/test'
        },
      ],
    }
  },
  onLoad() {
    // this.loadmore()
  },
  methods: {
    scrolltolower() {
      // this.loadmore()
      console.log(123);
    },
    handleClick(item) {
      uni.navigateTo({
        url: item.url,
      })
    }

  },
}
</script>