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

  actions: {
    increment(context){
      context.commit('incrementSlide', context.slide);
    },
    decrement(context){
      context.commit('decrementSlide', context.slide);
    },
    addToReadingList(context, payload){
      context.commit('addToReadingList', payload);
    },
    removeFromReadingList(context, payload){
      context.commit('removeFromReadingList', payload);
    }  
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
