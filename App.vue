复制代码
<script>  
    import {  
        mapMutations  
    } from 'vuex';  
    export default {  
        onLaunch: function () {  
            uni.getStorage({//获得保存在本地的用户信息  
                key: 'uerInfo',  
                success:(res) => {  
                    this.login(res.data);  
                    uni.request({// 再次校验并刷新token的有效时间  
                        url: 'http://yjsc.28xr.com/api/',  
                        header: {  
                            "Content-Type": "application/x-www-form-urlencoded",  
                            "Token":res.data.token  
                        },  
                        data: {  
                            "username":res.data.user_name  
                        },  
                        method: "POST",  
                        success: (e) => {  
                            if (e.statusCode === 200 && e.data.code === 0) {  
                                this.login(e.data);  
                            }  
                        }  
                    })  
                }  
            });  
        },  
        methods: {  
            ...mapMutations(['login'])  
        }  
    }  
</script>

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: "iconfont"; /* Project id 2678236 */
	  src: url('~@/static/font_iconYj/iconfont.woff2?t=1627551847120') format('woff2'),
	       url('~@/static/font_iconYj/iconfont.woff?t=1627551847120') format('woff'),
	       url('~@/static/font_iconYj/iconfont.ttf?t=1627551847120') format('truetype');
	}
	::-webkit-scrollbar {
			    display: none;  
			    width: 0 !important;  
			    height: 0 !important;  
			    -webkit-appearance: none;  
			    background: transparent;  
			}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-jia:before {
	  content: "\e735";
	}
	
	.icon-jianqu:before {
	  content: "\e736";
	}
	
	.icon-zengjia:before {
	  content: "\e737";
	}
	
	.icon-xiaoxi1:before {
	  content: "\e734";
	}
	
	.icon-fanhui:before {
	  content: "\e733";
	}
	
	.icon-fanhui-copy:before {
	  content: "\f4ce";
	}
	
	.icon-fenlei:before {
	  content: "\e72b";
	}
	
	.icon-dianpu:before {
	  content: "\e72c";
	}
	
	.icon-daifahuo:before {
	  content: "\e72d";
	}
	
	.icon-daishouhuo:before {
	  content: "\e72e";
	}
	
	.icon-gouwuche:before {
	  content: "\e72f";
	}
	
	.icon-weizhi:before {
	  content: "\e730";
	}
	
	.icon-quanbudingdan:before {
	  content: "\e731";
	}
	
	.icon-daizhifu:before {
	  content: "\e732";
	}
	
	.icon-shouye:before {
	  content: "\e72a";
	}
	
	.icon-pingfen-half:before {
	  content: "\e602";
	}
	
	.icon-dangqianweizhi:before {
	  content: "\e6cb";
	}
	
	.icon-juli:before {
	  content: "\e620";
	}
	
	.icon-wen:before {
	  content: "\e65e";
	}
	
	.icon-tupian:before {
	  content: "\e601";
	}
	
	.icon-pengyouquan:before {
	  content: "\e690";
	}
	
	.icon-weixin:before {
	  content: "\e600";
	}
	
	.icon-zhifubaozhifu:before {
	  content: "\e717";
	}
	
	.icon-weixinzhifu:before {
	  content: "\e610";
	}
	
	.icon-zhaopian:before {
	  content: "\e6d8";
	}
	
	.icon-shezhi:before {
	  content: "\e606";
	}
	
	.icon-dizhi:before {
	  content: "\e60c";
	}
	
	.icon-kefu:before {
	  content: "\e60e";
	}
	
	.icon-zuji:before {
	  content: "\e60f";
	}
	
	.icon-wode:before {
	  content: "\f4cd";
	}
	
	
</style>
