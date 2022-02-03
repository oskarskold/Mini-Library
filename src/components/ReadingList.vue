<template>
  <div class="readingList">
    <h2>{{ book.Title }}</h2>
    <p>{{ book.Author }}</p>
    <button @click="removeFromReadingList">remove</button>
  </div>
</template>

<script>
export default {
  props: ["book"],
  methods: {
    removeFromReadingList() {
      this.$store.commit("removeFromReadingList", this.book);
    },
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>

<style scoped>
.readingList {
  background: #2f2f2f;
}
.readingList > h2,
p {
  color: white;
}
</style>
