<template>
  <div>
    <h2>{{ book.Title }}</h2>
    <h3>{{ book.Author }}</h3>
    <p>{{ book.Plot }}</p>
    <div>
      <p>Audience: {{ book.Audience }}</p>
      <p>Year: {{ book.Year }}</p>
      <p>Pages: {{ book.Pages }}</p>
      <p>Publisher: {{ book.Publisher }}</p>
    </div>
    <router-link tag="button">Oh, I want to read it!</router-link>
  </div>
</template>

<script>
export default {
  props: ["book"],
};
</script>

<style></style>
