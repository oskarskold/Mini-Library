<template>
  <div class="library">
    <h1>8 Classic Childrens books</h1>
    <router-link
      v-for="(data, index) in books"
      :key="index"
      :to="'/SingleBook/' + data.Productid"
    >
      <Book class="book" :book="data" />
    </router-link>
  </div>
</template>

<script>
import books from "../ChildrensBooks.json";
import Book from "../components/Book.vue";
export default {
  props: ["book"],
  data() {
    return {
      books: [...books],
    };
  },
  name: "Library",
  components: { Book },
};
</script>
<style scoped>
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
</style>
