import Vuex from 'vuex';

export const state: any = () => ({
  image: ''
})

export const getters = {
  currentImage(state) {
    return state.image;
  }
}

export const actions = {
  changeImage({ commit }, newImage) {
    commit('setImage', newImage);
  }
}

export const mutations = {
  setImage(state, newImage) {
    state.image = newImage;
  }
}