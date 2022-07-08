<template>
  <view class="content">

    <tabbar></tabbar>
  </view>
</template>

<script>
import Tabbar from './Tabbar'
// import request from '@/common/request.js'
export default {
  components: {
    Tabbar
  },
  data() {
    return {
      title: 'Hello'
    }
  },
  onLoad() {
    this.getData()
  },
  methods: {
    getData() {
      // let opts = {
      //   url: 'json/newsList.json',
      //   method: 'get'
      // },
      this.$axios.get('json/newsList.json').then(res => {
        console.log(2222,res)
        if (res.status === 200) {
          uni.showToast({ title: '接口请求成功！', icon: 'none' })
        }
      })
      // this.$axios({
      //   methods: 'get',
      //   url: '/xxx',
      //   params: queryParam
      // })
      //   .then(res => {
      //     console.log(res)
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // request.httpRequest(opts).then(res => {
      //   console.log(res)
      //   uni.hideLoading()
      //   if (res.statusCode == 200) {
      //     this.getData = res.data.data[this.newsId]
      //     console.log(this.getData)
      //   } else {
      //     console.log('数据请求错误～')
      //   }
      // })
    }
  }
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin: 200rpx auto 50rpx auto;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
