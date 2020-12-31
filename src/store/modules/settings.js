const state = {
  showSideBar: true
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.showSideBar = !state.showSideBar
  }
}

const actions = {
  toggolSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

const settings = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default settings
