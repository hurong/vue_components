import types from './types';

export default {
  [types.UPDATE_MODAL_COUNT](state, type) {
    if (type === 'ADD') {
      state.modalCount += 1;
    }
    if (type === 'REMOVE') {
      state.modalCount -= 1;
    }
  },

  [types.GET_MAX_ZINDEX](state) {
    function getClass(obj, name) {
      if (obj.currentStyle) {
        return obj.currentStyle[name]; // IE下获取非行间样式
      }
      return getComputedStyle(obj, false)[name]; // FF,Chrome下获取非行间样式
    }
    const divs = document.getElementsByTagName('*');
    let max = 0;
    for (let i = 0; i < divs.length; i++) {
      max = Math.max(max, parseInt(getClass(divs[i], 'z-index')) || 0);
    }
    state.maxZIndex = max;
  },
};
