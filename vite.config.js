import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/

const path = require('path');
export default defineConfig(({ command, mode }) => {
	// 根据当前工作目录中的 `mode` 加载 .env 文件
	// 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
	const env = loadEnv(mode, process.cwd(), '');
	return {
		plugins: [vue()],
		// 关键
		resolve: {
			alias: {
				'@': path.resolve('./src') // 相对路径别名配置，使用 @ 代替 src
			}
		},
		server: {
			proxy: {
				'^/store-inspect': {
					target: env.VITE_APP_ALL_BASE_URL, // 需要代理的后端地址
					changeOrigin: true // 发送请求中host会设置成target
				}
			}
		}
	};
});
