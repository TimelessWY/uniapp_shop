<template>
	<view class="content">
		<!-- 顶部tabbar -->
		
		<uni-nav-bar :fixed="true" background-color="#5DB737" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="toptabbaricon iconfont icon-fanhui"></view>
			<view class="toptabbartxt">{{title}}</view>
		</uni-nav-bar> 
		<!-- 导航 -->
		<view class="topNavBox">
			<view class="navbox">
				<view class="topNavs">
					<view @click="getwuyou()" class="topNavsItem" :class="{bgff:statusNav==1}">
						无忧邮寄
					</view>
					<view @click="getdaodian()" class="topNavsItem2" :class="{bgff:statusNav==2}">
						到店自提
					</view>
				</view>
			</view>
		</view>
		<!-- 无忧邮寄 -->
		<view v-if="statusNav==1" class="wuyouBox">
			<view class="livewyBox">
				<view class="livewyLeft">
					<view class="liveNameMobile">
						<text class="liveName">黄小米</text>
						<text class="liveMobile">18380587806</text>
					</view>
					<view class="liveInfo">
						成华区416亿元家属区-东南门二环路北四段4号附4号
					</view>
				</view>
				<view class="livewyRight">
					<text class="livewyRitxt">修改</text>
					<text class="livewyicon iconfont icon-fanhui-copy" ></text>
				</view>
				
			</view>
			<view class="commitdyItem">
				<view class="commitImg">
					<image src="/static/yjqt/commitImg/coms_10.png" mode=""></image>
				</view>
				<view class="commitdyCont">
					<view class="commitdyName">
						特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
					</view>
					<view class="commitdspec">
						白色
					</view>
					<view class="commitpricBtn">
						<view class="lefprice">
							￥{{price}}
						</view>
						<view class="commiteyBtnbox">
							<view @click="cutAction()" class="iconBoxser" :class="{noicon:num==1}">
								<text class="iconprcBtn iconfont icon-jianqu"></text>
							</view>
							
							<view class="commitdNumBox">
								<text class="commitNum">{{num}}</text>
							</view>
							<view @click="addAction()" class="iconBoxser" :class="{noicon:num==numall}">
								<text class="iconprcBtn iconfont icon-zengjia"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="commitdyItem">
				<view class="commitImg">
					<image src="/static/yjqt/commitImg/coms_12.png" mode=""></image>
				</view>
				<view class="commitdyCont">
					<view class="commitdyName">
						特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
					</view>
					<view class="commitdspec">
						白色
					</view>
					<view class="commitpricBtn">
						<view class="lefprice">
							￥{{price}}
						</view>
						<view class="commiteyBtnbox">
							<view @click="cutAction()" class="iconBoxser" :class="{noicon:num==1}">
								<text class="iconprcBtn iconfont icon-jianqu"></text>
							</view>
							
							<view class="commitdNumBox">
								<text class="commitNum">{{num}}</text>
							</view>
							<view @click="addAction()" class="iconBoxser" :class="{noicon:num==numall}">
								<text class="iconprcBtn iconfont icon-zengjia"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="leaMsg">
				<view class="leftTles">
					留言
				</view>
				<view class="rigtInputs">
					<input class="rightInpu" type="text" value="" placeholder-class="ritplr" placeholder="请输入" />
				</view>
			</view>
			<view class="firepoint">
				<view class="firepointItem">
					<view class="firepointItem_title">
						商品金额
					</view>
					<view class="firepointItem_cont">
						365.23
					</view>
				</view>
				<view class="firepointItem">
					<view class="firepointItem_title">
						运费
					</view>
					<view class="firepointItem_cont">
						365.23
					</view>
				</view>
				<view class="firepointItem">
					<view class="firepointItem_title">
						积分
					</view>
					<view class="firepointItem_poin">
						<view class="usedpoin" v-if="point>0">
							-{{point}}(已使用{{point}}积分)
						</view>
						<view v-else class="usedpoinnot">
							无可用积分
						</view>
						<view class="useicon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="paymode">
					<view v-if="payselectbox==true" class="payselectbox">
						<view @click="setPay(item.sta)" v-for="(item,index) in payselecList" :key='index' class="payselectItem">
							<view class="rigtImg">
								<image :src="item.imgsrc" mode=""></image>
							</view>
							<view class="rigtxt">
								{{item.name}}
							</view>
						</view>
						
					</view>
					<view class="firepointItem_title">
						支付方式
					</view>
					<view @click="opPaysetbox()" class="rigtPaymode">
						<view v-if="staset==1" class="pays">
							<view class="rigtImg">
								<image src="/static/img/zf1.jpeg" mode=""></image>
							</view>
							<view class="rigtxt">
								支付宝支付
							</view>
						</view>
						<view v-if="staset==2" class="pays">
							<view class="rigtImg">
								<image src="/static/img/zf2.jpeg" mode=""></image>
							</view>
							<view class="rigtxt">
								微信支付
							</view>
						</view>
						<view class="useicon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
			</view>
			<view class="btxn"></view>
		</view>
		<!-- 到店自提 -->
		<view v-if="statusNav==2" class="wuyouBox">
			<view class="livewyBox2">
				<view class="stopInfoBox">
					<view class="shopinfoLeft">
						<image src="/static/yjqt/shopImg.png" mode=""></image>
					</view>
					<view class="ritLive">
						<view class="ritLive_title">
							周大姐干杂店
						</view>
						<view class="ritLive_cont">
							成华区416医院家属区-东南门二环路北四段4号附4号
						</view>
					</view>
				</view>
				<view class="tipsBox">
					下单后即可到店自提，只需出示支付订单，确认提货
				</view>
			</view>
			<view class="commitdyItem">
				<view class="commitImg">
					<image src="/static/yjqt/commitImg/coms_12.png" mode=""></image>
				</view>
				<view class="commitdyCont">
					<view class="commitdyName">
						特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
					</view>
					<view class="commitdspec">
						白色
					</view>
					<view class="commitpricBtn">
						<view class="lefprice">
							￥{{price}}
						</view>
						<view class="commiteyBtnbox">
							<view @click="cutAction()" class="iconBoxser" :class="{noicon:num==1}">
								<text class="iconprcBtn iconfont icon-jianqu"></text>
							</view>
							
							<view class="commitdNumBox">
								<text class="commitNum">{{num}}</text>
							</view>
							<view @click="addAction()" class="iconBoxser" :class="{noicon:num==numall}">
								<text class="iconprcBtn iconfont icon-zengjia"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="commitdyItem">
				<view class="commitImg">
					<image src="/static/yjqt/com_2.png" mode=""></image>
				</view>
				<view class="commitdyCont">
					<view class="commitdyName">
						特仑苏牛奶1箱 A优质牧场新鲜纯牛奶250mlx12盒
					</view>
					<view class="commitdspec">
						白色
					</view>
					<view class="commitpricBtn">
						<view class="lefprice">
							￥{{price}}
						</view>
						<view class="commiteyBtnbox">
							<view @click="cutAction()" class="iconBoxser" :class="{noicon:num==1}">
								<text class="iconprcBtn iconfont icon-jianqu"></text>
							</view>
							
							<view class="commitdNumBox">
								<text class="commitNum">{{num}}</text>
							</view>
							<view @click="addAction()" class="iconBoxser" :class="{noicon:num==numall}">
								<text class="iconprcBtn iconfont icon-zengjia"></text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="leaMsg">
				<view class="leftTles">
					留言
				</view>
				<view class="rigtInputs">
					<input class="rightInpu" type="text" value="" placeholder-class="ritplr" placeholder="请输入" />
				</view>
			</view>
			<view class="firepoint">
				<view class="firepointItem">
					<view class="firepointItem_title">
						商品金额
					</view>
					<view class="firepointItem_cont">
						365.23
					</view>
				</view>
				<view class="firepointItem">
					<view class="firepointItem_title">
						积分
					</view>
					<view class="firepointItem_poin">
						<view class="usedpoin" v-if="point>0">
							-{{point}}(已使用{{point}}积分)
						</view>
						<view v-else class="usedpoinnot">
							无可用积分
						</view>
						<view class="useicon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
				<view class="paymode">
					<view v-if="payselectbox==true" class="payselectbox">
						<view @click="setPay(item.sta)" v-for="(item,index) in payselecList" :key='index' class="payselectItem">
							<view class="rigtImg">
								<image :src="item.imgsrc" mode=""></image>
							</view>
							<view class="rigtxt">
								{{item.name}}
							</view>
						</view>
						
					</view>
					<view class="firepointItem_title">
						支付方式
					</view>
					<view @click="opPaysetbox()" class="rigtPaymode">
						<view v-if="staset==1" class="pays">
							<view class="rigtImg">
								<image src="/static/img/zf1.jpeg" mode=""></image>
							</view>
							<view class="rigtxt">
								支付宝支付
							</view>
						</view>
						<view v-if="staset==2" class="pays">
							<view class="rigtImg">
								<image src="/static/img/zf2.jpeg" mode=""></image>
							</view>
							<view class="rigtxt">
								微信支付
							</view>
						</view>
						<view class="useicon iconfont icon-fanhui-copy"></view>
					</view>
				</view>
			</view>
			<view class="btxn"></view>
		</view>
		<!-- 底部按钮 -->
		<view class="botmBtnbox">
			<view class="botmBtnleft">
				<view class="botmBtnleftTx1">
					实付金额：
				</view>
				<view class="botmBtnleftTx2">
					￥360.00
				</view>
			</view>
			<view class="botmBtnright">
				立即支付
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status_bar:true,
				title:'确认订单',
				statusNav:2,
				num:2,
				price:33.2,
				numall:6,
				point:0,
				payselectbox:false,
				payselecList:[
					{sta:1,name:'支付宝支付',imgsrc:'/static/img/zf1.jpeg'},
					{sta:2,name:'微信支付',imgsrc:'/static/img/zf2.jpeg'},
				],
				staset:2
			}
		},
		methods: {
			// 无忧邮寄
			getwuyou(){
				this.statusNav=1
			},
			// 到店自提
			getdaodian(){
				this.statusNav=2
			},
			addAction(){
				if (this.num >= parseInt(this.numall)) {
					uni.showToast({
						title: '不能再多了~',
						icon: 'none'
					});
					return true
				}
				this.num++;
			},
			cutAction(){
				if (this.num > 1) {
					this.num--;
				} else {
					uni.showToast({
						title: '不能再少了~',
						icon: 'none'
					});
				}
			},
			
			// 选择支付方式后关闭选择框
			setPay(sta){
				this.staset=sta;
				this.payselectbox=false;
			},
			// 选择支付
			opPaysetbox(){
				this.payselectbox=true
			}
		}
	}
