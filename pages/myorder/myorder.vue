<template>
	<view class="content">
		<!-- 订单顶部 -->
		<view class="orderTopBox">
			<!-- 顶部tabbar -->
			<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
				<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
				<view class="orderTitle">{{title}}</view>
				<view slot="right" class="">
				</view>
			</uni-nav-bar>
			<!-- 顶部导航 -->
			<view class="topNavbox">
				<view v-for="(item,index) in topNav" :key='item.id' :class="{actives:item.id==navIdx}" class="topnavItem"  @tap="changValue(item.id)">
					<view class="navText">
						{{item.name}}
					</view>
					<view class="botomBorder"></view>
				</view>
			</view>
		</view>
			<!-- 订单列表 -->
			<view  class="orderListBox">
				<!-- 待付款 -->
				<view v-if="orderList!=''" class="orderItem">
					<view class="ordertitle">
						<view class="ordertitle_left">
							<view class="ordertitle_leftName">
								周大姐干杂店
							</view>
							<view class="ordertitle_leftIcon iconfont icon-fanhui-copy"></view>
						</view>
						<view class="ordertitle_right">
							<view class="ordertitle_right_info">
								到店自提
							</view>
							<view class="ordertitle_right_status">
								待付款
							</view>
						</view>
					</view>
					<view class="ordercontent">
						<view class="ordercontent_item">
							<view class="ordercontentImg">
								<image src="/static/yjqt/commitImg/coms_12.png" mode=""></image>
							</view>
							<view class="orderItemRightcont">
								<view class="ordercommitName">
									特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
								</view>
								<view class="orderspec">
									白色
								</view>
								<view class="orderpriceNum">
									<view class="orderpriceNum_price">
										￥30.0
									</view>
									<view class="orderpriceNum_num">
										x3
									</view>
								</view>
							</view>
						</view>
						<view class="ordercontent_item">
							<view class="ordercontentImg">
								<image src="/static/yjqt/commitImg/coms_1.png" mode=""></image>
							</view>
							<view class="orderItemRightcont">
								<view class="ordercommitName">
									特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
								</view>
								<view class="orderspec">
									白色
								</view>
								<view class="orderpriceNum">
									<view class="orderpriceNum_price">
										￥30.0
									</view>
									<view class="orderpriceNum_num">
										x3
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="orderBtn">
						<view class="orderBtn_left">
							<view class="orderBtn_leftTxt">
								合计:
							</view>
							<view class="orderBtn_leftprice">
								￥60
							</view>
						</view>
						<view class="orderBtn_right">
							<view class="orderBtn_right_btn1">
								删除
							</view>
							<view class="orderBtn_right_btn2">
								去支付
							</view>
						</view>
					</view>
				</view>
				<!-- 待发货 -->
				<view v-if="orderList!=''" class="orderItem">
					<view class="ordertitle">
						<view class="ordertitle_left">
							<view class="ordertitle_leftName">
								周大姐干杂店
							</view>
							<view class="ordertitle_leftIcon iconfont icon-fanhui-copy"></view>
						</view>
						<view class="ordertitle_right">
							<view class="ordertitle_right_info">
								到店自提
							</view>
							<view class="ordertitle_right_status">
								待发货
							</view>
						</view>
					</view>
					<view class="ordercontent">
						<view class="ordercontent_item">
							<view class="ordercontentImg">
								<image src="/static/yjqt/commitImg/coms_17.png" mode=""></image>
							</view>
							<view class="orderItemRightcont">
								<view class="ordercommitName">
									特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
								</view>
								<view class="orderspec">
									白色
								</view>
								<view class="orderpriceNum">
									<view class="orderpriceNum_price">
										￥30.0
									</view>
									<view class="orderpriceNum_num">
										x3
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="orderBtn">
						<view class="orderBtn_left">
							<view class="orderBtn_leftTxt">
								合计:
							</view>
							<view class="orderBtn_leftprice">
								￥60
							</view>
						</view>
						<view class="orderBtn_right">
							<view class="orderBtn_right_btn1">
								退款中
							</view>
							
						</view>
					</view>
				</view>
				<!-- 待收货 -->
				<view v-if="orderList!=''" class="orderItem">
					<view class="ordertitle">
						<view class="ordertitle_left">
							<view class="ordertitle_leftName">
								周大姐干杂店
							</view>
							<view class="ordertitle_leftIcon iconfont icon-fanhui-copy"></view>
						</view>
						<view class="ordertitle_right">
							<view class="ordertitle_right_info">
								到店自提
							</view>
							<view class="ordertitle_right_status">
								待收货
							</view>
						</view>
					</view>
					<view class="ordercontent">
						<view class="ordercontent_item">
							<view class="ordercontentImg">
								<image src="/static/yjqt/commitImg/coms_6.png" mode=""></image>
							</view>
							<view class="orderItemRightcont">
								<view class="ordercommitName">
									特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
								</view>
								<view class="orderspec">
									白色
								</view>
								<view class="orderpriceNum">
									<view class="orderpriceNum_price">
										￥30.0
									</view>
									<view class="orderpriceNum_num">
										x3
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="orderBtn">
						<view class="orderBtn_left">
							<view class="orderBtn_leftTxt">
								合计:
							</view>
							<view class="orderBtn_leftprice">
								￥60
							</view>
						</view>
						<view class="orderBtn_right">
							<view class="orderBtn_right_btn1">
								退款
							</view>
							<view class="orderBtn_right_btn2 orderBtn_right_btn3">
								确认收货
							</view>
						</view>
					</view>
				</view>
				<!-- 已完成 -->
				<view v-if="orderList!=''" class="orderItem">
					<view class="ordertitle">
						<view class="ordertitle_left">
							<view class="ordertitle_leftName">
								周大姐干杂店
							</view>
							<view class="ordertitle_leftIcon iconfont icon-fanhui-copy"></view>
						</view>
						<view class="ordertitle_right">
							<view class="ordertitle_right_info">
								到店自提
							</view>
							<view class="ordertitle_right_info">
								已完成
							</view>
						</view>
					</view>
					<view class="ordercontent">
						<view class="ordercontent_item">
							<view class="ordercontentImg">
								<image src="/static/yjqt/commitImg/coms_3.png" mode=""></image>
							</view>
							<view class="orderItemRightcont">
								<view class="ordercommitName">
									特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
								</view>
								<view class="orderspec">
									白色
								</view>
								<view class="orderpriceNum">
									<view class="orderpriceNum_price">
										￥30.0
									</view>
									<view class="orderpriceNum_num">
										x3
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="orderBtn">
						<view class="orderBtn_left">
							<view class="orderBtn_leftTxt">
								合计:
							</view>
							<view class="orderBtn_leftprice">
								￥60
							</view>
						</view>
						<view class="orderBtn_right">
							<view class="orderBtn_right_btn1">
								退款中
							</view>
							<view class="orderBtn_right_btn1">
								删除
							</view>
						</view>
					</view>
				</view>
				<!-- 没有更多了 -->
				<view class="notList">
					没有更多了
				</view>
			</view>
			
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
				title:'我的订单',
				topNav:[
					{id:1,name:'待付款'},
					{id:2,name:'待发货'},
					{id:3,name:'待收货'},
					{id:4,name:'全部'}
				],
				navIdx:4,
				// 订单列表
				orderList:[
					'test'
				]
			}
		},
		methods: {
			changValue(index){
				this.navIdx = index
				console.log(index)
			},
			// 返回
			goBack() {
				uni.navigateBack()
			},
		}
	}
