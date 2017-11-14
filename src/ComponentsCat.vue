<template>
  <div>
    <div class="components-cat">
      <ul class="components-list">
        <li @click="operate(cat.value)" v-for="(cat, index) in componentsLeve1List" 
        :key="index" :class="cat.progress ? cat.progress : ''">
          {{ cat.name }}
        </li>
      </ul>
    </div>
    <modal :show="showModal" @close='closeModal' @ok='okModal'>
      <div slot="content">
        <p>模态框</p>
      </div>
    </modal>
  </div>
</template>

<style scoped>
.components-cat {
  margin: 30px 20px;
}

.components-cat .components-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  max-height: 460px;
}

.components-cat .components-list li {
  height: 40px;
  width: 200px;
  line-height: 40px;
  background: #8ec2dc;
  border-bottom: 1px solid #eee;
  list-style: none;
}

.components-cat .components-list li:hover {
  background: #eee;
  cursor: pointer;
}

/*组件完成标志*/
.done {
  color: #309e34
}

/*组件未开始写标志*/
.not-start {
  color: #dc1212
}

/*组件开始写仍需要完善标志*/
.improve {
  color: #f5850e
}

</style>

<script>
import Modal from '@/components/modal';

export default {
  name: 'ComponentsCat',
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      componentsLeve1List: [
        {
          name: '模态框',
          value: 'modal',
          progress: 'improve',
        },
        {
          name: '弹出框',
          value: 'alert',
          progress: 'improve',
        },
        {
          name: '下拉框',
          value: 'selection',
        },
        {
          name: '面包屑导航',
          value: 'breadCrumb',
        },
        {
          name: '分页',
          value: 'pagination',
        },
        {
          name: '加载中',
          value: 'loading',
        },
        {
          name: '树形菜单',
          value: 'tree',
        },
        {
          name: 'Tab页',
          value: 'tab',
        },
        {
          name: '日期组件',
          value: 'datePicker',
        },
        {
          name: '表格',
          value: 'table',
        },
        {
          name: '单选按钮',
          value: 'radio',
        },
        {
          name: '多选框',
          value: 'checkbox',
        },
        {
          name: '级联选择器',
          value: 'cascader',
        },
        {
          name: '滑块',
          value: 'slider',
        },
        {
          name: '上传',
          value: 'upload',
        },
        {
          name: '评分',
          value: 'rate',
        },
        {
          name: '消息提示',
          value: 'message',
        },
        {
          name: '导航菜单',
          value: 'navMenu',
        },
        {
          name: '步骤条',
          value: 'steps',
        },
        {
          name: '滚动条',
          value: 'scroll',
        },
        {
          name: '开关',
          value: 'swicth',
        },
        {
          name: '折叠面板',
          value: 'collapse',
        },
        {
          name: '时间轴',
          value: 'timeLine',
        },
        {
          name: '可收缩侧边栏',
          value: 'aside',
        },
      ],
    };
  },
  mounted() {
  },
  methods: {
    clickShowModalBtn() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    okModal() {

    },
    operate(type) {
      switch (type) {
        case 'modal':
          this.clickShowModalBtn();
          break;
        case 'alert':
          this.showAlert();
          break;
        default:
      }
    },
    showAlert() {
      this.$alert('test', '弹出的消息', 'alert', () => {

      });
    },
  },
};
</script>

    