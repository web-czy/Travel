let defaultCity = '北京';

try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) { }

export default {
  city: localStorage.city || defaultCity,
  scenic: {},
  gallaryimgs: []
};
