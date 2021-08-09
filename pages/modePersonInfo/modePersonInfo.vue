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
		<!-- 个人信息 -->
		<view class="personInfobox">
			<view class="personInfo">
				<view class="headImgbox">
					<view class="headTxt">
						点击更换头像：
					</view>
					<view class="Imgbox">
						<image :src="imgsr" mode=""></image>
					</view>
				</view>
				<view class="modeUserName">
					<view class="headTxt">
						用户名
					</view>
					<input type="text" :value="name" placeholder="请输入用户名" />
				</view>
			</view>
		</view>
	
		<!-- 保存 -->
		<view class="subBtnBox">
			<view class="subBtn">
				保存
			</view>
		</view>
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				status_bar:true,
				title:'修改个人信息',
				second:60,
				showText:true,
				name:'张三',
				imgsr:'/static/img/mys.png'
			}
		},
		methods: {
			// 返回
			goBack() {
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
	/* 个人信息 */
	.personInfobox{
		width: 100%;
		
		padding: 0 30rpx;
		padding-top: 44rpx;
		box-sizing: border-box;
	}
	.personInfo{
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		height: 400rpx;
	}
	.headImgbox{
		width: 100%;
		height: 200rpx;
		display: flex;
		align-items: center;
		border-bottom: 2rpx solid #ccc;
	}
	.headTxt{
		width: 300rpx;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.Imgbox{
		width: 132rpx;
		height: 132rpx;
		border-radius: 50%;
		overflow: hidden;
		border: 2rpx solid #ccc;
	}
	.Imgbox image{
		width: 100%;
		height: 100%;
	}
	.modeUserName{
		width: 100%;
		height: 200rpx;
		display: flex;
		align-items: center;
	}
	.subBtnBox{
		padding: 0 30rpx;
		margin-top: 40rpx;
		box-sizing: border-box;
	}
	.subBtn{
		width: 100%;
		height: 90rpx;
		border-radius: 46rpx;
		background-color: #5DB737;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}
</style>
