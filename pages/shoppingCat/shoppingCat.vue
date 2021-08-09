<template>
	<view>
		<!-- 顶部tabbar -->
		<uni-nav-bar :fixed="true"  background-color="#FFFFFF" :status-bar="status_bar">
			<view v-if="onsshow" slot="left" class="navbarright">
				<text @click="clickNavRight()" v-if="sys_show">管理</text>
				<text @click="clickNavRight()" v-else>取消</text>
			</view>
			<view class="navbarcont">{{title}}</view>
			<view slot="right" class="">
			</view>
		</uni-nav-bar>
		<!-- 当购物车没数据时 -->
		<view v-if="cartData.list.length==0" class="noneshoppCat">
			<view class="getcommitdyBox">
				<view class="getcommitdyCont">
					<view class="getCommitImg">
						<image src="/static/img/shoppingCatnull.png" mode=""></image>
					</view>
					<view class="shopcatTxt">
						购物车还是空的哦
					</view>
					<view class="getCommitBtn">
						去逛逛
					</view>
				</view>
			</view>
		</view>
		<!-- 当购物车有数据时 -->
		<view v-else class="cartBox">
			<view class="cartShop" v-for="(items,index) in cartData.list" :key="index">
				<view class="cartName cartPad">
					<radio :checked="items.shopSelected==1" color="#5DB737" style="transform:scale(0.8)"
						@click="shopselect(items)" />
					<view class="cartName-box" @tap="goShop(items)">
						<!-- <image :src="items.logo" class="cartName-img"></image> -->
						<view class="tiLeft_txt">{{items.marketname}}</view>
					</view>
					<view class="cartName-go  iconfont icon-fanhui-copy" @tap="goShop(items)"></view>
				</view>
				<!-- <view class="cartLine cartPad"></view> -->
				<view v-for="(item,k) in items.cart" :key="k" class="cartCont" @click="goodSelect(items,item)">
					<view class="cartDetail">

						<view class="cartDetail-img">
							<radio :checked="item.goodsSelected==1" color="#5DB737" style="transform:scale(0.8)" />
							<view class="shopCat_img">
								<image :src="item.imgurl" class="cartDetail-imgs"></image>
							</view>
						</view>
						<view class="cartDetail-title">
							<view class="cartDetail-txt">
								{{item.goodsname}}
							</view>
							<view class="cartDetail-lab">
								{{item.skuvalue}}
							</view>
							<view class="cartNum">
								<view class="cartNum-txt">
									<view>
										¥<text class="parTxt">{{item.price}}</text>
									</view>
								</view>
								<view class="add-sub-con">
									<text class="link iconNumbtn iconfont icon-jianqu" :class="item.num==1? 'jj':'aj'"
										@click.stop="cutAction(item)"></text>
									<view class="NumBox">
										<text>{{item.num}}</text>
									</view>
									<text class="link iconNumbtn iconfont icon-zengjia"
										:class="item.num*1<item.kucun*1? 'aj':'jj'"
										@click.stop="addAction(item)"></text>
								</view>
							</view>
						</view>
					</view>

				</view>
			</view>

			<view v-if="sys_show" class="shoppBtnBox">
				<view class="All_priceBox">
					<radio :checked="cartData.allSelected==1" color="#5DB737" style="transform:scale(0.8)"
						@click="selectAllAction" />
					<view class="cart-choose" @click="selectAllAction">
						全选
					</view>
					<text style="margin-left: 40rpx;" class="priceTle">合计:</text>
					<text class="allprice">￥{{totalPrice.toFixed(2)}}</text>
				</view>
				<view class="payBtnBox" @tap="submitAction">
					立即支付
				</view>
			</view>
			<view v-else class="shoppBtnBox">
				<view class="All_priceBox">
					<radio :checked="cartData.allSelected==1" color="#5DB737" style="transform:scale(0.8)"
						@click="selectAllAction" />
					<view class="cart-choose" @click="selectAllAction">
						全选
					</view>

				</view>
				<view class="delBtnBox" @click="deleteItem">
					删除
				</view>
			</view>
		</view>


		<!-- 为你推荐 -->
		<view class="TjcommitdyBox">
			<view class="TjcommitdyTitle">
				<text>为你推荐</text>
			</view>
			<view class="shopContenBox">
				<view class="Cotens">
					<view @click="goproduceDetils()" class="ContenItem">
						<view class="contImg">
							<image src="/static/yjqt/commitImg/coms_5.png" mode=""></image>
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
								<!-- <view @click="addShopcat()" class="price_add">
									<view class="iconad iconfont icon-zengjia"></view>
								</view> -->
							</view>
						</view>
					</view>
					<view @click="goproduceDetils()" class="ContenItem">
						<view class="contImg">
							<image src="/static/yjqt/commitImg/coms_1.png" mode=""></image>
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
								<!-- <view @click="addShopcat()" class="price_add">
									<view class="iconad iconfont icon-zengjia"></view>
								</view> -->
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view>
			<view-tabbar :current="3"></view-tabbar>
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
				title: '购物车',
				status_bar: true,
				onsshow: false,
				sys_show: true,
				img: this.imgBaseUrl,
				cartData: {
					list: [{
							marketid: "0131",
							marketname: "好再来孕婴店",
							logo: "https://yiqihuijia.20080531.com/Upload/Market/202008/24/159825500113ergs.jpeg",
							shopSelected: "1",
							subTotal: "39.00",
							cart: [{
									cartid: "415",
									goodsid: "508",
									skuid: "879",
									skuvalue: "白色",
									num: "1",
									goodsname: "新生儿尿布2条装",
									marketid: "0131",
									imgurl: "/static/yjqt/commitImg/coms_1.png",
									price: "30.00",
									kucun: "300",
									goodsSelected: "1"
								},
								{
									cartid: "414",
									goodsid: "506",
									skuid: "867",
									skuvalue: "蓝色",
									num: "1",
									goodsname: "新生儿纯棉洗澡起泡擦",
									marketid: "0131",
									imgurl: '/static/yjqt/commitImg/coms_2.png',
									price: "10.00",
									kucun: "1",
									goodsSelected: "1"
								}
							]
						},
						{
							marketid: "234",
							marketname: "地平线8号旅行箱店",
							logo: "https://yiqihuijia.20080531.com/Upload/MarketM/202008/26/1598424570ah95ua.jpeg",
							shopSelected: "1",
							subTotal: "400.00",
							cart: [{
								cartid: "411",
								goodsid: "516",
								skuid: "971",
								skuvalue: "幻影黑",
								num: "1",
								goodsname: "地平线8号大容量静音万向轮旅行箱",
								marketid: "234",
								imgurl: "/static/yjqt/commitImg/coms_3.png",
								price: "400.00",
								kucun: "79",
								goodsSelected: "1"
							}]
						}
					],
					allSelected: "1",
					totalPrice: "439.00"
				},
				cart: []
			}
		},
		onShow() {
			this.getShopList();
			this.isShow();
		},
		computed: {
			//计算选中商品的总价
			totalPrice() {
				let prices = 0;
				if (!!this.cartData.list) {
					this.cartData.list.map(shopItem => {
						shopItem.cart.map(goodItem => {
							goodItem.goodsSelected == 1 ? prices += goodItem.price * goodItem.num :
								prices += 0;
						})
					})
				}
				return prices;
			}
		},
		methods: {
			// 判断有没有数据
			isShow() {
				if (this.cartData.list == '') {
					this.onsshow = false
					console.log(this.onsshow)
				} else {
					this.onsshow = true
					console.log(this.onsshow)
				}
			},
			// 去商品详情
			goproduceDetils() {
				uni.navigateTo({
					url: '/pages/commodityDetils/commodityDetils'
				})
			},
			// 管理/取消
			clickNavRight() {
				this.sys_show = !this.sys_show;
			},
			getShopList() {
				if (this.cartData.allSelected == 1) {
					this.cartData.list.forEach(shopItem => {
						shopItem.cart.forEach(goodsItem => {
							this.cart.push(goodsItem)
						})
					})
				} else {
					this.cartData.list.forEach(shopItem => {
						shopItem.cart.forEach(goodsItem => {
							if (goodsItem.goodsSelected == 1) {
								this.cart.push(goodsItem)
							}
						})
					})
				}
			},
			// 选择店铺
			shopselect(shopItem) {
				//遍历此店铺中商品 并全部选择
				if (shopItem.shopSelected == 0) {
					shopItem.shopSelected = 1
					shopItem.cart.map(goodItem => {
						goodItem.goodsSelected = 1;
						this.cart.push(goodItem)
					});
				} else {
					shopItem.shopSelected = 0
					shopItem.cart.map(goodItem => {
						goodItem.goodsSelected = 0;
					});
					this.cart = this.cart.filter((item) => {
						return item.marketid != shopItem.cart[0].marketid
					})
				}
				this.changeSelectAllBtn();
			},
			// 选择商品
			goodSelect(shopItem, goodItem) {
				// 如果商品没选中 则不选中店铺
				if (goodItem.goodsSelected == 0) {
					goodItem.goodsSelected = 1
					shopItem.isSelectShop = false;
					//店铺中商品都满足条件 则返回true
					const shopS = shopItem.cart.every(goodItem => {
						return goodItem.goodsSelected == 1;
					});

					//商品都选中  则店铺选中
					if (shopS) {
						shopItem.shopSelected = 1;
					}
					this.cart.push(goodItem)
				} else {
					goodItem.goodsSelected = 0
					shopItem.shopSelected = 0;
					this.cart.forEach((el, index) => {
						if (el.cartid == goodItem.cartid) {
							this.cart.splice(index, 1)
						}
					})
				}
				//监听全选按钮状态
				this.changeSelectAllBtn();
			},
			// 选择全部
			selectAllAction() {
				//遍历数据数组--遍历店铺  修改选择
				if (this.cartData.allSelected == 0) {
					this.cartData.allSelected = 1
					this.cart = []
					this.cartData.list.map(shopItem => {
						shopItem.shopSelected = 1;
						shopItem.cart.map((goodItem, index) => {
							this.cart.push(goodItem)
							goodItem.goodsSelected = 1;
						});
					});
				} else {
					//反选
					this.cartData.allSelected = 0
					this.cartData.list.map(shopItem => {
						shopItem.shopSelected = 0;
						shopItem.cart.map(goodItem => {
							this.cart = []
							goodItem.goodsSelected = 0;
						});
					});
				}
			},
			/* 选择店铺或者商品 监听全选按钮状态 */
			changeSelectAllBtn() {
				const selectAll = this.cartData.list.every(shopItem => {
					return shopItem.shopSelected == 1;
				});
				if (selectAll) {
					this.cartData.allSelected = 1
				} else {
					this.cartData.allSelected = 0
				}
			},
			// 增加数量
			addAction(goodItem) {
				if (goodItem.num >= parseInt(goodItem.kucun)) {
					uni.showToast({
						title: '不能再多了~',
						icon: 'none'
					});
					return true
				}
				goodItem.num++;
			},
			// 减少数量
			cutAction(goodItem) {
				if (goodItem.num > 1) {
					goodItem.num--;
				} else {
					uni.showToast({
						title: '不能再少了~',
						icon: 'none'
					});
				}
			},
			// 删除
			deleteItem() {
				let delObj = {}
				this.cart.map((goodItem, index) => {
					delObj[goodItem.cartid] = goodItem.num
				});

				if (JSON.stringify(delObj) == "{}") {
					uni.showToast({
						title: "请选择要删除的商品",
						icon: "none"
					})
				} else {
					uni.showModal({
						title: '提示',
						content: '确定删除选中的商品？',
						confirmColor: "#fe0909",
						success: (con) => {
							if (con.confirm) {
								console.log(JSON.stringify(delObj))
							} else if (con.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			},
			// 结算
			submitAction() {
				let ALL = []
				this.cart.map(goodItem => {
					let cartarr = {}
					cartarr["cartid"] = goodItem.cartid
					cartarr["goodsid"] = goodItem.goodsid
					cartarr["num"] = goodItem.num
					cartarr["skuid"] = goodItem.skuid
					ALL.push(cartarr)
				});

				console.log(JSON.stringify(ALL))
			}
		}
	}
</script>

<style>
	.TjcommitdyBox {
		width: 100%;
		padding: 20rpx 0;
		box-sizing: border-box;
		background-color: #F5F5F5;
		margin-bottom: 200rpx;
	}

	.TjcommitdyTitle {
		padding: 0 30rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}

	.meord {
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

	.TjcommitdyTitle text {
		height: 36rpx;
		display: flex;
		align-items: center;
		padding-left: 12rpx;
		box-sizing: border-box;
		border-left: 8rpx solid #5DB737;
		font-size: 34rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
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
		font-size: 6rpx;
		font-weight: 400;
		color: #fff;
	}

	/* 按钮 */
	.shoppBtnBox {
		position: fixed;
		bottom: 100rpx;
		width: 100%;
		height: 100rpx;
		left: 0;
		padding: 0 30rpx;
		box-sizing: border-box;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-top: 2rpx solid #E5E5E5;
		border-bottom: 2rpx solid #E5E5E5;
		z-index: 999;
	}

	.All_priceBox {
		display: flex;
		align-items: center;
	}

	.priceTle {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #666666;
	}

	.allprice {
		font-size: 36rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.payBtnBox {
		width: 240rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #5DB737;
		border-radius: 40rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #FFFFFF;
	}

	.delBtnBox {
		width: 240rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #EEEEEE;
		border-radius: 40rpx;
		font-size: 30rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #E94545;
	}

	/* 顶部导航栏 */
	.navbarsBox {
		width: 100%;
		height: 88rpx;
		background-color: #fff;
		position: fixed;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;
		box-sizing: border-box;
		z-index: 999;
	}

	.navbarcont {
		font-size: 36rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
	}

	.navbarright {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
	}

	.content {
		position: relative;
	}

	/* 当购物车无数据时 */
	.noneshoppCat {
		width: 100%;
		margin-bottom: 80rpx;
	}

	.getcommitdyBox {
		width: 100%;
		height: 506rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
	}

	.getCommitImg {
		width: 160rpx;
		height: 160rpx;
	}

	.getcommitdyCont {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.getCommitImg image {
		width: 100%;
		height: 100%;
	}

	.shopcatTxt {
		font-size: 24rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		margin: 20rpx 0;
	}

	.getCommitBtn {
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
		color: #FFFFFF;
	}

	/* 内容 */
	.cartBox {
		width: 100%;
		padding: 20rpx;
		box-sizing: border-box;
		background-color: #F5F5F5;
	}

	.cartShop {
		margin-top: 20rpx;
		padding: 15rpx 0;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 8rpx;

	}

	.cartShop:not(:last-child) {
		margin-bottom: 20rpx;
	}

	.cartPad {
		padding: 0 20rpx;
		box-sizing: border-box;
	}

	.cartName {
		height: 112rpx;
		font-size: 29rpx;
		color: #333333;
		display: flex;
		align-items: center;
	}

	.cartName-box {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.tiLeft_txt {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		margin-left: 18rpx;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.cartName-img {
		width: 56rpx;
		height: 56rpx;
		margin: 0 18rpx;
		border-radius: 50%;
	}

	.cartName-imgs {
		width: 113rpx;
		height: 35rpx;
		margin-left: 18rpx;
	}

	.cartName-go {
		color: #CCCCCC;
		font-size: 22rpx;
		display: flex;
		align-items: center;
	}

	.cartLine {
		height: 2rpx;
		background-color: #e5e5e5;
	}

	.cartCont {
		display: flex;
		justify-content: space-between;
		padding: 0 20rpx;
		padding-top: 20rpx;
		box-sizing: border-box;
	}

	.cartDetail {
		display: flex;

		margin-top: 22rpx;
	}

	.cartDetail-img {
		display: flex;
		height: 132rpx;
		align-items: center;
	}

	.shopCat_img {
		width: 132rpx;
		height: 132rpx;
		background: #FFFFFF;
		border: 2rpx solid #E2E2E2;
		border-radius: 8rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 18rpx;
	}

	.shopCat_img image {
		width: 106rpx;
		height: 106rpx;
	}

	.cartDetail-imgs {
		width: 90rpx;
		height: 90rpx;
		margin: 9rpx;
	}

	.cartDetail-title {
		margin-left: 14rpx;
		width: 450rpx;
	}

	.cartDetail-txt {
		font-size: 28rpx;
		font-family: PingFang SC;
		font-weight: bold;
		color: #333333;
		max-width: 450rpx;
		text-overflow: -o-ellipsis-lastline;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.cartDetail-lab {
		padding: 20rpx 0;
		box-sizing: border-box;
		font-size: 24rpx;
		max-width: 450rpx;
		font-family: PingFang SC;
		font-weight: 500;
		color: #999999;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.cartNum {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.cartNum-txt {
		font-size: 25rpx;
		color: #ff2d52;
	}

	.cartTotal {
		width: 100%;
		height: 91rpx;
		background-color: #FFFFFF;
		font-size: 28rpx;
		color: #333333;
		display: flex;
		align-items: center;
		padding-left: 27rpx;
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 10;
	}

	.cartTotal-title {
		flex: 1;
		display: flex;
		align-items: center;
	}

	.cart-choose {
		margin: 0 21rpx 0 14rpx;
	}

	.cart-num {
		font-size: 31rpx;
		color: #ff2d52;
		text-align: right;
		padding-right: 21rpx;
	}

	.cart-numTxt {
		font-size: 25rpx;
		color: #999999;
		margin-bottom: 10rpx;
	}

	.cartTotal-btn {
		width: 207rpx;
		height: 91rpx;
		font-size: 31rpx;
		color: #FFFFFF;
		background-color: #ff2d52;
		line-height: 91rpx;
		text-align: center;
	}

	.add-sub-con {
		display: flex;
		justify-content: space-between;
		width: 200rpx;
		height: 56rpx;
		align-items: center;
	}

	.iconNumbtn {
		color: #666666;
		font-size: 28rpx;
	}

	.add-sub-con .link {
		float: left;
		width: 56rpx;
		height: 56rpx;
		line-height: 62rpx;
		text-align: center;
		font-size: 32rpx;
		color: #666;
		background-color: #EEEEEE;

	}

	.parTxt {
		font-size: 36rpx;
		font-family: DIN;
		font-weight: bold;
		color: #E94545;
	}

	.add-sub-con .link.aj {
		color: #666;
	}

	.add-sub-con .link.jj {
		color: #ccc;
		background-color: #EEEEEE;

	}



	.NumBox {
		height: 56rpx;
		padding: 0 20rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #EEEEEE;
		border-radius: 8rpx;
	}

	.NumBox text {
		font-size: 24rpx;
		font-family: DIN;
		font-weight: bold;
		color: #333333;
	}
</style>
