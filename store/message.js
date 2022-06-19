import message from '~/service/model/message'
import Utils from '~/service/utils/util'
export const state = () => ({
    messages: [],
    total: 0,
    loading: false
})

export const mutations = {
    setMessages(state, { result, total }) {
        state.messages = result
        state.total = total
    },
    setMoreMessages(state, { result }) {
        state.messages = state.messages.concat(result)
    },
    setLoading(state, loading = false) {
        state.loading = loading
    },
}

export const actions = {
    async getMessages({ commit }, params) {
        try {
            const { result, total } = await message.getMessages(params)
            result.forEach(item => {
                item.createTime = Utils.formatTime(item.createTime)
                item.createTime = item.createTime.toString().split(' ')[0]
            })
            commit('setMessages', { result, total })
        } catch (e) {
            console.log(e)
        }
    },

    async getMoreMessages({ commit }, params) {
        try {
            commit('setLoading', true)
            const { result, total } = await message.getMessages(params)
            result.forEach(item => {
                item.createTime = Utils.formatTime(item.createTime)
                item.createTime = item.createTime.toString().split(' ')[0]
            })
            commit('setMoreMessages', { result })
            commit('setLoading', false)
        } catch (e) {
            console.log(e)
        }
    },

    async createMessage({ commit }, params) {
        return await message.createMessage(params)
    }
}