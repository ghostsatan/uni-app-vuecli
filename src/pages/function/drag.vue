
<template>
	<view>
		<drag style="display: flex; justify-content: center;" :controlsList="controlsList" :containerSize="{width: '200px', height: '100vh'}" :controlsSize="{width: 200, height: 40}" >
    <div>fdklsajfklsajfkl</div>
    </drag>
	</view>
</template>
 
<script>
import drag from '../../components/drag/index'
export default {
  components:{
    drag
  },
	data() {
		return {
			controlsList: ['#fc5531', '#1481f9', '#1ab519', '#32c0eb', '#e73e60', '#a663c2', '#b26801', '#1c2e6c', '#cdccc8'],
		}
	},
};
</script>
 
<style scoped lang="scss">
	
</style>
