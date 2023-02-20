import { createStore } from "vuex";
const url = process.env.VUE_APP_API_URL;
const token = process.env.VUE_APP_API_TOKEN;

export default createStore({
  state: {
    plants: {},
    searchValue: "",
  },
  getters: {},
  mutations: {
    setData(state, data) {
      state.plants = data;
    },
    setSearchValue(state, value) {
      state.searchValue = value;
    },
  },
  actions: {
    async fetchData(context, { index, searchValue }) {
      console.log("top fetch", searchValue);
      if (this.state.searchValue === "") {
        console.log("normal", index);
        await fetch(`${url}?token=${token}&page=${index}`)
          .then((response) => response.json())
          .then((data) => {
            context.commit("setData", data);
          });
        console.log(`${url}?token=${token}&page=${index}`);
      }
      if (this.state.searchValue !== "") {
        console.log("search", index);
        // eslint-disable-next-line
        await fetch(`${url}/search?token=${token}&page=${index}&q=${searchValue}`)
          .then((response) => response.json())
          .then((data) => {
            context.commit("setData", data);
          });
      }
    },
  },
  modules: {},
});
