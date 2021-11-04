import{r as u,o,c as i,a as n,b as d,w as m,d as g,F as k,e as _,t as h,f as v,g as w,h as x}from"./vendor.1413c0dd.js";const C=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function p(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=p(s);fetch(s.href,a)}};C();var j=(l,e)=>{for(const[p,t]of e)l[p]=t;return l};const T={name:"app",data(){return{isShowMusic:!1}},mounted(){}},D={id:"app"},S=g("\u76EE\u5F55"),H=n("li",null," \u5173\u4E8E\u6211 ",-1),M={class:"main"},U=n("footer",null," \xA9 sunyuu ",-1);function $(l,e,p,t,s,a){const r=u("router-link"),c=u("router-view");return o(),i("div",D,[n("header",null,[n("ul",null,[n("li",null,[d(r,{to:"/"},{default:m(()=>[S]),_:1})]),H])]),n("div",M,[d(c)]),U])}var q=j(T,[["render",$]]),b=[{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<blockquote>
<p>\u8FD9\u4E2A<a href="https://github.com/remarkjs/remark">remark.js</a>\u548C<a href="https://github.com/gnab/remark">remarkjs</a>\u4E0D\u662F\u4E00\u56DE\u4E8B\uFF0C\u540E\u8005\u7B80\u5355\u6765\u8BF4\u662F\u4E00\u4E2A\u6D4F\u89C8\u5668\u4E0A\u7684\u5E7B\u706F\u7247\u5DE5\u5177\uFF0C\u800C\u524D\u8005\u662F\u4E00\u4E2A\u7528\u4E8E\u7F16\u8BD1\u8F6C\u6362markdown\u6587\u4EF6\u7684\u5DE5\u5177\uFF0C\u8FD9\u4E2A\u6587\u7AE0\u4E3B\u8981\u5206\u6790\u524D\u8005</p>
</blockquote>
<h2>remark.js\u662F\u4EC0\u4E48</h2>
<p>remark.js\u662F\u4E00\u4E2A\u7528\u4E8E\u5904\u7406markdown\u6587\u4EF6\u7684\u63D2\u4EF6\u7684\u751F\u6001\u7CFB\u7EDF\uFF0C\u5B83\u4E0D\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u5C06markdown\u8F6C\u6362\u6210HTML\u7684\u5E93\uFF0C\u800C\u662F\u4F5C\u4E3A\u4E00\u4E2A\u751F\u6001\u7CFB\u7EDF\uFF0C\u7ED3\u5408\u4F17\u591A\u7684\u63D2\u4EF6\uFF0C\u5BF9markdown\u6587\u4EF6\u8FDB\u884C\u4E86\u5168\u65B9\u4F4D\u7684\u5904\u7406\u548C\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u5BF9\u5176\u8FDB\u884C\u4EE3\u7801\u98CE\u683C\u7684\u68C0\u67E5\uFF0C\u53EF\u4EE5\u8F6C\u6362\u6210react\uFF0C\u53EF\u4EE5\u8F6C\u6362\u6210v-dom\uFF0C\u7ED3\u5408\u4E0D\u540C\u7684\u63D2\u4EF6\u53EF\u4EE5\u8FBE\u5230\u4E0D\u540C\u7684\u6548\u679C</p>
<h4>Getting Started</h4>
<pre><code class="hljs language-js"><span class="hljs-keyword">var</span> html = <span class="hljs-built_in">require</span>(<span class="hljs-string">'remark-html'</span>)
<span class="hljs-keyword">var</span> remark = <span class="hljs-built_in">require</span>(<span class="hljs-string">'remark'</span>)

remark().use(html).process(<span class="hljs-string">'# remark.js\u662F\u4EC0\u4E48'</span>, <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">err, file</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-built_in">String</span>(file))
})</code></pre>
<p>\u5176\u4E2Dremark\u4F5C\u4E3A\u5165\u53E3\uFF0Cremark-html\u5C31\u662F\u5176\u8F6C\u6362\u6210html\u7684\u63D2\u4EF6\uFF0C\u8FD9\u6BB5\u7A0B\u5E8F\u7684\u7ED3\u679C\u5C31\u662F</p>
<pre><code>&#x3C;h1>remark.js\u662F\u4EC0\u4E48&#x3C;/h1>
</code></pre>
<p>\u5176\u652F\u6301\u540C\u6B65\u64CD\u4F5C\uFF0C\u628A\u4E0A\u9762\u7684\u4EE3\u7801\u6539\u5199\u6210\u540C\u6B65\uFF0C\u4E5F\u80FD\u5F97\u5230\u76F8\u540C\u7684\u7ED3\u679C</p>
<pre><code class="hljs language-js"><span class="hljs-keyword">var</span> html = <span class="hljs-built_in">require</span>(<span class="hljs-string">'remark-html'</span>)
<span class="hljs-keyword">var</span> remark = <span class="hljs-built_in">require</span>(<span class="hljs-string">'remark'</span>)

