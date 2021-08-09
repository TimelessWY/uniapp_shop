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
					<input class="inpst" v-model="name" type="text" :value="name" placeholder-class="placeS"
						placeholder="收货人姓名" />
				</view>
				<view class="contItem">
					<view class="contItemTxt">
						电话
					</view>
					<input class="inpst" maxlength="11" v-model="tel" type="text" :value="tel"
						placeholder-class="placeS" placeholder="收货人手机号" />
				</view>
				<view class="contItem">
					<view class="contItemTxt">
						地区
					</view>
					<pickerAddress @change="change">
						<text class="placeS" v-if="txt==''">选择地址</text>
						<text class="placeSs" v-else>{{txt}}</text>
					</pickerAddress>

				</view>
				<view class="contItem">
					<view class="contItemTxt">
						详细地址
					</view>
					<input class="inpst" type="text" v-model="full_address" :value="full_address"
						placeholder-class="placeS" placeholder="街道门牌、楼层房间号等信息" />
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

		<view @click="subMitaddress()" class="subBtnbox">
			<view class="subMbtn">
				保存
			</view>
		</view>
		<view @click="removeAddress()" class="subBtnbox">
			<view class="subMbtn2">
				删除
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
				status_bar: true,
				txt: '',
				title: '修改地址',
				treatmentStatu: {
					checked: false
				},
				id: 1,
				address: '',
				full_address: '',
				name: '',
				tel: '',
				acquiesce: '',
			}
		},
		onLoad(opt) {
			// 接收地址id
			console.log(opt)
			this.id = opt.id;
			this.getAddressThis();
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
			// 获取地址
			getAddressThis() {
				let url = 'address/address_info';
				let data = {
					id: this.id,
					token: uni.getStorageSync('token'),
				}
				this.$axios.axios('POST', url, data)
					.then((res) => {
						console.log(res)
						this.full_address = res.data.full_address;
						this.name = res.data.name;
						this.tel = res.data.tel;
						this.txt = res.data.area;
						if (res.data.acquiesce == 1) {
							this.treatmentStatu.checked = true;
						}
					})
					.catch((err) => {
						console.log(err);
					})
			},
			change(data) {
				this.txt = data.data.join('')
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
								that.acquiesce = 1;
							} else if (res.cancel) {
								that.$set(that.treatmentStatu, 'checked', false) // 手动修改switch的状态，视图会同步更新
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			// 提交修改
			subMitaddress() {
				let url = 'address/edit_address';
				let data = {
					name: this.name,
					tel: this.tel,
					area: this.txt,
					full_address: this.full_address,
					acquiesce: this.acquiesce,
					token: uni.getStorageSync('token'),
					id: this.id
				}
				this.$axios.axios('POST', url, data)
					.then((res) => {
						console.log(res)
						if (res.code == 1) {
							uni.showToast({
								title: '修改成功'
							})
						}
					})
					.catch((err) => {
						console.log(err);
					})
			},
			// 删除地址
			removeAddress() {
				let that = this;
				let url = 'address/delete_address';
				let data = {
					id: that.id,
					token: uni.getStorageSync('token'),
				}
				that.$axios.axios('POST', url, data)
					.then((res) => {
						console.log(res)
						if (res.code == 1) {
							uni.showToast({
								title: '删除成功',
								duration:1000,
								
							});
							setTimeout(function() {
							          that.goBack()
							    }, 1000);
						}
					})
					.catch((err) => {
						console.log(err);
					})
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

	.subMbtn2 {
		width: 690rpx;
		height: 90rpx;
		background-color: #EEEEEE;
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
