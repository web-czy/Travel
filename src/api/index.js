import { get } from './helper';

const getHome = get('/api/home');
const getCity = get('/api/city');

export { getHome, getCity };