<span class="hljs-keyword">var</span> processor= remark().use(html)

<span class="hljs-built_in">console</span>.log(processor.processSync(<span class="hljs-string">'# remark.js\u662F\u4EC0\u4E48'</span>).toString())</code></pre>
<h2>\u5904\u7406\u8FC7\u7A0B</h2>
<p>remarkjs\u7684\u5904\u7406\u8FC7\u7A0B\u662F\u7B80\u5355\u900F\u660E\u7684\uFF0C\u5982\u4E0B</p>
<pre><code class="hljs language-asciidoc">| ....................... process() ......................... |
| ......... parse() ..... | run() | ..... stringify() ....... |

<span class="hljs-code">          +--------+                     +----------+</span>
Input ->- | Parser | ->- Syntax Tree ->- | Compiler | ->- Output
<span class="hljs-code">          +--------+          |          +----------+</span>
<span class="hljs-code">                              X</span>
<span class="hljs-code">                              |</span>
<span class="hljs-code">                       +--------------+</span>
<span class="hljs-code">                       | Transformers |</span>
<span class="hljs-code">                       +--------------+</span></code></pre>
<p>\u5BF9\u7167\u4E0A\u9762\u7684\u5217\u5B50\uFF0Cremark\u662F\u4E00\u4E2AParser\uFF0C\u5B83\u5C06markdown\u8F6C\u53D8\u6210MDAST syntax tree\uFF0C\u8FD9\u4E2AMDAST\u7684\u5168\u79F0\u662FMarkdown Abstract Syntax Tree\uFF0C\u628AMarkdown\u5904\u7406\u540E\u7684\u7ED3\u679C\u5C31\u662F\u8FD9\u4E2A\u62BD\u8C61\u8BED\u6CD5\u6811\uFF0C\u4E0A\u9762\u7684\u5217\u5B50\u4F1A\u88AB\u62BD\u8C61\u6210</p>
<pre><code class="hljs language-json">{
    <span class="hljs-attr">"type"</span>:<span class="hljs-string">"root"</span>,
    <span class="hljs-attr">"children"</span>:[{
        <span class="hljs-attr">"type"</span>:<span class="hljs-string">"heading"</span>,
        <span class="hljs-attr">"depth"</span>:<span class="hljs-number">1</span>,
        <span class="hljs-attr">"children"</span>:[{<span class="hljs-attr">"type"</span>:<span class="hljs-string">"text"</span>,<span class="hljs-attr">"value"</span>:<span class="hljs-string">"remark.js\u662F\u4EC0\u4E48"</span>}]}
    ]
}</code></pre>
<p>\u800Cremark-html\u5C31\u626E\u6F14\u4E86Compiler\u7684\u89D2\u8272\uFF0C\u4E00\u4E2A\u5B8C\u6574\u7684process()\u65E2\u8981\u6709Parser\u4E5F\u8981\u6709Compiler</p>
<h2>\u63D2\u4EF6\u4ECB\u7ECD</h2>
<p>remark\u4E0B\u7684\u63D2\u4EF6\u975E\u5E38\u4E30\u5BCC\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\u51E0\u4E2A\uFF0C\u5F53\u7136\u4E5F\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u5177\u4F53\u9700\u8981\u81EA\u5B9A\u4E49\u63D2\u4EF6</p>
<ul>
<li><a href="https://github.com/rhysd/remark-emoji">remark-emoji</a> \u7528UTF-8\u7684emoji\u6765\u4EE3\u66FF:emoji</li>
<li><a href="https://github.com/remarkjs/remark-github">remark-github</a> \u81EA\u52A8\u4E3AGitHub\u4E0A\u7684commits\uFF0Cissues\uFF0Cpull-request\u81EA\u52A8\u52A0\u4E0A\u94FE\u63A5</li>
<li><a href="https://github.com/remarkjs/remark-license">remark-license</a> \u4E3A\u6587\u6863\u52A0\u4E0A\u8BB8\u53EF\u8BC1</li>
<li>...</li>
</ul>
<h3>\u81EA\u5B9A\u4E49\u63D2\u4EF6</h3>
<p>\u5728\u77E5\u4E4E\u4E0A\u770B\u5230\u77E5\u4E4E\u7684\u94FE\u63A5\u6709\u4E00\u79CD\u5F62\u5F0F\u662F\u65B9\u5757\u5F62\u7684\uFF0C\u53EF\u4EE5\u6709\u4E00\u4E9B\u57FA\u672C\u7684\u4FE1\u606F\u5728\u91CC\u9762\uFF0C\u8FD9\u79CD\u5F62\u5F0F\u770B\u8D77\u6765\u8FD8\u662F\u5F88\u4E0D\u9519\u7684\uFF0C\u4E8E\u662F\u6211\u8FD9\u8FB9\u7528\u4E00\u4E2A\u63D2\u4EF6\u81EA\u5B9A\u4E49\u4E00\u4E2AMarkdown\u4E2D\u7684\u5173\u952E\u8BCD\uFF0C\u8BA9\u5B83\u80FD\u751F\u6210\u7C7B\u4F3C\u94FE\u63A5\u5757\u4E00\u6837\u7684\u4EE3\u7801\u7ED3\u6784</p>
<pre><code class="hljs language-js"><span class="hljs-built_in">module</span>.exports = plugin

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">plugin</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> Parser = <span class="hljs-built_in">this</span>.Parser;
    <span class="hljs-keyword">var</span> tokenizers = Parser.prototype.inlineTokenizers;
    <span class="hljs-keyword">var</span> methods = Parser.prototype.inlineMethods;

    tokenizers.mention = tokenizeMention;

    methods.splice(methods.indexOf(<span class="hljs-string">'link'</span>), <span class="hljs-number">0</span>, <span class="hljs-string">'mention'</span>);
}



