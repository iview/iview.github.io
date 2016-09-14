webpackJsonp([17],{139:function(t,e,o){t.exports=o.p+"b26b7f1de822ee64bc4b201ee9f40c16.png"},142:function(t,e,o){var i,a;o(143),i=o(144),a=o(150),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},143:function(t,e){},144:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(145),l=i(a),n=o(16);e["default"]={components:{Row:n.Row,iCol:n.Col,Affix:n.Affix,Navigate:l["default"]},data:function(){return{list:[]}},ready:function(){var t=this,e=this.$children[0].$children[1].$el.childNodes[1].querySelectorAll(".example");e.forEach(function(e){var o=e.querySelector("header span").innerHTML;t.list.push(o)})}}},145:function(t,e,o){var i,a;o(146),i=o(147),a=o(149),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},146:function(t,e){},147:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(148),l=i(a);e["default"]={props:{},data:function(){return{navigate:l["default"]}},computed:{},methods:{}}},148:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={guide:[{title:"介绍",path:"/docs/guide/introduce"},{title:"起步",path:"/docs/guide/start"},{title:"规范",path:"/docs/guide/standard"},{title:"更新日志",path:"/docs/guide/update"}],components:[{type:"Basic",list:[{title:"Layout 栅格",path:"/components/layout"},{title:"Button 按钮",path:"/components/button"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Form",list:[{title:"Radio 单选框",path:"/components/radio"},{title:"Checkbox 多选框",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]},{type:"View",list:[{title:"Alert 警告提示",path:"/components/alert"},{title:"Progress 进度条",path:"/components/progress"},{title:"Badge 徽标数",path:"/components/badge"},{title:"Collapse 折叠面板",path:"/components/collapse"},{title:"Timeline 时间轴",path:"/components/timeline"},{title:"Tag 标签",path:"/components/tag"}]},{type:"Navigation",list:[{title:"Page 分页",path:"/components/page"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb"},{title:"Steps 步骤条",path:"/components/steps"}]},{type:"Chart",list:[{title:"Circle 进度环",path:"/components/circle"}]},{type:"Other",list:[{title:"Affix 图钉",path:"/components/affix"},{title:"BackTop 返回顶部",path:"/components/back-top"},{title:"Spin 加载中",path:"/components/spin"}]}]};e["default"]=o},149:function(t,e){t.exports=' <div class=navigate> <ul> <li v-for="item in navigate.guide"> <a v-link="{path: item.path}">{{ item.title }}</a> </li> <li> <div>组件</div> <ul> <li v-for="item in navigate.components"> <p>{{ item.type }}</p> <ul> <li v-for="component in item.list"> <a v-link="{path: component.path}">{{ component.title }}</a> </li> </ul> </li> </ul> </li> </ul> </div> '},150:function(t,e,o){t.exports=" <div class=wrapper> <div class=wrapper-header> <div class=wrapper-header-logo> <a v-link=\"{path: '/'}\"> <img src="+o(139)+'> </a> </div> </div> <div class=wrapper-container> <row> <i-col span=4 class=wrapper-navigate> <navigate></navigate> </i-col> <i-col span=20> <div class="wrapper-content ivu-article"> <slot></slot> </div> </i-col> </row> </div> </div> <div class=footer> <div class=footer-main> <row> <i-col span=5> <h4>GitHub</h4> <ul> <li> <a href=https://github.com/iview/iview target=_blank>iView</a> </li> <li> <a href=https://github.com/icarusion/vue-vueRouter-webpack target=_blank>vue+webpack工程</a> </li> </ul> </i-col> <i-col span=5> <h4>社区</h4> <ul> <li> <a href=https://github.com/iview/iview/issues target=_blank>反馈建议</a> </li> <li> <a href=https://github.com/iview/iview/issues/new target=_blank>提交Bug</a> </li> </ul> </i-col> <i-col span=5> <h4>相关站点</h4> <ul> <li> <a href="https://www.talkingcoder.com/?from=iview" target=_blank>TalkingCoder</a> - 有逼格的程序员社区 </li> <li> <a href=https://www.talkingdata.com/ target=_blank>TalkingData</a> - 移动·数据·价值 </li> </ul> </i-col> <i-col span=5 offset=4> <div class=footer-aside> <div class=footer-logo> <img src='+o(139)+'> </div> <div class=footer-author> Author: <a href="https://www.talkingcoder.com/aresn?from=iview" target=_blank>Aresn</a> </div> </div> </i-col> </row> </div> </div> '},151:function(t,e,o){var i,a;o(152),i=o(153),a=o(164),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},152:function(t,e){},153:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(154),l=i(a),n=o(16),d=o(155),s=i(d);e["default"]={components:{Icon:n.Icon},props:{lang:{type:String,"default":"javascript"},bg:{type:Boolean,"default":!1}},data:function(){return{code:"",copied:!1}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},compiled:function(){this.code=this.$els.code.innerHTML.replace(/\n/,""),this.$els.code.innerHTML=this.code,l["default"].highlightBlock(this.$els.code)},methods:{clip:function(){var t=this,e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),o=new s["default"](".copy",{text:function(){return e}});o.on("success",function(e){e.clearSelection(),o.destroy(),t.copied=!0,setTimeout(function(){t.copied=!1},2e3)})}}}},164:function(t,e){t.exports=' <div _v-53d23a6d=""> <pre :class="{bg: bg}" _v-53d23a6d=""><code :class=language v-el:code="" _v-53d23a6d=""><slot _v-53d23a6d=""></slot></code></pre> <span class=copy @click=clip _v-53d23a6d=""> <icon type=clipboard size=18 v-show=!copied _v-53d23a6d=""></icon> <icon type=checkmark size=18 v-show=copied style=color:#5cb85c _v-53d23a6d=""></icon> </span> </div> '},166:function(t,e,o){var i,a;o(167),i=o(168),a=o(169),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},167:function(t,e){},168:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},169:function(t,e){t.exports=' <div class=anchor> <h1 v-if=h1 :id=title_link>{{ title }}</h1> <h2 v-if=h2 :id=title_link>{{ title }}</h2> <h3 v-if=h3 :id=title_link>{{ title }}</h3> <h4 v-if=h4 :id=title_link>{{ title }}</h4> <h5 v-if=h5 :id=title_link>{{ title }}</h5> <h6 v-if=h6 :id=title_link>{{ title }}</h6> <a :href="`#${title_link}`">#</a> </div> '},182:function(t,e,o){var i,a;o(183),i=o(184),a=o(185),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},183:function(t,e){},184:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(16);e["default"]={components:{Row:i.Row,iCol:i.Col,Icon:i.Icon},props:{title:{type:String,"default":""}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1}},computed:{codeHeight:function(){var t={};return this.ready&&(this.showCode?t.height=this.code_height+"px":t.height=this.demo_height+"px"),t}},ready:function(){var t=this;this.$nextTick(function(){var e=t.$children[0].$children[0].$el.clientHeight,o=t.$children[0].$children[1].$el.clientHeight+20;t.code_height=o,o<=e&&(t.showMore=!1),t.demo_height=e,t.ready=!0})}}},185:function(t,e){t.exports=' <row class=example :id=title> <i-col class=example-demo span=12> <div class=example-case> <slot name=demo></slot> </div> <header class=example-header> <span> {{ title }} <a :href="`#${title}`">#</a> </span> </header> <div class=example-desc> <slot name=desc></slot> </div> </i-col> <i-col class=example-code :style=codeHeight span=12> <slot name=code></slot> <div class=example-code-more v-if=showMore @click="showCode = !showCode"> <icon type=ios-arrow-down v-show=!showCode></icon> <icon type=ios-arrow-up v-show=showCode></icon> </div> </i-col> <div class=example-split></div> </row> '},239:function(t,e,o){var i,a;i=o(240),a=o(242),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports["default"]),a&&(("function"==typeof t.exports?t.exports.options:t.exports).template=a)},240:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var a=o(142),l=i(a),n=o(151),d=i(n),s=o(182),r=i(s),c=o(241),p=i(c),h=o(166),u=i(h),m=o(16);e["default"]={components:{iArticle:l["default"],iCode:d["default"],Demo:r["default"],Anchor:u["default"],Page:m.Page},data:function(){return{code:p["default"]}}}},241:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={};o.base="\n<template>\n    <Page :total=\"100\"></Page>\n</template>\n<script>\n    import { Page } from 'iview';\n    export default {\n        components: { Page }\n    }\n</script>\n",o.sizer="\n<template>\n    <Page :total=\"100\" show-sizer></Page>\n</template>\n<script>\n    import { Page } from 'iview';\n    export default {\n        components: { Page }\n    }\n</script>\n",o.elevator="\n<template>\n    <Page :total=\"100\" show-elevator></Page>\n</template>\n<script>\n    import { Page } from 'iview';\n    export default {\n        components: { Page }\n    }\n</script>\n",o.total="\n<template>\n    <Page :total=\"100\" show-total></Page>\n</template>\n<script>\n    import { Page } from 'iview';\n    export default {\n        components: { Page }\n    }\n</script>\n",o.mini='\n<template>\n    <Page :total="40" size="small"></Page>\n    <Page :total="40" size="small" show-elevator show-sizer></Page>\n    <Page :total="40" size="small" show-total></Page>\n</template>\n<script>\n    import { Page } from \'iview\';\n    export default {\n        components: { Page }\n    }\n</script>\n',o.simple='\n<template>\n    <Page :current="2" :total="50" simple></Page>\n</template>\n<script>\n    import { Page } from \'iview\';\n    export default {\n        components: { Page }\n    }\n</script>\n',e["default"]=o},242:function(t,e){t.exports=' <i-article> <article> <h1>Page 分页</h1> <anchor title=概述 h2></anchor> <p>当数据量较多时，使用分页可以快速进行数据切换。</p> <anchor title=代码示例 h2></anchor> <demo title=基本> <div slot=demo> <page :total=100></page> </div> <div slot=desc> <p>基本的分页，页数过多时会自动折叠。</p> </div> <i-code lang=html slot=code>{{ code.base }}</i-code> </demo> <demo title=每页数量> <div slot=demo> <page :total=100 show-sizer></page> </div> <div slot=desc> <p>可以切换每页显示的数量。</p> </div> <i-code lang=html slot=code>{{ code.sizer }}</i-code> </demo> <demo title=电梯> <div slot=demo> <page :total=100 show-elevator></page> </div> <div slot=desc> <p>快速跳转到某一页。</p> </div> <i-code lang=html slot=code>{{ code.elevator }}</i-code> </demo> <demo title=总数> <div slot=demo> <page :total=100 show-total></page> </div> <div slot=desc> <p>显示总共多少条数据，接受 slot 来自定义内容，默认显示<code v-pre>共{{ total }}条</code></p> </div> <i-code lang=html slot=code>{{ code.total }}</i-code> </demo> <demo title=迷你型> <div slot=demo> <page :total=40 size=small></page> <page :total=40 size=small show-elevator show-sizer></page> <page :total=40 size=small show-total></page> </div> <div slot=desc> <p>设置<code>size</code>为<code>small</code>使用迷你型，迷你型拥有普通的所以功能。</p> </div> <i-code lang=html slot=code>{{ code.mini }}</i-code> </demo> <demo title=简洁> <div slot=demo> <page :current=2 :total=50 simple></page> </div> <div slot=desc> <p>设置<code>simple</code>属性即可使用简洁版的分页，通过输入页码回车切换，或使用鼠标点击切换页码，或使用键盘的上下键来切换。简洁分页不能使用总数、电梯和切换数量。</p> </div> <i-code lang=html slot=code>{{ code.simple }}</i-code> </demo> <div class=api> <anchor title=API h2></anchor> <anchor title="Page props" h3></anchor> <table> <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>current</td> <td>当前页码</td> <td>Number</td> <td>1</td> </tr> <tr> <td>total</td> <td>数据总数</td> <td>Number</td> <td>0</td> </tr> <tr> <td>page-size</td> <td>每页条数</td> <td>Number</td> <td>10</td> </tr> <tr> <td>page-size-opts</td> <td>每页条数切换的配置</td> <td>Array</td> <td>[10, 20, 30, 40]</td> </tr> <tr> <td>size</td> <td>可选值为<code>small</code>（迷你版）或不填（默认）</td> <td>String</td> <td>-</td> </tr> <tr> <td>simple</td> <td>简洁版</td> <td>Boolean</td> <td>false</td> </tr> <tr> <td>show-total</td> <td>显示总数</td> <td>Boolean</td> <td>false</td> </tr> <tr> <td>show-elevator</td> <td>显示电梯，可以快速切换到某一页</td> <td>Boolean</td> <td>false</td> </tr> <tr> <td>show-sizer</td> <td>显示分页，用来改变<code>page-size</code></td> <td>Boolean</td> <td>false</td> </tr> </tbody> </table> <anchor title="Page events" h3></anchor> <table> <thead> <tr> <th>事件名</th> <th>说明</th> <th>返回值</th> </tr> </thead> <tbody> <tr> <td>on-change</td> <td>页码改变的回调，返回改变后的页码</td> <td>页码</td> </tr> </tbody> </table> <anchor title="Page slot" h3></anchor> <table> <thead> <tr> <th>名称</th> <th>说明</th> </tr> </thead> <tbody> <tr> <td>无</td> <td>自定义显示总数的内容</td> </tr> </tbody> </table> </div> </article> </i-article> '}});