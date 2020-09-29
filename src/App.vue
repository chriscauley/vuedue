<template>
<div class="mx-auto mt-16 border rounded shadow max-w-xs p-4">
  <h1>To-Do List</h1>
  <ul>
    <li v-for="item in todos" :key="item.id">
      <to-do-item v-bind="item"></to-do-item>
    </li>
  </ul>
  <to-do-form></to-do-form>
</div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue';
import ToDoForm from './components/ToDoForm.vue';
import store from './store'

export default {
  name: 'App',
  components: {
    ToDoItem,
    ToDoForm,
  },
  store,
  data() {
    return store.state
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
input[type=text] {
  border: 1px solid gray;
  margin-right: 0.5rem;
  border-radius: 2px;
}
</style>
