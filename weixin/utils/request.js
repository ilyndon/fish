const baseUrl = 'http://localhost:8888'
export const request = ({url,data,header,method}) =>{
	return new Promise((reslove,reject) => {
		uni.request({
			url: baseUrl+url,
			data,
			method,
			header: {
				'x-token': 'i am token',
				...header
			},
			success: (res) => {
				reslove(res.data)
			},
			fail: (err) => {
				reject(err)
			},
			timeout: 30000
		});
	})
}