<template>
  <div class="book-info">
    <h2>{{ book.Title }}</h2>
    <h3>By {{ book.Author }}</h3>
    <p>{{ book.Plot }}</p>
    <div class="info">
      <p>Audience: {{ book.Audience }}</p>
      <p>Year: {{ book.Year }}</p>
      <p>Pages: {{ book.Pages }}</p>
      <p>Publisher: {{ book.Publisher }}</p>
    </div>
    <button @click="addToReadingList">Oh, I want to read it!</button>
  </div>
</template>

<script>
export default {
  props: ["book", "readingList"],
  methods: {
    addToReadingList() {
      this.$store.commit("addToReadingList", this.book);
      this.$router.push("/List");
    },
  },
};
</script>

<style>
.book-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 10px;
  max-width: 400px;
}
.info {
  padding: 0.5rem;
  background-color: #2f2f2f;
  color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: "audience published" "pages  publisher";
}
.info > p {
  margin: 0.5rem;
}
p {
  margin: 0.5rem 0;
  align-self: center;
}
.info p:nth-of-type(1) {
  grid-area: audience;
}
.info p:nth-of-type(2) {
  grid-area: published;
}
.info p:nth-of-type(3) {
  grid-area: pages;
}
.info p:nth-of-type(4) {
  grid-area: publisher;
}
</style>
