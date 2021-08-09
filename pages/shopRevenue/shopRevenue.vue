<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 积分列表 -->
		<view class="integralListBox">
			<view class="integralListItem">
				<view class="integralListItemL">
					<view class="integralListItemLName">
						6月店铺总收益
					</view>
					<view class="integralListItemLDay">
						2021.07.10  15:02:01
					</view>
				</view>
				<view class="integralListItemR">
					+541.20
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'开店收益',
				status_bar:true
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
page {
		background-color: #f5f5f5;
	}

	/* 顶部导航 */
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
	/* 积分列表 */
	.integralListBox{
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.integralListItem{
		width: 100%;
		height: 120rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		border-radius: 8rpx;
	}
	.integralListItemLName{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		width: 480rpx;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
		margin-bottom: 12rpx;
	}
	.integralListItemLDay{
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 500;
		color: #999999;
	}
	.integralListItemR{
		font-size: 32rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}



</style>
