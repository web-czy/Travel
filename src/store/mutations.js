export default {
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) { }
  },
  changeScenic(state, scenic) {
    state.scenic = scenic;
  },
  changeGallaryImgs(state, gallaryimgs) {
    state.gallaryimgs = gallaryimgs;
  }
};
