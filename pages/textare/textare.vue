<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		
		<!-- 文本 -->
		<view class="texearBox">
			123
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
				title:'奖金规则',
			}
		},
		methods: {
			// 返回
			goBack(){
				uni.navigateBack()
			},
		}
	}
</script>

<style>
page{
		background-color: #f5f5f5;
	}
/* 顶部导航 */
 .uni-navbar__content_view{
	background-color: #fff;
}
	.toptabbarBox {
		position: fixed;
		top: 0;
		left: 0;
		height: 88rpx;
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
		z-index: 999;
	}
	.gobackBtn {
		color: #333333;
		font-size: 36rpx;
	}
	.orderTitle {
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
/* 文本 */
.texearBox{
	padding: 30rpx;
	box-sizing: border-box;
	font-size: 22rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
</style>
