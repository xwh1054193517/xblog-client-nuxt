import tag from '~/service/model/tag'
import article from '~/service/model/article'
import category from '~/service/model/category'
export const state = () => ({
    tags: [],
    // loading: false,
    // articles: [],
    // total: 0,
    articles: [],
    loading: false,
    total: 0,
    categories: [],
    categoryInfo: null
})

export const mutations = {
    setTag(state, { tags }) {
        state.tags = tags
    },
    setArticles(state, { articles, total }) {
        state.articles = articles
        state.total = total
    },
    setMoreArticles(state, { articles }) {
        state.articles = state.articles.concat(articles)
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    setCategory(state, category) {
        state.category = category
    },
    setLoading(state, loading) {
        state.loading = loading
    }

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
            const { articles, total } = await article.getAllArticles(params)
            commit('setArticles', { articles, total })
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    async getMoreArticles({ commit }, params) {
        try {
            commit('setLoading', true)
            const { articles } = await article.getAllArticles(params)
            commit('setMoreArticles', { articles })
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
                // eslint-disable-next-line no-console
            console.log(e)
        }
    },
    async getCategories({ commit }) {
        try {
            const categories = await category.getCategories()
            commit('setCategories', categories)
        } catch (error) {
            console.log(error);
        }
    },

    async getCategory({ commit }, id) {
        try {
            const res = await category.getCategoryDetail(id)
            commit('setCategory', res)
        } catch (error) {
            console.log(error);
        }
    }

}