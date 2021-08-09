<template>
	<view class="container posrl">
		<view @click="goforgetPassword()" class="forgetPasswordBox">
			忘记密码？
		</view>
		<view class="loginBox">
			<view class="login_title">
				欢迎登录绿有购
			</view>
			<view class="telBox">
				<text class="txtWids">手机号</text>
				<input class="telInp" v-model="mobile" maxlength="11" type="text" placeholder="请输入你的手机号"
					placeholder-class="placeholderCls" value="" />
			</view>
			<view class="telBox">
				<text class="txtWids">密码</text>
				<input class="telInp" v-model="pwd" type="password" placeholder="请输入密码"
					placeholder-class="placeholderCls" value="" />
			</view>
			<view class="btnBox">
				<view @click="Getlogin()" class="btns">
					登录
				</view>
			</view>
			<view class="agreeBox">
				<view @click="isarrge()" class="agreeBtn" :class="{agreeBtnAct:agreeShow==false}"></view>
				<view class="agreeTxt">
					登录代表同意
				</view>
				<view class="agreexy">
					《绿有购用户协议》
				</view>
				<view class="agreeTxt">
					和
				</view>
				<view class="agreexy">
					《隐私协议》
				</view>
			</view>
			<view class="getregister">
				<view class="notles">
					没有账号，立即
				</view>
				<view @click="goregter()" class="getregsBtn">
					注册
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				// 用户协议
				userAgree: false,
				// 手机号
				mobile: '',
				// 密码
				pwd: '',
				// 协议勾选
				agreeShow: true,
			}
		},

		methods: {
			...mapMutations(['login']),
			// 去注册
			goregter() {
				uni.navigateTo({
					url: '/pages/regter/regter'
				})
			},
			// 找回密码
			goforgetPassword() {
				uni.navigateTo({
					url: '/pages/forgetPassword/forgetPassword'
				})
			},
			// 登录
			Getlogin() {
				var regPhone = (/^(13[0-9]|14[1579]|15[0-3,5-9]|16[6]|17[0123456789]|18[0-9]|19[89])\d{8}$/); //手机号码
				if (this.mobile == '' || !regPhone.test(this.mobile)) {
					uni.showToast({
						title: '手机号格式错误',
						icon: 'none'
					});
				} else if (this.pwd == '' || this.pwd.length < 6) {
					uni.showToast({
						title: '密码不能小于6位',
						icon: 'none'
					});
				} else if (this.agreeShow == false) {
					uni.showToast({
						title: '请勾选用户协议',
						icon: 'none'
					});
				} else {
					var url = 'user/login';
					var data = {
						account: this.mobile,
						password: this.pwd
					}
					this.$axios.axios('GET', url, data)
						.then((res) => {
							console.log(res)
							if(res.code==1){
								
								this.login(res.data)
								uni.reLaunch({
									url: "/pages/my/my"
								})
							}else{
								uni.showToast({
									title:'登录失败'
								})
							}
						})
						.catch((err) => {
							console.log(err);
						})
				}

			},
			// 协议勾选
			isarrge() {
				this.agreeShow = !this.agreeShow;
				console.log(this.agreeShow)
			},

		}
	}
</script>

<style>
	.container {
		width: 100%;
		margin: 0 auto;
	}

	.posrl {
		position: relative;
	}

	.forgetPasswordBox {
		position: absolute;
		top: 100px;
		right: 30px;
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #999999;
	}

	.loginBox {
		top: 140px;
		left: 0;
		position: absolute;
		padding: 35px;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}

	.login_title {
		font-size: 24px;
		font-family: PingFang SC;
		font-weight: bold;
		line-height: 22px;
		color: #333333;
		margin-bottom: 38px;
	}

	.txtWids {
		width: 50px;
	}

	.placeholderCls {
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #CCCCCC;
	}

	.telBox {
		margin-bottom: 20px;
		display: flex;
		width: 100%;

	}

	.telInp {
		margin-left: 17px;
	}

	.btnBox {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 50px;
		height: 45px;
	}

	.btns {
		width: 305px;
		height: 45px;
		background: #5DB737;
		opacity: 1;
		border-radius: 23px;
		color: #fff;
		font-size: 15px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.agreeBox {
		display: flex;
		margin-top: 15px;
		justify-content: center;
		align-items: center;
	}

	.agreeBtn {
		width: 12rpx;
		height: 12rpx;
		border: 4rpx solid #5DB737;
		background-color: #E0EBDB;
		border-radius: 50%;
	}

	.agreeBtnAct {
		width: 12rpx;
		height: 12rpx;
		border: 4rpx solid #E2E2E2;
		background-color: #fff;
		border-radius: 50%;
	}

	.agreeTxt {
		font-size: 11px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #999999;
	}

	.agreexy {
		font-size: 11px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #5DB737;
	}

	.getregister {
		margin-top: 50px;
		display: flex;
		justify-content: center;
	}

	.notles {
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #999999;
	}

	.getregsBtn {
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #5DB737;
	}
</style>
