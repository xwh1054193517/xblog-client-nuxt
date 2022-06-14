import {get } from '~/service/http/axios'
class Category {
    //获得所有分类
    async getCategories() {
        const res = await get('/blog/category/categories')
        return res
    }

    // 获取分类详情
    async getCategoryDetail(id) {
        console.log(id);
        const res = await get('/blog/category', { id })
        return res
    }
}

export default new Category()