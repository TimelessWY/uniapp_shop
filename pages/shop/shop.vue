<template>
	<view class="content">
		<!-- 顶部搜索框 -->
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goMapsele()" slot="left" class="leftDw">
				<view class="iconTop iconfont icon-weizhi"></view>
				<view class="top_txt">
					{{selTxt}}
				</view>
			</view>
			<view class="iconIpu">
				<view class="iconsearch">
					<image src="../../static/img/icon_search.png"></image>
				</view>
				<input type="text" value="" placeholder-class="Placs" :placeholder="sears" class="souInpu" />
			</view>
		</uni-nav-bar> 


		<!-- 顶部导航 -->
		<view class="topNavsclas">
			<view class="topNavsclasItem activss">
				<view class="topNavTxt">
					<text class="topNavtx">热门</text>
				</view>
				<view class="topNavBorder"></view>
			</view>
			<view class="topNavsclasItem">
				<view class="topNavTxt">
					<text class="topNavtx">距离</text>
					<text class="topNav_icon iconfont">&#xe654;</text>
				</view>
				<view class="topNavBorder"></view>
			</view>
			<view class="topNavsclasItem">
				<view class="topNavTxt">
					<text class="topNavtx">销量</text>
					<text class="topNav_icon iconfont">&#xe654;</text>
				</view>
				<view class="topNavBorder"></view>
			</view>
		</view>
		<view>
			
		<!-- 内容 -->
		<view class="content_shop">
			<view @click="goshopDetils(item.id)" v-for="(item,index) in shopList" :key="item.id" class="content_item">
				<view class="left_boxshop">
					<view class="conten_img">
						<image :src="item.imgsr" mode=""></image>
					</view>
					<view class="conten_txtBox">
						<view class="disfl">
							<view class="titleCoten">
								{{item.name}}
							</view>
							<view class="mers">
								我的
							</view>
						</view>
						<view class="conten_bdtxt">
							{{item.live}}
						</view>
						<view class="conten_bot disfl">
							<view class="item_infNum disfl">
								<text class="item_inpicon iconfont icon-juli"></text>
								<text class="item_inptxt">{{item.livs}}</text>
							</view>
							<view class="item_infNum disfl">
								<text class="item_inpicon iconfont icon-pingfen-half"></text>
								<text class="item_inptxt">{{item.pf}}分</text>
							</view>
						</view>
					</view>
				</view>
				<view class="right_btnBox">
					<view class="disfl">
						<text class="right_txt">进店</text>
						<text class="right_icon iconfont icon-fanhui-copy"></text>
					</view>
				</view>
			</view>
		</view>
			<view-tabbar :current="2"></view-tabbar>
		</view>
	</view>
</template>

<script>
	import Tabbar from '@/components/tabbar/tabbar.vue'
	export default {
		components: {
			'view-tabbar': Tabbar
		},
		data() {
			return {
				status_bar:true,
				sears: '西瓜',
				selTxt: '成都市二人民医院',
				shopList:[
					{id:1,imgsr:'/static/yjqt/shopImg.png',name:'周大姐干杂店',live:'成华区416亿元家属区-东南门二环路北四段4号附4号',
					livs:'369m',pf:'9.4'},
					{id:2,imgsr:'/static/yjqt/shopImg.png',name:'周大姐干杂店',live:'成华区416亿元家属区-东南门二环路北四段4号附4号',
					livs:'369m',pf:'9.4'},
					{id:3,imgsr:'/static/yjqt/shopImg.png',name:'周大姐干杂店',live:'成华区416亿元家属区-东南门二环路北四段4号附4号',
					livs:'369m',pf:'9.4'},
					{id:4,imgsr:'/static/yjqt/shopImg.png',name:'周大姐干杂店',live:'成华区416亿元家属区-东南门二环路北四段4号附4号',
					livs:'369m',pf:'9.4'},
					{id:5,imgsr:'/static/yjqt/shopImg.png',name:'周大姐干杂店',live:'成华区416亿元家属区-东南门二环路北四段4号附4号',
					livs:'369m',pf:'9.4'},
				]
			}

		},
		onLoad() {

		},
		onShow() {
			uni.hideTabBar({
				animation: false
			})
			
		},
		methods: {
			// 去商店详情
			goshopDetils(e){
				uni.navigateTo({
					url:'/pages/shopDetils/shopDetils'
				})
			}
		}
	}
</script>

<style>
	/* 点遍布搜索框 */
	.topInpBox {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 9999;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		width: 750rpx;
		height: 88rpx;
		display: flex;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;

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

	/* 顶部导航 */
	.topNavsclas {
		width: 100%;
		height: 80rpx;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
	}

	.topNavsclasItem {
		display: flex;
		padding-top: 20rpx;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 58rpx;
	}

	.topNavsclasItem:not(:first-child) {
		margin-left: 80rpx;
	}

	.topNavsclasItem .topNavTxt {
		display: flex;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}

	.activss .topNavTxt {
		display: flex;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.topNavsclasItem .topNavBorder {
		height: 6rpx;
		width: 40rpx;
		background-color: #fff;
		border-radius: 6rpx;
	}

	.activss .topNavBorder {
		height: 6rpx;
		width: 40rpx;
		background-color: #5DB737;
		border-radius: 6rpx;
	}

	.topNavTxt .iconfont {
		height: 100%;
		margin-left: 10rpx;
		font-size: 32rpx;
		color: #999999;
	}
	/* 店铺列表 */
	.content_shop{
		padding: 30rpx;
		box-sizing: border-box;
		
	}
	.content_item{
		height: 160rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.content_item:not(:last-child){
		margin-bottom: 20rpx;
	}
	.left_boxshop{
		display: flex;
	}
	.conten_img{
		width: 160rpx;
		height: 160rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}
	.conten_img image{
		width: 100%;
		height: 100%;
	}
	.conten_txtBox{
		padding: 10rpx 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.disfl{
		display: flex;
		align-items: center;
	}
	.titleCoten{
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}	
	.mers{
		background-color: #F2B832;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 64rpx;
		height: 32rpx;
		font-size: 22rpx;
		font-family: PingFang SC;
		margin-left: 10rpx;
		border-radius: 8rpx;
	}
	.conten_bdtxt{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		max-width: 406rpx;
		text-overflow: -o-ellipsis-lastline;
		  overflow: hidden;
		  text-overflow: ellipsis;
		  display: -webkit-box;
		  -webkit-line-clamp: 2;
		  line-clamp: 2;
		  -webkit-box-orient: vertical;
	}
	.item_infNum{
		width: 100rpx;
	}
	.item_inpicon{
		font-size: 24rpx;
		color: #CCCCCC;
	}
	.item_inptxt{
		font-size: 22rpx;
		font-family: DIN;
		font-weight: 500;
		color: #999999;
	}
	.right_btnBox{
		display: flex;
		align-items: center;
	}
	.right_txt{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #5DB737;
	}
	.right_icon{
		color: #5DB737;
		font-size: 22rpx;
	}
</style>
