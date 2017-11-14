import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';

// 引入Vuex全局状态管理
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalCount: 0,
    maxZIndex: 0,
  },
  mutations,
});
