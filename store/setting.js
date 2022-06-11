export const state = () => ({
    isScroll: false
})


export const mutations = {
    setScroll(state, scroll) {
        state.isScroll = scroll
    }
}

export const actions = {
    getScroll({ commit }, scroll) {
        commit('setScroll', scroll)
    }
}