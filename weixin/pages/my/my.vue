<template>
	<view class="my">
		<view class="header-card">
			<view class="img-box">
				<button class="img-btn" open-type="chooseAvatar" @chooseavatar="getAvatar">
					<image class="img" :src="avatar"></image>
				</button>
				
			</view>
			<view class="info-box">
				{{ UserName }}
				<input v-model="UserName" placeholder="微信用户" type="nickname" />
			</view>
		</view>
		</view>
</template>

<script setup>
	import { ref } from "vue"
	const avatar = ref("")
	const UserName = ref("")
	const getAvatar=(res)=>{
		console.log(res)
		avatar.value = res.detail.avatarUrl
	}
</script>

<style lang="scss">
	.header-card{
		margin: 40upx;
		background: red;
		border-radius: 20upx;
		height: 300upx;
		display: flex;
		padding: 40upx;
		.img-box{
			width: 200upx;
			.img-btn{
				width: 140upx;
				height: 140upx;
				padding: 0;
				margin: 0;
				border-radius: 100%;
				overflow: hidden;
				.img{
					width: 100%;
					height: 100%;
					background: blue;
				}
			}
		}
		.info-box{
			flex: 1;
		}
	}
</style>