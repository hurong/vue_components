<template v-cloak>
  <transition>
    <div v-if='show'>
      <div class="modal" :style="{ zIndex: 1000 + 2*modalCount}">
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
      <div class="modal-mask" :style="{ zIndex: 1000 + 2*modalCount - 1}"></div>
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
  /*z-index: 100;*/
}

.modal {
  /*z-index: 101;*/
  background: #FFF;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #2c3e50;
}

.modal-dialog {
  width: 600px;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.large-modal {
  width: 900px;
  height: 600px;
}

.middle-modal {
  width: 600px;
  height: 400px;
}

.small-modal {
  width: 460px;
  height: 300px;
}

.modal-header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  background: #dcefee;
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
  border: 1px solid transparent;
  background: transparent;
}

.modal-body {
  margin: 20px auto;
  text-align: center;
}

.modal-footer {
  position: absolute;
  bottom: 0;
  margin-bottom: 20px;
  left: calc(50% - 30px);
}
</style>

<script>
export default {
  name: 'Modal',
  props: {
    show: {
      type: Boolean,
      default: false,
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
  data() {
    return {
      modalCount: 0,
    };
  },
  watch: {
    show() {
      if (!this.show) {
        this.$store.commit('UPDATE_MODAL_COUNT', 'REMOVE');
        console.log('modal0', this.modalCount);
        return;
      }
      // 暂时不用计算页面最大的z-index,遇到一点问题
      // this.$store.commit('GET_MAX_ZINDEX');
      // console.log(this.$store.state.maxZIndex);
      this.$store.commit('UPDATE_MODAL_COUNT', 'ADD');
      this.modalCount = this.$store.state.modalCount;
      console.log('modal', this.modalCount);
    },
  },
  // beforeMount() {
  //   if (!this.show) {
  //     return;
  //   }
  //   console.log(this.$store.commit('GET_MAX_ZINDEX'));
  //   this.$store.commit('UPDATE_MODAL_COUNT', 'ADD');
  // },

  // beforeDestroy() {
  //   this.$store.commit('UPDATE_MODAL_COUNT', 'REMOVE');
  // },

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


