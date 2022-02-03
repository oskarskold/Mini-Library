<template>
  <div class="readingList">
    <div class="underline">
      <h2>{{ book.Title }}</h2>
      <p>{{ book.Author }}</p>
      <button @click="removeFromReadingList">Remove</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["book"],
  methods: {
    removeFromReadingList() {
      this.$store.dispatch("removeFromReadingList", this.book);
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
  min-width: 500px;
  padding: 1rem;
}
.underline {
  border-bottom: 1px solid grey;
}
.underline > h2,
p {
  color: white;
}
</style>
