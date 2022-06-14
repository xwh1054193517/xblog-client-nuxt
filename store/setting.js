export const state = () => ({
    isScroll: false,
    leftMenu: false
})


export const mutations = {
    setScroll(state, scroll) {
        state.isScroll = scroll
    },
    setLeftMenu(state, leftMenu) {
        state.leftMenu = leftMenu
    }
}

export const actions = {
    getScroll({ commit }, scroll) {
        commit('setScroll', scroll)
    },
    getLeftMenu({ commit }, leftMenu) {
        commit('setLeftMenu', leftMenu)
    },
}