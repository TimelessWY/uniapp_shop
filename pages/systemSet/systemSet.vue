<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 基本信息 -->
		<view class="seeIofo">
			<view class="alTitleBox">
				基本信息
			</view>
			<view class="seeIofoBox">
				<view @click="gomodePersonInfo()" class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						昵称
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txt">
							小米
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						头像
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_Img">
							<image src="/static/有机商城切图/商品图/蒙版组%208@2x.png" mode=""></image>
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view @click="gomodeMobile()" class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						手机号
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txtN">
							18380587806
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view @click="gomodePassword()" class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						密码
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txt">
							修改密码
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						邀请码
					</view>
					<view class="seeIofoBoxItemR">
						<view @click="copyValue(yqm)" class="seeIofoBoxItemR_txtN">
							{{yqm}}
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 关于我们 -->
		<view class="aboutUs">
			<view class="alTitleBox">
				关于我们
			</view>
			<view class="seeIofoBox">
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						版本更新
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_txt">
							已是最新版本
						</view>
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						隐私协议
					</view>
					<view class="seeIofoBoxItemR">
						<view class="seeIofoBoxItemR_icon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="seeIofoBoxItem">
					<view class="seeIofoBoxItemL">
						用户协议
					</view>
					<view class="seeIofoBoxItemR">
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
		<view class="signoutBtn">
			<view @click="removeLogin()" class="signoutBtns">
				注销登录
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations,mapState
	} from 'vuex';
	export default {
		data() {
			return {
				status_bar: true,
				yqm: '52021Xd',
				title: '系统设置'
			}
		},
		methods: {
			...mapMutations(['logout']),
			// 返回
			goBack() {
				uni.navigateBack()
			},
			// 修改手机号
			gomodeMobile() {
				uni.navigateTo({
					url: '/pages/modeMobile/modeMobile'
				})
			},
			// 修改信息
			gomodePersonInfo() {
				uni.navigateTo({
					url: '/pages/modePersonInfo/modePersonInfo'
				})
			},
			// 修改密码
			gomodePassword() {
				uni.navigateTo({
					url: '/pages/modePassword/modePassword'
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
			// 退出登录
			removeLogin() {
				this.$store.commit('logout')
				// uni.navigateTo({
				// 	url:"/pages/login/login"
				// })
				uni.showToast({
					title: "退出登录成功",
					icon: 'none'
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

	/* 基本信息 */
	.seeIofo {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.alTitleBox {
		width: 100%;
		padding: 30rpx 0;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
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
	.aboutUs {
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	/* 退出 */
	.signoutBtn {
		width: 100%;
		height: 90rpx;
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.signoutBtns {
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
