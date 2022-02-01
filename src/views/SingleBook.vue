<template>
  <div class="single-book">
    <Book />
    <BookInfo />
  </div>
</template>

<script>
import Book from "../components/Book.vue";
import BookInfo from "../components/BookInfo.vue";
export default {
  components: { Book, BookInfo },
};
</script>

<style scoped></style>
