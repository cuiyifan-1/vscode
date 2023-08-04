import axios from './axios';

export const getHomeData = () => {
	return axios({
		url: '/store-inspect/share/task/detail',
		method: 'get'
	});
};
