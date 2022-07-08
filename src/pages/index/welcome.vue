<template>
  <view class="ydarea" :style="bgStyle">
    <view class="tg" @tap="goindex">跳过</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      qdimg: '../../static/images/1.png'
    };
  },

  computed: { //处理
    bgStyle: function () {
      return 'background-image:url(' + this.qdimg + ')'
    }
  },

  onShow: function () {
    console.info('Index--111---重新显示首页onSHOW, ------');
    var first = uni.getStorageSync('first');
    if (first) {
      console.info('直接跳转到home首页');
      uni.switchTab({
        url: '/pages/login/index'
      });
    } else {
      //uni.hideLoading();
      uni.setStorage({
        key: 'first',//首次登录
        data: 1,
        success: function () {
          console.log('首次登录缓存success');
        }
      });

      console.info('查询启动页面');
      let url = 启动页获取远程地址;
      uni.request({
        url: url,
        dataType: 'json',
        data: {},
        success: (result) => {
          console.info('获取启动页图片');
          console.info(result);
          var data = result.data.data;
          console.info('img:' + data.qdimg);
          this.qdimg = data.qdimg;
          var timeoutID = setTimeout(function () {
            console.info('关闭当前页面, 跳转到首页－－－－－');
            uni.switchTab({
              url: '/pages/login/index'
            });
          }, 5000);
          this.timeoutID = timeoutID;
        }
      });
    }
  },

  onLoad() {
    console.info('onload---------------------');
    console.info('URL==' + this.websiteUrl);
  },
  methods: {
    goindex() {
      //去掉setTimeout
      clearTimeout(this.timeoutID);
      console.info('取消定时器');
      console.info('启动页跳过到首页----');
      uni.navigateTo({
        url: '/pages/Login/index'
      })
    }
  }
}
</script>

<style lang="scss">
.ydarea {
  width: 750upx;
  height: 100%;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10000;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.tg {
  background: #666;
  color: #fff;
  padding: 4px 15px;
  position: fixed;
  right: 30upx;
  top: 30px;
  z-index: 10001;
  border-radius: 15px;
}
</style>
