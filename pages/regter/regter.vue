<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<view class="headImgBox">
			<view @click="ChooseImage()" v-if="avatar==''" class="headImg">上传头像</view>
			<view v-else class="headImg">
				<image :src="avatar" mode=""></image>
			</view>
			<view class="nameBox">
				<input type="text" v-model="username" value="" placeholder="请输入你的昵称" placeholder-class="inNatxts" />
			</view>
		</view>
		<view class="InpBox">
			<view class="itemInpbox">
				<view class="itemTile">
					手机号
				</view>
				<view class="itemInp">
					<input type="text" maxlength="11" v-model="mobile" placeholder-class="inNatxt" placeholder="请输入你的手机号" value="" />
				</view>
			</view>
			<view class="itemInpbox">
				<view class="itemTile">
					密码
				</view>
				<view class="itemInp">
					<input type="password" v-model="password" placeholder-class="inNatxt" placeholder="设置登录密码"
						value="" />
				</view>
			</view>
			<view class="itemInpbox">
				<view class="itemTile">
					确认密码
				</view>
				<view class="itemInp">
					<input type="password" v-model="invite_code" placeholder-class="inNatxt" placeholder="确认登录密码"
						value="" />
				</view>
			</view>
			<view class="itemInpbox">
				<view class="itemTile">
					验证码
				</view>
				<view class="itemInp">
					<input type="text" v-model="captcha" placeholder-class="inNatxt" placeholder="请输入手机验证码" value="" />
				</view>
				<view v-if="showText==true" @click="getCode" class="getYzm">
					发送验证码
				</view>
				<view v-else @click="getCode" class="getYzms">
					{{second}}s重新发送
				</view>
			</view>
			<view @click="getReg()" class="regbtnBox">
				注册
			</view>
			<view class="goLogin">
				登录
			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar: true,
				title: '欢迎注册绿有购',
				username: '',
				password: '',
				invite_code: '',
				second: 60,
				showText: true,
				headImgsr: '',
				mobile: '',
				captcha:'',
				avatar: '',
			}
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack()
			},
			// 头像上传
			ChooseImage() {
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						that.avatar=res.tempFilePaths[0]
						const tempFilePaths = res.tempFilePaths;
						// console.log(that.avatar)
						that.avatar = res.tempFilePaths[0];
						 uni.uploadFile({
							url: 'http://yjsc.28xr.com/api/common/upload',
							filePath: tempFilePaths[0],
							name: 'file',
							// formData: {
							// 	'user': 'test'
							// },
							success: function(res) {
								console.log()
								that.avatar=JSON.parse(res.data).data.fullurl;
							}
						});

						
					},
					error: function(e) {
						console.log(e);
					}
				});
			},
			// 获取验证码
			getCode() {
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
			// 注册
			getReg() {
				let that = this;
				let data = {
					// *username,*password,invite_code,*mobile,*captcha,avatar
					username: that.username,
					password: that.password,
					invite_code: that.invite_code,
					mobile: that.mobile,
					// captcha: that.captcha,
					avatar: that.avatar
				}
				let url = 'user/register';
				
				that.$axios.axios('GET', url, data)
					.then((res) => {
						if(res.code==1){
							uni.showModal({
								title:'注册成功，立即登录',
								icon:'none',
								success(){
									let url = 'user/login';
									let data = {
										account:that.username,
										password: that.password,
									}
									that.$axios.axios('POST', url , data)
									    .then((res)=>{
										  console.log(res)
									    })
									    .catch((err)=>{
									        console.log('错误回调');
									    })
								}
							})
						}
					})
					.catch((err) => {
						console.log('错误回调');
					})
			}
		}
	}
</script>

<style>
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

	.headImgBox {
		width: 100%;
		padding-top: 40rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.headImg {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
		border: 1px solid #ccc;
		color: #ccc;
		font-size: 22rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.headImg image {
		width: 100%;
		height: 100%;
	}

	.nameBox {
		margin-top: 8px;
		display: flex;
		justify-content: center;
		width: 100%
	}

	.nameBox input {
		text-align: center;
	}

	.inNatxts {
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #CCCCCC;
		display: flex;
		justify-content: center;
	}

	.inNatxt {
		font-size: 16px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #CCCCCC;
		display: flex;
		justify-content: left;
	}

	.InpBox {
		margin-top: 33px;
		width: 100%;
		padding: 0 35px;
		display: flex;
		flex-direction: column;
	}

	.itemInpbox {
		display: flex;
		padding: 12px 0;
		box-sizing: border-box;
		align-items: center;
	}

	.itemTile {
		font-size: 14px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 22px;
		color: #333333;
		width: 80px;
	}

	.itemInp {
		width: 140px;
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

	.regbtnBox {
		width: 305px;
		height: 45px;
		background: #5DB737;
		opacity: 1;
		border-radius: 23px;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}

	.goLogin {
		width: 305px;
		height: 45px;
		background-color: #EEEEEE;
		opacity: 1;
		border-radius: 23px;
		margin-top: 10px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: bold;
		color: #5DB737;
	}
</style>
