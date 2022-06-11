import {
    get
} from '~/service/http/axios'

class Tag {
    // 获取所有标签
    async getTags() {
        const res = await get('blog/tag/tags')
        return res
    }
}

export default new Tag()