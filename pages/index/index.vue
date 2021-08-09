<template>
	<view class="content">
		<uni-nav-bar :fixed="true" background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goMapget()" slot="left" class="leftDw">
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
		<view class="topSwiperBox">
			<uni-swiper-dot :info="bannerList">
				<swiper class="swiper-box" autoplay="true" circular="true" indicatorDots="true"
					indicator-active-color="#fcf6f3">
					<swiper-item v-for="(item, index) in bannerList" :key="index">
						<view class="swiper-item">
							<image :src="item.image" class="swiper-item_img" mode="aspectFill"
								@click="goproduceDetils(item)" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="navtopBox">
			<view class="navtop_child">积分奖励</view>
			<view class="navtop_child">无忧邮寄</view>
			<view class="navtop_child">到店自提</view>
			<view class="navtop_child">售后无忧</view>
		</view>
		<view class="navThis">
			<view @click="goshop()" v-for="(item,index) in NavList" :key="item.id" class="navThisItem">
				<view class="this_item">
					<view class="this_item_img">
						<image :src="item.imgs" mode="aspectFill" />
					</view>
					<view class="this_item_txt">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
		<view class="todayBox">
			<view class="TitleS_item">
				<view class="Tileleft_txt">今日推荐</view>
				<view class="moreBtn">
					<view class="moreTxt">更多</view>
					<view class="moreicon iconfont icon-fanhui-copy"></view>
				</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="today_childBox ">
					<view v-for="(item,id) in commodityList" :key='id' class="todayChildItem">
						<view class="todayItem_imgsbox">
							<image @click="goproduceDetils()" :src="item.imgsrc" mode=""></image>
						</view>
						<view class="todayItem_txt">
							{{item.name}}
						</view>
						<view class="price_addBox">
							<view class="price_txt">
								￥{{item.price}}
							</view>
							<view @click="addShopcat()" class="price_add">
								<view class="iconad iconfont icon-zengjia"></view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="todayBox">
			<view class="TitleS_item">
				<view class="Tileleft_txt">人气商品</view>
				<view class="moreBtn">
					<view class="moreTxt">更多</view>
					<view class="moreicon iconfont icon-fanhui-copy"></view>
				</view>
			</view>
			<scroll-view scroll-x="true">
				<view class="today_childBox ">
					<view v-for="(item,id) in commodityList" :key='id' class="todayChildItem">
						<view class="todayItem_imgsbox">
							<image @click="goproduceDetils()" :src="item.imgsrc" mode=""></image>
						</view>
						<view class="todayItem_txt">
							{{item.name}}
						</view>
						<view class="price_addBox">
							<view class="price_txt">
								￥{{item.price}}
							</view>
							<view @click="addShopcat()" class="price_add">
								<view class="iconad iconfont icon-zengjia"></view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="shopBox">
			<view class="TitleS2_box">
				<view class="left_TxtBox">品质店铺</view>
				<view class="right_TxtBox">
					放心品质·实惠价格
				</view>
			</view>
			<view class="shopContenBox">
				<view class="shopInfoBox">
					<view class="leftInfoBox">
						<view class="leftInfo_img">
							<image src="/static/yjqt/shopImg.png" mode=""></image>
						</view>
						<view class="leftInfo_Txt">
							<view class="leftInfo_Txt_te1">
								周大姐干杂店
							</view>
							<view class="leftInfo_Txt_te2">
								<text class="dinT">369m</text>
								<text class="pl_14">成华区李家沱三友路219号</text>
							</view>
						</view>
					</view>
					<view class="rightInfoBox">
						<view class="moreBtn">
							<view class="moreTxt">进店</view>
							<view class="moreicon iconfont icon-fanhui-copy"></view>
						</view>
					</view>
				</view>
				<view class="shopSwiperBox">
					<scroll-view scroll-x="true">
						<view class="today_childBox ">
							<view v-for="(item,id) in commodityList" :key='id' class="todayChildItem">
								<view class="todayItem_imgsbox">
									<image @click="goproduceDetils()" :src="item.imgsrc" mode=""></image>
								</view>
								<view class="todayItem_txt">
									{{item.name}}
								</view>
								<view class="price_addBox">
									<view class="price_txt">
										￥{{item.price}}
									</view>
									<view @click="addShopcat()" class="price_add">
										<view class="iconad iconfont icon-zengjia"></view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view class="shopBox">
			<view class="TitleS2_box">
				<view class="left_TxtBox">品质店铺</view>
				<view class="right_TxtBox">
					放心品质·实惠价格
				</view>
			</view>
			<view class="shopContenBox">
				<view class="shopInfoBox">
					<view class="leftInfoBox">
						<view class="leftInfo_img">
							<image src="/static/yjqt/shopImg.png" mode=""></image>
						</view>
						<view class="leftInfo_Txt">
							<view class="leftInfo_Txt_te1">
								永辉超市（八宝街店）
							</view>
							<view class="leftInfo_Txt_te2">
								<text class="dinT">653m</text>
								<text class="pl_14">青羊区八宝街219号</text>
							</view>
						</view>
					</view>
					<view class="rightInfoBox">
						<view class="moreBtn">
							<view class="moreTxt">进店</view>
							<view class="moreicon iconfont icon-fanhui-copy"></view>
						</view>
					</view>
				</view>
				<view class="shopSwiperBox">
					<scroll-view scroll-x="true">
						<view class="today_childBox ">
							<view v-for="(item,id) in commodityList" :key='id' class="todayChildItem">
								<view class="todayItem_imgsbox">
									<image @click="goproduceDetils()" :src="item.imgsrc" mode=""></image>
								</view>
								<view class="todayItem_txt">
									{{item.name}}
								</view>
								<view class="price_addBox">
									<view class="price_txt">
										￥{{item.price}}
									</view>
									<view @click="addShopcat()" class="price_add">
										<view class="iconad iconfont icon-zengjia"></view>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>

		<view class="ShopForyouBox">
			<view class="TitleS2_box">
				<view class="left_TxtBox">为你优选</view>
				<view class="right_TxtBox">
					为你精挑细选
				</view>
			</view>
			<view class="shopContenBox">
				<view class="Cotens">
					<view class="ContenItem">
						<view class="contImg">
							<image src="/static/yjqt/com_7.png" mode=""></image>
						</view>
						<view class="difd">
							<view class="contTxt">
								徐福记米格玛糙米卷 能量棒
							</view>
							<view class="contBtnbox">
								<view class="peicescont">
									<view class="price_txt">
										￥22.5
									</view>
									<view class="priceNo_txt">
										￥27
									</view>
								</view>
								<view @click="addShopcat()" class="price_add">
									<view class="iconad iconfont icon-zengjia"></view>
								</view>
							</view>
						</view>
					</view>
					<view class="ContenItem">
						<view class="contImg">
							<image src="/static/yjqt/com_7.png" mode=""></image>
						</view>
						<view class="difd">
							<view class="contTxt">
								<text class="meord">自营</text>
								<text>徐福记米格玛糙米卷 能量棒</text>
							</view>
							<view class="contBtnbox">
								<view class="peicescont">
									<view class="price_txt">
										￥22.5
									</view>
									<view class="priceNo_txt">
										￥27
									</view>
								</view>
								<view @click="addShopcat()" class="price_add">
									<view class="iconad iconfont icon-zengjia"></view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="bottomZW"></view>
		<view v-if="showModel" class="shoModelBox">
			<view class="ModelshoppingCatBox">
				<view class="shoppingCatBoxMl">
					<view class="topShoppIcn">
						<view class="commitdytopInfo">
							<view class="commitdyimgBox">
								<image src="/static/yjqt/com_7.png" mode=""></image>
							</view>
							<view class="commitdyrightTxt">
								<view class="commitdyrightTxt_name">
									特仑苏牛奶1箱 优质牧场新鲜纯牛奶250mlx12盒
								</view>
								<view class="commitdyrightTxt_name2">
									<text>已选：</text>
									<text>白色</text>
								</view>
							</view>
						</view>


						<view class="commitdytopInfos">
							<view class="tite_Info">
								规格
							</view>
							<view class="commitdySpecBox">
								<view class="commitdySpecItem">
									<view class="SpecItem">
										白色
									</view>
								</view>
								<view class="commitdySpecItem">
									<view class="SpecItem">
										白色
									</view>
								</view>
								<view class="commitdySpecItem">
									<view class="SpecItem">
										白色
									</view>
								</view>
								<view class="commitdySpecItem">
									<view class="SpecItem">
										白色
									</view>
								</view>

							</view>
						</view>
						<view class="acontBtn">
							<view class="acontBtn_leftTxt">
								购买数量
							</view>
							<view class="acontBtn_btn">
								<view class="acont_btnItm iconfont icon-jianqu"></view>
								<view class="acont_btnItm">2</view>
								<view class="acont_btnItm iconfont icon-zengjia"></view>
							</view>
						</view>
					</view>
					<view class="botShoppIcn">
						<view class="botShoppIcn_topIN">
							完成订单可获得<text class="col5d">78</text>积分
						</view>
						<view class="botShoppIcn_subMit">
							<view class="botShoppIcn_subMit_price">
								￥79.00
							</view>
							<view class="botShoppIcn_subMit_btn">
								加入购物车
							</view>
						</view>
					</view>
				</view>
				<view @click="isShowModel()" class="closeBtnBox">
					X
				</view>
			</view>
		</view>
		<view>
			<view-tabbar :current="0"></view-tabbar>
		</view>
	</view>
