<template>
<div v-if="editing" class="flex">
  <input type="text" v-model.trim="new_label" ref="input" class="flex-grow" />
  <i @click="accept" class="fa fa-check ml-4 text-green-400 cursor-pointer" />
  <i @click="cancel" class="fa fa-close ml-4 text-red-400 cursor-pointer" />
</div>
<div v-else class="flex select-none">
  <input type="checkbox" :id="id" :checked="isDone" class="mr-2 mt-1 cursor-pointer" />
  <label :for="id" class="flex-grow cursor-pointer">{{label}}</label>
  <i @click="edit" class="fa fa-edit ml-4 mt-1 flex-end"></i>
</div>
</template>

<script>
import store from '../store'

export default {
  props: {
    label: { required: true, type: String },
    done: { default: false, type: Boolean },
    id: {required: true, type: String},
  },
  data() {
    return {
      isDone: this.done,
      editing: false,
      new_label: ''
    }
  },
  methods: {
    edit() {
      this.new_label = this.label
      this.editing = true
      this.$nextTick(() => this.$refs.input.focus())
    },
    cancel() {
      this.editing = false
    },
    accept() {
      store.commit('change', this)
      this.editing = false
    }
  }
};
</script>