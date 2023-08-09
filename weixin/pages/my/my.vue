<template>
	<view class="my">
		<view class="header-card">
			<view class="img-box">
				<button open-type="chooseAvatar" @chooseavatar="getAvatar">123</button>
			</view>
		</view>
		</view>
</template>

<script setup>
	const getAvatar=(res)=>{
		console.log(res)
	}
</script>

<style>
</style>