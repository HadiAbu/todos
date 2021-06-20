<template>
  <div class="container">
    
    <AddTodo />
    <FilterTodos />
    <Todos />

  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos
  },
};
</script>

<style>
body{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.6;
  background: #E5F5EE;
  color: rgba(0, 0, 0, 0.55);
}
h1,h2,h3,h4,h5,h6{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color: rgba(0, 0, 0, 0.75);
}
.container{
  max-width: 1100vw;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
