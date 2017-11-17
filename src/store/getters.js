const getters = {
  test: (state, getters) => id => {
    return state.textList.find(item => item.id === id);
  },
};

export default getters;
