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
    <router-link to="/" tag="button">Oh, I want to read it!</router-link>
  </div>
</template>

<script>
export default {
  props: ["book"],
};
</script>

<style>
.book-info {
  text-align: left;
  padding: 10px;
}
.info {
  padding: 0.5rem;
  background-color: rgba(49, 49, 49, 0.76);
  color: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-template-areas: "audience published" "pages  publisher";
}
p {
  margin: 0.5rem;
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
