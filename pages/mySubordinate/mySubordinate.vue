<template>
	<view>
		<!-- 顶部tabbar -->
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 我的下级列表 -->
		<view class="subordinateList">
			<view class="subordinateItemBox">
				<view class="subordinateItem">
					<view class="subordinateItemL">
						<view class="subordinateItem_img">
							<image src="../../static/yjqt/ban3.png" mode=""></image>
						</view>
						<view class="subordinateItem_Txt">
							测试
						</view>
					</view>
					<view class="subordinateItemR">
						2021.07.10  15:02:01
					</view>
				</view>
			</view>
			<view class="subordinateItemBox">
				<view class="subordinateItem">
					<view class="subordinateItemL">
						<view class="subordinateItem_img">
							<image src="../../static/yjqt/ban3.png" mode=""></image>
						</view>
						<view class="subordinateItem_Txt">
							测试
						</view>
					</view>
					<view class="subordinateItemR">
						2021.07.10  15:02:01
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
				title:"我的下级"
			}
		},
		methods: {
			// 返回
			goBack(){
				uni.navigateBack()
			},
		}
	}
</script>

<style>
	page{
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
/* 我的下级列表 */
	.subordinateList{
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
		
	}
	.subordinateItemBox{
		width: 100%;
		box-sizing: border-box;
		padding: 0 30rpx;
		background-color: #fff;
		border-radius: 8rpx;
	}
	.subordinateItem{
		width: 100%;
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.subordinateItem:not(:last-child){
		border-bottom: 2rpx solid #F5F5F5;
	}
	.subordinateItemL{
		display: flex;
		align-items: center;
	}
	.subordinateItem_img{
		width: 56rpx;
		height: 56rpx;
		border-radius: 50%;
		overflow: hidden;
	}
	.subordinateItem_img image{
		width: 100%;
		height: 100%;
	}
	.subordinateItem_Txt{
		margin-left: 14rpx;
		font-size: 26rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.subordinateItemR{
		font-size: 20rpx;
		font-family: DIN;
		font-weight: 500;
		color: #999999;
		
	}
	
</style>
