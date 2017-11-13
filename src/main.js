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

require('./styles/index.less');

Vue.config.productionTip = false;
Vue.use(VueQuillEditor);
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
    watch: {
      showAlert(val) {
        if (!val) {
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