tokenizeMention.notInLink = <span class="hljs-literal">true</span>;
tokenizeMention.locator = locateMention;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">tokenizeMention</span>(<span class="hljs-params">eat, value, silent</span>) </span>{
    <span class="hljs-keyword">if</span> (value.charAt(<span class="hljs-number">0</span>) !== <span class="hljs-string">'@'</span>) {
        <span class="hljs-keyword">return</span>
    }

    <span class="hljs-keyword">var</span> match = <span class="hljs-regexp">/@\\[(\\w+)\\]\\((\\S+)(?:\\"(\\S+)\\")?(?:\\"(\\S+)\\")?\\)/</span>.exec(value);

    <span class="hljs-keyword">if</span> (match) {
        <span class="hljs-built_in">console</span>.log(match)
        <span class="hljs-keyword">if</span> (silent) {
            <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        }
        <span class="hljs-keyword">return</span> eat(match[<span class="hljs-number">0</span>])({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'link'</span>,
            <span class="hljs-attr">url</span>: match[<span class="hljs-number">2</span>],
            <span class="hljs-attr">title</span>: match[<span class="hljs-number">3</span>] ? match[<span class="hljs-number">3</span>] : <span class="hljs-literal">null</span>,
            <span class="hljs-attr">data</span>: {
                <span class="hljs-attr">hProperties</span>: {
                    <span class="hljs-attr">className</span>: <span class="hljs-string">'cardlink'</span>
                }
            },
            <span class="hljs-attr">children</span>: [
                {
                    <span class="hljs-attr">type</span>: <span class="hljs-string">'element'</span>,
                    <span class="hljs-attr">children</span>: [
                        {
                            <span class="hljs-attr">type</span>: <span class="hljs-string">'element'</span>,
                            <span class="hljs-attr">data</span>: {<span class="hljs-attr">hName</span>: <span class="hljs-string">'span'</span>},
                            <span class="hljs-attr">children</span>: [
                                {<span class="hljs-attr">type</span>: <span class="hljs-string">'text'</span>, <span class="hljs-attr">value</span>: match[<span class="hljs-number">1</span>]}
                            ]
                        },
                        {
                            <span class="hljs-attr">type</span>: <span class="hljs-string">'element'</span>,
                            <span class="hljs-attr">data</span>: {<span class="hljs-attr">hName</span>: <span class="hljs-string">'span'</span>},
                            <span class="hljs-attr">children</span>: [
                                {<span class="hljs-attr">type</span>: <span class="hljs-string">'text'</span>, <span class="hljs-attr">value</span>: match[<span class="hljs-number">2</span>]}
                            ]
                        }
                    ]
                },
                {
                    <span class="hljs-attr">type</span>: <span class="hljs-string">'image'</span>,
                    <span class="hljs-attr">url</span>: match[<span class="hljs-number">4</span>]? match[<span class="hljs-number">4</span>]: <span class="hljs-string">''</span>
                }
            ]
        });
    }
}

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">locateMention</span>(<span class="hljs-params">value, fromIndex</span>) </span>{
    <span class="hljs-keyword">return</span> value.indexOf(<span class="hljs-string">'@['</span>, fromIndex);
}</code></pre>
<p>\u4E0A\u9762\u7684\u63D2\u4EF6\u4F1A\u5C06 @[test](www.test.com)\u8FD9\u6837\u7684\u7ED3\u6784\u8F6C\u53D8\u6210<code>&#x3C;a href="www.test.com" class="cardlink">&#x3C;div>&#x3C;span>test&#x3C;/span>&#x3C;span>www.test.com&#x3C;/span>&#x3C;/div>&#x3C;img src="">&#x3C;/a></code>\u8FD9\u6837\u7684html\u7ED3\u6784\uFF0C\u914D\u5408\u4E0Acss\u5C31\u80FD\u884C\u5728Markdown\u4E2D\u5199\u51FA\u77E5\u4E4E\u5361\u7247\u94FE\u63A5\u7684\u98CE\u683C</p>
<h2>\u603B\u7ED3</h2>
<p>remark.js\u662F\u4E00\u4E2A\u975E\u5E38\u597D\u7684\u751F\u6001\u7CFB\u7EDF\uFF0C\u5B83\u5F97\u540E\u9762\u6709\u4E00\u4E2A\u5E9E\u5927\u7684\u914D\u5957\u652F\u6491\uFF0C\u662F\u4E00\u4E2A\u975E\u5E38\u6210\u719F\u5B8C\u5584\u7684\u9879\u76EE\uFF0C\u56E0\u4E3A\u6211\u6CA1\u600E\u4E48\u641C\u5230\u76F8\u5173\u4ECB\u7ECD\u7684\u6587\u7AE0\uFF0C\u6240\u4EE5\u8FD9\u7BC7\u6587\u7AE0\u5728\u4E8E\u629B\u7816\u5F15\u7389\uFF0C\u8FD8\u671B\u591A\u591A\u5EFA\u8BAE</p>
`},meta:{title:"remark.js\u4F7F\u7528\u4ECB\u7ECD",publishDate:"2018-03-13T00:00:00.000Z",tags:["blog","JavaScript"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/blog-2018-3-13.md",filename:"blog-2018-3-13"},{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<blockquote>
<p>\u524D\u51E0\u5929\u5728\u770B\u4E00\u4E2Aissue\u65F6\u65E0\u610F\u4E2D\u66B4\u9732\u4E86\u6211\u5BF9\u4E8EsetTimeout\u7684\u9519\u8BEF\u7406\u89E3\uFF0C\u4E8E\u662F\u91CD\u65B0\u5F00\u59CB\u5B8C\u6574\u7684\u56DE\u987E\u548C\u5B66\u4E60\u4E00\u4E0B\u76F8\u5173\u7684\u77E5\u8BC6\u70B9\uFF0C\u5DE9\u56FA\u4E0B\u76F8\u5173\u7684\u57FA\u7840\u77E5\u8BC6</p>
</blockquote>
<h2>setTimeout\u662F\u4EC0\u4E48</h2>
<p>MDN\u4E0A\u7684\u5B9A\u4E49\u662F\u8FD9\u4E48\u5199\u7684</p>
<blockquote>
<p>WindowOrWorkerGlobalScope\u6DF7\u5408\u7684 <strong>setTimeout()</strong> \u65B9\u6CD5\u8BBE\u7F6E\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u8BE5\u5B9A\u65F6\u5668\u5728\u5B9A\u65F6\u5668\u5230\u671F\u540E\u6267\u884C\u4E00\u4E2A\u51FD\u6570\u6216\u6307\u5B9A\u7684\u4E00\u6BB5\u4EE3\u7801</p>
</blockquote>
<p>\u610F\u601D\u5C31\u662F\u6307\u5728Window\u548C<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API">WorkerGlobalScope</a>\u4E2D\u540C\u65F6\u88AB\u5B9E\u73B0\uFF0C\u5177\u4F53\u7684\u770BsetTimeout\u4E2D\u7684\u53C2\u6570\u72B6\u51B5</p>
<pre><code>var timeoutID = scope.setTimeout(function[, delay, param1, param2, ...]);
var timeoutID = scope.setTimeout(function[, delay]); 
var timeoutID = scope.setTimeout(code[, delay]);
</code></pre>
<p>\u5176\u4E2Dfunction\u5C31\u662F\u5728delay\uFF08\u6BEB\u79D2\uFF09\u5EF6\u8FDF\u540E\u8981\u6267\u884C\u7684\u51FD\u6570\uFF0C\u5176\u4E2Dcode\u662Ffunction\u7684\u4E00\u4E2A\u66FF\u4EE3\u8BED\u6CD5\uFF0C\u4F46\u662F\u4E0D\u63A8\u8350\u8FD9\u4E48\u5199\uFF0C\u4E00\u822C\u4F7F\u7528function\u5C31\u884C\u4E86\uFF0Cfunction\u7684\u5199\u6CD5\u6709\u4EE5\u4E0B\u51E0\u79CD</p>
<pre><code class="hljs language-javascript"><span class="hljs-comment">//\u533F\u540D\u51FD\u6570\u65B9\u5F0F</span>
<span class="hljs-built_in">setTimeout</span>(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{}, <span class="hljs-number">1000</span>)

<span class="hljs-comment">//\u51FD\u6570\u540D</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">foo</span>(<span class="hljs-params"></span>) </span>{}
<span class="hljs-built_in">setTimeout</span>(foo, <span class="hljs-number">1000</span>)

<span class="hljs-comment">//\u51FD\u6570\u53D8\u91CF</span>
<span class="hljs-keyword">var</span> bar = <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{}
<span class="hljs-built_in">setTimeout</span>(bar, <span class="hljs-number">1000</span>)</code></pre>
<p>\u5F53\u4F7F\u7528foo()\u4F5C\u4E3A\u53C2\u6570\u65F6\uFF0C\u5176\u5B9E\u5C31\u662F\u628Afoo\u51FD\u6570\u7684\u8FD0\u884C\u7ED3\u679C\u4F5C\u4E3A\u4E86\u53C2\u6570\uFF0C\u5E76\u6CA1\u6709\u8FBE\u5230\u5728\u5EF6\u8FDF\u540E\u53BB\u6267\u884Cfoo\u51FD\u6570\u7684\u6548\u679C\uFF0C\u5931\u53BB\u4E86\u56DE\u8C03\u7684\u610F\u4E49</p>
<h2>setTimeout\u7684\u539F\u7406</h2>
<p>\u5176\u5B9E\u5BF9\u4E8EsetTimeout\u8FD9\u6837\u7684timer\u6765\u8BF4\u5728JavaScript\u4E2D\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u7406\u89E3\uFF0C\u5355\u4E00\u7684\u7EBF\u7A0B\u6309\u987A\u5E8F\u6267\u884C\u4EE3\u7801\uFF0C\u9047\u5230timer\u65F6\u5219\u5148\u4E0D\u6267\u884C\uFF0C\u800C\u662F\u5728\u76F8\u5E94\u7684\u65F6\u95F4\u540E\u628A\u9700\u8981\u6267\u884C\u7684\u4EE3\u7801\u518D\u63D2\u5165\u5230\u7EBF\u7A0B\u4E2D\uFF0C\u5982\u679C\u9047\u5230\u4E00\u6BB5\u975E\u5E38\u8017\u65F6\u7684\u4EE3\u7801\uFF0C\u867D\u7136\u5DF2\u7ECF\u63D2\u5165\u4E86\u4EE3\u7801\uFF0C\u4F46\u662F\u524D\u9762\u7684\u8017\u65F6\u963B\u585E\u4E86\uFF0C\u5C31\u8FBE\u4E0D\u5230\u5728\u6307\u5B9A\u65F6\u95F4\u6267\u884C\u7684\u6548\u679C\u4E86\uFF0C\u67E5\u770B\u4E0B\u56FE</p>
<p><img src="https://mdn.mozillademos.org/files/4617/default.svg" alt="JavaScript"></p>
<p>setTimeout\u4E2D\u7684\u4EE3\u7801\u5C31\u662F\u5728\u6307\u5B9A\u65F6\u95F4\u540E\u63D2\u5165\u4E86\u961F\u5217\uFF0C\u5728\u6808\u6267\u884C\u5B8C\u6210\u540E\u5C31\u53BB\u6267\u884C\u961F\u5217\u91CC\u7684\u4E1C\u897F\uFF0C\u66F4\u52A0\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u53EF\u4EE5\u770B\u8FD9\u8FB9\u7684\u6587\u6863<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/EventLoop">\u5E76\u53D1\u6A21\u578B\u4E0E\u4E8B\u4EF6\u5FAA\u73AF</a></p>
`},meta:{title:"\u56E0\u4E00\u6B21\u4F4E\u7EA7\u9519\u8BEF\u91CD\u65B0\u8BA4\u8BC6setTimeout",publishDate:"2018-02-07T00:00:00.000Z",tags:["blog","JavaScript"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/blog-2018-2-7.md",filename:"blog-2018-2-7"},{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<blockquote>
<p>\u6700\u8FD1\u4E00\u76F4\u5728\u7528\u57FA\u4E8Evue\u7684Element-UI\u4F5C\u4E3A\u6846\u67B6\u8FDB\u884C\u5F00\u53D1\uFF0C\u5E38\u5E38\u4E5F\u5E94\u4E3A\u4E1A\u52A1\u9700\u6C42\u9700\u8981\u53BB\u5B9A\u5236\u6539\u53D8\u5176\u6E90\u7801\uFF0C\u4E8E\u662F\u4E5F\u5E38\u5E38\u5173\u6CE8\u5176github\u4E0A\u7684\u4FE1\u606F\uFF0C\u6628\u5929\u665A\u4E0A\u5076\u7136\u5728Issues\u4E0A\u770B\u5230<a href="https://github.com/ElemeFE/element/issues/9631">[Bug Report] table control BUG</a>\u8FD9\u4E2Aissue\uFF0C\u5FC3\u60F3\u80FD\u4E0D\u80FD\u81EA\u5DF1\u5C1D\u8BD5\u7740\u89E3\u51B3\u4E0B\uFF0C\u4E5F\u597D\u6DF7\u4E2Apr\u5565\u7684</p>
</blockquote>
<h2>\u5B9A\u4F4D\u95EE\u9898</h2>
<p>\u6839\u636Eissue\u4E2D\u7684\u4FE1\u606F\uFF08ps\uFF1A\u8FD9\u4E2Abug report\u5305\u542B\u4E86\u975E\u5E38\u8BE6\u7EC6\u7684\u6B65\u9AA4\u4FE1\u606F\uFF0C\u8FD8\u6709jsfiddle\u7684demo\uFF0C\u53EF\u4EE5\u8BF4\u662F\u975E\u5E38\u65B9\u4FBF\u7684\u5B9A\u4F4D\u95EE\u9898\u4E86\uFF09\uFF0C\u53EF\u4EE5\u770B\u4E00\u4E0B\u5176\u4E2D\u7684demo\u4EE3\u7801</p>
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">template</span>></span>
  <span class="hljs-tag">&#x3C;<span class="hljs-name">el-table</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span> <span class="hljs-attr">stripe</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>></span>
    <span class="hljs-tag">&#x3C;<span class="hljs-name">el-table-column</span> <span class="hljs-attr">v-for</span>=<span class="hljs-string">"item in columns"</span> <span class="hljs-attr">v-bind</span>=<span class="hljs-string">"item"</span>></span>
    <span class="hljs-tag">&#x3C;/<span class="hljs-name">el-table-column</span>></span>
  <span class="hljs-tag">&#x3C;/<span class="hljs-name">el-table</span>></span>
<span class="hljs-tag">&#x3C;/<span class="hljs-name">template</span>></span></code></pre>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">var</span> Main = {
        created () {
    	<span class="hljs-built_in">setTimeout</span>(<span class="hljs-built_in">this</span>.setColumns, <span class="hljs-number">1000</span>)
    },
    <span class="hljs-attr">methods</span>: {
    	setColumns () {
      	<span class="hljs-built_in">this</span>.columns = [{
        	<span class="hljs-attr">prop</span>: <span class="hljs-string">'date'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'\u65E5\u671F'</span>
        },{
        	<span class="hljs-attr">prop</span>: <span class="hljs-string">'name'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'\u59D3\u540D'</span>
        },{
        	<span class="hljs-attr">prop</span>: <span class="hljs-string">'address'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'\u5730\u5740'</span>
        }]
      }
    },
    <span class="hljs-function"><span class="hljs-title">data</span>(<span class="hljs-params"></span>)</span> {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">columns</span>: [],
        <span class="hljs-attr">tableData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'\u738B\u5C0F\u864E'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1518 \u5F04'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'\u738B\u5C0F\u864E'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1517 \u5F04'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'\u738B\u5C0F\u864E'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1519 \u5F04'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'\u738B\u5C0F\u864E'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'\u4E0A\u6D77\u5E02\u666E\u9640\u533A\u91D1\u6C99\u6C5F\u8DEF 1516 \u5F04'</span>
        }]
      }
    }
  }</code></pre>
