<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: ''
    }
  },
  methods: {
    onSubmit() {
      this.$emit('formSubmitted', { name: this.name })
    }
  }
}
</script>
