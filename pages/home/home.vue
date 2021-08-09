<template>
	<view class="content">
		<view class="getIndexBtn">
			<view class="btnGoIndex">
				即刻体验
			</view>
		</view>
		<view class="titleBox">
			<view class="titleFirst">
				绿有购
			</view>
			<view class="titleTwo">
				安全餐桌巨匠
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headerTop:''
			}
		},
		onLoad() {
		
		
		},
		onShow(){
						
		},
		methods: {
			getLogin(){
				wx.navigateTo({
					url:"pages/login/login"
				})
			}
		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100vh;
		background-color: #5DB737;
		position: relative;
	}
	.getIndexBtn{
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
		height: 120rpx;
		padding: 30rpx;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		
	}
	.titleBox {
		position: absolute;
		bottom: 30px;
		height: 60px;
		left: 0;
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	.titleFirst {
		font-size: 36px;
		font-family: PingFang SC;
		font-weight: 500;
		line-height: 20px;
		color: #FFFFFF;
		letter-spacing: 20px;
		display: flex;
		justify-content: center;
	}

	.titleTwo {
		font-size: 15px;
		font-family: PingFang SC;
		font-weight: 500;
		color: #FFFFFF;
		line-height: 20px;
		width: 100%;
		display: flex;
		letter-spacing: 10px;
		justify-content: center;
	}
	.btnGoIndex{
		width: 100%;
		height: 60rpx;
		/* border: 1rpx solid #fff; */
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32rpx;
		color: #fff;
		
	}
</style>
