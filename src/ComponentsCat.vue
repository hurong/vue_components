<template>
  <div class="components-cat">
    <ul class="components-list">
      <li @click="clickShowModalBtn">
        模态框
      </li>
      <li @click="showAlert">
        弹出框
      </li>
      <li>
        下拉框
      </li>
    </ul>
    <modal :show="showModal" @close='closeModal' @ok='okModal'>
      <div slot="content">
        <p>模态框</p>
      </div>
    </modal>
  </div>
</template>

<style scoped>
.components-cat .components-list {
  float: left;
  width: 200px;
}
.components-cat .components-list li {
    height: 40px;
    line-height: 40px;
    background: #8ec2dc;
    border-bottom: 1px solid #eee;
 }

 .components-cat .components-list li:hover {
   background: #eee;
   cursor: pointer;
 }
</style>

<script>
import Modal from '@/components/modal';

export default {
  name: 'ComponentsCat',
  components: {
    Modal,
  },
  data () {
    return {
      showModal: false,
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
    showAlert() {
      this.$alert('test', '弹出的消息', 'alert', () => {

      });
    },
  },
};
</script>

    