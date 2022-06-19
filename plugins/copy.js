const copyText = `
---------------------
作者：xwh
链接：${location.href}
---------------------
`

document.addEventListener('copy', e => {
    if (!window.getSelection) {
        return
    }
    const content = window.getSelection().toString()
    e.clipboardData.setData('text/plain', content + copyText)
    e.clipboardData.setData('text/html', content + copyText)
    e.preventDefault()
})