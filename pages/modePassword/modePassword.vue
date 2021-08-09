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
		
		<view class="InpBox">
			<view class="itemInpbox">
				<view class="itemTile">
					原密码
				</view>
				<view class="itemInp">
					<input type="password" placeholder-class="inNatxt" placeholder="输入原密码" value="" />
				</view>
			</view>
			<view class="itemInpbox">
				<view class="itemTile">
					新密码
				</view>
				<view class="itemInp">
					<input type="password" placeholder-class="inNatxt" placeholder="设置新密码" value="" />
				</view>
			</view>
			<view class="itemInpbox">
				<view class="itemTile">
					确认密码
				</view>
				<view class="itemInp">
					<input type="password" placeholder-class="inNatxt" placeholder="确认密码" value="" />
				</view>
			</view>
			
			<view class="regbtnBox">
				确认修改
			</view>
			
		</view>
		
		
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				status_bar:true,
				title:'修改密码',
				second:60,
				showText:true,
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
	

.InpBox{
	width: 100%;
	padding: 0 30px;
	display: flex;
	flex-direction: column;
	padding-top: 44rpx;
	box-sizing: border-box;
}
.itemInpbox{
	display: flex;
	padding: 12px 30rpx;
	box-sizing: border-box;
	align-items: center;
	background-color: #fff;
}
.itemTile{
	font-size: 14px;
	font-family: PingFang SC;
	font-weight: 500;
	line-height: 22px;
	color: #333333;
	width: 80px;
}
.itemInp{
	width: 140px;
}
.getYzm{
	width: 83px;
	height: 27px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:#5DB737;
	border-radius: 12px;
	color: #fff;
	font-size: 12px;
}
.getYzms{
	width: 83px;
	height: 27px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color:#CCCCCC;
	border-radius: 12px;
	color: #fff;
	font-size: 12px;
}
.regbtnBox{
	width: 305px;
	height: 45px;
	background: #5DB737;
	opacity: 1;
	border-radius: 23px;
	margin-top:50px ;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-family: PingFang SC;
	font-weight: bold;
	color: #FFFFFF;
}
.goLogin{
	width: 305px;
	height: 45px;
	background-color: #EEEEEE;
	opacity: 1;
	border-radius: 23px;
	margin-top:10px ;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	font-family: PingFang SC;
	font-weight: bold;
	color: #5DB737;
}
</style>
