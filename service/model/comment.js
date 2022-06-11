import {
    get,
    put,
    post
} from '~/service/http/axios'

class Comment {

    // 获取这篇文章下的所有评论
    async getComments(query) {
        const res = await get('blog/article/get/comment', query)
        return res
    }

    // 点赞某条评论
    async likeComment(id) {
        const res = await put('blog/article/like/comment', {}, { id: id })
        return res
    }

    // 创建一条评论
    async createComment(data) {
        const res = await post('blog/article/add/comment', data)
        return res
    }

    // 回复评论
    async replyComment(data) {
        const res = await post('blog/article/reply/comment', data)
        return res
    }
}

export default new Comment()