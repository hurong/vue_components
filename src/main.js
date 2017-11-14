// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import '../static/ueditor/ueditor.config.js';
import '../static/ueditor/ueditor.all.js';
import '../static/ueditor/lang/zh-cn/zh-cn.js';
import VueQuillEditor from 'vue-quill-editor';
import Alert from '@/components/alert';
import store from './store';

require('./styles/index.less');

Vue.config.productionTip = false;
// 富文本编辑器
Vue.use(VueQuillEditor);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});

// 把alert方法添加到vue原型上，以后页面直接通过vue实例调用方法
Vue.prototype.$alert = (title, message, messageDesc, callback) => {
  if (!message && !messageDesc) {
    return;
  }
  var newDiv = document.createElement('div');
  newDiv.id = 'alert_' + Math.ceil(Math.random() * 1000);
  newDiv.innerHTML =
    '<alert :show="showAlert"  :alert="alertOption" @cancle="close"></alert>';
  document.body.appendChild(newDiv);
  new Vue({
    el: newDiv,
    store,
    components: {
      Alert,
    },
    data: {
      showAlert: true,
      alertOption: {
        title: title || '通知',
        message: message || '',
        messageDesc: messageDesc || '',
      },
    },
    beforeMount() {
      console.log(111);
      this.$store.commit('UPDATE_MODAL_COUNT', 'ADD');
    },
    watch: {
      showAlert(val) {
        if (!val) {
          this.$store.commit('UPDATE_MODAL_COUNT', 'REMOVE');
          var alertDiv = document.getElementById(newDiv.id);
          if (alertDiv) {
            alertDiv.parentNode.removeChild(alertDiv);
          }
        }
      },
    },
    methods: {
      close() {
        this.showAlert = false;
        if (callback && typeof callback === 'function') {
          callback();
        }
      },
    },
  });
};
