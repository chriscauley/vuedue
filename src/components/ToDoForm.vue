<template>
<form @submit.prevent="onSubmit">
  <label for="new-todo-input" class="block pt-2">
    What needs to be done?
  </label>
  <input
    type="text"
    id="new-todo-input"
    name="new-todo"
    autocomplete="off"
    v-model.lazy.trim="label"
    />

  <button type="submit">
    Add
  </button>
</form>
</template>

<script>
import store from '../store'

export default {
  store,
  methods: {
    onSubmit() {
      store.commit('add', this.label)
      this.label = ''
    },
  },
  data() {
    return { label: "" }
  }
}
</script>