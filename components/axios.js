export default{
	axios(method,url,data){
		var	baseUrl = 'http://yjsc.28xr.com/api/' 
		return new Promise((resolve,reject)=>{
			uni.request({
				url: baseUrl+url,
				method:method,
				data:data,
				header:{
					'Content-Type':'application/x-www-form-urlencoded',
					
				},
				success:(res)=>{
					resolve(res.data)
				},
				fail:(err)=>{
					reject(err) 
				}
			})
		})
	}
}
  