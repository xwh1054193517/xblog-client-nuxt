import article from "~/service/model/article"
import Utils from '~/service/utils/util'
export const state = () => ({
    // 文章列表
    articleList: [],
    total: 0,

    // 归档
    archive: null,
    archiveTimeline: null,

    //具体某篇文章
    article: null,
    comments: [],

    loading: false,
})


export const mutations = {
    setArticlesList(state, { articles, total }) {
        state.articleList = articles
        state.total = total
    },

    setLoading(state, loading = false) {
        state.loading = loading
    },

    setArchive(state, { archiveTimeline, archive }) {
        state.archiveTimeline = archiveTimeline
        state.archive = archive
    },

    setArticleDetail(state, article) {
        state.article = article
    },


}

export const actions = {
    //获取首页文章列表
    async getArticlesList({ commit }, params) {
        try {
            commit('setLoading', true)
            const { articles, total } = await article.getAllArticles(params)
            articles.forEach(item => {
                item.created_date = Utils.formatTime(item.created_date)
            })
            commit('setArticlesList', { articles, total })
            commit('setLoading', false)

        } catch (error) {
            commit('setLoading', false)
            console.log(error);
        }
    },

    // 获取具体文章内容
    async getArticleDetail({ commit }, params) {
        try {

            const result = await article.getArticleDetail(params)
            result.created_date = Utils.formatTime(result.created_date)
            commit('setArticleDetail', result)
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e)
        }
    },

    //点赞
    async likeArticle(_, id) {
        return await article.likeArticle(id)
    },

    //获得归档
    async getArchive({ commit }) {
        try {
            let res = await article.getArchive()
            res.forEach(item => {
                item.created_date = Utils.formatTime(item.created_date)
            })
            const archiveTimeline = res.splice(0)
            let archive = []

            function format(month, day) {
                return month.toString().padStart(2, '0') + '.' + day.toString().padStart(2, '0')
            }

            let curYear = '',
                curMonth = 0,
                yearIdx = -1,
                monthIdx = 0
            res.forEach(item => {
                let dateArr = item.created_date.split('/')
                let year = dateArr[0]
                    //月份会出现0开头
                let month = parseInt(dateArr[1])
                let day = parseInt(dateArr[2])
                item.created_date = format(month, day)
                if (year === curYear) {
                    if (month == curMonth) {
                        archive[yearIdx].monthList[monthIdx].articles.push(item)
                    } else {
                        archive[yearIdx].monthList.push({
                            month,
                            articles: [v]
                        })
                        monthIdx++
                        curMonth = month
                    }
                } else {
                    item.created_date = format(month, day)
                    archive.push({
                        year,
                        monthList: [{
                            month,
                            articles: [item]
                        }]
                    })
                    yearIdx++
                    monthIdx = 0
                    curMonth = month
                    curYear = year
                }
            })

            commit('setArchive', { archiveTimeline, archive })
        } catch (error) {
            console.log(error);
        }
    },

    //搜索文章
    async searchArticles({ commit }, params) {
        try {
            commit('setLoading', true)
            const { articles, total } = await article.getAllArticles(params)
            commit('setArticlesList', { articles, total })
            commit('setLoading', false)
        } catch (e) {
            commit('setLoading', false)
                // eslint-disable-next-line no-console
            console.log(e)
        }
    }

}