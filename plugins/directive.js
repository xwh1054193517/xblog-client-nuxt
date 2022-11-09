import Vue from 'vue'
Vue.directive('debounce', {
    inserted: function(el, binding, vnode) {
        const { fn, delay = 2000, immediate = false } = binding.value
        let timer = null
        el.addEventListener('click', () => {
            if (timer) clearTimeout(timer);
            if (immediate) {
                var callnow = !timer
                timer = setTimeout(() => {
                    timer = null
                }, delay);
                if (callnow) fn()
            } else {
                timer = setTimeout(() => { fn() }, delay)
            }
        })
    },

});

Vue.directive('throttle', {
    inserted: function(el, binding) {
        let starttime = null
        const { fn, delay = 2000 } = binding.value
        el.addEventListener('click', () => {
            const nowTime = new Date().getTime()
            if (!starttime || nowTime - starttime >= delay) {
                fn()
                starttime = new Date().getTime()
            }
        })
    },
});