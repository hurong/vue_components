<template>
  <div>
    <div class="components-cat">
      <ul class="components-list">
        <li @click="operate(cat.value)" v-for="(cat, index) in componentsLeve1List" 
        :key="index" :class="cat.progress ? cat.progress : ''">
          {{ cat.name }} 
          <template v-if="cat.progress && cat.progress==='improve'">
            <span class="completion-flag">(待完善)</span>
          </template>
          <template v-if="cat.progress && cat.progress==='done'">
            <span class="completion-flag">(完成)</span>
          </template>
          <template v-if="cat.progress && cat.progress==='notStart'">
            <span class="completion-flag">(未开始)</span>
          </template>
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
  color: #309e34;
}

/*组件未开始写标志*/
.notStart {
  color: #7e79a5;
}

/*组件开始写仍需要完善标志*/
.improve {
  color: #f5850e;
}

.completion-flag {
  font-size: 10px;
  color: #585050;
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
          progress: 'notStart',
        },
        {
          name: '面包屑导航',
          value: 'breadCrumb',
          progress: 'notStart',
        },
        {
          name: '分页',
          value: 'pagination',
          progress: 'notStart',
        },
        {
          name: '加载中',
          value: 'loading',
          progress: 'notStart',
        },
        {
          name: '树形菜单',
          value: 'tree',
          progress: 'notStart',
        },
        {
          name: 'Tab页',
          value: 'tab',
          progress: 'notStart',
        },
        {
          name: '日期组件',
          value: 'datePicker',
          progress: 'notStart',
        },
        {
          name: '表格',
          value: 'table',
          progress: 'notStart',
        },
        {
          name: '单选按钮',
          value: 'radio',
          progress: 'notStart',
        },
        {
          name: '多选框',
          value: 'checkbox',
          progress: 'notStart',
        },
        {
          name: '级联选择器',
          value: 'cascader',
          progress: 'notStart',
        },
        {
          name: '滑块',
          value: 'slider',
          progress: 'notStart',
        },
        {
          name: '上传',
          value: 'upload',
          progress: 'notStart',
        },
        {
          name: '评分',
          value: 'rate',
          progress: 'notStart',
        },
        {
          name: '消息提示',
          value: 'message',
          progress: 'notStart',
        },
        {
          name: '导航菜单',
          value: 'navMenu',
          progress: 'notStart',
        },
        {
          name: '步骤条',
          value: 'steps',
          progress: 'notStart',
        },
        {
          name: '滚动条',
          value: 'scroll',
          progress: 'notStart',
        },
        {
          name: '开关',
          value: 'swicth',
          progress: 'notStart',
        },
        {
          name: '折叠面板',
          value: 'collapse',
          progress: 'notStart',
        },
        {
          name: '时间轴',
          value: 'timeLine',
          progress: 'notStart',
        },
        {
          name: '可收缩侧边栏',
          value: 'aside',
          progress: 'notStart',
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

    