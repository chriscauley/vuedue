<template>
<div class="mx-auto mt-16 border rounded shadow max-w-xs p-4">
  <h1>To-Do List</h1>
  <ul>
    <li v-for="item in ToDoItems" :key="item.id">
      <to-do-item v-bind="item" @label-changed="changeLabel"></to-do-item>
    </li>
  </ul>
  <to-do-form @todo-added="addToDo"></to-do-form>
</div>
</template>

<script>
import ToDoItem from './components/ToDoItem.vue';
import ToDoForm from './components/ToDoForm.vue';
import { uniqueId } from 'lodash'

export default {
  name: 'App',
  components: {
    ToDoItem,
    ToDoForm,
  },
  data() {
    return {
      log(a) { console.log({...a})},
      ToDoItems: [
        { id: uniqueId('todo-'), label: 'Learn Vue', done: false },
        { id: uniqueId('todo-'), label: 'Create a Vue project with the CLI', done: true },
        { id: uniqueId('todo-'), label: 'Have fun', done: true },
        { id: uniqueId('todo-'), label: 'Create a to-do list', done: false }
      ]
    };
  },
  methods: {
    changeLabel(id, label) {
      this.ToDoItems.find(i => i.id === id).label = label
    },
    addToDo(label) {
      this.ToDoItems.push({id:uniqueId('todo-'), label, done: false});
    }
  }
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