</script>

<style>
page{
	background-color: #F5F5F5;
}
/* 顶部tabbar */
.toptabbarBox{
	width: 100%;
	height: 88rpx;
	position: fixed;
	top: 0;
	left: 0;
	background-color: #5DB737;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	z-index: 999;
	
}
.toptabbaricon{
	font-size: 36rpx;
	color: #fff;
}
.toptabbartxt{
	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #FFFFFF;
}
.topNavBox{
	width: 100%;
	padding: 0 20rpx;
	height: 238rpx;
	box-sizing: border-box;
	background-color: #5DB737;
	display: flex;
	justify-content: center;
	flex-wrap: wrap-reverse;
}
.navbox{
	width: 710rpx;
	height: 120rpx;
	background-color: #fff;
	border-top-left-radius: 20rpx;
	border-top-right-radius: 20rpx;
}
.topNavs{
	width: 100%;
	height: 100rpx;
	display: flex;
}
.topNavsItem{
	width: 50%;
	height: 100rpx;
	border-radius: 20rpx 0rpx 20rpx 0rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #EEEEEE;
	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
}
.topNavsItem2{
	width: 50%;
	height: 100rpx;
	border-radius: 0rpx 20rpx 0rpx 20rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:#EEEEEE;
	font-size: 36rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
}
.bgff{
	background-color: #fff;
}
/* 无.忧邮寄 */
.wuyouBox{
	width: 100%;
	padding:0 20rpx;
	box-sizing: border-box;
	margin-bottom: 140rpx;
}
.livewyBox{
	width: 100%;
	height: 184rpx;
	background-color: #fff;
	border-bottom-left-radius: 20rpx;
	border-bottom-right-radius: 20rpx;
	padding: 0rpx 30rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	margin-bottom: 20rpx;
}

