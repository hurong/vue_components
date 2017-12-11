<template v-cloak>
  <div id='select-template'>
    <div class="select-input">
      <input :value='selected'  @click='toggle' type='text'>
      <span type="button" class="search" @click='toggle'>
      </span>
    </div>
    <div class="option-item" :style="{display: show}">
      <ul>
        <template v-if='text'>
          <li v-for='(item, index) in selectList' :key='index' @click='select(item)'>
            {{ item.text }}
          </li>
        </template>
        <template v-else>
          <li v-for='(item, index) in selectList' :key='index' @click='select(item)'>
            {{ item }}
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<style>
#select-template {
  position: relative;
  display: inline-flex;
  width: auto;
}

#select-template .select-input {
  position: relative;
  display: inline-flex;
  width: auto;
}

#select-template .select-input input {
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  outline: none;
  background: none;
  border: 1px solid #d6d1d1;
  padding: 2px 6px;
  text-align: center;
  cursor: pointer;
}

#select-template .select-input .search {
  position: absolute;
  right: 2px;
  top: 10px;
  border: 8px solid transparent;
  background: transparent;
  border-color: #e0d9d9 transparent transparent transparent;
  width: 0;
  height: 0;
  cursor: pointer;
}

#select-template .option-item {
  width: 183px;
  margin: 0 auto;
  position: absolute;
  top: 30px;
}

#select-template .option-item li {
  list-style-type: none;
  height: 30px;
  line-height: 30px;
}

#select-template .option-item li:hover {
  background: #eee;
  cursor: pointer;
}

#select-template .option-item ul {
  border: 1px solid #eee;
  margin-top: 2px;
  top: 30px;
  left: 0px;
}
</style>

<script>
export default {
  // model: {
  //   prop: 'value',
  //   event: 'input',
  // },
  props: {
    selectList: {
      type: Array,
      default: [],
    },
    code: {
      type: String,
      default: 'code',
    },
    text: {
      type: String,
    },
  },
  data() {
    return {
      selected: '',
      show: 'none',
    };
  },
  methods: {
    toggle() {
      if (this.show === 'none') {
        this.show = 'block';
      } else {
        this.show = 'none';
      }
    },

    change() {
    },

    select(item) {
      if (typeof item === 'object') {
        this.selected = item[this.text];
        this.$emit('input', this.selected);
      } else {
        this.selected = item;
        this.$emit('input', this.selected);
      }
      this.show = 'none';
    },
  },
};
</script>