<p>\u5176\u4E2D\u5F53<code>&#x3C;el-table>&#x3C;/el-table></code>\u4E2D\u6DFB\u52A0<code>height="200"</code>\u5C5E\u6027\u540E\uFF0C\u9875\u9762\u4F1A\u5D29\u6E83\u5361\u6389</p>
<h2>\u5206\u6790\u95EE\u9898</h2>
<p>\u5176\u4E2D\u6700\u4EE3\u7801\u524D\u540E<code>height="200"</code>\u7684\u6DFB\u52A0\uFF0C\u4E00\u7EA7<code>setTimeout(this.setColumns, 1000)</code>\u662F\u6574\u4E2Abug\u5F15\u8D77\u7684\u91CD\u8981\u56E0\u7D20\uFF0C\u56E0\u4E3A\u5728\u5176\u5B83\u60C5\u51B5\u4E2D\u8FD9\u4E24\u4E2A\u6761\u4EF6\u5355\u72EC\u5B58\u5728\u662F\u6CA1\u6709\u95EE\u9898\u7684\uFF0C\u4E0D\u8FC7\u5F53\u65F6\u6211\u6CA1\u6709\u4ED4\u7EC6\u8003\u8651\u6E05\u695A\uFF0C\u76F4\u63A5\u5728\u4E0B\u9762\u8BC4\u8BBA\u4E86\u628A<code>setTimeout(this.setColumns, 1000)</code>\u6539\u6210<code>setTimeout(this.setColumns(), 1000)</code>,\u5176\u5B9E\u5F53\u65F6\u6211\u771F\u5FC3\u4E0D\u77E5\u9053\u8FD9\u4E24\u4E2A\u6709\u533A\u522B\u30FD(\u3002_\xB0)\u30CE \uFF0C\u4E0D\u8FC7\u540E\u6765\u660E\u786E\u4E86\u4E4B\u540E\u8FDB\u4E00\u6B65\u8FDB\u884C\u4E86\u5206\u6790</p>
<blockquote>
<p>todo: setTimeout\u7684\u7406\u89E3</p>
</blockquote>
<p>\u53BB\u770BElement-UI\u6846\u67B6\u4E2D\u7684\u6E90\u7801height\u4F5C\u4E3Aprops\u4F20\u8FDB\u4E86table.vue\u7EC4\u4EF6\uFF0C\u5176\u4E2D\u7528\u5230\u5B83\u5F97\u5730\u65B9\u6709\u51E0\u5904\uFF0C\u521A\u5F00\u59CB\u4E0D\u719F\u6089\u4EE3\u7801\u7684\u8BDD\u4E0D\u592A\u5BB9\u6613\u5224\u65AD\u8FD9\u91CC\u54EA\u8FB9\u4F1A\u51FA\u95EE\u9898\uFF0C\u4E0D\u8FC7\u7EC6\u7EC6\u5206\u6790\uFF0C\u5927\u90E8\u5206\u53EA\u662F\u7528\u8FD9\u4E2A\u5C5E\u6027\u6765\u8FDB\u884C\u6837\u5F0F\u7684\u8D4B\u503C\u8BA1\u7B97\uFF0C\u597D\u5F97\u5230\u4E00\u4E9B\u6837\u5F0F\uFF0C\u4E0D\u8FC7\u5728\u8BA1\u7B97\u5C5E\u6027computed\u4E0B\u6709<code>shouldUpdateHeight()</code>\u7684\u51FD\u6570\u76F4\u63A5\u53D7\u5230\u4E86height\u5C5E\u6027\u7684\u5F71\u54CD\uFF0C\u800C\u8FD9\u4E2AshouldUpdateHeight\u5C5E\u6027\u5728\u6574\u4E2A\u9875\u9762\u4E2D\u4E5F\u53EA\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u7684<code>doLayout()</code>\u51FD\u6570\u7684\u4E00\u5904\u6709\u4F7F\u7528\uFF0C\u90A3\u5C31\u4E0D\u59A8\u770B\u770B\u8FD9\u4E2A\u51FD\u6570\u7684\u4F7F\u7528</p>
<pre><code class="hljs language-javascript"><span class="hljs-function"><span class="hljs-title">doLayout</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.shouldUpdateHeight) {
        <span class="hljs-built_in">this</span>.layout.updateElsHeight();
    }
    <span class="hljs-built_in">this</span>.layout.updateColumnsWidth();
}</code></pre>
<p>\u4E5F\u5C31\u662F\u8BF4\u5F53\u6709height\u5C5E\u6027\u4F20\u5165\u8FDB\u6765\u540E\u4F1A\u6267\u884C<code>this.layout.updateElsHeight()</code>\u51FD\u6570\uFF0C\u70B9\u8FDB\u53BB\u770B\u770B\u8FD9\u4E2A\u51FD\u6570\uFF0C\u6709\u4E9B\u611F\u89C9\u95EE\u9898\u5C31\u51FA\u73B0\u4E86\u8FD9\u8FB9\uFF0C\u56E0\u4E3A\u8FD9\u8FB9\u51FA\u73B0\u4E86\u5FAA\u73AF\u8C03\u7528\uFF0C\u7528console\u5206\u522B\u770B\u4E86\u4E24\u4E2A\u5FAA\u73AF\u8C03\u7528\u7684\u51FD\u6570\u5185\u90E8\uFF0C\u5F97\u51FA\u4E86\u7ED3\u8BBA\u95EE\u9898\u51FA\u73B0\u5728\u4E86\u8FD9\u4E00\u884C</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.showHeader &#x26;&#x26; headerWrapper.offsetWidth > <span class="hljs-number">0</span> &#x26;&#x26; headerHeight &#x3C; <span class="hljs-number">2</span>) {
      <span class="hljs-keyword">return</span> Vue.nextTick(<span class="hljs-function">() =></span> <span class="hljs-built_in">this</span>.updateElsHeight());
    }</code></pre>
