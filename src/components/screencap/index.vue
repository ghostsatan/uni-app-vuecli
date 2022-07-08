<template>
  <view>

  </view>
</template>

<script>
import RecordRTC from 'recordrtc';
export default {
  data() {
    return {
      videoStart: false,
      recorder: null,
    }
  },
  props: {
    fileName: {
      type: String,
      default: new Date().getTime()
    }
  },
  onLoad() {

  },
  methods: {

    /**
     * 开始录制
     */
    startRecording(callback) {
      this.captureScreen((screenStream) => {
        this.addStreamStopListener(screenStream, () => {
          console.log("流停止监听");
          this.$emit("streamStop", {})
          // this.stopRecording();
        });
        var options = {
          type: 'video',
          mimeType: 'video/webm',
          disableLogs: false,
          getNativeBlob: false, // enable it for longer recordings
          ignoreMutedMedia: false
        };
        // this.video.srcObject = screenStream;
        this.recorder = RecordRTC(screenStream, options);
        this.recorder.startRecording();
        this.recorder.screen = screenStream;
        this.videoStart = true;
        callback(true);
      });
    },
    /**
     * 停止录制
     */
    stopRecording(callback) {
      this.recorder.stopRecording(() => {
        // this.video.src = this.video.srcObject = null;
        // this.video.src = URL.createObjectURL(this.recorder.getBlob());
        const url = URL.createObjectURL(this.recorder.getBlob());
        const a = document.createElement("a");
        let videoFile = new File([this.recorder.getBlob()], this.fileName + ".mp4", {
          type: 'video/mp4'
        })
        let downloadUrl = URL.createObjectURL(videoFile);
        document.body.appendChild(a);
        a.style.display = "none";
        a.href = url;
        a.download = this.fileName + ".mp4";
        a.click();
        this.recorder.screen.stop();
        this.recorder.destroy();
        this.recorder = null;
        this.videoStart = false;
        callback(false);
      });
    },
    //初始化
    captureScreen(callback) {
      if (navigator.getDisplayMedia) {
        //录制结束,文件下载
        navigator.getDisplayMedia({
          video: true
        }).then(screenStream => {
          navigator.mediaDevices.getUserMedia({ audio: true }).then((mic) => {
            screenStream.addTrack(mic.getTracks()[0]);
            callback(screenStream);
          });
        }).catch(function (error) {
          console.log('error', error);
        });
      } else if (navigator.mediaDevices.getDisplayMedia) {
        navigator.mediaDevices.getDisplayMedia({
          video: true
        }).then(screenStream => {
          navigator.mediaDevices.getUserMedia({ audio: true }).then((mic) => {
            screenStream.addTrack(mic.getTracks()[0]);
            callback(screenStream);
          });
        }).catch(function (error) {
          console.log('error', error);
        });
      } else {
        var error = 'getDisplayMedia API are not supported in this browser.';
        console.log('error', error);
        alert(error);
      }
    },

    //流监听
    addStreamStopListener(stream, callback) {
      stream.addEventListener('ended', function () {
        callback();
        callback = function () { };
      }, false);
      stream.addEventListener('inactive', function () {
        callback();
        callback = function () { };
      }, false);
      stream.getTracks().forEach(function (track) {
        track.addEventListener('ended', function () {
          callback();
          callback = function () { };
        }, false);
        track.addEventListener('inactive', function () {
          callback();
          callback = function () { };
        }, false);
      });
    },

  }
}
</script>

<style>
</style>