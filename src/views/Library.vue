<template>
  <div class="library">
    <h1>8 Classic Childrens books</h1>
    <Book
      class="book"
      v-for="(data, index) in books"
      :key="index"
      :book="data"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Book from "../components/Book.vue";
export default {
  props: ["books"],
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
  min-width: 150px;
  min-height: 220px;
  border-left: 6px solid rgb(5, 5, 5);
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
}
</style>
