//入口函数 
function lazyload(el) {
    const imgs = Array.from(document.querySelectorAll(el))
    imgs.forEach(item => {
        item.setAttribute('crossorigin', 'anonymous')
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

            loadImg(el)
        }
        el.onload = () => {
            el.classList.add('loaded')
            el.previousElementSibling.classList.add('hidden'); // 图片加载后隐藏缩略图
            observer.unobserve(el)
        }
        el.onerror = () => observer.unobserve(el)
    })
}, { threshold: [0, 0.2, 0.5, 0.7, 1], })

export default lazyload