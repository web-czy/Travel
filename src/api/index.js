import { get } from './helper';

const debug = process.env.NODE_ENV !== 'production';
const home = debug ? '/api/home' : 'http://www.baikeedu.vip/czy/mock/home.json'
const city = debug ? '/api/city' : 'http://www.baikeedu.vip/czy/mock/city.json'
const detail = debug ? '/api/detail' : 'http://www.baikeedu.vip/czy/mock/detail.json'

const getHome = get(home);
const getCity = get(city);
const getDetail = get(detail);

export { getHome, getCity, getDetail };
