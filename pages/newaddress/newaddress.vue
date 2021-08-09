<template>
	<view class="content">
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 内容 -->
		<view class="contIntBox">
			<view class="contBx">
				<view class="contItem">
					<view class="contItemTxt">
						姓名
					</view>
					<input v-model="name" class="inpst" type="text" placeholder-class="placeS" placeholder="收货人姓名"
						value="" />
				</view>
				<view class="contItem">
					<view class="contItemTxt">
						电话
					</view>
					<input class="inpst" v-model="tel" maxlength="11" type="text" placeholder-class="placeS"
						placeholder="收货人手机号" value="" />
				</view>
				<view class="contItem">
					<view class="contItemTxt">
						地区
					</view>
					<pickerAddress @change="change">
						<text class="placeS" v-if="area==''">选择地址</text>
						<text class="placeSs" v-else>{{area}}</text>
					</pickerAddress>

				</view>
				<view class="contItem">
					<view class="contItemTxt">
						详细地址
					</view>
					<input v-model="full_address" class="inpst" type="text" placeholder-class="placeS"
						placeholder="街道门牌、楼层房间号等信息" value="" />
				</view>
			</view>
			<view class="defaultBtn">
				<view class="contItemTxt">
					设为默认地址
				</view>
				<view class="btnBoxdefult">
					<switch class="switchBox" color="#5DB737" :checked="treatmentStatu.checked"
						@change="switchChange" />
				</view>
			</view>
		</view>

		<view class="subBtnbox">
			<view @click="btnSubmitAddress()" class="subMbtn">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import pickerAddress from '../../components/pickerAddress/pickerAddress.vue';
	export default {
		components: {
			pickerAddress
		},
		data() {
			return {
				token: '',
				name: '',
				tel: '',
				area: '',
				full_address: '',
				acquiesce: 0,
				status_bar: true,
				title: '添加地址',
				treatmentStatu: {
					checked: false
				}
			}
		},
		methods: {
			// 返回
			goBack() {
				const delta = 1 // 返回的页面数
				uni.navigateBack({
					delta: delta,
					success: () => {
						const pages = getCurrentPages() // 获取当前页面栈数组，第一个元素为首页，最后一个元素为当前页面
						let page = pages[Math.max(pages.length - 1 - delta, 0)] // 要返回到的页面，超过页面栈，则为首页
						page.getListaddress() // 通过调用页面的 onLoad 里面的处理逻辑实现刷新数据
					}
				})
			},
			// 获取本地缓存token
			getTokenL() {
				console.log('获取token')
				uni.getStorage({
					key: 'uerInfo',
					success: function(res) {
						console.log(res.data.userinfo.token);
						this.token = res.data.userinfo.token;
					}
				});

			},
			change(data) {
				this.area = data.data.join('')
				console.log(data.data.join(''))
			},
			switchChange(e) {
				let value = e.target.value
				let that = this
				this.$set(this.treatmentStatu, 'checked', value) // 将点击改变的状态赋给treatmentStatu.checked
				if (value && !this.havePromise) {
					uni.showModal({
						title: '提示',
						content: '设为默认地址',
						success: function(res) {
							if (res.confirm) {
								that.$emit('changePage', 1)
								console.log('用户点击确定')
								that.acquiesce = 1
							} else if (res.cancel) {
								that.$set(that.treatmentStatu, 'checked', false) // 手动修改switch的状态，视图会同步更新
								console.log('用户点击取消');
								that.acquiesce = 0
							}
						}
					});
				}
			},
			//   *name,*tel,*area,*full_address,*acquiesce,*token
			// 提交
			btnSubmitAddress() {
				let that = this;
				that.getTokenL();
				console.log(that.token)
				let url = "address/add_address";
				let data = {
					name: that.name,
					tel: that.tel,
					area: that.area,
					full_address: that.full_address,
					acquiesce: that.acquiesce,
					token: uni.getStorageSync('token')
				}
				that.$axios.axios('POST', url, data)
					.then((res) => {
						console.log(res)
						if (res.code == 1) {
							uni.showToast({
								title: "添加成功",
								duration: 1000,
							});
							setTimeout(function() {
								that.goBack()
							}, 1000);

						} else {

						}
					})
					.catch((err) => {
						console.log(err);
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
		height: 88rpx;
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
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
	.contIntBox {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.contBx {
		width: 100%;
		height: 400rpx;
		border-radius: 8rpx;
		background-color: #fff;
	}

	.contItem {
		display: flex;
		align-items: center;
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.contItemTxt {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		min-width: 140rpx;
	}

	.inpst {
		width: 400rpx;
		height: 60rpx;
	}

	.placeS {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #CCCCCC;
	}

	.placeSs {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.defaultBtn {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
	}


	/* 提交 */
	.subBtnbox {
		width: 100%;
		height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 80rpx;
	}

	.subMbtn {
		width: 690rpx;
		height: 90rpx;
		background-color: #5DB737;
		border-radius: 46rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}
</style>
