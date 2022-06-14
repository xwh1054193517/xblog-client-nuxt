import Vue from 'vue'
Vue.directive('debounce', {
    // el 指令所绑定的元素，可以用来直接操作 DOM 。
    inserted: function(el, binding, vnode) {
        // eslint-disable-next-line no-unused-vars
        let { formatEl, formatBinding, formatVnode } = formatDebounceThrottleParams('debounce', el, binding, vnode);
        formatEl["timeCall"] = null;
        switch (el.type) {
            case "click":
                // 点击事件
                formatEl.addEventListener('click', () => {
                    if (formatEl.timeCall) clearTimeout(formatEl.timeCall);
                    let callNow = !el.timeCall;
                    formatEl.timeCall = setTimeout(() => {
                        formatEl.timeCall = null;
                    }, formatEl.time)
                    if (callNow) formatEl.callback(...formatEl.params);
                })
                break;
            default:
                // 默认为点击事件
                formatEl.addEventListener('click', () => {
                    if (formatEl.timeCall) clearTimeout(formatEl.timeCall);
                    let callNow = !formatEl.timeCall;
                    formatEl.timeCall = setTimeout(() => {
                        formatEl.timeCall = null;
                    }, formatEl.time)
                    if (callNow) formatEl.callback(...formatEl.params);
                })
                break;
        }
    },
    // 所在组件的 VNode 更新时调用
    update: function(el, binding, vnode) {
        let { formatEl, formatBinding, formatVnode } = formatDebounceThrottleParams('debounce', el, binding, vnode);
        el = formatEl;
        binding = formatBinding;
        vnode = formatVnode;
    },
});
/**
 * 点击事件 节流指令
 * 触发函数事件后，短时间间隔内无法连续调用，只有上一次函数执行后，
 * 过了规定的时间间隔，才能进行下一次的函数调用。
 * 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
 */
Vue.directive('throttle', {
    // el 指令所绑定的元素，可以用来直接操作 DOM 。
    inserted: function(el, binding, vnode) {
        // eslint-disable-next-line no-unused-vars
        let { formatEl, formatBinding, formatVnode } = formatDebounceThrottleParams('throttle', el, binding, vnode);
        formatEl["timeCall"] = null;
        switch (formatEl.type) {
            case "click":
                // 点击事件
                formatEl.addEventListener('click', () => {
                    const nowTime = new Date().getTime();
                    if (!formatEl.preTime || nowTime - formatEl.preTime > formatEl.time) {
                        formatEl.preTime = nowTime;
                        formatEl.callback(...formatEl.params);
                    }
                })
                break;
            default:
                // 默认为点击事件
                formatEl.addEventListener('click', () => {
                    const nowTime = new Date().getTime();
                    if (!formatEl.preTime || nowTime - formatEl.preTime > formatEl.time) {
                        formatEl.preTime = nowTime;
                        formatEl.callback(...formatEl.params);
                    }
                })
        }
    },
    update: function(el, binding, vnode) {
        let { formatEl, formatBinding, formatVnode } = formatDebounceThrottleParams('throttle', el, binding, vnode);
        el = formatEl;
        binding = formatBinding;
        vnode = formatVnode;
    }
});
/**
 * 格式化防抖、节流指令的参数
 */
const formatDebounceThrottleParams = function(type, el, binding, vnode) {
    el.callback = vnode.context[binding.arg];
    // 防抖节流时间，由传入的 type 加上 Time 组成的字符串
    el.time = (vnode.data.attrs && vnode.data.attrs[`${ type }Time`]) ? Number(vnode.data.attrs[`${ type }Time`]) : 500;
    // 防抖节流事件类型，由传入的 type 加上 Type 组成的字符串
    el.type = (vnode.data.attrs && vnode.data.attrs[`${ type }Type`]) ? vnode.data.attrs[`${ type }Type`] : "click";
    el.params = Array.isArray(binding.value) ? binding.value : [];
    if (!Array.isArray(binding.value) && !!binding.value) {
        throw `使用${ type }指令时，传递参数不是 数组 类型`
    }
    return {
        formatEl: el,
        formatBinding: binding,
        formatVnode: vnode
    }
}