</template>

<script>
	import qqmapsdk from '../../untils/qqmap-wx-jssdk.min.js'
	import Tabbar from '@/components/tabbar/tabbar.vue'
	import swiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue'
	export default {
		components: {
			'view-tabbar': Tabbar,
			'uni-swiper-dot': swiperDot
		},
		data() {
			return {
				status_bar: true,
				// 导航栏文字
				nav_title: '我是导航栏',
				showModel: false,

				sears: '西瓜',
				selTxt: '成都市二人民医院',
				commodityList: [{
						id: 1,
						name: '香菜 芫茜 约200g',
						price: 2.88,
						imgsrc: '/static/yjqt/com_7.png'
					}, {
						id: 2,
						name: '心相印抽取式纸巾',
						price: 2.24,
						imgsrc: '/static/yjqt/com_7.png'
					}, {
						id: 3,
						name: '云南新鲜玉米棒...',
						price: 3.88,
						imgsrc: '/static/yjqt/com_7.png'
					}, {
						id: 4,
						name: '越南白心火龙果...',
						price: 9.88,
						imgsrc: '/static/yjqt/com_7.png'
					}

				],
				NavList: [{
						id: 1,
						name: '蔬菜水果',
						imgs: '/static/yjqt/com_7.png'
					},
					{
						id: 2,
						name: '谷物豆类',
						imgs: '/static/yjqt/com_1.png'
					},
					{
						id: 3,
						name: '肉禽蛋品',
						imgs: '/static/yjqt/com_3.png'
					},
					{
						id: 4,
						name: '海鲜水产',
						imgs: '/static/yjqt/com_2.png'
					},
					{
						id: 5,
						name: '菌类花卉',
						imgs: '/static/yjqt/com_5.png'
					},
					{
						id: 6,
						name: '中草药材',
						imgs: '/static/yjqt/com_8.png'
					},
					{
						id: 7,
						name: '酒水茶饮',
						imgs: '/static/yjqt/com_4.png'
					},
					{
						id: 8,
						name: '休闲零食',
						imgs: '/static/yjqt/com_3.png'
					},
				],
				bannerList: [{
						image: '/static/yjqt/ban1.png'
					},
					{
						image: '/static/yjqt/ban2.png'
					},
					{
						image: '/static/yjqt/ban3.png'
					},
				]

			}

		},

		onLoad() {
			this.goMapsele();
		},
		onShow() {
			uni.hideTabBar({
				animation: false
			})
		},
		methods: {
			// 获取当前地址
			goMapsele() {
				let that = this;
				const tMap = new qqmapsdk({
					key: '4SBBZ-5KWC6-2XYSM-E6MGQ-IVA57-6KBX4' //开发者密钥
				});
				//使用 uni.getLocation获取用户所在经纬度
				uni.getLocation({
					type: 'wgs84',
					geocode: true,
					success: (res) => {
						console.log("获取经纬度成功");
						that.latitude = res.latitude;
						that.longitude = res.longitude;
					},
					fail: () => {
						console.log("获取经纬度失败");
					},
					complete: () => {
						// 使用腾讯sdk的reverseGeocoder方法 解析经纬度
						tMap.reverseGeocoder({
							location: { 
								latitude: that.latitude,
								longitude: that.longitude
							},
							success: function(res) {
								console.log("解析地址成功", res);
								console.log("当前地址：", res.result.address);
								that.selTxt =  res.result.address;
								//保存缓存
								uni.setStorage({ 
									key: 'local',
									data: res.result.address,
									success() {
										console.log("用户地址信息已缓存")
									}
								})
							},
							fail: function(res) {
								uni.showToast({
									title: '定位失败',
									duration: 2000,
									icon: "none"
								})
								console.log(res);
							},
							complete: function(res) { //无论成功失败都会执行
								 
							}
						})
					}
				})
			},
			
			// 修改当前地址
			goMapget(){
				uni.chooseLocation({
				    success: function (res) {
				        console.log('位置名称：' + res.name);
				        console.log('详细地址：' + res.address);
				        console.log('纬度：' + res.latitude);
				        console.log('经度：' + res.longitude);
				    }
				});
			},
			
			
			// 点击弹出模态框
			addShopcat() {
				this.showModel = true;
			},
			// 去商品详情
			goproduceDetils() {
				uni.navigateTo({
					url: '../commodityDetils/commodityDetils'
				})
			},
			// 导航跳转商品
			goshop() {
				uni.switchTab({
					url: '../commodity/commodity'
				})
			},
			// 关闭模态框
			isShowModel() {
				this.showModel = false;
			},
		}
	}
