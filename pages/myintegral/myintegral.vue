<template>
	<view>
		<!-- 顶部tabbar -->
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 积分列表 -->
		<view class="integralListBox">
			<view @click="goorderDetils()" class="integralListItem">
				<view class="integralListItemL">
					<view class="integralListItemLName">
						完成订单“新鲜猕猴桃大果5斤1箱桃大果5斤1箱桃大果5斤1箱桃大果5斤1箱"
					</view>
					<view class="integralListItemLDay">
						2021.07.10 15:02:01
					</view>
				</view>
				<view class="integralListItemR">
					+99
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			title:'我的积分',
			status_bar:true,
			}
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack()
			},
			// 积分获取详情
			goorderDetils() {
				uni.navigateTo({
					url: '/pages/orderDetils/orderDetils'
				})
			}
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
	.integralListBox {
		width: 100%;
		padding: 30rpx;
		
		box-sizing: border-box;
	}

	.integralListItem {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		border-radius: 8rpx;
	}

	.integralListItemLName {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		width: 480rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
		margin-bottom: 12rpx;
	}

	.integralListItemLDay {
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 500;
		color: #999999;
	}

	.integralListItemR {
		font-size: 32rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}
</style>
