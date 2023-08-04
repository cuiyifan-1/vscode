import axios from 'axios';
import { ElMessage } from 'element-plus';

const isProd = process.env.NODE_ENV === 'production';
console.log('isProd===>', process.env.NODE_ENV, isProd);
console.log('meta.env===>', import.meta.env.VITE_USER_NODE_ENV);

// 创建axios实例
// 通过import.meta.env获取环境变量
const request = axios.create({
	baseURL: import.meta.env.VITE_APP_BASE_URL,
	timeout: 5000
});

request.interceptors.request.use(
	(config) => {
		// 拦截请求，一些处理
		return config;
	},
	(error) => {
		// 拦截 http code异常等，可以做一些提示处理
		return Promise.reject(error);
	}
);

request.interceptors.response.use(
	(response) => {
		// 拦截响应，一些处理，比如根据后端返回的code做全局提示处理，封装返回值等
		// ...
		return response.data;
	},
	(error) => {
		// 拦截http code异常等，做一些提示处理
		// 处理网络错误
		let msg = '';
		const status = error.response.status;
		switch (status) {
			case 401:
				msg = 'token过期';
				break;
			case 403:
				msg = '无权访问';
				break;
			case 404:
				msg = '请求地址错误';
				break;
			case 500:
				msg = '服务器出现问题';
				break;
			default:
				msg = '无网络';
		}
		ElMessage({
			type: 'error',
			message: msg
		});
		return Promise.reject(error);
	}
);

export default request;
