import {
    get
} from '~/service/http/axios'

class Author {
    // 获取所有作者
    async getAuthors() {
        const res = await get('blog/author/authors')
        return res
    }

    async getAuthorDetail(id) {
        const res = await get('blog/author/details', id)
        return res
    }
}

export default new Author()