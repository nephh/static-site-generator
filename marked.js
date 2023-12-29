import marked, { setOptions, Renderer } from "marked";

setOptions({
    renderer: new Renderer(),
    highlight: function(code, language) {
        const hljs = require("highlight.js");
        const validLanguage = hljs.getLanguage(language) ? language : "plaintext";
        return hljs.highlight(validLanguage, code).value;
    },
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: false
});

export default marked;
