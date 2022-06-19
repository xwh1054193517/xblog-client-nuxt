import { marked } from 'marked';
import highlight from './highlight'
import DOMPurify from 'dompurify';
import Config from '~/config/index'
const renderer = new marked.Renderer();
const tocObj = {
    add: function(text, level) {
        //锚点 格式为 标题等级 索引
        var anchor = `#toc${level}${++this.index}`;
        //将每个标题锚点添加到Toc数组中
        this.toc.push({ anchor: anchor, level: level, text: text });
        return anchor;
    },
    // 使用堆栈的方式处理嵌套的ul,li，level即ul的嵌套层次，1是最外层
    // <ul>
    //   <li></li>
    //   <ul>
    //     <li></li>
    //   </ul>
    //   <li></li>
    // </ul>
    toHTML: function() {
        //保存标题级别的栈
        let levelStack = [];
        let result = '';
        const addStartUL = () => { result += '<ul>'; };
        const addEndUL = () => { result += '</ul>\n'; };
        const addLI = (anchor, level, text) => { result += `<li class="tit${level}"><a href="#${anchor}">${text}<a></li>\n`; };

        this.toc.forEach(function(item) {
            let levelIndex = levelStack.indexOf(item.level);

            // 没有找到相应level的ul标签，则将li放入新增的ul中
            if (levelIndex === -1) {
                levelStack.unshift(item.level);
                addStartUL();
                addLI(item.anchor, item.level, item.text);
            }
            // 找到了相应level的ul标签，并且在栈顶的位置则直接将li放在此ul下
            else if (levelIndex === 0) {
                addLI(item.anchor, item.level, item.text);
            }
            // 找到了相应level的ul标签，但是不在栈顶位置，
            //需要将之前的所有level出栈并且打上闭合标签，最后新增li
            else {
                while (levelIndex--) {
                    levelStack.shift();
                    addEndUL();
                }
                addLI(item.anchor, item.level, item.text);
            }
        });
        // 如果栈中还有level，全部出栈打上闭合标签
        while (levelStack.length) {
            levelStack.shift();
            addEndUL();
        }
        // 清理先前数据供下次使用
        this.toc = [];
        this.index = 0;
        return result;
    },
    toc: [],
    index: 0
};
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

//图片重写 添加烂加载功能
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

//链接重写
const linkParser = (href, title, text) => {
    const self = href.substr(0, 1) === '#'
    return `<a href="${href}" target="${self ? '_self' : '_blank'}">${text}</a>`
}

//标题重写 添加TOC功能
const headParser = (text, level, raw) => {
    var anchor = tocObj.add(text, level);
    return `<h${level}><a id=${anchor} class="anchor-fix title-${level}">${text}</a></h${level}>\n`;
}
renderer.image = imageParse
renderer.link = linkParser
renderer.heading = headParser

export default (content) => {
    if (typeof content !== 'string') { return '' }
    let res = {}
    res.content = marked(content)
    res.toc = tocObj.toHTML()
        //安全插件
    if (DOMPurify.sanitize) {
        res.content = DOMPurify.sanitize(res.content)
    }
    return res
}