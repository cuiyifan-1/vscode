import { createRouter, createWebHashHistory } from 'vue-router';
import { useUserStore } from '../store/user';
import { routes } from './routes';
// 引入进度条插件
import NProgress from 'nprogress';
// 引入对应css样式
import 'nprogress/nprogress.css';

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

// 修改进度条插件的配置
NProgress.configure({
	showSpinner: false
});

// 前置首位 访问权限控制
router.beforeEach((to) => {
	// 开启页面进度条
	NProgress.start();
	// 用户仓库
	const store = useUserStore();
	// 用户白名单
	const wihteList = ['/login', '/home'];
	// 没有token 并且 不在白名单 则跳转登录页
	if (!store.user?.token && !wihteList.includes(to.path)) return '/login';
	// 放行 return true  可以不用写
});

// 后置守卫
router.afterEach((to) => {
	// 设置页面标题
	document.title = to.meta.title || '奔跑的代码!';
	NProgress.done();
});

export default router;
