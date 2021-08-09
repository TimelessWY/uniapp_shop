<template>
	<view class="content">
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view slot="left" class="leftDw">
				<view @click="goBack()" class="iconTop iconfont icon-fanhui"></view>
				<view class="iconIpu">
					<view class="iconsearch">
						<image src="../../static/img/icon_search.png"></image>
					</view>
					<input type="text" value="" placeholder-class="Placs" :placeholder="sears" class="souInpu" />
				</view>
			</view>
			<view class="determineBtn">
				确定
			</view>
		</uni-nav-bar>

		<view class="mapBox">
			<map style="width: 100vw; height: 600rpx;" :latitude="latitude" :longitude="longitude" :scale="scale"
				:markers="markers"></map>
		</view>
		<!-- 地图下发列表 -->
		<view class="mapList">
			<view class="mapListItem">
				<view class="mapicon iconfont icon-juli"></view>
				<view class="mapTxtbox">
					<view class="mapTxtTitel">
						成都市武侯区人民政府
					</view>
					<view class="mapTxtcont">
						成都市武侯区武侯祠大街264号
					</view>
				</view>
			</view>
			<view class="mapListItem">
				<view class="mapicon iconfont icon-juli"></view>
				<view class="mapTxtbox">
					<view class="mapTxtTitel">
						成都市武侯区人民政府
					</view>
					<view class="mapTxtcont">
						成都市武侯区武侯祠大街264号
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import qqmapsdk from '../../untils/qqmap-wx-jssdk.min.js'
	const QQMapWX = new qqmapsdk({
		key: '4SBBZ-5KWC6-2XYSM-E6MGQ-IVA57-6KBX4'
	});
	export default {
		components: {

		},
		data() {
			return {
				title: '你好，uniapp',
				// 导航栏文字
				nav_title: '我是导航栏',
				// 是否包含状态栏
				status_bar: true,
				sears: '输入地址',
				latitude: 39.9, // 默认定在首都
				longitude: 116.4,
				scale: 12, // 默认16
				markers: [],
				markerHeight: 30,
			}

		},
		onLoad() {

		},
		onShow() {
			uni.hideTabBar({
				animation: false
			})
			this.getLocationInfo()
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack()
			},
			// 确认授权后，获取用户位置
			getLocationInfo() {
				const that = this;
				uni.getLocation({
					type: "wgs84",
					success: function(res) {
						console.log(res)
						this.latitude = res.latitude;
						this.longitude = res.longitude;
						
					},
					fail: () => {
						console.log("获取经纬度失败");
					},
					complete: () => {
						// 解析地址
						QQMapWX.reverseGeocoder({
							location: {
								latitude: this.latitude,
								longitude: this.longitude
							},
							success: function(res) {
								console.log("解析地址成功");
								console.log(res);
								// 省
								let province = res.result.ad_info.province;
								// 市
								let city = res.result.ad_info.city;
								console.log(province);
								console.log(city);
							},
							fail: function(res) {
								uni.showToast({
									title: '定位失败',
									duration: 2000,
									icon: "none"
								})
								console.log(res);
							},
							complete: function(res) {
								console.log(res);
							}
						})
					}


				});
			},
		}

	}
</script>

<style>
	.uni-navbar__header-btns-left {
		display: flex;
		width: 500rpx;
		justify-content: flex-start;

	}

	.topInpBox {
		height: 88rpx;
		display: flex;
		padding: 10rpx 10rpx;
		box-sizing: border-box;
		display: flex;


	}

	.leftDw {
		display: flex;
		align-items: center;
	}

	.top_txt {
		font-size: 24rpx;
		height: 30rpx;
		padding: 0 12rpx;
		line-height: 30rpx;
		width: 120rpx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.iconIpu {
		width: 320rpx;
		height: 70rpx;
		background-color: #F5F5F5;
		border-radius: 40rpx;
		margin-right: 30rpx;
		padding: 16rpx 20rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.iconsearch {
		width: 42rpx;
		height: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.iconsearch image {
		height: 100%;
		width: 100%;
	}

	.souInpu {
		width: 400rpx;
		height: 40rpx;
		margin-left: 8rpx;
	}

	.Placs {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #CCCCCC;
	}

	.determineBtn {
		font-size: 14px;
		width: 60rpx;
		margin-left: 60rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 20px;
		color: #333333;
		display: flex;
		justify-content: center;
	}

	.BtnBox {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		margin-right: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.mapBox {
		width: 100%;
		height: 606rpx;
		background-color: #ccc;
	}

	/* 地图下方列表 */
	.mapList {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.mapListItem {
		display: flex;
		height: 120rpx;
		align-items: center;

	}

	.mapicon {
		font-size: 28rpx;
		color: #CCCCCC;
	}

	.mapTxtbox {
		width: 600rpx;
		height: 100%;
		margin-left: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.mapTxtTitel {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.mapTxtcont {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
</style>
