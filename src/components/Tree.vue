<template>
  <ul style="width:300px;text-align: left;" class="tree-menu">
    <template v-for="(item, index) in nodes">
      <li :style="{paddingLeft:(30 + 25*depth) + 'px'}" @click="toogleMenu($event)" :key="index">
        <i class="fa fa-chevron-down" v-if="item[children]" @click.stop="toogleMenu($event)"></i>
        <!--<i class="fa fa-chevron-up" v-else-if="item[children] && clickIndex===index"></i>-->
        <i class="fa fa-file-o" v-else></i>
        {{ item[text] }}
      </li>
      <tree-menu v-if="item[children]" :nodes="item[children]" :text="text" :value="value" :children="children" :depth="depth+1">
      </tree-menu>
    </template>
  </ul>
</template>

<script>
export default {
  // 默认的节点数据结构
  // nodes =[
  //   {
  //     text: 'root',
  //     value: 'root',
  //     children: [
  //       {
  //         text: '一级菜单TEST1',
  //         value: 'test1',
  //         children: [
  //           {
  //             text: '二级菜单1-1',
  //             value: 'test1-1',
  //           },
  //           {
  //             text: '二级菜单1-2',
  //             value: 'test1-2',
  //             children: [
  //               {
  //                 text: '三级菜单1-2',
  //                 value: 'test1-2-1',
  //               }
  //             ]
  //           },
  //         ]
  //       },
  //       {
  //         name: '一级菜单TEST2',
  //         value: 'test2',
  //       }
  //     ]
  //   }
  // ]
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
      show: true,
      clickIndex: -1,
    };
  },
  name: 'tree-menu',
  methods: {
    toogleMenu(e) {
      let ul = null;
      if (e.target.nodeName === 'I') {
        ul = e.target.parentNode.nextElementSibling;
      } else {
        ul = e.target.nextElementSibling;
      }
      console.log(ul);
      if (ul && ul.tagName === 'UL') {
        if (ul.style.display === 'none') {
          ul.style.display = 'block';
        } else {
          ul.style.display = 'none';
        }
      }
    },
  },
};
</script>

<style>
.tree-menu li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  background: #eee;
  margin-top: 1px;
  border-radius: 3px;
}

.tree-menu li:hover {
  cursor: pointer;
  background: #ababab;
}
</style>


