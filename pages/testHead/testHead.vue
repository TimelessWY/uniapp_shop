<template>
	<view class="header-content" >
		<view :style="{height: stateBarHeight + 'px'}"></view>
		<view :style="{height: tabBarHeight + 'px'}" class="header-tabBar">
			<view :style="{height: searchHearch + 'px', width: windowWidth + 'px'}">
				<view class="header-search">
					<Icon 
					type="&#xe62e;" 
					size="20" 
					color="#FFFFFF" 
					class="header-search-icon"></Icon>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				stateBarHeight: 0,
				tabBarHeight: 50,
				searchHearch: 30,
				windowWidth: 0,
			};
		},
		created() {
			// 获取设备信息
			this.getStateBarHeight();
			
			
			// 获取小程序右侧悬浮按钮
			// #ifdef MP-WEIXIN
			this.getMenuButtonInfo();
			// #endif
		},
		methods: {
			getStateBarHeight() {
				let info = uni.getSystemInfoSync()
				console.log(info)
		        this.stateBarHeight = info.statusBarHeight
				this.windowWidth = info.windowWidth
			},
			getMenuButtonInfo() {
				 let menuButtonInfo = uni.getMenuButtonBoundingClientRect()
				 console.log(menuButtonInfo)
				 let paddingSize = menuButtonInfo.top - this.stateBarHeight
				 this.searchHearch = menuButtonInfo.height
			
						 
				 this.tabBarHeight = 
					 (menuButtonInfo.bottom- this.stateBarHeight) 
					 + paddingSize
					 
				 this.windowWidth = menuButtonInfo.left
			}
		}
	}
</script>

<style lang="scss">
	.header-content {
		background: $uni-color-error;
		.header-tabBar {
			width: 100%;
			display: flex;
			align-items: center;
			.header-search {
				margin: 0 10px;
				border: 1px solid #ffffff;
				border-radius: 30px;
				height: 100%;
				display: flex;
				align-items: center;
				.header-search-icon {
			        flex-shrink: 0;
					margin-left: 10px !important;
				}
			}
		}
		
	}

</style>
