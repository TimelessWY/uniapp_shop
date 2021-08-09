<template>
	<view class="content">
		<!-- 顶部轮播 -->
		<view class="swiper">
			
			<swiper :interval="3000" :duration="1000" :indicator-dots="false" :current="topSwiperIndex"
				@change="topSwiperTab" class="Toswiper">
				<swiper-item v-for="(item,index) in topSwiper" :key="index">
					<view class="swiper-item">
						<image :src="item.src" mode="aspectFill"></image>
					</view>
				</swiper-item>

			</swiper>
			<!-- 自定义指示点dots -->
			<view class="dots">
				<text class="texts">{{topSwiperIndex+1}}/{{topSwiper.length}}</text>
			</view>
			<!-- 轮播翻页按钮 -->
			<view @click.stop="swiperadd()" class="swiperPeoBtn">
				<text class="iconBtn iconfont icon-fanhui"></text>
			</view>
		</view>
		<!-- 积分 -->
		<view class="integralBox">
			<view class="integralChild">积分奖励</view>
			<view class="integralChild">无忧邮寄</view>
			<view class="integralChild">到店自提</view>
			<view class="integralChild">售后无忧</view>
		</view>
		<!-- 商品价格 -->
		<view class="commitdtyPriceBox">
			<view class="commitdty_name">
				{{cocommitdty_this.name}}
			</view>
			<view class="commitdtyPrice_bot">
				<view class="commitdtyPrice_s">
					<text class="peice1"> ￥{{cocommitdty_this.price1}}</text>
					<text class="peice2"> ￥{{cocommitdty_this.price2}}</text>
				</view>
				<view class="buyers_person">
					{{cocommitdty_this.numperson}}人购买
				</view>
			</view>
		</view>
		<!-- 到店自提 -->
		<view class="pointBox">
			<view class="pointTile">
				到店自提
			</view>
			<view class="pointContent">
				下单后即可到店自提，只需出示支付订单
			</view>
		</view>
		<!-- 店铺信息 -->
		<view @click="goShop()" class="shopInfoBox">
			<view class="shopInfo_left">
				<view class="shopInfo_left_img">
					<image src="/static/有机商城切图/店面.png" mode=""></image>
				</view>
				<view class="shopInfo_left_cont">
					<view class="shopInfo_left_name">
						永辉超市（八宝街店）
					</view>
					<view class="shopInfo_left_live">
						<text class="shopInfo_left_live1">653m</text>
						<text class="shopInfo_left_live2">青羊区八宝街219号</text>
					</view>
				</view>
			</view>
			<view class="shopInfo_right">
				<text>进店</text>
				<text class="shopInfo_right_icon iconfont icon-fanhui-copy"></text>
			</view>
		</view>
		<!-- 图文详情 -->
		<view class="graphicBox">
			<view class="graphicTitle">
				图文详情
			</view>
			<view class="webTexBox">
				
			</view>
		</view>
	
		<!-- 添加购物车 -->
		<view class="addshoppingCatBox">
			<view class="addshoppingCat_urlBox">
				<view @click="goIndex()" class="Cat_ur_index">
					<text class="car_urlicon iconfont icon-shouye"></text>
					<text class="car_urltxt">首页</text>
				</view>
				<view @click="goshoppingCat()" class="Cat_ur_car posrl">
					<text class="car_urlicon  iconfont icon-gouwuche"></text>
					<text class="car_urltxt">购物车</text>
					<view v-if="catNum>0" class="carNum">
						{{catNum}}
					</view>
				</view>
			</view>
			<view class="addshoppingCat_BtnBox">
				<view @click="showModels()" class="catleftBtn">
					<text class="btnTxt">加入购物车</text>
				</view>
				<view  @click="showModels()" class="catrightBtn">
					<text class="btnTxt">立即下单</text>
				</view>
			</view>
		</view>
		<view v-if="showModel" class="showModelBox">
			<view class="MdelBox">
				<view @click="closModel()" class="closeBtn">
					X
				</view>
				<view class="ModelshoppingCatBox">
					<view class="shoppingCatBoxMl">
						
						<view class="topShoppIcn">
							<view class="commitdytopInfo">
								<view class="commitdyimgBox">
									<image src="/static/有机商城切图/商品图/图像%20-10@2x.png" mode=""></image>
								</view>
								<view class="commitdyrightTxt">
										<view class="botShoppIcn_subMit_price">
											￥79.00
										</view>
										<view class="commitdyrightTxt_sy">
											剩余11件
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
								<view class="bottomBtnSi">
									<view @click="addshoppCat()" class="addShoppCatBox">
										<text class="btnTxt">加入购物车</text>
									</view>
									<view @click="goorder()" class="addShoppCatBox2">
										<text class="btnTxt">立即下单</text>
									</view>
								</view>
						</view>
						
					</view>
					</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				showModel:false,
				catNum:1,
				topSwiperIndex: 0,
				title: 'Hello',
				swipers: [],
				topSwiper: [{
						src: 'https://app-file.beitaichufang.com/img/H5/web/banner/banner20.jpg'
					},
					{
						src: 'https://app-file.beitaichufang.com/img/H5/web/banner/banner20.jpg'
					},
					{
						src: 'https://app-file.beitaichufang.com/img/H5/web/banner/banner20.jpg'
					},
					{
						src: 'https://app-file.beitaichufang.com/img/H5/web/banner/banner20.jpg'
					},
				],
				cocommitdty_this: {
					name: '皮薄红瓤西瓜约5斤 无籽麒麟瓜 大西瓜1粒装 单果2.5kg起 新鲜水果',
					price1: 179.00,
					price2: 199.00,
					numperson: 308,
				}
			}
		},
		onLoad() {

		},
		methods: {
			topSwiperTab(e) {
				var that = this;
				this.topSwiperIndex = Number(e.target.current);
			},
			swiperadd() {
				uni.navigateBack();
			},
			// 进店
			goShop(){
				console.log('进店')
			},
			// 回首页
			goIndex(){
				uni.switchTab({
					url: '../index/index'
				})
			},
			// 去购物车
			goshoppingCat(){
				uni.switchTab({
					url: '../shoppingCat/shoppingCat'
				})
			},
			// 弹出模态框
			showModels(){
				this.showModel=true;
			},
			// 关闭模态框
				
			closModel(){
				this.showModel=false;
			},
			// 添加购物车
			addshoppCat(){
				console.log('添加购物车')
			},
			// 立即下单
			goorder(){
				console.log('去确认订单页面')
			}
		}
	}
