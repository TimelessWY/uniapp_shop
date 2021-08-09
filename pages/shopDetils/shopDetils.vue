<template>
	<view class="content">
		<!-- 顶部banner -->
		<view class="toBannerBox" style="background-image: url(/static/yjqt/shopImg.png);">
			<uni-nav-bar :status-bar="status_bar" :backgroundColor="false">
				<view  @click="goBack()" slot="left" class="backBtnbox">
					<text class="icongofl iconfont icon-fanhui"></text>
				</view>
			</uni-nav-bar>
		</view>
		
		<!-- 内容 -->
		<view class="shopDetilBox">
			<view class="topShopInfo">
				<view class="topShoptxt1">
					<text class="title1">周大姐干杂店</text>
					<text class="title2">我的</text>
				</view>
				<view class="topShoptxt2">
					成华区416亿元家属区-东南门二环路北四段4号附4号
				</view>
				<view class="topShoptxt3">
					<view class="item_txt3">
						<view class="icon_txt iconfont icon-weizhi"></view>
						<view class="txt3_con">369m</view>
					</view>
					<view class="item_txt3 ml40">
						<view class="icon_txt iconfont icon-pingfen-half"></view>
						<view class="txt3_con">9.4分</view>
					</view>
				</view>
			</view>
			<view class="shopDetilCont">
				<view class="shopNavbox">
					<view class="shopNavItem">
						<view class="shopItm">
							全部
						</view>
						<view class="shopItm_bot"></view>
					</view>
					<view class="shopNavscroll_x">
						<scroll-view class="scrolsx" scroll-x="true" >
							<view class="scrBox">
								<view class="shopNavItem Itemactive">
									<view class="shopItm">
										水果蔬菜
									</view>
									<view class="shopItm_bot"></view>
								</view>
								<view class="shopNavItem">
									<view class="shopItm">
										谷物豆类
									</view>
									<view class="shopItm_bot"></view>
								</view>
								<view class="shopNavItem">
									<view class="shopItm">
										肉禽蛋品
									</view>
									<view class="shopItm_bot"></view>
								</view>
								<view class="shopNavItem">
									<view class="shopItm">
										海鲜水产
									</view>
									<view class="shopItm_bot"></view>
								</view>
								<view class="shopNavItem">
									<view class="shopItm">
										饮品饮料
									</view>
									<view class="shopItm_bot"></view>
								</view>
							</view>
						</scroll-view>
					</view>
				</view>
				<view class="shopContenBox">
						<view class="Cotens">
							<view @click="goproduceDetils()" class="ContenItem">
								<view class="contImg">
									<image src="/static/yjqt/commitImg/coms_1.png" mode=""></image>
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
							<view @click="goproduceDetils()" class="ContenItem">
								<view class="contImg">
									<image src="/static/yjqt/commitImg/coms_13.png" mode=""></image>
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
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
			}
		},
		methods: {
			goBack(){
				uni.navigateBack();
			},
			// 点击弹出模态框
			addShopcat() {
				this.showModel=true;
			},
			// 去商品详情
			goproduceDetils() {
				uni.navigateTo({
					url: '../commodityDetils/commodityDetils'
				})
			},
		}
	}
</script>

<style>
	.content{
		position: relative;
	}
/* 顶部banner */
.toBannerBox{
	width: 100%;
	height: 564rpx;
	background-repeat: no-repeat;
	background-size: cover;
}
.GobackBtn{
	width: 100%;
	padding: 22rpx 30rpx;
	display: flex;
	align-items: center;
}
.backBtnbox{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 44rpx;
	height: 44rpx;
	background-color: rgba(0,0,0,.4);
	border-radius: 50%;
}
.icongofl{
	font-size: 24rpx;
	color: #fff;
}
.shopDetilBox{
	position: absolute;
	top: 456rpx;
	left: 0;
	width: 100%;
}
.topShopInfo{
	width: 100%;
	height: 200rpx;
	background-color: #fff;
	border-radius: 30rpx 30rpx 0 0;
	box-sizing: border-box;
	padding: 30rpx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.topShoptxt1{
	display: flex;
	align-items: center;
}
.title1{
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
}
.title2{
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
}
.topShoptxt2{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
.topShoptxt3{
	display: flex;
}
.item_txt3{
	display: flex;
}
.icon_txt{
	color: #CCCCCC;
	font-size: 24rpx;
}
.ml40{
	margin-left: 40rpx;
}
.txt3_con{
	font-size: 24rpx;
	font-family: DIN;
	font-weight: 500;
	color: #999999;
}
.shopDetilCont{
	width: 100%;
	background-color: #f5f5f5;
	padding-top: 10rpx;
}
.shopNavbox{
	width: 100%;
	color: #fff;
	height: 80rpx;
	padding-left: 30rpx;
	background-color: #fff;
	display: flex;
	align-items: center;
}
.shopNavItem{
	height: 100%;
	padding-top:20rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}

.shopNavItem .shopItm{
	
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #666666;
}
.Itemactive .shopItm{
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
}
.shopNavItem .shopItm_bot{
	width: 40rpx;
	height: 6rpx;
	background-color: #fff;
	border-radius: 6rpx;
}
.Itemactive .shopItm_bot{
	width: 40rpx;
	height: 6rpx;
	background-color: #5DB737;
	border-radius: 6rpx;
}
.shopNavscroll_x{
	margin-left: 30rpx;
	width: 660rpx;
	height: 100%;
}
.scrolsx{
	width: 600rpx;
	height: 100%;
	white-space:nowrap;
}
.scrBox{
	display: flex;
	width: auto;
}
.shopNavItem:not(:first-child){
	margin-left: 30rpx;
}
.commitBox{
	width: 100%;
	padding: 30rpx;
	display: flex;
	flex-wrap: wrap;
}
.commitItem{
	margin-bottom: 30rpx;
	width: 330rpx;
	height: 520rpx;
	border-radius: 20rpx;
	background-color: #fff;
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
	.meord{
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
</style>
