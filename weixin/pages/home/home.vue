<template>
	<view class="home">
		<view class="uni-margin-wrap">
			<swiper class="swiper" circular :indicator-dots="swiperOption.indicatorDots" :autoplay="swiperOption.autoplay" :interval="swiperOption.interval"
				:duration="swiperOption.duration">
				<swiper-item>
					<view class="swiper-item uni-bg-red">A</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-green">B</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item uni-bg-blue">C</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="fish_grid">
			<uni-grid :column="4" :showBorder="false"  :square="false">
				<uni-grid-item>
					<view class="grid-box">鱼</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">肉</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">蔬</view>
				</uni-grid-item>
				<uni-grid-item>
					<view class="grid-box">、、</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script setup>
	import {
		reactive
	} from "vue";
	const swiperOption = reactive({
		indicatorDots:false,
		autoplay:true,
		interval:2000,
		duration:500
	})
</script>

<style lang="scss">
	.uni-margin-wrap{
		padding: 8px;
		.swiper{
			border-radius: 4px;
			overflow: hidden;
			.swiper-item{
				width: 100%;
				height: 100%;
			}
			.uni-bg-red{
				background: red;
			}
			.uni-bg-green{
				background: green;
			}
			.uni-bg-blue{
				background: blue;
			}
		}

	}

</style>