<p>\u8FD9\u4E00\u884C\u7684\u5224\u65AD\u6761\u4EF6\u4E2D\u524D\u4E24\u4E2A\u4E3Atrue\uFF0C\u5728\u4E8E\u7B2C\u4E09\u4E2A\u56E0\u4E3A<code>&#x3C;el-table-column>&#x3C;/el-table-column></code>\u662F\u5F02\u6B65\u52A0\u8F7D\u7684\uFF0C\u5BFC\u81F4headerHeight\u4E00\u76F4\u6CA1\u6709\u9AD8\u5EA6\uFF0C\u4E8E\u662F\u8FD9\u4E2A\u5224\u65AD\u6761\u4EF6\u4E00\u76F4\u4E3A\u771F\uFF0C\u5BFC\u81F4\u4E86\u6B7B\u5FAA\u73AF\u6267\u884C\u8FD9\u6BB5\u51FD\u6570\uFF0C\u6700\u7EC8\u5BFC\u81F4\u9875\u9762\u5D29\u6E83\uFF0C\u4FEE\u6539\u8D77\u6765\u4E5F\u662F\u6BD4\u8F83\u7684\u7B80\u5355\uFF0C\u53EA\u8981\u52A0\u5165\u5224\u65AD\u662F\u5426\u6709<code>&#x3C;el-table-column></code>\u5C31\u884C\u4E86\uFF0C\u6B63\u5F53\u6211\u770B\u770B\u60F3\u600E\u4E48\u5199\u7684\u65F6\u5019\uFF0C\u7136\u540Epull request\u4E0B\u7684\uFF0C\u53D1\u73B0bug\u5DF2\u7ECF\u88AB\u5B98\u65B9\u4FEE\u590D\u4E86\uFF0C\u6BD4\u6211\u63D0\u524D\u4E865\u4E2A\u5C0F\u65F6\uFF0C\u8FD9\u662F\u4FEE\u6539\u540E\u7684\u4EE3\u7801\uFF0C\u5F88\u597D\u7684\u89C4\u907F\u4E86\u8FD9\u4E2A\u95EE\u9898</p>
<pre><code class="hljs language-javascript"><span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>.showHeader &#x26;&#x26; headerWrapper.offsetWidth > <span class="hljs-number">0</span> &#x26;&#x26; (<span class="hljs-built_in">this</span>.table.columns || []).length > <span class="hljs-number">0</span> &#x26;&#x26; headerHeight &#x3C; <span class="hljs-number">2</span>) {
    <span class="hljs-keyword">return</span> Vue.nextTick(<span class="hljs-function">() =></span> <span class="hljs-built_in">this</span>.updateElsHeight());
}</code></pre>
<h2>\u7ED3\u8BBA</h2>
<p>\u95EE\u9898\u672C\u8EAB\u5E76\u4E0D\u590D\u6742\uFF0C\u719F\u6089\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\u53EF\u4EE5\u5F88\u5FEB\u7684\u6392\u67E5\u51FA\u95EE\u9898\uFF0C\u82E5\u662F\u8981\u5B8C\u7F8E\u7684\u89E3\u51B3\u95EE\u9898\u53EF\u80FD\u5BF9\u4E0A\u4E0B\u6587\u8981\u66F4\u52A0\u7684\u719F\u6089\u4E00\u4E9B\uFF0C\u5E76\u4E14\u5BF9\u57FA\u7840\u7684\u77E5\u8BC6\u8981\u66F4\u52A0\u7684\u638C\u63E1</p>
<p>\u9700\u8981\u4E0D\u65AD\u63D0\u5347\uFF01</p>
`},meta:{title:"\u8BB0\u4E00\u6B21\u5931\u8D25\u7684\u6DF7pr\u4E4B\u65C5",publishDate:"2018-02-05T00:00:00.000Z",tags:["\u5410\u69FD","\u65E5\u8BB0","JavaScript","Vue","Element-UI"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/blog-2018-2-5.md",filename:"blog-2018-2-5"},{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<p>The first article which is posted by vmb.</p>
<hr>
<p>Hello world!</p>
<pre><code class="hljs language-js">(<span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) </span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'Hello world!'</span>);
})();</code></pre>
`},meta:{title:"Hello world!",publishDate:"2016-05-05T00:00:00.000Z",tags:["test"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/hello-world.md",filename:"hello-world"}];const I={props:{data:{type:Object,default:"test"}},computed:{mdData(){return this.data}},mounted(){console.log(this.mdData)}},W={class:"archive"};function L(l,e,p,t,s,a){const r=u("router-link");return o(),i("div",W,[(o(!0),i(k,null,_(a.mdData,(c,f)=>(o(),i("div",{key:f,class:"archive-item"},[n("h2",null,[d(r,{to:"/posts/"+c.filename},{default:m(()=>[g(h(c.meta.title),1)]),_:2},1032,["to"])]),n("span",null,h(c.meta.publishDate.slice(0,10)),1)]))),128))])}var z=j(I,[["render",L]]);const E={props:["postData"],data(){return{}},mounted(){console.log(this.postData)}},N={class:"post"},P=["innerHTML"];function A(l,e,p,t,s,a){return o(),i("div",N,[n("h1",null,h(this.postData.meta.title),1),n("h6",null,"\u53D1\u5E03\u4E8E"+h(this.postData.meta.publishDate.slice(0,10)),1),n("div",{innerHTML:this.postData.content.contents,class:"markdown-body"},null,8,P)])}var O=j(E,[["render",A]]);const J=v({history:w(),routes:[{path:"/",component:z,props:{data:b}},{path:"/posts/:post",component:O,props:l=>{let e=l.params.post;return{postData:b.find(t=>t.filename==e)}}}]}),y=x(q);y.use(J);y.mount("#app");
