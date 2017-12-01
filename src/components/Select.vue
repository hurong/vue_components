<template v-cloak>
  <div id='select-template'>
    <input v-model='selected' class="select-input">
    <div>
      <ul>
        <li v-for='(item, index) in selectList' :key='index'>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
#select-template .select-input {
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  outline: none;
  background: none;
  border: 1px solid #d6d1d1;
  padding: 2px 6px;
  cursor: pointer;
}
.select-input:after {
  content: "\e600";
}
</style>

<script>
export default {
  props: {
    selectList: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      selected: '',
    };
  },
};
</script>