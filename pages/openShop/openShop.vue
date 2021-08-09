<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view @click="goBack()" slot="left" class="gobackBtn iconfont icon-fanhui"></view>
			<view class="orderTitle">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 内容 -->
		<view class="contIntBox">
			<view class="alTitleBox">
				基本信息
			</view>
			<view class="contBx">
				<view class="contItem">
					<view class="contItemBox">
						<view class="contItemTxt">
							店铺名称
						</view>
						<input class="inpst" type="text" placeholder-class="placeS" placeholder="收货人姓名" value="" />
					</view>
				</view>
				<view class="contItem">
					<view class="contItemBox">
						<view class="contItemTxt">
							法人姓名
						</view>
						<input class="inpst" type="text" placeholder-class="placeS" placeholder="收货人姓名" value="" />
					</view>

				</view>
				<view class="contItem">
					<view class="contItemBox">
						<view class="contItemTxt">
							联系电话
						</view>
						<input class="inpst" type="text" placeholder-class="placeS" placeholder="收货人手机号" value="" />
					</view>

				</view>
				<view class="contItem">
					<view class="contItemBox">
						<view class="contItemTxt">
							所在地区
						</view>
						<pickerAddress @change="change">
							<text class="placeS" v-if="txt==''">选择地址</text>
							<text class="placeSs" v-else>{{txt}}</text>
						</pickerAddress>
					</view>
				</view>
				<view class="contItem">
					<view class="contItemBox">
						<view class="contItemTxt">
							详细地址
						</view>
						<input class="inpst" type="text" placeholder-class="placeS" placeholder="街道门牌、楼层房间号等信息"
							value="" />
					</view>

				</view>
			</view>
		</view>
		<!-- 营业执照 -->
		<view class="businessLine">
			<view class="alTitleBox">
				营业执照
			</view>
			<view class="upImgbox">
				<view v-if="avatar!=''" class="upImg">
					<image :src="avatar" mode=""></image>
				</view>
				<view @click="ChooseImage()" v-else class="upImg">
					<view class="upImg_icon iconfont icon-zhaopian"></view>
					<view class="upImg_txt">
						清晰完整的营业执照照片
					</view>
				</view>
			</view>
		</view>
		<!-- 提交 -->
		<view class="subMitBox">
			<view class="subBtn">
				提交
			</view>
		</view>
	</view>
</template>

<script>
	import pickerAddress from '../../components/pickerAddress/pickerAddress.vue';
	export default {
		components: {
			pickerAddress
		},
		data() {
			return {
				status_bar:true,
				title: '我要开店',
				treatmentStatu: {
					checked: false
				},
				txt: '',
				avatar:'',
			}
		},
		methods: {
			// 返回
			goBack() {
				uni.navigateBack()
			},
			change(data) {
				this.txt = data.data.join('')
				console.log(data.data.join(''))
			},
			switchChange(e) {
				let value = e.target.value
				let that = this
				this.$set(this.treatmentStatu, 'checked', value) // 将点击改变的状态赋给treatmentStatu.checked
				if (value && !this.havePromise) {
					uni.showModal({
						title: '提示',
						content: '设为默认地址',
						success: function(res) {
							if (res.confirm) {
								that.$emit('changePage', 1)
								console.log('用户点击确定')
							} else if (res.cancel) {
								that.$set(that.treatmentStatu, 'checked', false) // 手动修改switch的状态，视图会同步更新
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			// 营业执照上传
			ChooseImage() {
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function(res) {
						that.avatar=res.tempFilePaths[0]
						const tempFilePaths = res.tempFilePaths;
						// console.log(that.avatar)
						that.avatar = res.tempFilePaths[0];
						 uni.uploadFile({
							url: 'http://yjsc.28xr.com/api/common/upload',
							filePath: tempFilePaths[0],
							name: 'file',
							// formData: {
							// 	'user': 'test'
							// },
							success: function(res) {
								console.log()
								that.avatar=JSON.parse(res.data).data.fullurl;
							}
						});
			
						
					},
					error: function(e) {
						console.log(e);
					}
				});
			},
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

	/* 内容 */
	.contIntBox {
		width: 100%;
		padding: 30rpx;
		box-sizing: border-box;
	}
	.alTitleBox {
		width: 100%;
		padding: 30rpx 0;
		box-sizing: border-box;
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}
	.contBx {
		width: 100%;
		border-radius: 8rpx;
		background-color: #fff;
	}
	.contItem {
		height: 100rpx;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.contItemBox {
		display: flex;
		height: 100rpx;
		box-sizing: border-box;
		align-items: center;
		border-bottom: 2rpx solid #EEEEEE;
	}
	.contItemTxt {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
		min-width: 140rpx;
	}
	.inpst {
		width: 400rpx;
		height: 60rpx;
	}
	.placeS {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #CCCCCC;
	}
	.placeSs {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #333333;
	}
	.defaultBtn {
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin-top: 20rpx;
	}
	/* 营业执照 */
	.businessLine{
		margin-top: 20rpx;
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
	}
	.upImg{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.upImg image{
		width: 100%;
		height: 100%;
	}
	.upImgbox{
		width: 336rpx;
		height: 240rpx;
		background: #FFFFFF;
		opacity: 1;
		border-radius: 8rpx;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.upImgbox image{
		width: 100%;
		height: 100%;
	}
	.upImg_icon{
		font-size: 40rpx;
		color: #CCCCCC;
	}
	.upImg_txt{
		margin: 20rpx;
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #CCCCCC;
		width:160rpx;
		text-align: center;
	}
	/* 提交 */
	.subMitBox{
		width: 100%;
		padding: 0 30rpx;
		box-sizing: border-box;
		margin-top:80rpx;
	}
	.subBtn{
		width: 100%;
		height: 90rpx;
		background: #5DB737;
		border-radius: 46rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
