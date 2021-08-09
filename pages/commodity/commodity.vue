<template>
	<view class="content">
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
		<view class="commitdyBox">
			<view class="leftNavBox">
				<view @tap="curretnNav(item.id)" class="leftNavChild"  :class="{leftNavChildses:currtens==item.id}" v-for="(item,index) in commodutyNavList" :key='index' >
					{{item.name}}
				</view>
			</view>
			<view class="rightContBox">
				<!-- 商品子类型导航 -->
				<view class="topNavBox">
					<view class="topNavChild topActiv">
						核果类
					</view>
					<view class="topNavChild">
						核果类
					</view>
					<view class="topNavChild">
						核果类1
					</view>
					<view class="topNavChild">
						核果类
					</view>
				</view>
				<view class="right_scollBox">
					<scroll-view class="rightScroll" scroll-y="true">
						<view v-for="(item,index) in conmmidutyList" :key="item.id" class="right_commitChild">
							<view class="commit_Img">
								<image :src="item.imgS" mode=""></image>
							</view>
							<view class="commit_cont">
								<view class="commit_cont_title">
									<text v-if="item.isZy==1" class="txtZy">自营</text>
									<text>{{item.name}}</text>
								</view>
								<view class="commit_cont_bot">
									<view class="left_bot">
										<text class="price1">￥{{item.price1}}</text>
										<text class="price2">￥{{item.price2}}</text>
									</view>
									<view class="right_bot">
										<text class="right_boticon iconfont icon-zengjia"></text>
									</view>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view>
			<view-tabbar :current="1"></view-tabbar>
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
				currtens:1,
				sears: '西瓜',
				selTxt: '成都市二人民医院',
				commodutyNavList: [{
						id: 1,
						name: '蔬菜'
					},
					{
						id: 2,
						name: '水果'
					},
					{
						id: 3,
						name: '食用菌和园艺作物'
					},
					{
						id: 4,
						name: '香辛料作物'
					},
					{
						id: 5,
						name: '香辛料作物'
					},
					{
						id: 6,
						name: '香辛料作物'
					},
					{
						id: 7,
						name: '香辛料作物'
					},
					{
						id: 8,
						name: '野生采集'
					},
					{
						id: 9,
						name: '蔬菜'
					},
					{
						id: 10,
						name: '蔬菜'
					},
					{
						id: 11,
						name: '蔬菜'
					},
				],
				conmmidutyList:[
					{id:1,imgS:'/static/yjqt/commitImg/coms_1.png',isZy:1,price1:18,price2:30,name:'西瓜一号'},
					{id:2,imgS:'/static/yjqt/commitImg/coms_2.png',isZy:0,price1:18,price2:30,name:'西瓜二号'},
					{id:3,imgS:'/static/yjqt/commitImg/coms_3.png',isZy:0,price1:18,price2:30,name:'西瓜三号'},
					{id:4,imgS:'/static/yjqt/commitImg/coms_4.png',isZy:1,price1:18,price2:30,name:'西瓜四号'},
					{id:5,imgS:'/static/yjqt/commitImg/coms_5.png',isZy:0,price1:18,price2:30,name:'西瓜五号'},
					{id:6,imgS:'/static/yjqt/commitImg/coms_6.png',isZy:1,price1:18,price2:30,name:'西瓜六号'},
					{id:7,imgS:'/static/yjqt/commitImg/coms_7.png',isZy:0,price1:18,price2:30,name:'西瓜七号'},
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
		curretnNav(e){
			this.currtens = e
		}
		}
	}
</script>

<style>
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

	.commitdyBox {
		width: 100%;
		display: flex;
		box-sizing: border-box;
	}

	/* 商品类型导航 */
	.leftNavBox {
		width: 160rpx;
		background-color: #fff;
		display: flex;
		flex-direction: column;
	}

	.leftNavChild {
		width: 100%;
		height: 100rpx;
		display: flex;
		padding: 14rpx 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		justify-content: center;
		align-items: center;
	}
	.leftNavChildses{
		width: 100%;
		height: 100rpx;
		display: flex;
		padding: 14rpx 30rpx;
		box-sizing: border-box;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
		justify-content: center;
		align-items: center;
		background-color: #F5F5F5;
	}
	.rightContBox {
		width: 590rpx;
		height:1100rpx;
		background-color: #f5f5f5;
		display: flex;
		flex-direction: column;
	}

	.Placs {
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #CCCCCC;
	}

	/* 商品子类型导航 */
	.topNavBox {
		height: 80rpx;
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		background-color: #fff;
		justify-content: space-between;
	}

	.topNavChild {
		padding: 10rpx 24rpx;
		border-radius: 8rpx;
		box-sizing: border-box;
		background-color: #F5F5F5;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}
	.topActiv{
		background-color: #5DB737;
		color: #FFFFFF;
	}
	
	.right_scollBox{
		width: 100%;
		background-color: red;
		
	}
	.rightScroll{
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		white-space: nowrap;
		height: 1000rpx;
		background-color: #F5F5F5;
	}
	.right_commitChild{
		width: 100%;
		height: 160rpx;
		box-sizing: border-box;
		border-radius: 8rpx;
		background-color: #fff;
		display: flex;
		padding: 20rpx;
		box-sizing: border-box;

	}
	.right_commitChild:not(:last-child){
		margin-bottom: 20rpx;
	}
	.commit_Img{
		width: 120rpx;
		height: 120rpx;
	}
	.commit_Img image{
		width: 100%;
		height: 100%;
	}
	.commit_cont{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-left: 20rpx;
	}
	.commit_cont_title{
		max-width: 330rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space: nowrap;
	}
	.commit_cont_bot{
		display: flex;
		justify-content: space-between;
		width: 340rpx;
		align-items: center;
	}
	.left_bot{
		display: flex;
	}
	.txtZy{
		background-color: #F2B832;
		padding: 6rpx 10rpx;
		font-size: 22rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		border-radius: 8rpx;
	}
		
	.price1{
		font-size: 32rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
		display: flex;
		align-items: center;
	}
	.price2{
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 400;
		color: #999999;
		display: flex;
		align-items: center;
		text-decoration:line-through
	}
	.right_bot{
		width: 32rpx;
		height: 32rpx;
		border-radius: 50%;
		background-color: #5DB737;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size:16rpx;
	}
	.right_boticon{
		font-size: 16rpx;
	}
</style>
