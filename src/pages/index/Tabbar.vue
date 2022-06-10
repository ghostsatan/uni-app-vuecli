
<template>

  <u-tabbar :value="value6"
            @change="name => value6 = name"
            :fixed="true"
            :placeholder="true"
            :safeAreaInsetBottom="true">
    <u-tabbar-item text="首页"
                   icon="home"></u-tabbar-item>
    <u-tabbar-item text="组件库"
                   icon="photo"></u-tabbar-item>
    <u-tabbar-item text="图表" @click="handleClick"
                   icon="play-right"></u-tabbar-item>
    <u-tabbar-item text="我的"
                   icon="account"></u-tabbar-item>
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
    handleClick() {
       uni.navigateTo({
        url: '/pages/chart/index'
      })
    }
    
  },
}
</script>
<style>
</style>
