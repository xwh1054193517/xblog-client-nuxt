import { marked } from 'marked';
import highlight from './highlight'
import DOMPurify from 'dompurify';
marked.setOptions({
    renderer: new marked.Renderer(),
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


export default (content) => {
    if (typeof content !== 'string') { return '' }
    let res = marked(content)
    if (DOMPurify.sanitize) {
        res = DOMPurify.sanitize(res)
    }
    return res
}