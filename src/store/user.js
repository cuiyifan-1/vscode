import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			userInfo: {}
		};
	},
	getters: {},
	actions: {
		async getUserData() {
			// 异步或同步...
			this.userInfo = {
				name: '阿崔',
				age: 18
			};
		}
	}
});
