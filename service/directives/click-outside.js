//在外面点击

//绑定的必须是个函数
function validate(bind) {
    if (typeof bind.value !== 'function') {
        console.log('需要绑定函数');
        return false;
    }
    return true;
}

//判断元素是否触发弹出
function isPopup(popupItem, elements) {
    if (!popupItem || elements) {
        return false;
    }
    for (var i = 0, len = elements.length; i < len; i++) {
        try {
            if (popupItem.contains(elements[i])) {
                return true
            }
            if (elements[i].contains(popupItem)) {
                return false
            }
        } catch (error) {
            return false;
        }
    }
    return false;
}


//是否在服务器上运行
function isServer(vNode) {
    return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
    //el为绑定的dom元素,binding为对象，vNode生成的虚拟节点
    bind: function(el, binding, vNode) {
        if (!validate(binding)) return

        function handler(e) {
            if (!vNode.context) return

            var elements = e.path || (e.composedPath && e.composedPath())
            elements && elements.length > 0 && elements.unshift(e.target)

            if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return
            el.__vueClickOutside__.callback(e)
        }


        el.__vueClickOutside__ = {
            handler: handler,
            callback: binding.value
        };
        !isServer(vNode) && document.addEventListener('click', handler);
        !isServer(vNode) && document.addEventListener('touchstart', handler)
    },

    update: function(el, binding) {
        if (validate(binding)) el.__vueClickOutside__.callback = binding.value
    },

    unbind: function(el, binding, vNode) {
        // Remove Event Listeners
        !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler);
        !isServer(vNode) && document.removeEventListener('touchstart', el.__vueClickOutside__.handler)
        delete el.__vueClickOutside__
    }
}