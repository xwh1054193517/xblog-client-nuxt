import {get, put } from '~/service/http/axios'
class Article {
    // 获取所有文章
    async getAllArticles(params = {}) {
        let query = {
            categoryId: params.categoryId ? params.categoryId : 0,
            authorId: params.authorId ? params.authorId : 0,
            tagId: params.tagId ? params.tagId : 0,
            page: params.page ? params.page : 0,
        }
        if (params.search) query.search = params.search
        const res = await get('/blog/article/articles', query)
        return res
    }

    //获取文章详情
    async getArticleDetail(id) {
        const res = await get('/blog/article', id)
        return res
    }

    //点赞文章
    async likeArticle(params) {
        const res = await put('/blog/article/like', {}, { id: params })
        return res
    }

    //获取归档
    async getArchive() {
        const res = await get('blog/article/archive')
        return res
    }

    // 获取所有精选文章
    async getStarArticles() {
        const res = await get('blog/article/star/articles')
        return res
    }

    // 搜索文章
    async searchArticles(params) {
        let query = {
            page: params.page ? params.page : 0,
            search: params.search
        }
        const res = await get('blog/article/search/articles', query)
        return res
    }
}

export default new Article()