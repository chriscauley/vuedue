import { createStore } from "vuex"

export default new createStore({
  state: JSON.parse(localStorage.getItem('todos') || '{"todos": []}'),
  mutations: {
    add(state, label) {
      state.todos.push({id: 'todo-'+state.todos.length, label})
      localStorage.setItem('todos', JSON.stringify(state))
    },
    change(state, { id, new_label}) {
      state.todos.find(i => i.id === id).label = new_label
      localStorage.setItem('todos', JSON.stringify(state))
    },
    toggle(state, id) {
      const todo = state.todos.find(i => i.id === id)
      todo.done = !todo.done
      localStorage.setItem('todos', JSON.stringify(state))
    }
  }
})