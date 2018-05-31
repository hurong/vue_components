
<template v-cloak>
  <div id='dropzone-template'>
    <form action="/file-upload" class="dropzone">
      <div class="fallback">
        <input name="file" type="file" multiple />
      </div>
    </form>
  </div>
</template>

<script>
require('static/js/dropzone.min.js')
require('static/css/dropzone.min.css')
export default {
  props: {
    id: {
      type: String,
      default: 'dropzone'
    },
  },

  mounted() {
  }
}
</script>

<style scoped>
.dropzone {
  min-height: 80px;
  border: 1px dotted #14adea;
  background: none;
  padding: 0;
  border-radius: 2px;
  cursor: pointer;
}
</style>

