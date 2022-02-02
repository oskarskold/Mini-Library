<template>
  <div>
    <h2>{{ book.Title }}</h2>
    <p>{{ book.Author }}</p>
    <button>remove</button>
  </div>
</template>

<script>
export default {
  props: ["book"],
};
</script>

<style></style>
