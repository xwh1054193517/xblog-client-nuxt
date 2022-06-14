import { marked } from 'marked';
import highlight from './highlight'
import DOMPurify from 'dompurify';
import Config from '~/config/index'
const renderer = new marked.Renderer();
marked.setOptions({
    renderer: renderer,
    highlight: function(code, lang) {
        const language = highlight.getLanguage(lang) ? lang : 'plaintext';
        return highlight.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

const imageParse = (src, title, alt) => {
    if (!src.includes(Config.staticPath)) {
        return `
    <figure class="image-wrapper">
      <div class="progress-image">
        <img
          data-src="${src}" title="${title || alt || 'xblog'}" />
      </div>
    </figure>
  `
    }
    return `
  <div class="image-wrapper">
  <div class="progress-image">
        <img src="${'https://xblog-pic-1305549463.cos.ap-guangzhou.myqcloud.com/R-C.gif'}" title="${title || alt || 'shirmy'}"
         />
      <img
        data-src="${src}" title="${title || alt || 'xblog'}"
        class="image-popper real-image"/>
    </div>
`
}

const linkParser = (href, title, text) => {
    const self = href.substr(0, 1) === '#'
    return `<a href="${href}" target="${self ? '_self' : '_blank'}">${text}</a>`
}

renderer.image = imageParse
renderer.link = linkParser

export default (content) => {
    if (typeof content !== 'string') { return '' }
    let res = marked(content)
    if (DOMPurify.sanitize) {
        res = DOMPurify.sanitize(res)
    }
    return res
}