</script>

<style>
	page{
		background-color: #F5F5F5;
	}
	
	/* 订单顶部 */
.orderTopBox{
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	height: 168rpx;
	background-color: #fff;
	z-index: 999;
}
.toptabbarBox{
	height: 88rpx;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
}
.gobackBtn{
	color: #333333;
	font-size: 36rpx;
}
.orderTitle{
	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
}
/* 顶部导航 */
.topNavbox{
	width: 100%;
	align-items: center;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #fff;
}
.topnavItem{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 25%;
	height: 80rpx;
	padding-top: 20rpx;
	box-sizing: border-box;
	
}
.topnavItem .navText{
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #666666;
	
}
.topnavItem .botomBorder{
	background-color: #fff;
	width: 40rpx;
	height: 6rpx;
}
.actives{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 25%;
	height: 80rpx;
	padding-top: 20rpx;
	box-sizing: border-box;
}
.actives .navText{
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
	
}
.actives .botomBorder{
	background-color: #5DB737;
	width: 40rpx;
	height: 6rpx;
}
/* 订单列表 */
.orderListBox{
	width: 100%;
	padding: 20rpx;
	box-sizing: border-box;
	background-color: #F5F5F5;
	padding-top: 210rpx;
}
.orderItem{
	border-radius: 8rpx;
	width: 100%;
	background-color: #fff;
	margin-bottom: 20rpx;
}
.ordertitle{
	height: 80rpx;
	padding:0 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.ordertitle_left{
	display: flex;
	align-items: center;
}
.ordertitle_leftName{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.ordertitle_leftIcon{
	font-size: 22rpx;
	color: #CCCCCC;
}
.ordertitle_right{
	display: flex;
	align-items: center;
}
.ordertitle_right_info{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	line-height: 22px;
	color: #999999;
	margin-right: 20rpx;
}
.ordertitle_right_status{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #E94545;
}
.ordercontent{
	padding: 0 30rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}
.ordercontent_item{
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.ordercontentImg{
	width: 132rpx;
	height: 132rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2rpx solid #E2E2E2;
	border-radius: 8rpx;
}
.ordercontentImg image{
	width: 106rpx;
	height: 106rpx;
}
.orderItemRightcont{
	width: 500rpx;
	display: flex;
	flex-direction: column;
	margin-left: 20rpx;
}
.ordercommitName{
	font-size: 28rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.orderspec{
	font-size: 24rpx;
	font-weight: 500;
	color: #999999;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding: 18rpx 0;
}
.orderpriceNum{
	width: 500rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.orderpriceNum_price{
	font-size: 30rpx;
	font-family: DIN;
	font-weight: bold;
	color: #E94545;
}
.orderpriceNum_num{
	font-size: 24rpx;
	font-family: DIN;
	font-weight: 500;
	color: #999999;
}
.orderBtn{
	height: 100rpx;
	width: 100%;
	padding: 0 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.orderBtn_left{
	display: flex;
	align-items: center;
}
.orderBtn_leftTxt{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
.orderBtn_leftprice{
	font-size: 30rpx;
	font-family: DIN;
	font-weight: bold;
	color: #E94545;
}
.orderBtn_right{
	display: flex;
	align-items: center;
}
.orderBtn_right_btn1{
	width: 136rpx;
	height: 54rpx;
	background: #FFFFFF;
	border: 2rpx solid #E2E2E2;
	border-radius: 28rpx;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
	display:flex;
	justify-content: center;
	align-items: center;
	margin-right: 10rpx;
}
.orderBtn_right_btn2{
	width: 136rpx;
	height: 54rpx;
	background:#5DB737;
	border: 2rpx solid #E2E2E2;
	border-radius: 28rpx;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #fff;
	display:flex;
	justify-content: center;
	align-items: center;
}
.orderBtn_right_btn3{
	width: 136rpx;
	height: 54rpx;
	background:#F2B832;
	border: 2rpx solid #E2E2E2;
	border-radius: 28rpx;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #fff;
	display:flex;
	justify-content: center;
	align-items: center;
}
/* 没有更多了 */
.notList{
	width: 100%;
	height:100rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size:24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #CCCCCC;
	background-color: #f5f5f5;
}



</style>
