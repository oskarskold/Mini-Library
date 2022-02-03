<template>
  <div class="library">
    <h1>8 Classic Childrens books</h1>
    <router-link
      v-for="(data, index) in listOfBooks"
      :key="index"
      :to="'/SingleBook/' + data.Productid"
    >
      <Book class="book" :book="data" />
    </router-link>
    <div class="nav-container">
      <router-link class="back" tag="button" to="/"
        ><span class="material-icons-outlined" @click="decrementSlide">
          arrow_circle_left
        </span></router-link
      >
      <p>{{ slide }}/3</p>
      <router-link class="forward" tag="button" to="/"
        ><span class="material-icons-outlined" @click="incrementSlide">
          arrow_circle_right
        </span></router-link
      >
    </div>
  </div>
</template>

<script>
import Book from "../components/Book.vue";
export default {
  methods: {
    incrementSlide() {
      this.$store.dispatch("increment");
    },
    decrementSlide() {
      this.$store.dispatch("decrement");
    },
  },

  name: "Library",
  components: { Book },
  computed: {
    listOfBooks() {
      return this.$store.getters.listOfBooks;
    },
    slide() {
      return this.$store.state.slide;
    },
    book() {
      return this.$store.getters.book;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

span {
  font-family: "Material Icons";
  font-size: 40px;
}
p {
  margin-left: 2.3rem;
  color: black;
}

button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 0%;
}

.library {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 1rem;
}
h1 {
  grid-column: 1/5;
}
.book {
  width: 160px;
  border-left: 6px solid rgb(5, 5, 5);
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
a {
  text-decoration: none;
}
.nav-container {
  grid-column: 4/5;
  display: flex;
}
.back .forward {
  min-width: 100%;
  min-height: 100%;
}
</style>
