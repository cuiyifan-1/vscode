<template>
	<div class="home">
		大家好~~~~我来啦~~~

		<div class="user-info">用户信息啊</div>
		<el-button>Hi~</el-button>
	</div>
</template>

<script setup>
import { useUserStore } from '../store/user';
import { getHomeData } from '../api/home';

async function getData() {
	const res = await getHomeData();
	console.log('res', res);
}
getData();
const userStore = useUserStore();
// 执行pinia中的getUserData方法
userStore.getUserData();
console.log(14, userStore.userInfo);
</script>

<style lang="less" scoped>
.home {
	color: aquamarine;
	.user-info {
		padding: 12px;
		color: aqua;
		border: 1px solid rgba(225, 225, 225);
		border-radius: 8px;
	}
}
</style>