</script>

<style>
	.content {
		background-color: #F5F5F5;
	}

	/* 顶部轮播 */
	.Toswiper {
		width: 100%;
		height: 662rpx;
		position: relative;
	}

	.Toswiper .swiper-item image {
		width: 100%;
		height: 662rpx;
		display: block;
	}

	.texts {
		width: 88rpx;
		height: 44rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(0, 0, 0, .4);
		border-radius: 24rpx;
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #FFFFFF;
		position: absolute;
		top: 600rpx;
		right: 30rpx;
	}

	.swiperPeoBtn {
		width: 88rpx;
		height: 88rpx;
		background-color: rgba(0, 0, 0, .4);
		border-radius: 50%;
		position: absolute;
		top: 66rpx;
		left: 30rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	/* 积分 */
	.integralBox {
		width: 100%;
		height: 60rpx;
		background-color: #E0EBDB;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.integralChild {
		width: 25%;
		height: 36rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: 40rpx;
		box-sizing: border-box;
		border-left: 2rpx solid #fff;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #5DB737;
	}

	.integralChild:last-child {
		border-right: 2rpx solid #fff;
	}

	/* 商品价格 */
	.commitdtyPriceBox {
		width: 100%;
		height: 214rpx;
		padding: 30rpx;
		box-sizing: border-box;
		background-color: #fff;
	}

	.commitdty_name {
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		line-height: 22px;
		color: #333333;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.commitdtyPrice_bot {

		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
	}

	.peice1 {
		font-size: 36rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.peice2 {
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 400;
		color: #999999;
		text-decoration: line-through;
		margin-left: 18rpx;
	}

	.buyers_person {
		font-size: 20rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	/* 到店自提 */
	.pointBox {
		width: 100%;
		height: 100rpx;
		margin-top: 8rpx;
		background-color: #fff;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.pointTile {
		width: 144rpx;
		height: 56rpx;
		background: linear-gradient(270deg, #FFCE5D 0%, #F5DB35 100%);
		border-radius: 8rpx;
		font-size: 26rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}

	.pointContent {
		width: 660rpx;
		height: 56rpx;
		background-color: #FFF5DF;
		border-radius: 4px;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		display: flex;
		align-items: center;
		padding: 0 16rpx;
		box-sizing: border-box;
	}

	/* 店铺信息 */
	.shopInfoBox {
		margin-top: 20rpx;
		height: 148rpx;
		background-color: #fff;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.shopInfo_left {
		display: flex;
		align-items: center;
	}

	.shopInfo_left_img {
		height: 88rpx;
		width: 88rpx;
		border-radius: 16rpx;
		overflow: hidden;
	}

	.shopInfo_left_img image {
		width: 100%;
		height: 100%;
	}

	.shopInfo_left_cont {
		margin-left: 20rpx;
	}

	.shopInfo_left_name {
		width: 400rpx;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.shopInfo_left_live {
		display: flex;
		margin-top: 10rpx;
	}

	.shopInfo_left_live1 {
		padding-right: 14rpx;
		border-right: 2rpx solid #E2E2E2;
		box-sizing: border-box;
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #666666;
		line-height: 24rpx;
		height: 24rpx;
	}

	.shopInfo_left_live2 {
		padding-left: 14rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		line-height: 24rpx;
		height: 24rpx;
	}

	.shopInfo_right {
		display: flex;
		align-items: center;
	}

	.shopInfo_right text:first-child {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	.shopInfo_right_icon {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}

	/* 图文详情 */
	.graphicBox{
		margin-top: 20rpx;
		width: 100%;
		margin-bottom: 100rpx;
	}
	.graphicTitle{
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100rpx;
		background-color: #fff;
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	
	/* 添加购物车 */
	.addshoppingCatBox{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
		border-top: 1rpx solid #E5E5E5;
		background-color: #fff;
	}
	.addshoppingCat_urlBox{
		display: flex;
	}
	.Cat_ur_index{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 10rpx;
	}
	.Cat_ur_car{
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-left: 60rpx;
	}
	.car_urlicon{
		color: #333333;
		font-size:32rpx
	}
	.car_urltxt{
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.posrl{
		position: relative;
	}
	.carNum{
		position: absolute;
		top: -10rpx;
		right: 6rpx;
		width:24rpx;
		height: 24rpx;
		background-color: #F2B832;
		border-radius: 14rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 12rpx;
		font-family: DIN;
		font-weight: bold;
		color: #FFFFFF;
	}
	.addshoppingCat_BtnBox{
		width: 440rpx;
		display: flex;
		height: 80rpx;
	}
	.catleftBtn{
		width: 220rpx;
		height: 80rpx;
		background: #5DB737;
		opacity: 1;
		border-radius: 44rpx 0rpx 0rpx 44rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.catrightBtn{
		width: 220rpx;
		height: 80rpx;
		background: #F2B832;
		opacity: 1;
		border-radius:  0rpx 44rpx 44rpx  0rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.btnTxt{
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}
	/* 模态框 */
	.showModelBox{
		width: 100%;
		height: 100vh;
		background-color: rgba(0,0,0,.7);
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		
	}
	.MdelBox{
		position: absolute;
		bottom: 0;
		height: 840rpx;
		width: 100%;
		background-color: #fff;
		border-radius: 30rpx 30rpx 0 0;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.ModelshoppingCatBox {
		width: 650rpx;
		height: 960rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		position: relative;
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
	.closeBtn{
		color: #CCCCCC;
		font-size: 60rpx;
		width: 60rpx;
		height: 60rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 16rpx;
		right: 16rpx;
	}
	.commitdytopInfo {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: sb;
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
	.commitdyrightTxt_sy{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.commitdyrightTxt_name2{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.tite_Info{
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.commitdySpecBox{
		width: 100%;
		display: flex;
		margin-top: 24rpx;
		/* justify-content: space-between; */
		flex-wrap: wrap;
	}
	.commitdySpecItem{
		
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
	.SpecItem{
		padding: 0 20rpx;
		padding: 14rpx 42rpx;
		background-color: #EEEEEE;
	}
	.botShoppIcn{
		height: 180rpx;
		width: 100%;
	}
	.botShoppIcn_topIN{
		width: 100%;
		background-color: #E0EBDB;
		padding: 10rpx 30rpx;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}
	.botShoppIcn_subMit{
		height: 120rpx;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 20rpx 30rpx;
		box-sizing: border-box;
		justify-content: space-between;
	}
	.botShoppIcn_subMit_price{
		font-size: 40rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}
	.botShoppIcn_subMit_btn{
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
	.acontBtn{
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.acontBtn_leftTxt{
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.acontBtn_btn{
		display: flex;
		justify-content: space-between;
		
	}
	.acont_btnItm{
		width: 56rpx;
		height: 56rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #EEEEEE;
		border-radius: 8rpx;
	}
	.acont_btnItm:not(:last-child){
		margin-right: 10rpx;
	}
	.bottomBtnSi{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.addShoppCatBox{
		width: 360rpx;
		height: 80rpx;
		background: #5DB737;
		border-radius: 44rpx 0rpx 0rpx 44rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.addShoppCatBox2{
		width: 360rpx;
		height: 80rpx;
		background: #F2B832;
		border-radius: 0rpx 44rpx 44rpx 0rpx;
		display: flex;		justify-content: center;		align-items: center;
	}
</style>
