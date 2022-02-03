<template>
  <div class="container">
    <router-link class="back" tag="button" to="/"
      ><span class="material-icons-outlined">
        arrow_circle_left
      </span></router-link
    >
    <h1>Reading List</h1>
    <ReadingList
      v-for="item of readingList"
      :key="item.Productid"
      :book="item"
    />
  </div>
</template>

<script>
import ReadingList from "../components/ReadingList.vue";
export default {
  components: { ReadingList },
  computed: {
    readingList() {
      return this.$store.state.readingList;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
span {
  font-family: "Material Icons";
  font-size: 40px;
  margin: 50px;
}

button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: white;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 0%;
}
h1 {
  color: white;
}
.container {
  background: #222222;
  padding: 2rem;
  max-width: 1000px;
}
</style>
