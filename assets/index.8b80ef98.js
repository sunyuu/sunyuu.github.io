import{r as g,o as c,c as o,a as n,b as h,w as u,d,F as f,e as _,t as j,f as w,g as v,h as S}from"./vendor.1413c0dd.js";const T=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))p(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&p(t)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}};T();var m=(e,l)=>{for(const[r,p]of l)e[r]=p;return e};const x={name:"app",data(){return{isShowMusic:!1}},mounted(){}},C={id:"app"},J=d("\u76EE\u5F55"),$=d("\u5173\u4E8E\u6211"),D=d("\u66F4\u65B0\u8BB0\u5F55"),U={class:"main"},q=n("footer",null," \xA9 sunyuu ",-1);function M(e,l,r,p,s,a){const t=g("router-link"),i=g("router-view");return c(),o("div",C,[n("header",null,[n("ul",null,[n("li",null,[h(t,{to:"/"},{default:u(()=>[J]),_:1})]),n("li",null,[h(t,{to:"/about"},{default:u(()=>[$]),_:1})]),n("li",null,[h(t,{to:"/changelog"},{default:u(()=>[D]),_:1})])])]),n("div",U,[h(i)]),q])}var H=m(x,[["render",M]]),y=[{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<blockquote>
<p><a href="https://devblogs.microsoft.com/typescript/a-proposal-for-type-syntax-in-javascript/">\u82F1\u6587\u539F\u6587\u94FE\u63A5</a> \u4F5C\u8005\u4E3ATypeScript\u56E2\u961F\u6210\u5458</p>
</blockquote>
<p>\u4ECA\u5929\u6211\u4EEC\u5174\u594B\u7684\u5BA3\u5E03\u4E00\u4E2A\u65B0\u7684stage-0\u7684\u63D0\u6848\uFF0C\u90A3\u5C31\u662F\u7ED9JavaScript\u52A0\u4E0A\u53EF\u9009\u7684\u548C\u53EF\u53BB\u9664\u7684\u7C7B\u578B\u8BED\u6CD5\uFF0C\u65B0\u52A0\u7684\u7C7B\u578B\u8BED\u6CD5\u4E0D\u4F1A\u6539\u53D8\u5468\u56F4\u4EE3\u7801\u7684\u8FD0\u884C\uFF0C\u5B83\u4F1A\u50CF\u6CE8\u91CA\u4E00\u6837\u8FD0\u884C\uFF0C\u6211\u4EEC\u8BA4\u4E3A\u8FD9\u4E2A\u63D0\u6848\u5C06\u4F1A\u4F7FTypeScript\u5728\u5404\u79CD\u89C4\u6A21\u7684\u5F00\u53D1\u4E2D\u4FBF\u6377\u9002\u7528\uFF0C\u6211\u4EEC\u60F3\u804A\u4E00\u804A\u4E3A\u4EC0\u4E48\u6211\u4EEC\u4F1A\u63D0\u51FA\u8FD9\u4E2A\u63D0\u6848\uFF0C\u4EE5\u53CA\u8FD9\u4E2A\u63D0\u6848\u662F\u5982\u4F55\u5B9E\u73B0\u7684\u3002</p>
<h3>\u80CC\u666F</h3>
<p>\u6700\u8FD1\u6211\u4EEC\u56E2\u961F\u5728JavaScript\u7684\u5F00\u53D1\u4E1A\u754C\u4E2D\u7684\u4E00\u4E2A\u8D8B\u52BF\u662F\u5E0C\u671B\u66F4\u5FEB\u8FED\u4EE3\u548C\u66F4\u5C11\u7684\u6784\u5EFA\u6B65\u9AA4\uFF0C\u6362\u53E5\u8BDD\u8BF4\u5C31\u662F\u5728\u5F00\u53D1\u4E2D\u201C\u66F4\u5FEB\uFF0C\u66F4\u7B80\u5355\u201C\u3002</p>
<p>\u67D0\u79CD\u7A0B\u5EA6\u4E0A\u6765\u8BF4\uFF0C\u73B0\u5728\u5F00\u53D1\u8FC7\u7A0B\u5DF2\u7ECF\u5728\u53D8\u7684\u66F4\u52A0\u7B80\u4FBF\u4E86\u3002\u8FD9\u662F\u56E0\u4E3A\u73B0\u4EE3\u6D4F\u89C8\u5668\u7684\u5FEB\u901F\u5F00\u53D1\u8FED\u4EE3\uFF0C\u5BF9\u8BED\u8A00\u6807\u51C6\u7684\u652F\u6301\u7A0B\u5EA6\uFF0C\u8BA9\u6211\u4EEC\u5F00\u53D1\u8005\u53EF\u4EE5\u4E0D\u901A\u8FC7\u7F16\u8BD1\u73B0\u4EE3\u7248\u672C\u7684JavaScript\u6765\u914D\u5408\u53E4\u8001\u7684\u6D4F\u89C8\u5668\u8FD0\u884C\u73AF\u5883\u3002\u53E6\u5916\u6253\u5305\u4E5F\u662F\u8FD9\u6837\u7684\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u4F7F\u7528module\uFF0C\u6240\u4EE5\u6253\u5305\u53EF\u4EE5\u770B\u4F5C\u662F\u4E00\u79CD\u4F18\u5316\u800C\u4E0D\u662F\u5FC5\u8981\u6B65\u9AA4\u4E86\uFF0C\u8FD9\u79CD\u60C5\u51B5\u8D8A\u6765\u8D8A\u666E\u904D\uFF0C\u5BF9\u4E8ETypeScript\u6765\u8BF4\uFF0C\u5982\u4F55\u8DDF\u4E0A\u8FD9\u79CD\u65F6\u4EE3\u53D8\u5316\u5462\uFF1F</p>
<p>\u5982\u679C\u6211\u4EEC\u56DE\u5230TypeScript\u521A\u521A\u53D1\u5E03\u76842012\u5E74\uFF0CJavaScript\u4E16\u754C\u548C\u73B0\u5728\u662F\u622A\u7136\u4E0D\u540C\u7684\u3002\u5F53\u65F6\u6211\u4EEC\u4E0D\u77E5\u9053\u8FD8\u8981\u88AB\u4F4E\u7248\u672C\u7684Interne Explorer\u5361\u4F4F\u591A\u4E45\uFF0C\u4E0D\u6E05\u695A\u6D4F\u89C8\u5668\u5BF9\u8BED\u8A00\u7684\u652F\u6301\u7279\u6027\u5982\u4F55\uFF0C\u8FD9\u8BA9\u6211\u4EEC\u5F53\u65F6\u9752\u7750\u4E8E\u4F7F\u7528\u7F16\u8BD1\u5668\u3001\u6253\u5305\u5668\u8FD9\u6837\u7684\u5DE5\u5177\u3002\u6240\u4EE5TypeScript\u80FD\u5728\u90A3\u4E2A\u5E74\u4EE3\u5FEB\u901F\u6210\u957F\uFF0C\u6BD5\u7ADF\u53CD\u6B63\u90FD\u8981\u6709\u7F16\u8BD1\u6253\u5305\u7684\u6B65\u9AA4\uFF0C\u4E3A\u4EC0\u4E48\u4E0D\u7F16\u8BD1\u4E00\u4E2A\u6709\u7C7B\u578B\u7684\u5462\uFF1F\u4F46\u662F\u968F\u7740\u65F6\u4EE3\u53D1\u5C55\uFF0C\u4E5F\u8BB8\u5C06\u6765\u4EC5\u4EC5\u53EA\u6709TypeScript\u9700\u8981\u7F16\u8BD1\u4E86\uFF0C\u5176\u5B83\u7279\u6027\u90FD\u80FD\u539F\u751F\u652F\u6301\uFF0C\u6211\u4EEC\u5E76\u4E0D\u60F3TypeScript\u6700\u540E\u6210\u4E3A\u963B\u788DJavaScript\u53D1\u5C55\u7684\u5DE5\u5177\u3002</p>
<p>\u4ECE\u67D0\u79CD\u7A0B\u5EA6\u6765\u8BF4\uFF0C\u73B0\u5728\u7684JavaScripts\u662F\u652F\u6301\u7C7B\u578B\u63D0\u793A\u7684\u3002\u5982\u679C\u4F60\u7528\u8FC7Visual Studio\u6216\u8005Visual Studio Code\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u7528JSDoc\u6CE8\u91CA\u7684\u65B9\u5F0F\u6765\u6807\u6CE8\u7C7B\u578B\u3002</p>
<pre><code class="hljs language-js"><span class="hljs-comment">/**
 * <span class="hljs-doctag">@param </span>a {number}
 * <span class="hljs-doctag">@param </span>b {number}
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a, b</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}</code></pre>
<p>\u50CF\u4E0A\u9762\u8FD9\u6837\u7684\u53EA\u662F\u6CE8\u91CA\uFF0C\u4E0D\u4F1A\u5E72\u6270\u5230\u4EE3\u7801\u7684\u8FD0\u884C\uFF0C\u4F46\u662F\u7F16\u8F91\u5668\u91CC\u7684TypeScript\u5374\u53EF\u4EE5\u7528\u5B83\u4EEC\u7ED9\u5F00\u53D1\u8005\u5E26\u6765\u66F4\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u4F60\u751A\u81F3\u53EF\u4EE5\u5728\u6587\u4EF6\u9876\u90E8\u6DFB\u52A0<code>// @ts-check</code>\u6CE8\u91CA\u6216\u8005\u901A\u8FC7TypeScript\u7F16\u8BD1\u65F6\u8BBE\u7F6E<code>checkJs</code>\u6765\u542F\u7528\u7C7B\u578B\u68C0\u67E5\uFF0C\u8FD9\u4E2A\u7279\u6027\u53EF\u4EE5\u5F88\u65B9\u4FBF\u4E0D\u901A\u8FC7\u7F16\u8BD1\u6B65\u9AA4\u5C31\u80FD\u83B7\u5F97\u4E00\u4E9BTypeScript\u7684\u7279\u6027\uFF0C\u5F00\u53D1\u8005\u53EF\u4EE5\u5728\u4E00\u4E9B\u5C0F\u578B\u9879\u76EE\u3001\u57FA\u672C\u7684\u7F51\u9875\u811A\u672C\u6216\u8005\u670D\u52A1\u7AEF\u4EE3\u7801\u4E2D\u4F7F\u7528\u3002</p>
<p>\u4F46\u662F\u4F60\u53D1\u73B0\u8FD9\u8FD8\u662F\u6709\u70B9\u5197\u957F\uFF0C\u6709\u6CA1\u4EC0\u4E48\u65B9\u6CD5\u8BA9\u6211\u4EEC\u65E2\u80FD\u8F7B\u677E\u4FBF\u6377\u7684\u7F16\u5199JavaScript\uFF0C\u53C8\u80FD\u83B7\u5F97TypeScript\u7684\u5F00\u53D1\u4F53\u9A8C\u5462\uFF0C\u542C\u8D77\u6765\u6709\u70B9\u9C7C\u548C\u718A\u638C\u4E0D\u53EF\u517C\u5F97\uFF0C\u4F46\u662F\uFF0C\u5982\u679C\u6211\u4EEC\u53EF\u4EE5\u5728JavaScript\u4E2D\u4F7F\u7528TypeScript\u7684\u7C7B\u578B\u8BED\u6CD5\uFF0C\u4F46\u662F\u8FD9\u4E9B\u8BED\u6CD5\u53C8\u50CF\u6CE8\u91CA\u4E00\u6837\u4F1A\u5728\u8FD0\u884C\u73AF\u5883\u4E2D\u88AB\u5FFD\u7565\u3002</p>
<pre><code class="hljs language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">add</span>(<span class="hljs-params">a: number, b: number</span>) </span>{
    <span class="hljs-keyword">return</span> a + b;
}</code></pre>
<p>\u6211\u4EEC\u56E2\u961F\u76F8\u4FE1\u8FD9\u91CC\u9762\u6709\u4E00\u4E9B\u5B9E\u73B0\u7684\u53EF\u80FD\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u6708\u6211\u4EEC\u5E0C\u671B\u80FD\u7ED9TC39\uFF08ECMAScript\u6807\u51C6\u59D4\u5458\u4F1A\uFF09\u63D0\u4EA4\u8FD9\u4E2A\u63D0\u6848\u3002</p>
<h3>\u5982\u4F55\u5DE5\u4F5C</h3>
<p>\u5F53\u6211\u4EEC\u88AB\u95EE\u5230\u4EC0\u4E48\u65F6\u5019\u7C7B\u578B\u7CFB\u7EDF\u4F1A\u52A0\u5230JavaScript\u4E2D\uFF0C\u6211\u4EEC\u6CA1\u6CD5\u51C6\u786E\u7684\u7ED9\u51FA\u7B54\u590D\uFF0C\u5386\u53F2\u6765\u770B\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5BF9\u5F00\u53D1\u8005\u6765\u8BF4\u4E00\u76F4\u4EE5\u6765\u90FD\u6709\u4E0D\u540C\u7684\u7B54\u6848\uFF0C\u6709\u4E9B\u4EBA\u8BA4\u4E3A\u7C7B\u578B\u5E94\u8BE5\u5B8C\u5168\u88AB\u5FFD\u7565\u6389\uFF0C\u4F46\u6709\u4E9B\u4EBA\u8BA4\u4E3A\u7C7B\u578B\u5E94\u8BE5\u8981\u6709\u4E9B\u5B9E\u9645\u610F\u4E49\uFF0C\u50CF\u662F\u5728\u8FD0\u884C\u65F6\u7684\u9A8C\u8BC1\uFF0C\u6216\u8005\u4F5C\u4E3A\u5F15\u64CE\u4F18\u5316\u7684\u63D0\u793A\uFF0C\u7B49\u7B49\u5176\u5B83\u7528\u5904\u3002\u4F46\u6700\u8FD1\u51E0\u5E74\uFF0C\u6211\u4EEC\u770B\u5230\u4E00\u4E9B\u4E0ETypeScript\u76F8\u914D\u5408\u7684\u53D1\u5C55\u8D8B\u52BF\uFF0C\u90A3\u5C31\u662F\u7C7B\u578B\u5728\u5F15\u64CE\u8FD0\u884C\u65F6\u662F\u5B8C\u5168\u5FFD\u7565\u548C\u53EF\u6D88\u9664\u7684\u3002\u6240\u4EE5\u6700\u8FD1\u8D8A\u6765\u8D8A\u591A\u7684\u6211\u4EEC\u56E2\u961F\u7684\u5F00\u53D1\u8005\u591A\u6B21\u5411\u6211\u4EEC\u63D0\u8FC7\uFF0C\u8BA9\u6211\u4EEC\u63D0\u51FA\u4E00\u79CD\u201C\u6CE8\u91CA\u578B\u7C7B\u578B\u6807\u6CE8\u201D\u7684\u63D0\u6848\u3002</p>
<p>\u8FD9\u4E2A\u63D0\u6848\u7684\u5177\u4F53\u60F3\u6CD5\u662F\u8FD9\u6837\u7684\uFF0CJavaScript\u4E2D\u652F\u6301\u4E00\u79CD\u53EF\u4EE5\u5B8C\u5168\u88AB\u5F15\u64CE\u5FFD\u7565\u7684\u7C7B\u578B\u8BED\u6CD5\uFF0C\u8FD9\u79CD\u8BED\u6CD5\u5728\u5F00\u53D1\u4E2D\u53EF\u4EE5\u88ABTypeScript\u3001Flow\u4EE5\u53CA\u5176\u5B83\u5DE5\u5177\u8BC6\u522B\u4F7F\u7528\u3002\u8FD9\u53EF\u4EE5\u8BA9\u6211\u4EEC\u65E2\u4FDD\u7559TypeScript\u4E2D\u4E00\u4E9B\u597D\u7684\u5F00\u53D1\u4F53\u9A8C\uFF0C\u50CF\u662F\u7C7B\u578B\u68C0\u67E5\uFF0C\u53C8\u4E0D\u9700\u8981\u901A\u8FC7\u7F16\u8BD1\u6B65\u9AA4\u3002</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/03/7f7ed8de815a80d9.png">
\u540C\u65F6\uFF0C\u53EF\u4EE5\u8BA9TypeScript\u548CJavaScript+Type\u5728\u8BED\u6CD5\u4E0A\u548C\u7C7B\u578B\u68C0\u67E5\u4E0A\u4FDD\u6301\u76F8\u540C\u7684\u4F53\u9A8C\uFF0C\u53EF\u4EE5\u5728\u7F16\u8F91\u5668\u4E2D\u5B9E\u65F6\u7684\u770B\u5230\u7C7B\u578B\u63D0\u793A\uFF0C\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u8FD0\u884CTypeScript\u68C0\u67E5\uFF0C\u4E5F\u53EF\u4EE5\u628ATypeScript\u8FD0\u7528\u5728CI\u6D41\u7A0B\u4E2D\uFF0C\u6700\u5927\u7684\u4E0D\u540C\u5728\u4E8E
\u6211\u4EEC\u4E0D\u9700\u8981\u7F16\u8BD1\u4E86\uFF0C\u6211\u4EEC\u5C06\u5927\u5927\u964D\u4F4EJavaScript\u5F00\u53D1\u4EBA\u5458\u4F53\u9A8C\u7C7B\u578B\u7684\u95E8\u69DB\u3002</p>
<p><img src="https://s3.bmp.ovh/imgs/2022/03/b66ffd8edfa91137.png"></p>
<p>\u8981\u60F3\u4E0A\u9762\u7684\u65B9\u6848\u5B9E\u73B0\uFF0CJavaScript\u81F3\u5C11\u8981\u6DFB\u52A0\u53D8\u91CF\u548C\u51FD\u6570\u7C7B\u578B\u6CE8\u91CA\u8BED\u6CD5\uFF0C\u53D8\u91CF\u53EF\u9009\u4FEE\u9970\u7B26\uFF0C\u7C7B\u578B\u58F0\u660E\u8BED\u6CD5\uFF0C\u65AD\u8A00\u8FD0\u7B97\u7B26\u7B49\u7B49\u3002\u53E6\u5916\u7684\u50CF(public, private, and protected) \u8FD9\u7C7B\u7684\u8BED\u6CD5\u4E5F\u53EF\u80FD\u88AB\u5305\u542B\uFF0C\u4F46\u8FD8\u6709\u4E00\u4E9B\u50CF\u679A\u4E3E\uFF0C\u547D\u540D\u7A7A\u95F4\u7B49\u5C31\u4E0D\u5728\u8FD9\u6B21\u7684\u63D0\u6848\u4E2D\u4E86\uFF0C\u56E0\u4E3A\u8FD9\u4E9B\u8BED\u6CD5\u6D89\u53CA\u5230\u4E00\u4E9B\u8FD0\u884C\u65F6\u884C\u4E3A\u3002\u8FD9\u4E9B\u7279\u6027\u53EF\u4EE5\u5206\u522B\u4F5C\u4E3A\u8BED\u8A00\u63D0\u6848\u63D0\u4EA4\u7ED9ECMAScript\u6807\u51C6\u59D4\u5458\u4F1A\u3002\u603B\u800C\u8A00\u4E4B\uFF0C\u6211\u4EEC\u5F53\u524D\u63D0\u6848\u7684\u76EE\u7684\u662F\u63D0\u4F9B\u4E00\u4E2ATypeScript\u7684\u5B50\u96C6\u3002</p>
<h3>\u8FD9\u4E2A\u63D0\u6848\u4E0D\u505A\u4EC0\u4E48</h3>
<p>\u6211\u4EEC\u6709\u5FC5\u8981\u8BB2\u8BB2\u8FD9\u4E2A\u63D0\u6848\u4E0D\u4F1A\u505A\u4EC0\u4E48\u3002
\u6211\u4EEC\u56E2\u961F\u4E0D\u5EFA\u8BAE\u5728\u6BCF\u4E2A\u6D4F\u89C8\u5668\u548CJavaScript\u8FD0\u884C\u65F6\u4E2D\u6DFB\u52A0TypeScript\u7C7B\u578B\u68C0\u67E5\uFF0C\u540C\u65F6\u6211\u4EEC\u4E5F\u4E0D\u5EFA\u8BAE\u52A0\u5165\u65B0\u7684\u7C7B\u578B\u68C0\u67E5\u5230\u6D4F\u89C8\u5668\u4E2D\uFF0C\u56E0\u4E3A\u8FD9\u4F1A\u5E26\u6765\u4E00\u7CFB\u5217\u7684\u95EE\u9898\uFF0C\u50CF\u662F\u8FD0\u884C\u65F6\u6027\u80FD\u95EE\u9898\uFF0C\u517C\u5BB9\u6027\u95EE\u9898\u7B49\u7B49\u3002\u76F8\u5BF9\u7684\u6211\u4EEC\u63D0\u51FA\u4E0ETypeScript\u517C\u5BB9\u5E76\u4E14\u53D7\u5176\u542F\u53D1\u7684\u8BED\u6CD5\uFF0C\u8FD9\u53EF\u4EE5\u88AB\u4EFB\u4F55\u7C7B\u578B\u68C0\u67E5\u5668\u4F7F\u7528\uFF0C\u800C\u4E14\u8BED\u6CD5\u5C06\u88AB\u8FD0\u884C\u65F6\u5FFD\u7565\uFF0C\u6211\u4EEC\u89C9\u5F97\u8FD9\u4E2A\u65B9\u6848\u5BF9\u5404\u65B9\u9762\u90FD\u6709\u4F18\u52BF\uFF0C\u53EF\u4EE5\u8BA9\u4EBA\u4EEC\u9009\u62E9\u81EA\u5DF1\u559C\u6B22\u7684\u7C7B\u578B\u68C0\u67E5\u5668\u3002</p>
<h3>\u63A5\u4E0B\u6765\u7684\u4E8B</h3>
<p>\u57FA\u4E8E\u4EE5\u4E0A\u7684\uFF0C\u6211\u4EEC\u51C6\u5907\u5728\u8FD9\u4E2A\u6708\u7684TC39\u4F1A\u8BAE\u4E0A\u628A\u8FD9\u4E2A\u63D0\u6848\u4F5C\u4E3Astage1\u63D0\u4EA4\u4E0A\u53BB\uFF0C\u6211\u4EEC\u5C06\u5728\u6765\u81EA\u4E8EBloomberg\u7684Rob Palmer \u548C\u6765\u81EA\u4E8EIgalia\u7684Romulo Cintra\u7684\u5171\u540C\u652F\u6301\u548C\u6307\u5BFC\u4E0B\u6765\u5B8C\u5584\u8FD9\u4E2A\u63D0\u6848\u3002</p>
<p>\u5982\u679C\u8FD9\u4E2A\u63D0\u6848\u80FD\u4E2A\u8FDB\u5165stage1\u4E2D\uFF0C\u90A3\u4E48\u5C31\u4EE3\u8868TC39\u59D4\u5458\u4F1A\u662F\u76F8\u4FE1\u8FD9\u4E48\u505A\u662F\u6709\u4E00\u5B9A\u7684\u4EF7\u503C\u7684\u3002\u80FD\u4E0D\u80FD\u8FDB\u5165satge1\u76EE\u524D\u8FD8\u4E0D\u597D\u4E0B\u5B9A\u8BBA\uFF0C\u6211\u4EEC\u76F8\u4FE1\u5230\u65F6\u59D4\u5458\u4F1A\u4E2D\u4F1A\u6709\u5F88\u591A\u6709\u4EF7\u503C\u7684\u610F\u89C1\uFF0C\u4E5F\u4F1A\u6709\u4E00\u4E9B\u8D28\u7591\uFF0C\u50CF\u8FD9\u6837\u7684\u63D0\u6848\u4F1A\u6536\u5230\u5F88\u591A\u53CD\u9988\u548C\u5BA1\u67E5\uFF0C\u5728\u6B64\u8FC7\u7A0B\u4E2D\u5C06\u4F1A\u9700\u8981\u6D89\u53CA\u5927\u91CF\u7684\u8BED\u8A00\u8BBE\u8BA1\u65B9\u9762\u7684\u66F4\u6539\uFF0C\u5E76\u4E14\u9700\u8981\u8981\u8BDD\u8D39\u591A\u5E74\u624D\u80FD\u770B\u5230\u7ED3\u679C\u3002</p>
<p>\u4F46\u662F\uFF0C\u4E00\u65E6\u6211\u4EEC\u5B8C\u6210\u4E86\u8FD9\u4E00\u5207\uFF0C\u6211\u4EEC\u5C06\u4F1A\u7ED9JavaScript\u4E16\u754C\u5E26\u6765\u6700\u5177\u5F71\u54CD\u529B\u7684\u6539\u8FDB\u4E4B\u4E00\uFF0C\u5BF9\u6B64\u6211\u4EEC\u5F88\u5174\u594B\uFF0C\u4E5F\u5F88\u671F\u671B\u3002</p>
<p>\u6700\u540E\uFF0C\u8981\u611F\u8C22\u5728\u8FD9\u4E2A\u8FC7\u7A0B\u4E2D\u6240\u6709\u7ED9\u4E88\u6211\u4EEC\u56E2\u961F\u5E2E\u52A9\u7684\u6240\u6709\u4EBA\uFF0C\u6211\u4EEC\u5F88\u8363\u5E78\u662F\u8FD9\u4E2A\u5145\u6EE1\u6FC0\u60C5\u7684\u5F00\u53D1\u4E16\u754C\u4E2D\u7684\u4E00\u5458\u3002</p>
<h3>\u8BD1\u8005\u89C1\u89E3</h3>
<p>\u9996\u5148\uFF0C\u5F53\u770B\u5230\u8FD9\u7BC7\u6587\u7AE0\u7684\u6807\u9898\u65F6\uFF0C\u6211\u5F88\u5174\u594B\uFF0C\u60F3\u5230\u7EC8\u4E8E\u6765\u4E86\uFF0C\u5C06\u6765\u4E5F\u8BB8\u6709\u673A\u4F1A\u53EF\u4EE5\u5199\u5E26\u7C7B\u578B\u7684JavaScript\u4E86\uFF0C\u6240\u4EE5\u6211\u5C31\u5F88\u60F3\u628A\u8FD9\u7BC7\u6587\u7AE0\u7FFB\u8BD1\u51FA\u6765\u3002
\u8BFB\u5B8C\u5168\u7BC7\u540E\uFF0C\u867D\u7136\u6211\u89C9\u5F97\u8FD9\u4E2A\u63D0\u6848\u6709\u79EF\u6781\u7684\u5730\u65B9\uFF0C\u4F46\u5BF9\u6B64\u6211\u4ECD\u7136\u6709\u4EE5\u4E0B\u51E0\u4E2A\u7591\u95EE\uFF1A</p>
<ul>
<li>\u6DFB\u52A0\u4E86\u7C7B\u578B\u7684JavaScipt\u4ECD\u7136\u662FTypeScript\u7684\u5B50\u96C6\uFF0C\u6CA1\u6CD5\u505A\u5230\u50CFTypeScript\u90A3\u4E48\u5B8C\u5584\uFF08\u56E0\u4E3ATypeScript\u6709\u8BB8\u591A\u8FD0\u884C\u65F6\u529F\u80FD\uFF09</li>
<li>\u5373\u4F7F\u7C7B\u578B\u4F1A\u88AB\u6D4F\u89C8\u5668\u554A\uFF0Cnode\u7B49JavaScript\u8FD0\u884C\u65F6\u5B8C\u5168\u5FFD\u7565\uFF0C\u4F46\u5B9E\u9645\u5F00\u53D1\u4E2D\u6211\u4EEC\u4ECD\u7136\u5C11\u4E0D\u4E86\u6784\u5EFA\u7684\u6B65\u9AA4\uFF0C\u56E0\u4E3A\u50CFTree-Shaking\u3001\u4EE3\u7801\u538B\u7F29\u3001\u4EE3\u7801\u805A\u5408\u7B49\u4ECD\u7136\u9700\u8981\u6784\u5EFA\u5DE5\u5177\uFF0C\u6240\u4EE5\u591A\u4E00\u4E2A\u8F6C\u4E49\u7684\u6B65\u9AA4\u5E76\u4E0D\u4F1A\u9EBB\u70E6</li>
<li>\u7C7B\u578B\u7684\u6DFB\u52A0\u610F\u5916\u7740JavaScript\u7684\u4EE3\u7801\u91CF\u4F1A\u53D8\u7684\u5F88\u5927\uFF0C\u4F1A\u5BFC\u81F4\u524D\u7AEF\u8D44\u6E90\u53D8\u5927</li>
</ul>
<p>\u4F46\u662F\uFF0C\u65E0\u8BBA\u4F1A\u9047\u5230\u4EC0\u4E48\u56F0\u96BE\uFF0C\u6211\u90FD\u8BA4\u4E3A\u8FD9\u4E2A\u63D0\u6848\u662F\u4E2A\u79EF\u6781\u7684\u65B9\u5411\uFF0C\u662F\u53EF\u4EE5\u63A2\u7D22\u7684\u65B9\u5411\uFF0C\u4ECA\u5929\u6211\u4EEC\u7684\u524D\u7AEF\u5F00\u53D1\u4F53\u9A8C\u6B63\u662F\u7531\u4E8E\u524D\u4EBA\u7684\u4E0D\u65AD\u63A2\u7D22\u5960\u57FA\u7684\uFF0C\u5176\u4E2D\u5F88\u591A\u4E5F\u6709\u5148\u88AB\u6452\u5F03\u7684\u65B9\u6848\uFF0C\u4F46\u4E5F\u4E00\u5B9A\u4F1A\u50AC\u751F\u51FA\u66F4\u591A\u7684\u7075\u611F\u706B\u82B1\uFF0C\u5E0C\u671B\u8FD9\u4E2A\u63D0\u6848\u80FD\u591F\u88AB\u5927\u5BB6\u8BA4\u8BC6\uFF0C\u5E0C\u671BJavaScript\u8D8A\u6765\u8D8A\u597D\u7528\u3002</p>
`},meta:{title:"\u5728JavaScript\u4E2D\u5F15\u5165\u7C7B\u578B\u7684\u63D0\u6848\uFF08\u7FFB\u8BD1\uFF09",publishDate:"2022-03-10T00:00:00.000Z",tags:["Type","JavaScript","TypeScript"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/blog-2022-3-10.md",filename:"blog-2022-3-10"},{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<blockquote>
<p>\u6700\u8FD1\u5728Java\u7684\u7C7B\u5E93\u4E2D\u53D1\u73B0\u4E86\u4E00\u4E2A\u6709\u70B9\u7279\u522B\u7684\u961F\u5217\uFF0C\u53EB\u505A\u4F18\u5148\u961F\u5217\uFF08PriorityQueue\uFF09\uFF0C\u5176\u4E3B\u8981\u529F\u80FD\u548C\u666E\u901A\u7684\u961F\u5217\u4E00\u6837\uFF0C\u90FD\u6709\u5165\u961F\u3001\u51FA\u961F\u7B49\u64CD\u4F5C\uFF0C\u4F46\u4F18\u5148\u961F\u5217\u7684\u7279\u6B8A\u4E4B\u5904\u5728\u4E8E\u6BCF\u6B21\u53D6\u51FA\u7684\u5143\u7D20\u90FD\u662F\u8FD9\u4E2A\u961F\u5217\u4E2D\u7684\u6700\u5C0F\u5143\u7D20\uFF0C\u7A76\u5176\u672C\u8D28\uFF0CJava\u4E2D\u662F\u901A\u8FC7\u4E8C\u53C9\u5C0F\u9876\u5806\u5B9E\u73B0\u7684\uFF08\u4EFB\u610F\u4E00\u4E2A\u975E\u53F6\u5B50\u8282\u70B9\uFF0C\u90FD\u4E0D\u5927\u4E8E\u5176\u5DE6\u53F3\u5B50\u8282\u70B9\uFF09\uFF0C\u90A3\u4E48\u4E5F\u5C31\u8BF4\u660E\u5176\u53EF\u4EE5\u5728\u5E95\u5C42\u7528\u4E00\u4E2A\u6570\u7EC4\u6765\u8BB0\u5F55\u961F\u5217\u548C\u5B9E\u73B0\u5C0F\u9876\u5806\u7684\u529F\u80FD\uFF0C\u6240\u4EE5\u6211\u60F3\u5728JavaScript\u4E2D\u4E5F\u80FD\u5B9E\u73B0\u76F8\u5E94\u7684\u529F\u80FD</p>
</blockquote>
<h2>\u7406\u89E3\u5C0F\u9876\u5806</h2>
<blockquote>
<p>\u5F00\u59CB\u5B9E\u73B0\u4E4B\u524D\uFF0C\u5148\u7406\u89E3\u4E0B\u5C0F\u9876\u5806\u7684\u7279\u6027</p>
</blockquote>
<p>\u89C2\u5BDF\u4E0A\u9762\u7684\u56FE\u80FD\u53D1\u73B0\uFF0C\u5C0F\u9876\u5806\u5728\u7236\u8282\u70B9\u548C\u5B50\u8282\u70B9\u95F4\u7684\u7F16\u53F7\u6709\u4EE5\u4E0B\u5173\u8054\u5173\u7CFB</p>
<p>left = parent * 2 + 1</p>
<p>right = parent * 2 + 2</p>
<p>parent = (node - 1) / 2</p>
<p>\u901A\u8FC7\u4E0A\u8FF0\u4E09\u4E2A\u516C\u5F0F\uFF0C\u53EF\u4EE5\u8F7B\u6613\u8BA1\u7B97\u51FA\u67D0\u4E2A\u8282\u70B9\u7684\u7236\u8282\u70B9\u4EE5\u53CA\u5B50\u8282\u70B9\u7684\u4E0B\u6807\uFF0C\u8FD9\u4E5F\u5C31\u662F\u4E3A\u4EC0\u4E48\u53EF\u4EE5\u76F4\u63A5\u7528\u6570\u7EC4\u6765\u5B58\u50A8\u5806\u7684\u539F\u56E0</p>
<h2>\u65B9\u6CD5\u5B9E\u73B0</h2>
<p>\u5728\u4E0B\u6587\u5B9E\u73B0\u4E86\u4E09\u4E2A\u4E3B\u8981\u7684\u65B9\u6CD5\uFF0Cadd()\uFF0Cpoll()\u4EE5\u53CApeek()</p>
<h4>add()\u65B9\u6CD5</h4>
<p>add\u662F\u5F80\u961F\u5217\u4E2D\u6DFB\u52A0\u5143\u7D20\u7684\u65B9\u6CD5\uFF0C\u5176\u6838\u5FC3\u70B9\u662F\u6DFB\u52A0\u5B8C\u5143\u7D20\u540E\uFF0C\u961F\u5217\u5185\u90E8\u4F1A\u5BF9\u6570\u636E\u8FDB\u884C\u6BD4\u8F83\u5904\u7406\uFF0C\u4FDD\u8BC1\u5C0F\u9876\u5806\u7684\u7279\u6027</p>
<pre><code class="hljs language-js"><span class="hljs-comment">// _arr\u662F\u6574\u4E2A\u5B9E\u4F8B\u7684\u5C5E\u6027</span>

<span class="hljs-function"><span class="hljs-title">add</span>(<span class="hljs-params">e</span>)</span> {
  <span class="hljs-keyword">if</span> (e === <span class="hljs-literal">null</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  }

  <span class="hljs-keyword">let</span> k = <span class="hljs-built_in">this</span>._arr.length

  <span class="hljs-keyword">while</span> (k > <span class="hljs-number">0</span>) {
    <span class="hljs-keyword">let</span> parent = (k - <span class="hljs-number">1</span>) >>> <span class="hljs-number">1</span>  <span class="hljs-comment">// \u83B7\u53D6\u7236\u5143\u7D20\u4E0B\u6807</span>

    <span class="hljs-keyword">let</span> es = <span class="hljs-built_in">this</span>._arr[parent]

    <span class="hljs-keyword">if</span> (e >= es) { <span class="hljs-comment">// \u5982\u679C\u63D2\u5165\u5143\u7B97\u6BD4\u7236\u5143\u7D20\u5927\uFF0C\u5219\u76F4\u63A5\u63D2\u5165\uFF0C\u5426\u5219\u4E0E\u7236\u5143\u7D20\u4EA4\u6362\u5F53\u524D\u63D2\u5165\u4F4D\u7F6E\u7684\u5143\u7D20</span>
      <span class="hljs-keyword">break</span>
    }

    <span class="hljs-built_in">this</span>._arr[k] = es

    k = parent
  }

  <span class="hljs-built_in">this</span>._arr[k] = e

  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>
}</code></pre>
<h4>poll()\u65B9\u6CD5</h4>
<p>poll\u65B9\u6CD5\u662F\u5F80\u5916\u51FA\u961F\u5217\u7684\u65B9\u6CD5</p>
<pre><code class="hljs language-js"><span class="hljs-function"><span class="hljs-title">poll</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">let</span> result = <span class="hljs-built_in">this</span>._arr[<span class="hljs-number">0</span>]

  <span class="hljs-keyword">if</span> (result !== <span class="hljs-literal">undefined</span>) {
    <span class="hljs-keyword">let</span> n = <span class="hljs-built_in">this</span>._arr.length - <span class="hljs-number">1</span>
    <span class="hljs-keyword">let</span> e = <span class="hljs-built_in">this</span>._arr.pop()

    <span class="hljs-keyword">if</span> (n > <span class="hljs-number">0</span>) {
      <span class="hljs-keyword">let</span> k = <span class="hljs-number">0</span>
      <span class="hljs-keyword">let</span> n = <span class="hljs-built_in">this</span>._arr.length - <span class="hljs-number">1</span>

      <span class="hljs-keyword">let</span> half = n >>> <span class="hljs-number">1</span>

      <span class="hljs-keyword">while</span> (k &#x3C; half) {
        <span class="hljs-keyword">let</span> child = (k &#x3C;&#x3C; <span class="hljs-number">1</span>) + <span class="hljs-number">1</span>

        <span class="hljs-keyword">let</span> c = <span class="hljs-built_in">this</span>._arr[child]

        <span class="hljs-keyword">let</span> right = child + <span class="hljs-number">1</span>

        <span class="hljs-keyword">if</span> (c > <span class="hljs-built_in">this</span>._arr[right]) {
          child = right
          c = <span class="hljs-built_in">this</span>._arr[right]
        }

        <span class="hljs-keyword">if</span> (e &#x3C;= c) {
          <span class="hljs-keyword">break</span>
        }

        <span class="hljs-built_in">this</span>._arr[k] = c
        k = child
      }

      <span class="hljs-built_in">this</span>._arr[k] = e
    }
  }

  <span class="hljs-keyword">return</span> result
}</code></pre>
<h4>peek()\u65B9\u6CD5</h4>
<p>peek\u65B9\u6CD5\u662F\u7528\u6765\u8FD4\u56DE\u5F53\u524D\u961F\u5217\u91CC\u7684\u6700\u5C0F\u503C\u7684</p>
<pre><code class="hljs language-js"><span class="hljs-function"><span class="hljs-title">peek</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">if</span> (<span class="hljs-built_in">this</span>._arr.length === <span class="hljs-number">0</span>) {
    <span class="hljs-keyword">return</span> <span class="hljs-literal">null</span>
  }
  <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span>._arr[<span class="hljs-number">0</span>]
}</code></pre>
`},meta:{title:"\u5728JavaScript\u4E2D\u5B9E\u73B0PriorityQueue\u7684\u529F\u80FD",publishDate:"2018-04-11T00:00:00.000Z",tags:["PriorityQueue","JavaScript","Array","Java"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/blog-2019-4-11.md",filename:"blog-2019-4-11"},{content:{data:{},messages:[],history:[],cwd:"/Users/sunyuu/code/myproject/sunyuu.github.io",contents:`<blockquote>
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
<pre><code class="hljs language-html"><span class="hljs-tag">&#x3C;<span class="hljs-name">h1</span>></span>remark.js\u662F\u4EC0\u4E48<span class="hljs-tag">&#x3C;/<span class="hljs-name">h1</span>></span></code></pre>
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
`},meta:{title:"Hello world!",publishDate:"2017-12-11T00:00:00.000Z",tags:["test"]},filepath:"/Users/sunyuu/code/myproject/sunyuu.github.io/Users/sunyuu/code/myproject/sunyuu.github.io/post/hello-world.md",filename:"hello-world"}];const I={props:{data:{type:Object,default:"test"}},computed:{mdData(){return this.data}},mounted(){console.log(this.mdData)}},P={class:"archive"};function E(e,l,r,p,s,a){const t=g("router-link");return c(),o("div",P,[(c(!0),o(f,null,_(a.mdData,(i,k)=>(c(),o("div",{key:k,class:"archive-item"},[n("h2",null,[h(t,{to:"/posts/"+i.filename},{default:u(()=>[d(j(i.meta.title),1)]),_:2},1032,["to"])]),n("span",null,j(i.meta.publishDate.slice(0,10)),1)]))),128))])}var W=m(I,[["render",E]]);const A={props:["postData"],data(){return{}},mounted(){console.log(this.postData)}},L={class:"post"},z=["innerHTML"];function N(e,l,r,p,s,a){return c(),o("div",L,[n("h1",null,j(this.postData.meta.title),1),n("h6",null,"\u53D1\u5E03\u4E8E"+j(this.postData.meta.publishDate.slice(0,10)),1),n("div",{innerHTML:this.postData.content.contents,class:"markdown-body"},null,8,z)])}var O=m(A,[["render",N]]);const V={},B={class:"markdown-body"},F=n("h3",null,"2022-03-08",-1),Z=n("p",null,"- \u4FEE\u6539\u4EE3\u7801\u5757\u6837\u5F0F",-1),G=n("h3",null,"2021-12-08",-1),R=n("p",null,"- \u66F4\u6539webpack\u6784\u5EFA\u4E3Avite",-1),Q=[F,Z,G,R];function K(e,l,r,p,s,a){return c(),o("div",B,Q)}var X=m(V,[["render",K]]);const Y={},ss=w({history:v(),routes:[{path:"/",component:W,props:{data:y}},{path:"/posts/:post",component:O,props:e=>{let l=e.params.post;return{postData:y.find(p=>p.filename==l)}}},{path:"/about",component:Y},{path:"/changelog",component:X}]}),b=S(H);b.use(ss);b.mount("#app");
