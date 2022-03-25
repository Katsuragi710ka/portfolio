import Vuex from 'vuex';

export const state: any = () => ({
  attribute: {
    name: '',
    email: '',
    message: ''
  },
  patching: false
})

export const getters = {
  text: state => (field: string): string => {
    return state.attribute[field];
  }
}

export const actions = {
  changeValue({ state, commit }, { field, value }) {
    const newAttribute = Object.assign({}, state.attribute);
    newAttribute[field] = value;
    commit('setAttribute', newAttribute);
  }
}

export const mutations = {
  setAttribute(state, newAttribute) {
    state.attribute = newAttribute;
  }
}