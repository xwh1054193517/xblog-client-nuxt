//入口函数 
function lazyload(el) {
    const imgs = Array.from(document.querySelectorAll(el))
    imgs.forEach(item => {
        item.setAttribute('crossorigin', 'anonymous')
        item.src = 'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/R-C.gif'
            // item.src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fb75fc5b61441db0de8f3caeba20275e8107d270811b329-QsLrXX_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1622022562&t=c327623c796967e46b8c053abd1c37f3'
        observer.observe(item)
    })
}

function loadImg(el) {
    el.src = el.dataset.src
}
//API 交叉视口
const observer = new IntersectionObserver(entries => {
    entries.forEach(item => {
        //获得元素节点
        const el = item.target
            //0-1 表示进入视口的程度
        const intersectionRatio = item.intersectionRatio
        if (intersectionRatio > 0 && intersectionRatio <= 1) {
            console.log(el + '进来了');
            loadImg(el)
        }
        el.onload = () => {
            observer.unobserve(el)
        }
        el.onerror = () => observer.unobserve(el)
    })
})

export default lazyload