</script>

<style>
	.col5d {
		color: #5DB737;
	}

	.meord {
		width: 64rpx;
		height: 32rpx;
		background-color: #F2B832;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 8rpx;
	}

	.shoModelBox {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, .7);
		z-index: 99999;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.ModelshoppingCatBox {
		width: 650rpx;
		height: 960rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.shoppingCatBoxMl {
		width: 100%;
		height: 840rpx;
		background-color: #fff;
		border-radius: 30rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.commitdytopInfo {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1rpx solid #E2E2E2;
	}

	.commitdytopInfos {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		border-bottom: 1rpx solid #E2E2E2;
		flex-direction: column;
	}

	.commitdyimgBox {
		width: 132rpx;
		height: 132rpx;
		border: 1rpx solid #E2E2E2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.commitdyimgBox image {
		width: 106rpx;
		height: 106rpx;
	}

	.commitdyrightTxt {
		width: 440rpx;
		height: 132rpx;
		padding-left: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.commitdyrightTxt_name {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;

	}

	.commitdyrightTxt_name2 {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.tite_Info {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.commitdySpecBox {
		width: 100%;
		display: flex;
		margin-top: 24rpx;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}

	.commitdySpecItem {

		width: 25%;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 20rpx;
	}

	.SpecItem {
		padding: 0 20rpx;
		padding: 14rpx 42rpx;
		background-color: #EEEEEE;
	}

	.botShoppIcn {
		height: 180rpx;
		width: 100%;
	}

	.botShoppIcn_topIN {
		width: 100%;
		background-color: #E0EBDB;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}

	.botShoppIcn_subMit {
		height: 120rpx;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.botShoppIcn_subMit_price {
		font-size: 40rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.botShoppIcn_subMit_btn {
		width: 220rpx;
		height: 80rpx;
		background-color: #5DB737;
		border-radius: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}

	.acontBtn {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.acontBtn_leftTxt {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.acontBtn_btn {
		display: flex;
		justify-content: space-between;

	}

	.acont_btnItm {
		width: 56rpx;
		height: 56rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #EEEEEE;
		border-radius: 8rpx;
	}

	.acont_btnItm:not(:last-child) {
		margin-right: 10rpx;
	}

	.closeBtnBox {
		height: 66rpx;
		width: 66rpx;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1rpx solid #fff;
		color: #fff;
	}

	.dinT {
		height: 15px;
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #666666;
		padding-right: 14rpx;
		box-sizing: border-box;
		border-right: 1rpx solid #E2E2E2;
	}

	.pl_14 {
		padding-left: 14rpx;
		box-sizing: border-box;
	}

	.bottomZW {
		width: 100%;
		height: 200rpx;
	}

	.topSwiperBox,
	.navtopBox,
	.navThis {
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.topSwiperBox {
		padding-top: 20rpx;
	}



	.topSwiperBox .uni-swiper__dots-item .uni-swiper__dots-bar {
		display: none;
	}

	.topSwiperBox .uni-swiper .uni-swiper-dots-horizontal {
		right: 0;
	}

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

	.topSwiperBox .uni-swiper-item {
		border-radius: 20rpx;
		width: 100%;
		height: 100%;
	}

	.todayItem_imgsbox image {
		width: 120%;
		height: 100%;
	}

	.topSwiperBox .swiper-item {
		width: 100%;
		height: 100%;
	}

	.topSwiperBox .swiper-item_img {
		width: 100%;
		height: 100%;
		border-radius: 20rpx !important;
		box-sizing: border-box;
		overflow: hidden;
		z-index: 999;
	}

	::-webkit-scrollbar {
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
		color: transparent;
	}



	.navtopBox {
		width: 100%;
		display: flex;
		margin-top: 22rpx;
	}

	.navtop_child {
		width: 25%;
		text-align: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 17px;
		color: #666666;
		border-left: 2rpx solid #E2E2E2;
	}

	.navtop_child:last-child {
		border-right: 2rpx solid #E2E2E2;
	}

	.navThis {
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
	}

	.navThisItem {
		width: 25%;
		box-sizing: border-box;
		padding: 20rpx 0;
		display: flex;
		justify-content: center;
	}

	.this_item {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.this_item_img {
		width: 76rpx;
		height: 76rpx;
	}

	.this_item_img image {
		width: 100%;
		height: 100%;
	}

	.this_item_txt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.todayBox {
		width: 100%;
		height: 450rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #F5F5F5;
		border-radius: 20rpx;
		margin-bottom: 20rpx;
	}

	.TitleS_item {
		width: 100%;
		height: 44rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.Tileleft_txt {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.moreBtn {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 16px;
		color: #999999;
	}

	.moreicon {
		font-size: 20rpx;
	}

	.today_childBox {
		display: flex;
		padding: 0 0rpx;
		box-sizing: border-box;
		flex-wrap: nowrap;
	}

	.today_childBox::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
		display: none
	}

	.scrolSx {
		display: flex;
		justify-content: space-between;
	}

	.todayChildItem {
		padding: 20rpx;
		box-sizing: border-box;
		width: 210rpx;
		margin-right: 30rpx;
	}

	.todayItem_imgsbox {
		width: 210rpx;
		height: 210rpx;
		background-color: #FFFFFF;
		border-radius: 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.todayItem_imgsbox image {
		width: 180rpx;
		height: 180rpx;
	}

	.todayItem_txt {
		padding: 20rpx 0;
		box-sizing: border-box;
		width: 210rpx;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: bold;
	}

	.price_addBox {
		width: 210rpx;
		display: flex;
		justify-content: space-between;

	}

	.price_txt {
		font-size: 32rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.price_add {
		background-color: #5DB737;
		padding: 8rpx;
		box-sizing: border-box;
		border-radius: 50%;
		height: 32rpx;
		width: 32rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.iconad {
		font-size: 16rpx;
		font-weight: 400;
		color: #fff;
	}

	.shopBox {
		width: 100%;
	}

	.shopContenBox {
		background-color: #F5F5F5;
		padding: 20rpx 0;
		border-radius: 30rpx;
		margin-bottom: 20rpx;
	}

	.TitleS2_box {
		width: 100%;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.left_TxtBox {
		height: 36rpx;
		padding-left: 12rpx;
		font-size: 34rpx;
		border-left: ;
		font-family: PingFang SC;
		font-weight: bold;
		border-left: 8rpx solid #5DB737;
		display: flex;
		align-items: center;
	}

	.right_TxtBox {
		display: flex;
		align-items: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.shopInfoBox {
		padding: 40rpx 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
	}

	.leftInfoBox {
		display: flex;
		align-items: center;
	}

	.leftInfo_img {
		width: 88rpx;
		height: 88rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}

	.leftInfo_img image {
		width: 100%;
		height: 100%;
	}

	.leftInfo_Txt {
		height: 76rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

		margin-left: 20rpx;
	}

	.leftInfo_Txt_te1 {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;

	}

	.leftInfo_Txt_te2 {
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 17px;
		color: #999999;
	}

	.rightInfoBox {
		display: flex;
		align-items: center;
	}

	.ShopForyouBox {
		width: 100%;
	}

	.Cotens {
		width: 100%;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 30rpx;
		box-sizing: border-box;
	}

	.ContenItem {
		width: 330rpx;
		height: 520rpx;
		padding: 16rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;
		border-radius: 20rpx;
		justify-content: space-between;
	}

	.contImg {
		width: 300rpx;
		height: 300rpx;
	}

	.contImg image {
		width: 300rpx;
		height: 300rpx;
	}

	.contTxt {
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		text-align: left;
		margin-bottom: 20rpx;

	}

	.peicescont {
		display: flex;

	}

	.priceNo_txt {
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 400;
		line-height: 22px;
		color: #999999;
		text-decoration: line-through
	}

	.contBtnbox {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.difd {
		display: flex;
		flex-direction: column;

	}
</style>
