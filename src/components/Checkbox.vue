<template v-cloak>
  <div id='checkbox-template'>
    <div v-for="(item, index) in list" :key="index">
      <input type="checkbox" :value="item" v-model="selectedList">
      <label>{{ item.text }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: [],
    },
    selected: {
      type: Array,
      default: [],
    },
  },
  computed: {
    selectedList: {
      set(val) {
        this.$emit('update:selected', val);
      },
      get() {
        return this.selected;
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>