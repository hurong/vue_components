<template>
  <div class="tree-menu">
    <ul style="width:200px;margin-left:30px;text-align: left;">
      <li v-for="(item, index) in nodes" :key="index">
        <i class="fa fa-chevron-down"></i>
        {{ item[text] }}
        <tree-menu :nodes="item[children]" :text="text" :value="value" :children="children">
        </tree-menu>
      </li>
    </ul>
  </div>
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
  name: 'tree-menu',
};
</script>

<style>
.tree-menu li {
  list-style: none;
}
</style>


