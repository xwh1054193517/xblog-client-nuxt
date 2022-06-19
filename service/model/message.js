import {
    get,
    post
} from '~/service/http/axios'

class Message {
    // 获取所有留言
    async getMessages(params) {
            const res = await get('blog/message/messages', params)
            return res
        }
        // 发布留言
    async createMessage(message) {
        const res = await post('blog/message', message)
        return res
    }
}

export default new Message()