const Utils = {}
Utils.formatTime = (timestamp, formats) => {
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

Utils.throttle = (fun, time) => {
    let timer = null
}

export default Utils