const Utils = {}
Utils.formatTime = function(timestamp, formats) {
    formats = formats || 'Y/m/d H:i:s';

    const zero = function(value) {
        if (value < 10) {
            return '0' + value;
        }
        return value;
    };
    const myDate = new Date(timestamp)
    const year = myDate.getFullYear()
    const month = zero(myDate.getMonth() + 1)
    const day = zero(myDate.getDate())

    const hour = zero(myDate.getHours())
    const minute = zero(myDate.getMinutes())
    const second = zero(myDate.getSeconds())

    return formats.replace(/Y|m|d|H|i|s/ig, function(matches) {
        return ({
            Y: year,
            m: month,
            d: day,
            H: hour,
            i: minute,
            s: second
        })[matches]
    })
}

//防抖
Utils.debounce = function(fun, time, immediate = true) {
    // 闭包保存计时器
    let timer = null
    return function() {
        let context = this
        let args = arguments
        if (timer) clearTimeout(timer)
        if (immediate) {
            var callNow = !timer
            timer = setTimeout(() => {
                timer = null
            }, time);
            if (callNow) fun.apply(context, args)
        } else {
            timer = setTimeout(function() {
                fun.apply(context, args)
            }, time);
        }
    }


}

Utils.throttle = function(fun, delay) {
    let timer = null
    let starttime = new Date()
    return function() {
        let curTime = new Date()
        let remain = delay - (curTime - starttime)
        let content = this
        let args = arguments
        if (timer) clearTimeout(timer)
        if (remain <= 0) {
            fun.apply(content, args)
            starttime = Date.now()
        } else {
            timer = setTimeout(() => {
                fun.apply(content, args)
            }, remain);
        }
    }
}

export default Utils