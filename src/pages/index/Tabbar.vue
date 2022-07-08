
<template>

  <u-tabbar :value="value6" @change="handleClick" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
    <u-tabbar-item text="首页" icon="home" name="home"></u-tabbar-item>
    <u-tabbar-item text="组件库" icon="photo" name="com"></u-tabbar-item>
    <u-tabbar-item text="图表" name="chart" icon="play-right"></u-tabbar-item>
    <u-tabbar-item text="我的" name="me" icon="account"></u-tabbar-item>
  </u-tabbar>

</template>
<script>
export default {
  data() {
    return {
      value6: 0
    }
  },
  methods: {
    handleClick(name) {
      switch (name) {
        case 'chart':
          uni.navigateTo({
            url: '/pages/chart/index'
          })
          break;
        case 'com':
          uni.navigateTo({
            url: '/pages/function/index',
          })
          break;
        case 'me':
          uni.navigateTo({
            url: '/pages/my/index'
          })
          break;
        default:
      }


    }
  }
}
</script>
<style>
</style>
