<template>
	<view class="content">
		<!-- 顶部tabbar -->
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBacks()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 地址列表 -->
		<view class="listaddressBox">
			<view v-for="(item,index) in listaddress" :key="index" @tap="geteditaaddress(item.id)"
				class="listaddressItem">
				<view class="listaddressBox_leftbox">
					<view class="selLisicon" @click.stop="selListhis(item)" :class="{selLisiconact:id==item.id}"></view>
					<view class="topwselBox">
						<view class="selTxtaddress">
							<view class="selTxtaddress_name">
								<text class="selTxtaddress_namets">{{item.name}}</text>
								<text class="selTxtaddress_namet2">{{item.tel}}</text>
								<text v-if="item.acquiesce==1" class="selTxtaddress_namet3">默认</text>
							</view>
						</view>
						<view class="selTxtaddLive">
							{{item.area}}{{item.full_address}}
						</view>
					</view>
				</view>
				<view class="righticon">
					<text class="riicon iconfont icon-fanhui-copy"></text>
				</view>
			</view>
		</view>


		<view class="zhanw">

		</view>
		<!-- 新增地址 -->
		<view class="addressAdd">
			<view @click="goadd_Address()" class="addBoxLive">
				新增地址
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar: true,
				listaddress: [
					// {id:1,name:'张三',tel:'18380587806',area:'成华区416亿元家属区-东南门二环路北四段4号附4号',acquiesce:1},
					// {id:2,name:'李四',tel:'13245556806',area:'-东南门二环路北四段4号附4号',acquiesce:0},
					// {id:3,name:'王五',tel:'16540587806',area:'成华区41区-东南门二环路北四段4号附4号',acquiesce:0},
				],
				title: '常用地址',
				id: 1,

			}
		},
		onLoad() {
			this.getListaddress();
		},
		methods: {
			// 返回
			goBacks() {
				uni.navigateBack({
					
				})
			},
			// 选择地址
			selListhis(item) {
				this.id = item.id
				console.log(item.id)
			},
			// 获取收货地址列表
			getListaddress() {
				let url = 'address/address_list';
				let token = uni.getStorageSync('token');
				let data = {
					token: token
				}
				this.$axios.axios('POST', url, data)
					.then((res) => {
						console.log(res)
						this.listaddress = res.data;
					})
					.catch((err) => {
						console.log(err);
					})
			},
			// 新增地址
			goadd_Address() {
				uni.navigateTo({
					url: '/pages/newaddress/newaddress'
				})
			},
			// 去修改地址页面
			geteditaaddress(e) {
				console.log(e)
				uni.navigateTo({
					url: '/pages/editaddress/editaddress?id=' + e
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

	/* 地址列表 */
	.listaddressBox {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
	}

	.listaddressItem {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 30rpx;
	}

	.listaddressBox_leftbox {
		display: flex;
		background-color: #fff;
	}

	.selLisicon {
		width: 32rpx;
		height: 32rpx;
		background: #FFFFFF;
		border: 4rpx solid #E2E2E2;
		border-radius: 50%;
	}

	.selLisiconact {
		width: 32rpx;
		height: 32rpx;
		background: #E0EBDB;
		border: 4rpx solid #5DB737;
		border-radius: 50%;
	}

	.topwselBox {
		margin-left: 28rpx;
		width: 500rpx;
	}

	.selTxtaddress_name {
		display: flex;
		align-items: center;
	}

	.selTxtaddress_namets {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.selTxtaddress_namet2 {
		font-size: 30rpx;
		font-family: DIN;
		font-weight: 500;
		color: #333333;
		margin-left: 20rpx;
	}

	.selTxtaddress_namet3 {
		width: 64rpx;
		height: 32rpx;
		background: #F2B832;
		border-radius: 8rpx;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 10rpx;
	}

	.selTxtaddLive {
		margin-top: 20rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		max-width: 500rpx;
	}

	.riicon {
		font-size: 22rpx;
		color: #999999;
	}

	.zhanw {
		width: 100%;
		height: 300rpx;
	}

	/* 新增地址 */
	.addressAdd {
		position: fixed;
		bottom: 0rpx;
		left: 0rpx;
		width: 100%;
		height: 300rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
		background-color: #fff;
	}

	.addBoxLive {
		background-color: #5DB737;
		width: 100%;
		height: 90rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		border-radius: 46rpx;
	}
</style>
