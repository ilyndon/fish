export const login = ()=>{
	return new Promise((resolve,reject)=>{
		uni.login({
			onlyAuthorize:true,
			success(res){
				resolve(res)
			},
			fail(err){
				reject(err)
			}
		})
	}
	)
}