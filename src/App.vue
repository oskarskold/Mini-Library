<template>
  <div id="app">
    <router-view :books="books" />
  </div>
</template>

<script>
import ChildrensBooks from "./ChildrensBooks.json";
export default {
  data() {
    return {
      books: [...ChildrensBooks],
    };
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
