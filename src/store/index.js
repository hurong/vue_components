import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import getters from './getters';

// 引入Vuex全局状态管理
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalCount: 0,
    maxZIndex: 0,
    textList: [
      {
        name: 'test1',
        id: 1,
      },
      {
        name: 'test2',
        id: 2,
      },
    ],
  },
  mutations,
  getters,
});
