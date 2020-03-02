import axios from 'axios';
const request = axios.create({
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'X-Requested-With': 'XMLHttpRequest',
    },
    baseURL:'/api',
    transformRequest: [function (data) {
        if (data instanceof Object) data = JSON.stringify(data);
        return data;
    }],
});
export default request;
