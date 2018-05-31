<template v-cloak>
  <div>
    <div v-for='(input, index) in inputList' :key="index">
      <input v-model='inputList[index]'>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputList: [],
    };
  },
};
</script>
