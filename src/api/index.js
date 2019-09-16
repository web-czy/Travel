import { get } from './helper';

const getHome = get('/api/home');
const getCity = get('/api/city');
const getDetail = get('/api/detail');

export { getHome, getCity, getDetail };
