
<template>
  <view>
    <u--image :showLoading="true" :src="src" width="180px" height="180px" @click="save"></u--image>
    <image mode="widthFix" :src="src2" @click="preview"></image>
    <view style="position: absolute;top: -999999px;">
      <view>
        <canvas :style="{ 'width': w, 'height': h }" canvas-id="firstCanvas"></canvas>
      </view>

    </view>
  </view>
</template>
<script>

export default {

  data() {
    return {
      src: 'https://cdn.uviewui.com/uview/album/1.jpg',
      w: '',
      h: '',
      src2: ''
    }
  },
  onLoad() {
    let _self = this;
    console.log('个人中心页面加载了');

  },
  methods: {
    // save() {
    //   //这个方法是下载，相册里面看不到
    //   uni.downloadFile({
    //     url: 'https://cdn.uviewui.com/uview/album/1.jpg',
    //     success: (res) => {
    //       console.log(1111,res);
    //       if (res.statusCode === 200) {
    //         uni.saveImageToPhotosAlbum({
    //           filePath: res.tempFilePath,
    //           success: function () {
    //             uni.showToast({
    //               title: "保存成功",
    //               icon: "none"
    //             });
    //           },
    //           fail: function () {
    //             uni.showToast({
    //               title: "保存失败，请稍后重试",
    //               icon: "none"
    //             });
    //           }
    //         });
    //       }
    //     }
    //   })
    // },
    preview() {
      uni.previewImage({
        urls: [this.src],
        current: 0
      })
    },
    save() {
      // #ifdef APP-PLUS
      var that = this;
      uni.getImageInfo({
        src: this.src,
        success: function (image) {
          console.log('图片信息：', JSON.stringify(image));
          let ress = image;
          console.log("对比2", ress);
          that.w = ress.width / 3 + 'px';
          that.h = ress.height / 3 + 'px';
          let ctx = uni.createCanvasContext('firstCanvas');    /** 创建画布 */
          //将图片src放到cancas内，宽高为图片大小
          ctx.drawImage(ress.path, 0, 0, ress.width / 3, ress.height / 3)
          ctx.setFontSize(12)
          ctx.setFillStyle("rgba(255,255,255,0.3)");
          ctx.rotate(30 * Math.PI / 180);
          console.log('宽度', ress.width);
          let textToWidth = ress.width / 3 * 0.5;
          let textToHeight = ress.height / 3 * 0.3;
          ctx.fillText('我是防盗扣垃圾费克拉斯就付款水印', textToWidth, textToHeight);
          ctx.draw(false, () => {
            setTimeout(() => {
              console.log("asdf");
              uni.canvasToTempFilePath({
                canvasId: "firstCanvas",
                success: res => {
                  // 注意此时的地址是加了水印的图片地址（直接url输入浏览器也可以查看包含水印）
                  console.log(123, res.tempFilePath)
                  uni.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function () {
                      uni.showToast({
                        title: `图片保存成功，查看路径：${res.tempFilePath}`,
                        icon: 'none',
                        duration: 2200
                      });

                    }, fail: function () {
                      uni.showToast({
                        title: `图片保存失败`,
                        icon: 'none',
                        duration: 2200
                      });
                    },

                  })
                }
              });
              // 在自定义组件内 需要传递第二参数 this canvas才生效
              // }, this)
            }, 500)
          });

        }
      });
      // #endif
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
