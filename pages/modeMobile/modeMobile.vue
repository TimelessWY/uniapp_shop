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
		<!-- 验证码发送 -->
		<view v-if="isfut==1" class="mobileBox">
			<view class="mobiletes">
				<view class="mobiletesItem">
					<view class="mobiTitle">
						当前手机
					</view>
					<view class="mobiNum">
						18380587806
					</view>
				</view>
				<view class="mobiletesItem dipsb">
					<view class="mildispf">
						<view class="mobiTitle">
							验证码
						</view>
						<input type="text" v-model="yzm" value="" placeholder="请输入验证码" placeholder-class="placlas" />
					</view>
					<view v-if="showText==true" @click="getCode" class="getYzm">
						发送验证码
					</view>
					<view v-else @click="getCode" class="getYzms">
						{{second}}s重新发送
					</view>
				</view>
			</view>
			<view @click="firstgetCode()" class="btnthMobilBox">
				下一步
			</view>
		</view>
		<view v-if="isfut==2" class="mobileBox">
			<view class="mobiletes">
				<view class="mobiletesItem">
					<view class="mobiTitle">
						新手机号
					</view>
					<input type="text" v-model="mobile" value="" placeholder="请输入手机号" placeholder-class="placlas" />
				</view>
				<view class="mobiletesItem dipsb">
					<view class="mildispf">
						<view class="mobiTitle">
							验证码
						</view>
						<input type="text" v-model="yzm2" value="" placeholder="请输入验证码" placeholder-class="placlas" />
					</view>
					<view v-if="showText==true" @click="getCode2" class="getYzm">
						发送验证码
					</view>
					<view v-else @click="getCode" class="getYzms">
						{{second}}s重新发送
					</view>
				</view>
			</view>
			<view @click="subMitSetMoblie()" class="btnthMobilBox">
				确定
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
				title: '修改手机号',
				second: 60,
				showText: true,
				isfut: 1,
				mobile: '',
				yzm: '',
				yzm2: '',
			}
		},
		onLoad() {
			
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack()
			},
			// 解绑当前手机发送验证码
			getCode() {
				this.showText = false
				var interval = setInterval(() => {
					let times = --this.second
					this.second = times < 10 ? '0' + times : times //小于10秒补 0
				}, 1000)
				setTimeout(() => {
					clearInterval(interval)
					this.second = 60
					this.showText = true
				}, 60000)
			},
			// 根据后台返回状态确定执行下一步
			firstgetCode() {
				this.isfut = 2;
			},
			// 绑定新手机发送验证码
			getCode2() {
				var regPhone = (/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/); //手机号码
				if (!regPhone.test(this.mobile)) {
					uni.showToast({
						title: '手机号格式错误',
						icon: 'none'
					});
					return;
				} else {
					this.showText = false
					var interval = setInterval(() => {
						let times = --this.second
						this.second = times < 10 ? '0' + times : times //小于10秒补 0
					}, 1000)
					setTimeout(() => {
						clearInterval(interval)
						this.second = 60
						this.showText = true
					}, 60000)
				}

			},
			// 提交
			subMitSetMoblie() {
				var regPhone = (/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/); //手机号码
				if (!regPhone.test(this.mobile)) {
					uni.showToast({
						title: '手机号格式错误',
						icon: 'none'
					});
					return;
				} else if (this.yzm2 == '' || this.yzm2.length < 3) {
					uni.showToast({
						title: '验证码输入错误',
						icon: 'none'
					});
				} else {

				}
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

	/* 内容 */
	.mobileBox {
		width: 100%;
		padding: 88rpx 30rpx;
		box-sizing: border-box;
	}

	.mobiletes {
		margin-top: 30rpx;
		padding: 0 30rpx;
		border-radius: 8rpx;
		box-sizing: border-box;
		height: 200rpx;
		width: 100%;
		background-color: #fff;
	}

	.mobiletesItem {
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.mildispf {
		display: flex;
	}

	.dipsb {
		display: flex;
		justify-content: space-between;

	}

	.mobiletesItem input {
		font-size: 28rpx;
		font-family: DIN;
		font-weight: 500;
		color: #333333;
	}

	.mobiTitle {
		width: 140rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.mobiNum {
		font-size: 28rpx;
		font-family: DIN;
		font-weight: 500;
		color: #333333;
	}

	.placlas {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 17px;
		color: #CCCCCC;
	}

	.getYzm {
		width: 83px;
		height: 27px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #5DB737;
		border-radius: 12px;
		color: #fff;
		font-size: 12px;
	}

	.getYzms {
		width: 83px;
		height: 27px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #CCCCCC;
		border-radius: 12px;
		color: #fff;
		font-size: 12px;
	}

	.btnthMobilBox {
		width: 100%;
		margin-top: 80rpx;
		border-radius: 46rpx;
		height: 90rpx;
		background-color: #5DB737;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
