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
import directives from './directives';
import $ from 'jquery';

require('./styles/index.less');

Vue.config.productionTip = false;
// 富文本编辑器
Vue.use(VueQuillEditor);

// 引入direcives
Object.keys(directives).forEach(key => {
  Vue.directive(key, directives[key]);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  mounted() {
    // let tooltip = Vue.extend({
    //   template: `<div id="tooltip"><div class="arrow"><em></em><span></span></div><div id="tooltipContent"></div></div>`,
    // });
    const tooltip = document.createElement('div');
    tooltip.id = 'tooltip';
    tooltip.innerHTML = '<div class="arrow"><em></em><span></span></div><div id="tooltipContent"></div>';
    document.body.appendChild(tooltip);

    const tooltipMouseenter = () => {
      document.getElementById('tooltip').style.display = 'block';
    };
    const tooltipMouseleave = () => {
      document.getElementById('tooltip').style.display = 'none';
    };
    document.getElementById('tooltip').addEventListener('mouseenter', tooltipMouseenter, false);
    document.getElementById('tooltip').addEventListener('mouseleave', tooltipMouseleave, false);
  },
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
      showAlert: false,
      alertOption: {
        title: title || '通知',
        message: message || '',
        messageDesc: messageDesc || '',
      },
    },
    mounted() {
      this.showAlert = true;
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
