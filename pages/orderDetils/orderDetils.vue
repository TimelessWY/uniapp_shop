<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<view class="orderDetilsBox">
			<view v-if="orderstatus==1" class="torderTitle">
				<view class="ordertitle1">
					已完成
				</view>
				<view class="ordertitle2">
					交易成功，本单获得30积分
				</view>
			</view>
			<view v-if="orderstatus==2" class="torderTitle2">
				<view class="ordertitle1">
					待收货  到店自提
				</view>
				<view class="ordertitle2 fps">
					到店展示此页面，请商家为您取货。
				</view>
				<view class="ordertitle3">
					确认提货
				</view>
			</view>
		</view>
		<!-- 订单商品 -->
		<view class="ordercommidtyInfo">
			<view class="ordercommidtyThis">
				<view class="ordercommidtyThis_title">
					<view class="ordercommidtyThis_titleTxt">
						周大姐干杂店
					</view>
					<view class="orderIcon iconfont icon-fanhui-copy"></view>
				</view>
				<view class="ordercommidtyItem">
					<view class="ordercommidtyItem_img">
						<image src="/static/yjqt/commitImg/coms_1.png" mode=""></image>
					</view>
					<view class="ordercommidtyItem_cont">
						<view class="ordercommidtyItem_cont_name">
							特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
						</view>
						<view class="ordercommidtyItem_cont_spec">
							白色
						</view>
						<view class="ordercommidtyItem_cont_priceNum">
							<view class="ordercommidtyItem_cont_price">
								￥32.2
							</view>
							<view class="ordercommidtyItem_cont_Num">
								x3
							</view>
						</view>
					</view>
				</view>
				<view class="ordercommidtyItem">
					<view class="ordercommidtyItem_img">
						<image src="/static/yjqt/commitImg/coms_1.png" mode=""></image>
					</view>
					<view class="ordercommidtyItem_cont">
						<view class="ordercommidtyItem_cont_name">
							特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
						</view>
						<view class="ordercommidtyItem_cont_spec">
							白色
						</view>
						<view class="ordercommidtyItem_cont_priceNum">
							<view class="ordercommidtyItem_cont_price">
								￥32.2
							</view>
							<view class="ordercommidtyItem_cont_Num">
								x3
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 订单积分 -->
		<view class="orderintegralbox">
			<view class="orderintegral">
				<view class="orderintegralL">
					本次购物获得积分
				</view>
				<view class="orderintegralR">
					160
				</view>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="orderdeIonfoBox">
			<view class="orderdeIonfo">
				<view class="orderdeIonfoL">
					订单编号
				</view>
				<view class="orderdeIonfoR">
					1255151038
				</view>
			</view>
			<view class="orderdeIonfo">
				<view class="orderdeIonfoL">
					下单时间
				</view>
				<view class="orderdeIonfoR">
					2020-12-06 19:48:53
				</view>
			</view>
			<view class="orderdeIonfo">
				<view class="orderdeIonfoL">
					支付方式
				</view>
				<view class="orderdeIonfoR fps">
					微信支付
				</view>
			</view>
			<view class="orderdeIonfo">
				<view class="orderdeIonfoL">
					支付时间
				</view>
				<view class="orderdeIonfoR">
					2020-12-06 19:48:53
				</view>
			</view>
			<view class="orderdeIonfo">
				<view class="orderdeIonfoL">
					配送方式
				</view>
				<view class="orderdeIonfoR fps">
					到店自提
				</view>
			</view>
		</view>
		<!-- 商品金额信息 -->
		<view class="commitdyPricBox">
				<view class="commitdyPricItem">
					<view class="commitdyPricItemL">
						商品总额
					</view>
					<view class="orderintegralR">
						¥168.00
					</view>
				</view>
				<view class="commitdyPricItem">
					<view class="commitdyPricItemL">
						运费
					</view>
					<view class="orderintegralR">
						¥0.00
					</view>
				</view>
				<view class="commitdyPricItem">
					<view class="commitdyPricItemL">
						积分
					</view>
					<view class="orderintegralR">
						-¥8.00
					</view>
				</view>
				<view class="commitdyPricItem">
					<view class="commitdyPricItemL">
						实付款
					</view>
					<view class="orderintegralR colxs">
						¥160.00
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
				orderstatus:1,
				title:"订单详情"
			}
		},
		methods: {
			// 返回
			goBack(){
				uni.navigateBack()
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
	/* 订单详情 */
	.orderDetilsBox{
		width: 100%;
		box-sizing: border-box;
	}
	.torderTitle{
		background-image: url('../../static/yjqt/2.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #5DB737;
		width: 100%;
		height: 248rpx;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.torderTitle2{
		background-image: url('../../static/yjqt/2.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-color: #F2B832;
		width: 100%;
		height: 248rpx;
		padding: 20rpx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.ordertitle1{
		font-size: 32rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		margin-bottom: 30rpx;
	}
	.ordertitle2{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
	}
	.ordertitle3{
		width: 160rpx;
		height: 54rpx;
		background: #FFFFFF;
		border-radius: 28rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #F2B832;
		margin-top: 30rpx;
	}
	/* 订单商品 */
	.ordercommidtyInfo{
		padding: 30rpx 20rpx;
		box-sizing: border-box;
	}
	.ordercommidtyThis{
		border-radius: 8rpx;
		background-color: #fff;
		padding: 20rpx 30rpx;
	}
	.ordercommidtyThis_title{
		display: flex;
		align-items: center;
	}
	.ordercommidtyThis_titleTxt{
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.orderIcon{
		font-size: 22rpx;
		color: #CCCCCC;
	}
	.ordercommidtyItem{
		display: flex;
		margin-top: 20rpx;
	}
	.ordercommidtyItem_img{
		width: 132rpx;
		height: 132rpx;
		border-radius: 8rpx;
		border: 2rpx solid #E2E2E2;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.ordercommidtyItem_img image{
		width: 106rpx;
		height: 106rpx;
	}
	.ordercommidtyItem_cont{
		max-width: 500rpx;
		margin-left: 20rpx;
	}
	.ordercommidtyItem_cont_name{
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.ordercommidtyItem_cont_spec{
		padding: 18rpx 0;
		box-sizing: border-box;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
	}
	.ordercommidtyItem_cont_priceNum{
		display: flex;
		justify-content: space-between;
	}
	.ordercommidtyItem_cont_price{
		font-size: 30rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}
	.ordercommidtyItem_cont_Num{
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #999999;
	}
	/* 订单积分 */
	.orderintegralbox{
		padding: 20rpx;
		box-sizing: border-box;
		
	}
	.orderintegral{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		padding: 30rpx;
		border-radius: 8rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.orderintegralL{
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.orderintegralR{
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #333333;
	}
	/* 订单信息 */
	.orderdeIonfoBox{
		width: 100%;
		padding:0 20rpx;
		box-sizing: border-box;
	}
	.orderdeIonfo{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.orderdeIonfoL{
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.orderdeIonfoR{
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #333333;
	}
	.fps{
		font-family: PingFang SC;
	}
	.fpd{
		font-family: DIN;
	}
	/* 商品金额信息 */
	.commitdyPricBox{
		width: 100%;
		padding:0 20rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
		margin-bottom: 40rpx;
	}
	.commitdyPricItem{
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.commitdyPricItemL{
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.orderintegralR{
		font-size: 24rpx;
		font-family: DIN;
		font-weight: 500;
		color: #333333;
	}
	.colxs{
		color: #E94545;
	}
</style>
