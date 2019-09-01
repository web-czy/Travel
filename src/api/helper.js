import axios from 'axios';

const ERR_OK = 0;

export function get(url) {
  console.log('zhixingle');
  return function(params) {
    return axios
      .get(url, {
        params
      })
      .then(res => {
        console.log('zhixingle');
        const { errno, data } = res.data;
        if (errno === ERR_OK) {
          return data;
        }
      })
      .catch(() => {});
  };
}
