<template>
  <view class="record-layer">
    <u-button type="primary" shape="circle" text="开启录屏" @click="startCap"></u-button>
    <screen-recording ref="screen-recording" @streamStop="streamStop" :fileName="fileName"></screen-recording>
  </view>
</template>
<script>
import screenRecording from '../../components/screencap/index';
export default {
  components: {
    screenRecording
  },
  data() {
    return {
      start: "",
      fileName: [],

    }
  },
  methods: {
    //开启录屏
    startCap() {
      //开始录制
      this.$refs['screen-recording'].startRecording((start) => {
        this.start = start;
      });
    },
    endCap() {
      this.fileName = `${this.mNm}-录屏-${this.$util.dateFormat(new Date())}`;
      this.$refs['screen-recording'].stopRecording((start) => {
        this.start = start;
      });
    },
    //流停止监听
    streamStop() {
      if (this.start) {
        this.fileName = `${this.mNm}-录屏-${this.$util.dateFormat(new Date())}`;
        this.$refs['screen-recording'].stopRecording((start) => {
          this.start = start;
        });
      }
    },


  }
}
</script>

<style lang="scss">
.record-layer {
  display: flex;
  align-items: center;


}
</style>