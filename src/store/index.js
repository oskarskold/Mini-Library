import Vue from "vue";
import Vuex from "vuex";

import books from "@/ChildrensBooks.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [...books],
    readingList: [],
    slide: 1,
  },
  mutations: {
    incrementSlide(state) {
      if (state.slide < 3) state.slide++;
    },
    decrementSlide(state) {
      if (state.slide > 1) state.slide--;
    },
    addToReadingList(state, payload) {
      state.readingList.push(payload);
    },
    removeFromReadingList(state, payload) {
      let index = state.readingList.indexOf(payload);
      state.readingList.splice(index, 1);
    },
  },

  getters: {
    book: (state) => (id) => {
      return state.books.find((data) => {
        return data.Productid == id;
      });
    },

    listOfBooks(state) {
      return state.books.filter((data) => {
        if (data.Slide == state.slide) {
          return data;
        }
      });
    },
  },
});
