<template>
  <div class="single-book">
    <router-link class="back" tag="button" to="/"
      ><span class="material-icons-outlined">
        arrow_circle_left
      </span></router-link
    >
    <Book class="book" v-if="data" :book="data">
      {{ data }}
    </Book>
    <BookInfo class="book-info" v-if="data" :book="data" />
  </div>
</template>

<script>
import Book from "../components/Book.vue";
import BookInfo from "../components/BookInfo.vue";
import ChildrensBooks from "../ChildrensBooks.json";
export default {
  components: { Book, BookInfo },
  computed: {
    data() {
      return ChildrensBooks.find(
        (data) => data.Productid == this.$route.params.id
      );
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
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  width: 0%;
}

.single-book {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr 5fr;
  grid-template-areas: "back back" "book book-info";
  background-color: #222222;
  color: white;
}
.back {
  grid-area: back;
}
.book {
  padding: 10rem 0;
  max-width: 400px;
  margin: 5rem 2rem 5rem 7rem;
  grid-area: book;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  color: black;
}

.bookInfo {
  grid-area: book-info;
}
</style>
