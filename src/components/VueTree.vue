<template>
  <ul style="width:300px;text-align: left;" class="tree-menu">
    <li v-for="(item, index) in nodes" :key="index">
      <div class="tree-item"  @click.stop="toogleMenu(item)" 
      :style="{paddingLeft:(30 + 25*depth) + 'px'}">
        <i class="fa" v-if="item[children]" :class="[item.expanded ? 'fa-chevron-down':'fa-chevron-up']"></i>
        <i class="fa fa-file-o" v-else></i>
        <a>{{ item[text] }}</a>
      </div>
      <vue-tree v-if="item.expanded" :nodes="item[children]" :text="text" :value="value" 
      :children="children" :depth="depth+1" @select-menu="selectMenu">
      </vue-tree>
    </li>
  </ul>
</template>


<script>
export default {
  props: {
    nodes: {
      type: Array,
      default: () => {
        return [];
      },
    },
    text: {  // 显示的属性名
      type: String,
      default: 'text',
    },
    value: {
      type: String, // 业务需要用到的值的属性名
      default: 'value',
    },
    children: {  // 子节点的属性名
      type: String,
      default: 'children',
    },
    depth: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  name: 'vue-tree',
  methods: {
    toogleMenu(node) {
      this.$set(node, 'expanded', !node.expanded);
      this.$emit('select-menu', node);// 发送事件出去，父组件可以获取选中的菜单
    },
    selectMenu(node) {
      this.$emit('select-menu', node);// 层层把事件传递出去
    },
  },
};
</script>

<style>
.tree-menu .tree-item {
  width: 300px;
  height: 30px;
  line-height: 30px;
  background: #eee;
  display: inline-block;
  border: 3px;
  margin-bottom: 1px;
  padding-left: 20px;
  box-sizing: border-box;
}

.tree-menu .tree-item:hover {
  background: #ccc;
}

.tree-menu li {
  list-style: none;
}
</style>


