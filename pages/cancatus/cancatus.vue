<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
		</uni-nav-bar> 
		<!-- 关于我们 -->
		<view class="aboutUs">
			<view class="alTitleBox">
				常见问题
			</view>
			<view class="seeIofoBox">
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						如何开店
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						什么是直推
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						积分怎么获得，怎么用
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						到店自提怎么操作
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				
			</view>
			<view class="alTitleBox mt20">
				联系我们
			</view>
			<view class="seeIofoBox">
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						服务热线
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txtN">
							028-8888666
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						客服微信
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txtN">
							yhl251510
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						客服QQ
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txtN">
							1185788478
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						关于我们
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				
			</view>
		</view>
		<!-- 退出 -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
				title: '联系我们',
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
	.alTitleBox {
		width: 100%;
		padding: 30rpx 0;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.mt20{
		margin-top: 20rpx;
	}
	.seeIofoBox {
		width: 100%;
	}
	.seeIofoBoxItem {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.seeIofoBoxItemL {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.seeIofoBoxItemR {
		display: flex;
		align-items: center;
	}
	.seeIofoBoxItemR_txt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		margin-right: 8rpx;
	}
	.seeIofoBoxItemR_txtN {
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 400;
		color: #999999;
	}
	.seeIofoBoxItemR_icon {
		color: #E2E2E2;
		font-size: 22rpx;
	}
	.seeIofoBoxItemR_Img {
		width: 56rpx;
		height: 56rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.seeIofoBoxItemR_Img image {
		width: 100%;
		height: 100%;
		margin-right: 8rpx;
	}
	/* 关于我们 */
	.aboutUs{
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	/* 退出 */
	.signoutBtn{
		width: 100%;
		height: 90rpx;
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.signoutBtns{
		width: 100%;
		height: 90rpx;
		background: #EEEEEE;
		border-radius: 46rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #E94545;
	}
</style>