.livewyLeft{
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	
}
.liveNameMobile{
	display: flex;
	margin-bottom: 20rpx;
}
.liveName{
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
}
.liveMobile{
	margin-left: 14rpx;
	font-size: 35rpx;
	font-family: DIN;
	font-weight: 500;
	color: #333333;
}
.liveInfo{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	width: 500rpx;
	color: #999999;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}
.livewyRight{
	display: flex;
	align-items: center;
	
}
.livewyRitxt{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
.livewyicon{
	font-size: 22rpx;
	color: #999999;
}
.commitdyItem{
	padding: 30rpx;
	box-sizing: border-box;
	width: 100%;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
	
}
.commitdyItem:not(:last-child){
	margin-bottom: 4rpx;
}
.commitImg{
	width: 132rpx;
	height: 132rpx;
	border: 2rpx solid #E2E2E2;
	border-radius: 8rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.commitImg image{
	width: 106rpx;
	height: 106rpx;
}
.commitdyCont{
	margin-left: 20rpx;
	width: 500rpx;
}
.commitdyName{
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
.commitdspec{
	padding: 18rpx 0;
	font-size:24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
}
.commitpricBtn{
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.lefprice{
	font-size: 36rpx;
	font-family: DIN;
	font-weight: bold;
	color: #E94545;
}
.commiteyBtnbox{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.iconBoxser{
	width: 56rpx;
	height: 56rpx;
	background-color: #EEEEEE;
	border-radius: 8rpx;
	display: flex;
	justify-content: center;
	align-items: center;
}
.iconprcBtn{
	width: 24rpx;
}
.commitdNumBox{
	height: 56rpx;
	padding: 0 32rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 24rpx;
	font-family: DIN;
	font-weight: bold;
	color: #333333;
	margin: 0 20rpx;
	background-color: #EEEEEE;
	border-radius: 8rpx;
}
.noicon{
	color: #CCCCCC;
}
.leaMsg{
	width: 100%;
	height: 80rpx;
	background-color: #fff;
	margin-top: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	box-sizing: border-box;
}
.leftTles{
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.rigtInputs{
	display: flex;
	align-items: center;
}
.rightInpu{
	text-align: right;
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.ritplr{
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #CCCCCC;
}
.firepoint{
	width: 100%;
	height: 300rpx;
	border-radius: 8rpx;
	margin-top:20rpx ;
}
.firepointItem{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
	background-color: #fff;
	height: 100rpx;
	width: 100%;
}
.firepointItem_title{
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.firepointItem_cont{
	font-size: 26rpx;
	font-family: DIN;
	font-weight: 500;
	color: #333333;
}
.firepointItem_poin{
	display: flex;
	align-items: center;
	height: 100%;
}
.usedpoin{
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #E94545;
}
.useicon{
	font-size: 22rpx;
	color: #999999;
}
.usedpoinnot{
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #CCCCCC;
}
.paymode{
	padding: 0 30rpx;
	box-sizing: border-box;
	margin-top: 20rpx;
	width: 100%;
	height: 100rpx;
	background-color: #fff;
	border-radius: 8rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
.payselectbox{
	height: 200rpx;
	width: 240rpx;
	position: absolute;
	top: -200rpx;
	right: 30rpx;
	border-radius: 8rpx;
}
.pays{
	display: flex;
	align-items: center;
}
.payselectItem{
	display: flex;
	align-items: center;
	justify-content:space-between;
	padding: 0 20rpx;
	box-sizing: border-box;
	height: 100rpx;
	width: 100%;
	background-color: #FFF;
	border: 2rpx solid #ccc;
}
.rigtPaymode{
	display: flex;
	align-items: center;
}
.rigtxt{
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #333333;
}
.rigtImg{
	width: 32rpx;
	height: 32rpx;
	margin-right: 20rpx;
}
.rigtImg image{
	width: 32rpx;
	height: 32rpx;
}
/* 底部按钮 */
.botmBtnbox{
	width: 100%;
	height: 100rpx;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	padding: 0 30rpx;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.botmBtnleft{
	display: flex;
	align-items: center;
}
.botmBtnleftTx1{
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #666666;
}
.botmBtnleftTx2{
	font-size: 36rpx;
	font-family: DIN;
	font-weight: bold;
	color: #E94545;
}
.botmBtnright{
	width: 240rpx;
	height: 80rpx;
	background: #5DB737;
	border-radius: 40rpx;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color:#fff;
}
/* 站位盒子 */
.btxn{
	width: 100%;
	height: 100rpx;
}

/* 到店自提 */
.livewyBox2{
	width: 100%;
	height: 244rpx;
	background-color: #fff;
	border-bottom-left-radius: 20rpx;
	border-bottom-right-radius: 20rpx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 20rpx;
}
.stopInfoBox{
	width:100%;
	height: 120rpx;
	margin-top: 20rpx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30rpx;
}
.tipsBox{
	width: 100%;
	height: 72rpx;
	background: #FFF5DF;
	border-radius:8rpx;;
	display: flex;
	align-items: center;
	padding: 0 30rpx;
	box-sizing: border-box;
	justify-content: center;
	font-size: 26rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #666666;
}
.shopinfoLeft{
	width: 120rpx;
	height: 120rpx;
	border-radius: 16rpx;
	overflow: hidden;
}
.shopinfoLeft image{
	width: 100%;
	height: 100%;
}
.ritLive{
	margin-left: 28rpx;
	width: 500rpx;
}
.ritLive_title{
	font-size: 32rpx;
	font-family: PingFang SC;
	font-weight: bold;
	color: #333333;
	overflow: hidden;
	text-overflow:ellipsis;
	white-space: nowrap;
}
.ritLive_cont{
	margin: 10rpx;
	font-size: 24rpx;
	font-family: PingFang SC;
	font-weight: 500;
	color: #999999;
	text-overflow: -o-ellipsis-lastline;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
}








</style>
