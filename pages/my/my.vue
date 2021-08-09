<template>
	<view class="content">
		<!-- 顶部banner -->
		<view class="topBannerBox">
			<uni-nav-bar :backgroundColor="false" :status-bar="status_bar">
				<view @click="sysSet()" slot="left" class="setUpBox">
					<text class="seticon iconfont icon-shezhi"></text>
					<text class="settxt">设置</text>
				</view>
			</uni-nav-bar>

			<!-- 头像用户名 -->
			<view class="headBox">
				<view class="headImg">
					<image src="../../static/yjqt/ban1.png" mode=""></image>
				</view>
				<view class="headName">
					李七夜
				</view>
			</view>
			<view class="myInfoBox">
				<view @click="gomyintegral()" class="myInfo_child">
					<view class="myinfo_num">
						20
					</view>
					<view class="myinfo_txt">
						我的积分
					</view>
				</view>
				<view @click="goshopRevenue()" class="myInfo_child">
					<view class="myinfo_num">
						2251.00
					</view>
					<view class="myinfo_txt">
						开店收益
					</view>
				</view>
				<view @click="godirectBonts()" class="myInfo_child">
					<view class="myinfo_num">
						20
					</view>
					<view class="myinfo_txt">
						直推奖金
					</view>
				</view>

			</view>
		</view>
		<view class="contetbox">
			<!-- 我的订单 -->
			<view class="orderBox">
				<view class="orderTitle">
					我的订单
				</view>
				<view class="orderBtnbox">
					<view @click="dfkorder()" class="order_Item">
						<view class="itemicon iconfont icon-daizhifu"></view>
						<view class="itemTxt">
							待付款
						</view>
					</view>
					<view class="order_Item">
						<view class="itemicon iconfont icon-daifahuo"></view>
						<view class="itemTxt">
							待发货
						</view>
					</view>
					<view class="order_Item">
						<view class="itemicon iconfont icon-daishouhuo"></view>
						<view class="itemTxt">
							待收货
						</view>
					</view>
					<view class="order_Item">
						<view class="itemicon iconfont icon-quanbudingdan"></view>
						<view class="itemTxt">
							全部订单
						</view>
					</view>
				</view>
			</view>
			<!-- 开店赚钱 -->
			<view class="openShop">
				<view @click="goopenShop()" class="openchild openBg1">
					<view class="open_title">
						我要开店
					</view>
					<view class="open_cont">
						上传资质即可开店
					</view>
				</view>
				<view class="openchild openBg2">
					<view class="open_title">
						直推赚钱
					</view>
					<view @click="copyValue(yqm)" class="open_cont">
						我的邀请码{{yqm}}
					</view>
				</view>
			</view>
			<!-- 系统消息 -->
			<view class="systemInfoBox">
				<view @click="gosysInfo()" class="systemInfoItem">
					<view class="system_left">
						<view class="sysicon iconfont icon-xiaoxi1"></view>
						<view class="systxt">
							系统消息
						</view>
					</view>
					<view class="sysright">
						<view class="sysyd"></view>
						<view class="sysiconright iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view @click="golistaddress()" class="systemInfoItem">
					<view class="system_left">
						<view class="sysicon iconfont icon-dizhi"></view>
						<view class="systxt">
							收货地址
						</view>
					</view>
					<view class="sysright">
						<view class="sysiconright iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view @click="gocancatus()" class="systemInfoItem">
					<view class="system_left">
						<view class="sysicon iconfont icon-kefu"></view>
						<view class="systxt">
							联系我们
						</view>
					</view>
					<view class="sysright">
						<view class="sysiconright iconfont icon-fanhui-copy"></view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view-tabbar :current="4"></view-tabbar>
		</view>
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components: {
			'view-tabbar': Tabbar
		},
		data() {
			return {
				yqm: '2501EP',
				status_bar: true
			}

		},
		onLoad() {
			this.getTokenL()
		},
		onShow() {
			uni.hideTabBar({
				animation: false
			})
		},
		methods: {
			// 获取本地缓存token
			getTokenL() {
				console.log('获取token')
				uni.getStorage({
					key: 'uerInfo',
					success: function(res) {
						console.log(res.data.userinfo.token);
						
					}
				});

			},
			dfkorder() {
				uni.navigateTo({
					url: '/pages/myorder/myorder'
				})
			},
			// 直推奖金
			godirectBonts() {
				uni.navigateTo({
					url: '/pages/directBonts/directBonts'
				})
			},
			// 系统设置
			sysSet() {
				uni.navigateTo({
					url: '/pages/systemSet/systemSet'
				})
			},
			// 我的积分
			gomyintegral() {
				uni.navigateTo({
					url: '/pages/myintegral/myintegral'
				})
			},
			// 开店收益
			goshopRevenue() {
				uni.navigateTo({
					url: '/pages/shopRevenue/shopRevenue'
				})
			},
			// 我要开店
			goopenShop() {
				uni.navigateTo({
					url: '/pages/openShop/openShop'
				})
			},
			// 系统消息
			gosysInfo() {
				uni.navigateTo({
					url: '/pages/sysInfo/sysInfo'
				})
			},
			// 收货地址
			golistaddress() {
				uni.navigateTo({
					url: '/pages/listaddress/listaddress'
				})
			},
			// 联系我们
			gocancatus() {
				uni.navigateTo({
					url: '/pages/cancatus/cancatus'
				})
			},
			// 邀请码
			copyValue(value) {
				uni.setClipboardData({
					data: value,
					success: function() {
						uni.showToast({
							title: "复制成功"
						})
					},
					fail: function() {
						uni.showToast({
							title: "复制失败"
						})
					}
				});
			},
		}
	}
