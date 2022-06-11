import tag from '~/service/model/tag'


export const state = () => ({
    tags: [],



    // categories: [],
    // // 标签 或 分类 详情
    // loading: false,
    // articles: [],
    // total: 0,

    // category: {}
})

export const mutations = {
    setTag(state, { tags }) {
        state.tags = tags
    },


}

export const actions = {
    async getTag({ commit }) {
        try {
            const tags = await tag.getTags()
            commit('setTag', { tags })
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },



    async getArticles({ commit }, params) {
        try {
            const { articles, total } = await article.getArticles(params)
            commit('setArticles', { articles, total })
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },


}