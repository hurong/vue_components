<template>
  <input type="file" @change="change">
</template>

<script>
export default {
  methods: {
    change(e) {
      console.log(e.target.files[0]);
    },
  },
}
</script>

