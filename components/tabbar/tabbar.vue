<template>
	<cover-view class="tabbar" :style="{'padding-bottom': paddingBottomHeight + 'rpx'}">
		<cover-view class="tabbar-item" v-for="(item, index) in list" :key="index" @click="tabbarChange(item.path)">
			<cover-image class="item-img" :src="item.icon_a" v-if="current == index"></cover-image>
			<cover-image class="item-img" :src="item.icon" v-else></cover-image>
			<cover-view class="item-boxs"  v-if="current == index"></cover-view>
			<cover-view class="item-name" :class="{'tabbarActive': current == index}" v-if="item.text">{{item.text}}
			</cover-view>
		</cover-view>
	</cover-view>
</template>

<script>
	export default {
		props: {
			current: 0
		},
		data() {
			return {
				paddingBottomHeight: 0, //苹果X以上手机底部适配高度
				list: [{
					text: '首页',
					icon: '/static/img/indexs.png', //未选中图标
					icon_a: '/static/img/indexs.png', //选中图片
					path: "/pages/index/index", //页面路径
				}, {
					text: '商品',
					icon: '/static/img/commoditys.png',
					icon_a: '/static/img/commoditys.png',
					path: "/pages/commodity/commodity",
				}, {
					text: '店铺',
					icon: '/static/img/shops.png',
					icon_a: '/static/img/shops.png',
					path: '/pages/shop/shop',
				}, {
					text: '购物车',
					icon: '/static/img/shoppingCats.png',
					icon_a: '/static/img/shoppingCats.png',
					path: "/pages/shoppingCat/shoppingCat",
				}, {
					text: '我的',
					icon: '/static/img/mys.png',
					icon_a: '/static/img/mys.png',
					path: "/pages/my/my",
				}, ]
			};
		},
		created() {
			let that = this;
			uni.getSystemInfo({
				success: function(res) {
					let model = ['X', 'XR', 'XS', '11', '12', '13', '14', '15'];
					model.forEach(item => {
						//适配iphoneX以上的底部，给tabbar一定高度的padding-bottom
						if (res.model.indexOf(item) != -1 && res.model.indexOf('iPhone') != -1) {
							that.paddingBottomHeight = 40;
						}
					})
				}
			});
		},
		watch: {

		},
		methods: {
			tabbarChange(path) {
				console.log(path)
				uni.switchTab({
					url: path
				})
			}
		}
	};
</script>

<style lang="scss" scoped>
	.tabbarActive {
		color: #79D5AD !important;
	}

	.tabbar {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 100rpx;
		background-color: #ffffff;

		.tabbar-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100rpx;
			position: relative;
			.item-img {
				margin-bottom: 4rpx;
				width: 46rpx;
				height: 46rpx;
				z-index: 901;
			}
			.item-boxs{
				position: absolute;
				bottom: 50rpx;
				left: 50%;
				transform: translateX(-50%);
				width: 26rpx;
				height: 26rpx;
				background-color: rgba(93, 183, 55, .5);
				border-radius: 50%;
				z-index: 900;
			}
			.item-name {
				font-size: 26rpx;
				color: #A3A3A3;
			}
		}
	}
</style>
