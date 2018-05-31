<template v-cloak>
  <div id='select-template'>
    <template v-if='multi === true'>
      <div class="select-input multi-select-input" @click='toggle'>
        <div>
          <span>
            <span v-for='(item, index) in selectedMulti' :key='index' class="multi-select-item">
              <template v-if='text'>
                <span>{{ item.text }}</span>
                <i class="delete-select-item" @click.stop="deleteSelectItem(item, index)">X</i>
              </template>
              <template v-else>
                <span>{{ item }}</span>
                <i class="delete-select-item" @click.stop="deleteSelectItem(item, index)">X</i>
              </template>
            </span>
          </span>
        </div>
        <span type="button" class='multi-search' @click.stop='toggle'>
        </span>
      </div>
      <div class="option-item" :style="{display: show}">
        <ul>
          <template v-if='text'>
            <li v-for='(item, index) in selectListCopy' :key='index' @click='select(item, index)'>
              {{ item.text }}
            </li>
          </template>
          <template v-else>
            <li v-for='(item, index) in selectListCopy' :key='index' @click='select(item, index)'>
              {{ item }}
            </li>
          </template>
        </ul>
      </div>
    </template>
    <template v-else>
      <div class="select-input">
        <input :value='selected' @click='toggle' type='text'>
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
    </template>
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

#select-template .multi-select-input {
  width: 200px;
  min-height: 30px;
  height: auto;
  border: 1px solid rgb(214, 209, 209);
  border-radius: 4px;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  font-stretch: normal;
  font-size: 13.3333px;
  line-height: normal;
  font-family: Arial;
  /*padding: 2px 6px 6px;*/
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

#select-template .select-input .multi-search {
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translate(-50%, calc(-50% + 2px));
  border: 8px solid transparent;
  background: transparent;
  border-color: #e0d9d9 transparent transparent transparent;
  width: 0;
  height: 0;
  cursor: pointer;
}

#select-template .option-item {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  top: 100%;
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

#select-template .multi-select-item {
  margin-right: 4px;
  background: #f3f1f1;
  padding: 6px;
  border-radius: 4px;
  display: inline-block;
  /*margin-top: 4px;*/
}

#select-template .multi-select-item:hover {
  background: #d2cbcb;
}

#select-template .delete-select-item {
  cursor: pointer;
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
    multi: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    selectListCopy(val) {
      if (val.length === 0 && this.multi) {
        this.show = 'none';
      }
    },
  },
  data() {
    return {
      selected: '',
      show: 'none',
      selectedMulti: [],
      selectListCopy: this.selectList,
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

    select(item, index) {
      if (this.multi) {
        this.selectedMulti.push(item);
        this.selectListCopy.splice(index, 1);
        this.$emit('input', this.selectedMulti);
      } else {
        if (typeof item === 'object') {
          this.selected = item[this.text];
          this.$emit('input', this.selected);
        } else {
          this.selected = item;
          this.$emit('input', this.selected);
        }
        this.show = 'none';
      }
    },

    deleteSelectItem(item, index) {
      this.selectListCopy.push(item);
      this.selectedMulti.splice(index, 1);
    },
  },
};
</script>