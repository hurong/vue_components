<template v-cloak>
  <transition>
    <div v-if='show'>
      <div class="modal">
        <div class="modal-dialog" :class="modalClass">

          <!-- Header -->
          <div class="modal-header">
            <slot name="header">
              <h4 class="modal-title">
                <slot name="title">
                  {{ title }}
                </slot>
              </h4>
            </slot>
            <button type="button" class="btn cancel-btn" @click="cancel">
              X
            </button>
          </div>

          <!-- modal content -->
          <div class="modal-body">
            <slot name="content"></slot>
          </div>
          <div v-if="footer" class="modal-footer">
              <!-- footer -->
              <slot name="footer">
                <button type="button" @click="cancel" class="btn line1-btn">{{ cancelText }}</button>
                <button type="button" @click="ok" class="btn line1-btn">{{ okText }}</button>
              </slot>
            </div>
        </div>
      </div>
      <div class="modal-mask"></div>
    </div>
  </transition>
</template>

<style>
.modal-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.5;
}

.modal {
  display: flex;
  justify-content: center;
  z-index: 101;
}

.modal-dialog {
  width: 500px;
  height: 360px;
  border: 1px solid #ccc;
  background: #FFF;
  z-index: 100;
}

.large-modal {
  width: 900px;
  height: 600px;
}

.modal-header {
  height: 40px;
  line-height: 40px;
}

.modal-title {
  display: inline-block;
  float: left;
  margin-left: 10px;
}

.cancel-btn {
  float: right;
  margin: 10px;
  width: 20px;
}

.modal-body {
  min-height: 200px;
}

.modal-footer {
  display: flex;
  justify-content: center;
}

.line1-btn {
  width: 60px;
  height: 30px;
  background: #fff;
  border: 1px solid transparent;
  border-color: #ececec;
}

.btn:hover {
  cursor: pointer;
  background: #eee;
}
</style>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: 'Modal',
    },
    cancelText: {
      type: String,
      default: '取消',
    },
    okText: {
      type: String,
      default: '确定',
    },
    footer: {
      type: Boolean,
      default: true,
    },
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    middle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalClass() {
      return {
        'small-modal': this.small,
        'large-modal': this.large,
        'middle-modal': this.middle,
      };
    },
  },
  methods: {
    cancel() {
      this.$emit('close');
    },
    ok() {
      this.$emit('ok');
    },
  },
};
</script>


