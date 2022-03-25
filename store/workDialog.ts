import Vuex from 'vuex';

export const state: any = () => ({
  currentComponentName: null
})

export const getters = {
  isOpened(state) {
    return state.currentComponentName;
  },
  currentComponent(state) {
    return state.currentComponentName
  }
}

export const actions = {
  changeCurrentComponentName({ commit }, componentName) {
    commit('setCurrentComponentName', componentName);
  },
  closeComponent({ commit }) {
    commit('setCurrentComponentName', null);
  }
}

export const mutations = {
  setCurrentComponentName(state, componentName) {
    state.currentComponentName = componentName;
  }
}