
<template>
  <view>
    <u-swipe-action>
      <u-swipe-action-item :options="options1">
        <view class="swipe-action u-border-top u-border-bottom">
          <view class="swipe-action__content">
            <text class="swipe-action__content__text">基础使用</text>
          </view>
        </view>
      </u-swipe-action-item>
    </u-swipe-action>
    <u-button type="primary" shape="circle" text="上传图片" @click="chooseImage"></u-button>
    <image :src="imgShow"></image>
    <u--image :showLoading="true" src="../../static/logo.png" width="80px" height="80px"></u--image>
    <map  :latitude="latitude" :longitude="longitude" scale="6" :markers="markers" style="width:750rpx;height:50vh" />




  </view>
</template>
<script>
// import QQMapWX from "@/common/qqmap-wx-jssdk";
import amap from '../../common/amap-wx.js';
export default {

  data() {
    let _this = this;
    return {
      imgShow: "",
      latitude: "",
      longitude: "",
      markers: [
        {
          latitude: '',
          longitude: '',
          iconPath: '../../static/logo.png',
        }
      ],

      options1: [{
        text: '删除'
      }]
    }
  },
  onLoad() {
    this.$nextTick(() => {
      this.getLocation();
    });
    // this.getLocation();
  },
  methods: {
    getLocation() {

      let _this = this;
      uni.getLocation({
        type: 'wgs84',
        success: function (res) {
          // console.log(1111, res);
          _this.longitude = res.longitude;
          _this.latitude = res.latitude;

          _this.markers[0].longitude = res.longitude;
          _this.markers[0].latitude = res.latitude;
          console.log(2222, _this.markers);
          // _this.$set(_this.markers[0], "iconPath", "static/images/location.png");
          // this.$forceUpdate();
          let myAmapFun = new amap.AMapWX({ key: '0ac92fa7d5fe9244fa0139b16a3a2c21' });
          myAmapFun.getRegeo({
            success: (data) => {
              console.log(5555, data);
            },
            fail: function (info) {
              console.log(info)
            }
          })
          uni.showToast({ title: `当前位置是：${res.longitude},${res.latitude}`, icon: 'none' });

        },
        fail: function (res) {
          uni.showToast({ title: '获取位置失败', icon: 'none' })
        }
      });
    },
    // getLocation() {
    //   return new Promise((resolve, reject) => {
    //     var myAmapFun = new amap.AMapWX({ key: '0ac92fa7d5fe9244fa0139b16a3a2c21' });
    //     myAmapFun.getRegeo({
    //       // location: '' + data.markers.longitude + ',' + data.markers.latitude,
    //       success: (data) => {
    //         console.log(data);
    //       },
    //       fail: function (info) {
    //         console.log(info)
    //       }
    //     })
    //   });

    // },
    //调用摄像头
    chooseImage() {
      var _this = this
      uni.chooseImage({
        count: 1, //默认9
        sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], //从相册选择、摄像头
        success: function (res) {
          _this.imgShow = res.tempFilePaths[0]
        }
      });
      // ass()
    },
  }
}
</script>
<style lang="scss">
.u-page {
  padding: 0;
}

.u-demo-block__title {
  padding: 10px 0 2px 15px;
}

.swipe-action {
  &__content {
    padding: 25rpx 0;

    &__text {
      font-size: 15px;
      color: $u-main-color;
      padding-left: 30rpx;
    }
  }
}
</style>
