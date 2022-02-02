<template>
  <div class="book" :style="{ backgroundColor: book.BackgroundColor }">
    <div class="line"></div>
    <h2>{{ book.Title }}</h2>
    <h4>{{ book.Author }}</h4>
  </div>
</template>

<script>
export default {
  props: ["book"],
};
</script>

<style scoped>
h2 {
  font-size: 0.9rem;
  margin: 2rem 1rem 0 1rem;
}
h4 {
  font-size: 0.6rem;
  margin: 1rem;
}
.book {
  color: white;
  border-radius: 3px;
}
</style>
