import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import axios from './api/axios'
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

const pinia = createPinia();
console.log('这里应该使用单引号，这里使用双引号');
app
	.use(router)
	.use(pinia)
	.use(ElementPlus, {
		locale: zhCn
	})
	.mount('#app');
