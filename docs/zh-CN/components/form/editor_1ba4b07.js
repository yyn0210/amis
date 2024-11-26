amis.define('docs/zh-CN/components/form/editor.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Editor 编辑器",
    "description": null,
    "type": 0,
    "group": null,
    "menuName": "Editor",
    "icon": null,
    "order": 19,
    "html": "<div class=\"markdown-body\"><p>用于实现代码编辑，如果要实现富文本编辑请使用 <a href=\"./input-rich-text\">Rich-Text</a>。</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"name\": \"editor\",\n            \"label\": \"编辑器\",\n            placeholder: \"function() {\\n  console.log('hello world')\\n}\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80\" href=\"#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>支持的语言</h2><p>可以设置<code>language</code>配置高亮的语言，支持的语言有：</p>\n<p><code>bat</code>、 <code>c</code>、 <code>coffeescript</code>、 <code>cpp</code>、 <code>csharp</code>、 <code>css</code>、 <code>dockerfile</code>、 <code>fsharp</code>、 <code>go</code>、 <code>handlebars</code>、 <code>html</code>、 <code>ini</code>、 <code>java</code>、 <code>javascript</code>、 <code>json</code>、 <code>less</code>、 <code>lua</code>、 <code>markdown</code>、 <code>msdax</code>、 <code>objective-c</code>、 <code>php</code>、 <code>plaintext</code>、 <code>postiats</code>、 <code>powershell</code>、 <code>pug</code>、 <code>python</code>、 <code>r</code>、 <code>razor</code>、 <code>ruby</code>、 <code>sb</code>、 <code>scss</code>、<code>shell</code>、 <code>sol</code>、 <code>sql</code>、 <code>swift</code>、 <code>typescript</code>、 <code>vb</code>、 <code>xml</code>、 <code>yaml</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"name\": \"editor\",\n            \"label\": \"JSON编辑器\",\n            \"language\": \"json\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<blockquote>\n<p>因为性能原因，上面的例子不支持实时修改 language 生效</p>\n</blockquote>\n<p>当然你也可以使用<code>xxx-editor</code>这种形式，例如<code>&quot;type&quot;: &quot;json-editor&quot;</code></p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"json-editor\",\n            \"name\": \"editor\",\n            \"label\": \"JSON编辑器\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F\" href=\"#%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>只读模式</h2><p>使用 <code>disabled: true</code>。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"json-editor\",\n            \"name\": \"editor\",\n            \"disabled\": true,\n            \"label\": \"JSON编辑器\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%85%A8%E5%B1%8F%E6%A8%A1%E5%BC%8F\" href=\"#%E5%85%A8%E5%B1%8F%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>全屏模式</h2><p>设置<code>allowFullscreen</code>属性为<code>true</code>，显示编辑器的全屏模式开关，开关开启后编辑器进入全屏模式。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"name\": \"editor\",\n            \"label\": \"支持全屏模式的编辑器\",\n            \"allowFullscreen\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%BC%96%E8%BE%91%E5%99%A8%E5%B1%95%E7%8E%B0%E6%8E%A7%E5%88%B6\" href=\"#%E7%BC%96%E8%BE%91%E5%99%A8%E5%B1%95%E7%8E%B0%E6%8E%A7%E5%88%B6\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>编辑器展现控制</h2><p>通过 <code>options</code> 来控制编辑器展现，比如下面的配置可以关闭行号</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"api\": \"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\",\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"name\": \"editor\",\n            \"label\": \"编辑器\",\n            \"options\": {\n                \"lineNumbers\": \"off\"\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E7%BC%96%E8%BE%91%E5%99%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%80%E5%8F%91\" href=\"#%E7%BC%96%E8%BE%91%E5%99%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%80%E5%8F%91\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>编辑器自定义开发</h2><p>amis 的编辑器是基于 monaco 开发的，如果想进行深度定制，比如自动完成功能，可以通过自定义 <code>editorDidMount</code> 属性来获取到 monaco 实例，它有两种写法，一种是在 JS 中直接用函数，示例如下：</p>\n<pre><code class=\"language-javascript\"><span class=\"token punctuation\">{</span>\n    <span class=\"token string-property property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"form\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token string-property property\">\"api\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/form/saveForm\"</span><span class=\"token punctuation\">,</span>\n    <span class=\"token string-property property\">\"body\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">[</span>\n        <span class=\"token punctuation\">{</span>\n            <span class=\"token string-property property\">\"type\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"editor\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string-property property\">\"name\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"editor\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string-property property\">\"label\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"编辑器\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string-property property\">\"language\"</span><span class=\"token operator\">:</span> <span class=\"token string\">\"myLan\"</span><span class=\"token punctuation\">,</span>\n            <span class=\"token string-property property\">\"editorDidMount\"</span><span class=\"token operator\">:</span> <span class=\"token punctuation\">(</span><span class=\"token parameter\">editor<span class=\"token punctuation\">,</span> monaco</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n                <span class=\"token comment\">// editor 是 monaco 实例，monaco 是全局的名称空间</span>\n                <span class=\"token keyword\">const</span> dispose <span class=\"token operator\">=</span> monaco<span class=\"token punctuation\">.</span>languages<span class=\"token punctuation\">.</span><span class=\"token function\">registerCompletionItemProvider</span><span class=\"token punctuation\">(</span><span class=\"token string\">'myLan'</span><span class=\"token punctuation\">,</span> <span class=\"token punctuation\">{</span>\n                    <span class=\"token comment\">/// 其他细节参考 monaco 手册</span>\n                <span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n                <span class=\"token comment\">// 如果返回一个函数，这个函数会在编辑器组件卸载的时候调用，主要用于清理资源</span>\n                <span class=\"token keyword\">return</span> dispose<span class=\"token punctuation\">;</span>\n            <span class=\"token punctuation\">}</span>\n        <span class=\"token punctuation\">}</span>\n    <span class=\"token punctuation\">]</span>\n<span class=\"token punctuation\">}</span>\n</code></pre>\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><p>除了支持 <a href=\"./formitem#%E5%B1%9E%E6%80%A7%E8%A1%A8\">普通表单项属性表</a> 中的配置以外，还支持下面一些配置</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>language</td>\n<td><code>string</code></td>\n<td><code>javascript</code></td>\n<td>编辑器高亮的语言，支持通过 <code>${xxx}</code> 变量获取</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>string</code></td>\n<td><code>md</code></td>\n<td>编辑器高度，取值可以是 <code>md</code>、<code>lg</code>、<code>xl</code>、<code>xxl</code></td>\n</tr>\n<tr>\n<td>allowFullscreen</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>是否显示全屏模式开关</td>\n</tr>\n<tr>\n<td>options</td>\n<td><code>object</code></td>\n<td></td>\n<td>monaco 编辑器的其它配置，比如是否显示行号等，请参考<a href=\"https://microsoft.github.io/monaco-editor/docs.html#interfaces/editor.IEditorOptions.html\">这里</a>，不过无法设置 readOnly，只读模式需要使用 <code>disabled: true</code></td>\n</tr>\n<tr>\n<td>placeholder</td>\n<td><code>string</code></td>\n<td></td>\n<td>占位描述，没有值的时候展示</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E4%BA%8B%E4%BB%B6%E8%A1%A8\" href=\"#%E4%BA%8B%E4%BB%B6%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>事件表</h2><p>当前组件会对外派发以下事件，可以通过<code>onEvent</code>来监听这些事件，并通过<code>actions</code>来配置执行的动作，在<code>actions</code>中可以通过<code>${事件参数名}</code>或<code>${event.data.[事件参数名]}</code>来获取事件产生的数据，详细请查看<a href=\"../../docs/concepts/event-action\">事件动作</a>。</p>\n<blockquote>\n<p><code>[name]</code>表示当前组件绑定的名称，即<code>name</code>属性，如果没有配置<code>name</code>属性，则通过<code>value</code>取值。</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th>事件名称</th>\n<th>事件参数</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>change</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>代码变化时触发</td>\n</tr>\n<tr>\n<td>focus</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>输入框获取焦点时触发</td>\n</tr>\n<tr>\n<td>blur</td>\n<td><code>[name]: string</code> 组件的值</td>\n<td>输入框失去焦点时触发</td>\n</tr>\n</tbody></table>\n<h2><a class=\"anchor\" name=\"%E5%8A%A8%E4%BD%9C%E8%A1%A8\" href=\"#%E5%8A%A8%E4%BD%9C%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>动作表</h2><p>当前组件对外暴露以下特性动作，其他组件可以通过指定<code>actionType: 动作名称</code>、<code>componentId: 该组件id</code>来触发这些动作，动作配置可以通过<code>args: {动作配置项名称: xxx}</code>来配置具体的参数，详细请查看<a href=\"../../docs/concepts/event-action#触发其他组件的动作\">事件动作</a>。</p>\n<table>\n<thead>\n<tr>\n<th>动作名称</th>\n<th>动作配置</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>clear</td>\n<td>-</td>\n<td>清空</td>\n</tr>\n<tr>\n<td>reset</td>\n<td>-</td>\n<td>将值重置为初始值。6.3.0 及以下版本为<code>resetValue</code></td>\n</tr>\n<tr>\n<td>focus</td>\n<td>-</td>\n<td>获取焦点</td>\n</tr>\n<tr>\n<td>setValue</td>\n<td><code>value: string</code> 更新的值</td>\n<td>更新数据</td>\n</tr>\n</tbody></table>\n<h3><a class=\"anchor\" name=\"clear\" href=\"#clear\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>clear</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"name\": \"editor\",\n            \"label\": \"编辑器\",\n            \"id\": \"clear_text\",\n            \"value\": \"hello\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"清空\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"clear\",\n                            \"componentId\": \"clear_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"reset\" href=\"#reset\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reset</h3><p>如果配置了<code>resetValue</code>，则重置时使用<code>resetValue</code>的值，否则使用初始值。</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"id\": \"reset_text\",\n            \"name\": \"editor\",\n            \"label\": \"编辑器\",\n            \"value\": \"hello\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"重置\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"reset\",\n                            \"componentId\": \"reset_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"focus\" href=\"#focus\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>focus</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"id\": \"focus_text\",\n            \"name\": \"editor\",\n            \"label\": \"编辑器\",\n            \"value\": \"hello\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"聚焦\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"focus\",\n                            \"componentId\": \"focus_text\"\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h3><a class=\"anchor\" name=\"setvalue\" href=\"#setvalue\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>setValue</h3></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\"  scope=\"body\">{\n    \"type\": \"form\",\n    \"debug\": true,\n    \"body\": [\n        {\n            \"type\": \"editor\",\n            \"id\": \"setvalue_text\",\n            \"name\": \"editor\",\n            \"label\": \"编辑器\",\n            \"value\": \"hello\"\n        },\n        {\n            \"type\": \"button\",\n            \"label\": \"赋值\",\n            \"onEvent\": {\n                \"click\": {\n                    \"actions\": [\n                        {\n                            \"actionType\": \"setValue\",\n                            \"componentId\": \"setvalue_text\",\n                            \"args\": {\n                                \"value\": \"amis go go go!\"\n                            }\n                        }\n                    ]\n                }\n            }\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "支持的语言",
          "fragment": "%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80",
          "fullPath": "#%E6%94%AF%E6%8C%81%E7%9A%84%E8%AF%AD%E8%A8%80",
          "level": 2
        },
        {
          "label": "只读模式",
          "fragment": "%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%8F%AA%E8%AF%BB%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "全屏模式",
          "fragment": "%E5%85%A8%E5%B1%8F%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E5%85%A8%E5%B1%8F%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "编辑器展现控制",
          "fragment": "%E7%BC%96%E8%BE%91%E5%99%A8%E5%B1%95%E7%8E%B0%E6%8E%A7%E5%88%B6",
          "fullPath": "#%E7%BC%96%E8%BE%91%E5%99%A8%E5%B1%95%E7%8E%B0%E6%8E%A7%E5%88%B6",
          "level": 2
        },
        {
          "label": "编辑器自定义开发",
          "fragment": "%E7%BC%96%E8%BE%91%E5%99%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%80%E5%8F%91",
          "fullPath": "#%E7%BC%96%E8%BE%91%E5%99%A8%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BC%80%E5%8F%91",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        },
        {
          "label": "事件表",
          "fragment": "%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "fullPath": "#%E4%BA%8B%E4%BB%B6%E8%A1%A8",
          "level": 2
        },
        {
          "label": "动作表",
          "fragment": "%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "fullPath": "#%E5%8A%A8%E4%BD%9C%E8%A1%A8",
          "level": 2,
          "children": [
            {
              "label": "clear",
              "fragment": "clear",
              "fullPath": "#clear",
              "level": 3
            },
            {
              "label": "reset",
              "fragment": "reset",
              "fullPath": "#reset",
              "level": 3
            },
            {
              "label": "focus",
              "fragment": "focus",
              "fullPath": "#focus",
              "level": 3
            },
            {
              "label": "setValue",
              "fragment": "setvalue",
              "fullPath": "#setvalue",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
