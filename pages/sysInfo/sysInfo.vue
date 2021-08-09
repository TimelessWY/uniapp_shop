<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 系统消息列表 -->
		<view class="sysInfoList">
			<view class="sysInfoListItem">
				<view class="sysInfoListItemTitle">
					<view class="sysInfoListItemTitleL">
						6月店铺收益
					</view>
					<view class="sysInfoListItemTitleR">
						2021.07.10
					</view>
				</view>
				<view class="sysInfoListItemText">
					您好，您的店铺6月共赚509.20元，已发放至您的账户，
					请注意查收。如有疑问请拨打客服热线：028-22552125
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
				title: '系统消息',
			}
		},
		methods: {
			// 返回
			goBack() {
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

	/* 内容 */
	.sysInfoList{
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.sysInfoListItem{
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 8rpx;
	}
	.sysInfoListItem:not(:last-child){
		margin-bottom: 20rpx;
	}
	.sysInfoListItemTitle{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	.sysInfoListItemTitleL{
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.sysInfoListItemTitleR{
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 500;
		color: #999999;
	}
	.sysInfoListItemText{
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
</style>
