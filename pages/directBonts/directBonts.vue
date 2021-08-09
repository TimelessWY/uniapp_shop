<template>
	<view>

		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
		</uni-nav-bar> 
		<!-- 奖金头部 -->
		<view class="directBox">
			<view class="topRightTxt">
				我的下级
			</view>
			<view @click="gotextare()" class="dirRule">
				<view class="dirIcon iconfont icon-wen"></view>
				<view class="dirTxt">
					奖金规则及提现规则
				</view>
			</view>
			<view class="directPrce">
				<view class="directPrceItem boRight">
					<view class="directPrceItem_price">
						<text class="font12">￥</text>20.00
					</view>
					<view class="directPrceItem_txt">
						当前奖金
					</view>
				</view>
				<view class="directPrceItem">
					<view class="directPrceItem_price">
						<text class="font12">￥</text>179.00
					</view>
					<view class="directPrceItem_txt">
						累计提现
					</view>
				</view>
			</view>
		</view>
		<!-- 奖金列表 -->
		<view class="integralListBox">
			<view class="integralListItem">
				<view class="integralListItemL">
					<view class="integralListItemLName">
						你的直推用户“大板鸭”完成订单
					</view>
					<view class="integralListItemLDay">
						2021.07.10 15:02:01
					</view>
				</view>
				<view class="integralListItemR">
					+5
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar: true,
				title: '直推奖金'
			}
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack()
			},
			// 查看规则
			gotextare() {
				uni.navigateTo({
					url: "/pages/textare/textare"
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

	.topRightTxt {
		font-size: 28rpx;
		width: 100%;
		text-align: right;
		padding: 0 30rpx;
		box-sizing: border-box;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	/* 直推奖金 */
	.directBox {
		box-sizing: border-box;
		width: 100%;
		background-color: #fff;

	}

	.dirRule {
		height: 60rpx;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0 24rpx;
		box-sizing: border-box;
	}

	.dirIcon {
		color: #999999;
		font-size: 24rpx;
	}

	.dirTxt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		padding: 0 20rpx;
	}

	.directPrce {
		width: 100%;
		height: 140rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.directPrceItem {
		width: 50%;
		height: 80rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.boRight {
		border-right: 2rpx solid #E2E2E2;
	}

	.directPrceItem_price {
		font-size: 36rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.directPrceItem_txt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.font12 {
		font-size: 12rpx;
	}

	/* 奖金列表 */
	.integralListBox {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.integralListItem {
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

	.integralListItemLName {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		width: 480rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
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
