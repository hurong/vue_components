<template v-cloak>
  <modal :show='show' @close="cancle">
    <template slot="title">
    {{ alert.title }}
    </template>
    <template slot="content">
      <p class="">
        <b v-html="alert.message"></b>
      </p>
      <p class="" v-if="alert.messageDesc" v-html="alert.messageDesc"></p>
    </template>
    <template slot="footer">
      <button type="button" class="btn line1-btn" @click="cancle">
        {{ okText }}
      </button>
    </template>
  </modal>
</template>

<script>
import Modal from '@/components/modal';

export default {
  name: 'Alert',
  components: {
    Modal,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    alert: {
      type: Object,
      default: {
        title: '通知',
        message: '',
        messageDesc: '',
      },
    },
    okText: {
      type: String,
      default: '关闭',
    },
  },
  methods: {
    cancle() {
      this.$emit('cancle');
    },
  },
};
</script>


