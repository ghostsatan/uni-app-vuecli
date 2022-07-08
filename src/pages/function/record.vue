<template>
  <view class="content">
    <button @click="voiceBegain">语音识别</button>
    <view>
      这是语音识别的内容：{{ words }}
    </view>
  </view>
</template>

<script>
import Voice from '../../components/QS-baiduyy/QS-baiduyy.js';
export default {
  data() {
    return {
      words: '',
    }
  },
  onLoad() {

  },
  methods: {
    // 调用语音识别
    voiceBegain() {
      // #ifdef APP-PLUS  
      let _this = this;
      let options = {};
      options.engine = 'baidu'
      options.punctuation = false; // 是否需要标点符号 
      options.timeout = 10 * 1000;//超时时间
      plus.speech.startRecognize(options,
        (res) => {
          uni.showToast({
            icon: "none",
            title: `语音识别成功${res}`
          });
          this.$nextTick(() => {
            this.words = res;
            Voice(res);
          })

        }, (e) => {
          console.log(e);
          uni.showToast({
            icon: "none",
            title: "语音识别失败"
          });
        }
      );
      // #endif  
    },
  }
}
</script>

<style>
</style>