</script>

<style>
	/* 顶部banner */
	.topBannerBox {
		width: 100%;
		padding-bottom: 30rpx;
		box-sizing: border-box;
		height: 470rpx;
		background-image: url('/static/yjqt/bgImg.jpg');
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.setUpBox {
		width: 100%;
		height: 88rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.seticon {
		color: #000000;
		font-size: 32rpx;
		margin-right: 4rpx;
	}

	.settxt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.headBox {
		width: 100%;
		padding: 30rpx 0;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.headImg {
		width: 100rpx;
		height: 100rpx;
		border-radius: 50%;
		overflow: hidden;
		margin-bottom: 20rpx;
	}

	.headImg image {
		width: 100%;
		height: 100%;
	}

	.headTxt {

		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		text-align: center;
	}

	.myInfoBox {
		width: 100%;
		height: 66rpx;
		display: flex;
		justify-content: space-between;
	}

	.myInfo_child {
		width: 33.3%;
		height: 66rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.myInfo_child:not(:last-child) {
		border-right: 2rpx solid #E2E2E2;
	}

	.myinfo_num {
		font-size: 32rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.myinfo_txt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	/* 内容 */
	.contetbox {
		background-color: #f5f5f5;
		padding: 24rpx 30rpx;
		box-sizing: border-box;
	}

	/* 我的订单 */

	.orderBox {
		width: 100%;
		padding: 26rpx 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 8rpx;
		margin-bottom: 20rpx;
	}

	.orderTitle {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		margin-bottom: 24rpx;
	}

	.orderBtnbox {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.order_Item {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.itemicon {
		font-size: 44rpx;
		color: #000000;
		margin-bottom: 12rpx;
	}

	.itemTxt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}

	/* 开店赚钱 */
	.openShop {
		width: 100%;
		height: 150rpx;
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;

	}

	.openchild {
		width: 336rpx;
		height: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		border-radius: 16rpx;
		background-size: cover;
		background-repeat: no-repeat;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.openBg1 {
		background-image: url('/static/yjqt/open_1.jpg');
	}

	.openBg2 {
		background-image: url('/static/yjqt/open_2.jpg');
	}

	.open_title {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.open_cont {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}

	/* 系统消息 */
	.systemInfoBox {
		width: 100%;
		background-color: #fff;
		border-radius: 8rpx;
	}

	.systemInfoItem {
		width: 100%;
		height: 100rpx;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.system_left {
		display: flex;
		align-items: center;
	}

	.sysicon {
		font-size: 40rpx;
		color: #5DB737;
	}

	.systxt {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-left: 18rpx;
	}

	.sysright {
		display: flex;
		align-items: center;
	}

	.sysyd {
		width: 16rpx;
		height: 16rpx;
		background: #E94545;
		border-radius: 50%;
	}

	.sysiconright {
		font-size: 22rpx;
		color: #E2E2E2;
	}
</style>
