webpackJsonp([16],{139:function(t,e,o){t.exports=o.p+"b26b7f1de822ee64bc4b201ee9f40c16.png"},142:function(t,e,o){var i,n;o(143),i=o(144),n=o(150),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options:t.exports).template=n)},143:function(t,e){},144:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(145),l=i(n),a=o(16);e["default"]={components:{Row:a.Row,iCol:a.Col,Affix:a.Affix,Navigate:l["default"]},data:function(){return{list:[]}},ready:function(){var t=this,e=this.$children[0].$children[1].$el.childNodes[1].querySelectorAll(".example");e.forEach(function(e){var o=e.querySelector("header span").innerHTML;t.list.push(o)})}}},145:function(t,e,o){var i,n;o(146),i=o(147),n=o(149),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options:t.exports).template=n)},146:function(t,e){},147:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(148),l=i(n);e["default"]={props:{},data:function(){return{navigate:l["default"]}},computed:{},methods:{}}},148:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={guide:[{title:"介绍",path:"/docs/guide/introduce"},{title:"起步",path:"/docs/guide/start"},{title:"规范",path:"/docs/guide/standard"},{title:"更新日志",path:"/docs/guide/update"}],components:[{type:"Basic",list:[{title:"Layout 栅格",path:"/components/layout"},{title:"Button 按钮",path:"/components/button"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Form",list:[{title:"Radio 单选框",path:"/components/radio"},{title:"Checkbox 多选框",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]},{type:"View",list:[{title:"Alert 警告提示",path:"/components/alert"},{title:"Progress 进度条",path:"/components/progress"},{title:"Badge 徽标数",path:"/components/badge"},{title:"Collapse 折叠面板",path:"/components/collapse"},{title:"Timeline 时间轴",path:"/components/timeline"},{title:"Tag 标签",path:"/components/tag"}]},{type:"Navigation",list:[{title:"Page 分页",path:"/components/page"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb"},{title:"Steps 步骤条",path:"/components/steps"}]},{type:"Chart",list:[{title:"Circle 进度环",path:"/components/circle"}]},{type:"Other",list:[{title:"Affix 图钉",path:"/components/affix"},{title:"BackTop 返回顶部",path:"/components/back-top"},{title:"Spin 加载中",path:"/components/spin"}]}]};e["default"]=o},149:function(t,e){t.exports=' <div class=navigate> <ul> <li v-for="item in navigate.guide"> <a v-link="{path: item.path}">{{ item.title }}</a> </li> <li> <div>组件</div> <ul> <li v-for="item in navigate.components"> <p>{{ item.type }}</p> <ul> <li v-for="component in item.list"> <a v-link="{path: component.path}">{{ component.title }}</a> </li> </ul> </li> </ul> </li> </ul> </div> '},150:function(t,e,o){t.exports=" <div class=wrapper> <div class=wrapper-header> <div class=wrapper-header-logo> <a v-link=\"{path: '/'}\"> <img src="+o(139)+'> </a> </div> </div> <div class=wrapper-container> <row> <i-col span=4 class=wrapper-navigate> <navigate></navigate> </i-col> <i-col span=20> <div class="wrapper-content ivu-article"> <slot></slot> </div> </i-col> </row> </div> </div> <div class=footer> <div class=footer-main> <row> <i-col span=5> <h4>GitHub</h4> <ul> <li> <a href=https://github.com/iview/iview target=_blank>iView</a> </li> <li> <a href=https://github.com/icarusion/vue-vueRouter-webpack target=_blank>vue+webpack工程</a> </li> </ul> </i-col> <i-col span=5> <h4>社区</h4> <ul> <li> <a href=https://github.com/iview/iview/issues target=_blank>反馈建议</a> </li> <li> <a href=https://github.com/iview/iview/issues/new target=_blank>提交Bug</a> </li> </ul> </i-col> <i-col span=5> <h4>相关站点</h4> <ul> <li> <a href="https://www.talkingcoder.com/?from=iview" target=_blank>TalkingCoder</a> - 有逼格的程序员社区 </li> <li> <a href=https://www.talkingdata.com/ target=_blank>TalkingData</a> - 移动·数据·价值 </li> </ul> </i-col> <i-col span=5 offset=4> <div class=footer-aside> <div class=footer-logo> <img src='+o(139)+'> </div> <div class=footer-author> Author: <a href="https://www.talkingcoder.com/aresn?from=iview" target=_blank>Aresn</a> </div> </div> </i-col> </row> </div> </div> '},151:function(t,e,o){var i,n;o(152),i=o(153),n=o(164),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options:t.exports).template=n)},152:function(t,e){},153:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(154),l=i(n),a=o(16),d=o(155),s=i(d);e["default"]={components:{Icon:a.Icon},props:{lang:{type:String,"default":"javascript"},bg:{type:Boolean,"default":!1}},data:function(){return{code:"",copied:!1}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},compiled:function(){this.code=this.$els.code.innerHTML.replace(/\n/,""),this.$els.code.innerHTML=this.code,l["default"].highlightBlock(this.$els.code)},methods:{clip:function(){var t=this,e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),o=new s["default"](".copy",{text:function(){return e}});o.on("success",function(e){e.clearSelection(),o.destroy(),t.copied=!0,setTimeout(function(){t.copied=!1},2e3)})}}}},164:function(t,e){t.exports=' <div _v-53d23a6d=""> <pre :class="{bg: bg}" _v-53d23a6d=""><code :class=language v-el:code="" _v-53d23a6d=""><slot _v-53d23a6d=""></slot></code></pre> <span class=copy @click=clip _v-53d23a6d=""> <icon type=clipboard size=18 v-show=!copied _v-53d23a6d=""></icon> <icon type=checkmark size=18 v-show=copied style=color:#5cb85c _v-53d23a6d=""></icon> </span> </div> '},166:function(t,e,o){var i,n;o(167),i=o(168),n=o(169),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options:t.exports).template=n)},167:function(t,e){},168:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},169:function(t,e){t.exports=' <div class=anchor> <h1 v-if=h1 :id=title_link>{{ title }}</h1> <h2 v-if=h2 :id=title_link>{{ title }}</h2> <h3 v-if=h3 :id=title_link>{{ title }}</h3> <h4 v-if=h4 :id=title_link>{{ title }}</h4> <h5 v-if=h5 :id=title_link>{{ title }}</h5> <h6 v-if=h6 :id=title_link>{{ title }}</h6> <a :href="`#${title_link}`">#</a> </div> '},182:function(t,e,o){var i,n;o(183),i=o(184),n=o(185),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options:t.exports).template=n)},183:function(t,e){},184:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(16);e["default"]={components:{Row:i.Row,iCol:i.Col,Icon:i.Icon},props:{title:{type:String,"default":""}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1}},computed:{codeHeight:function(){var t={};return this.ready&&(this.showCode?t.height=this.code_height+"px":t.height=this.demo_height+"px"),t}},ready:function(){var t=this;this.$nextTick(function(){var e=t.$children[0].$children[0].$el.clientHeight,o=t.$children[0].$children[1].$el.clientHeight+20;t.code_height=o,o<=e&&(t.showMore=!1),t.demo_height=e,t.ready=!0})}}},185:function(t,e){t.exports=' <row class=example :id=title> <i-col class=example-demo span=12> <div class=example-case> <slot name=demo></slot> </div> <header class=example-header> <span> {{ title }} <a :href="`#${title}`">#</a> </span> </header> <div class=example-desc> <slot name=desc></slot> </div> </i-col> <i-col class=example-code :style=codeHeight span=12> <slot name=code></slot> <div class=example-code-more v-if=showMore @click="showCode = !showCode"> <icon type=ios-arrow-down v-show=!showCode></icon> <icon type=ios-arrow-up v-show=showCode></icon> </div> </i-col> <div class=example-split></div> </row> '},235:function(t,e,o){var i,n;i=o(236),n=o(238),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options:t.exports).template=n)},236:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(142),l=i(n),a=o(151),d=i(a),s=o(182),r=i(s),p=o(237),c=i(p),u=o(166),h=i(u),m=o(16);e["default"]={components:{iArticle:l["default"],iCode:d["default"],Demo:r["default"],Anchor:h["default"],InputNumber:m.InputNumber,Button:m.Button},data:function(){return{code:c["default"],disabled:!0}}}},237:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.base='\n<template>\n    <Input-number :max="10" :min="1" :value="1"></Input-number>\n</template>\n<script>\n    import { InputNumber } from \'iview\';\n    export default {\n        components: { InputNumber }\n    }\n</script>\n',o.step='\n<template>\n    <Input-number :max="10" :min="1" :step="1.2" :value="1"></Input-number>\n</template>\n<script>\n    import { InputNumber } from \'iview\';\n    export default {\n        components: { InputNumber }\n    }\n</script>\n',o.size='\n<template>\n    <Input-number :value="2" size="small"></Input-number>\n    <Input-number :value="2"></Input-number>\n    <Input-number :value="2" size="large"></Input-number>\n</template>\n<script>\n    import { InputNumber } from \'iview\';\n    export default {\n        components: { InputNumber }\n    }\n</script>\n',o.disabled='\n<template>\n    <Input-number :value="1" :disabled="disabled"></Input-number>\n    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>\n</template>\n<script>\n    import { InputNumber, Button } from \'iview\';\n    export default {\n        components: { InputNumber, Button },\n        data () {\n            return {\n                disabled: true\n            }\n        }\n    }\n</script>\n',e["default"]=o},238:function(t,e){t.exports=' <i-article> <article> <h1>InputNumber 数字输入框</h1> <anchor title=概述 h2></anchor> <p>使用鼠标或键盘输入一定范围的标准数值。</p> <anchor title=代码示例 h2></anchor> <demo title=基础用法> <div slot=demo> <input-number :max=10 :min=1 :value=1></input-number> </div> <div slot=desc> <p>可以通过输入、鼠标点击或键盘的上下键来改变数值大小。</p> </div> <i-code lang=html slot=code>{{ code.base }}</i-code> </demo> <demo title=小数> <div slot=demo> <input-number :max=10 :min=1 :step=1.2 :value=1></input-number> </div> <div slot=desc> <p>通过设置<code>step</code>属性控制每次改变的精度。</p> </div> <i-code lang=html slot=code>{{ code.step }}</i-code> </demo> <demo title=尺寸> <div slot=demo> <input-number :value=2 size=small></input-number> <input-number :value=2></input-number> <input-number :value=2 size=large></input-number> </div> <div slot=desc> <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将输入框设置为大和小尺寸，不设置为默认（中）尺寸。</p> </div> <i-code lang=html slot=code>{{ code.size }}</i-code> </demo> <demo title=不可用> <div slot=demo> <input-number :value=1 :disabled=disabled></input-number> <button type=primary @click="disabled = !disabled">Toggle Disabled</button> </div> <div slot=desc> <p>通过设置<code>disabled</code>属性禁用输入框，点击按钮切换状态。</p> </div> <i-code lang=html slot=code>{{ code.disabled }}</i-code> </demo> <div class=api> <anchor title=API h2></anchor> <anchor title="InputNumber props" h3></anchor> <table> <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>max</td> <td>最大值</td> <td>Number</td> <td>Infinity</td> </tr> <tr> <td>min</td> <td>最小值</td> <td>Number</td> <td>-Infinity</td> </tr> <tr> <td>value</td> <td>当前值。需要使用<code>.sync</code>双向绑定，否则改变值时并不能改变使用者的数据</td> <td>Number</td> <td>1</td> </tr> <tr> <td>step</td> <td>每次改变的步伐，可以是小数</td> <td>Number</td> <td>1</td> </tr> <tr> <td>size</td> <td>输入框尺寸，可选值为<code>large</code>和<code>small</code>或者不填</td> <td>String</td> <td>1</td> </tr> <tr> <td>disabled</td> <td>设置禁用状态</td> <td>Boolean</td> <td>false</td> </tr> </tbody> </table> <anchor title="InputNumber events" h3></anchor> <table> <thead> <tr> <th>事件名</th> <th>说明</th> <th>返回值</th> </tr> </thead> <tbody> <tr> <td>on-change</td> <td>数值改变时的回调，返回当前值</td> <td>当前值</td> </tr> </tbody> </table> </div> </article> </i-article> '}});