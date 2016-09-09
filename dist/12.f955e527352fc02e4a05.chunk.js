webpackJsonp([12],{128:function(e,t,o){e.exports=o.p+"b26b7f1de822ee64bc4b201ee9f40c16.png"},131:function(e,t,o){var r,i;o(132),r=o(133),i=o(139),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},132:function(e,t){},133:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(134),a=r(i),n=o(16);t["default"]={components:{Row:n.Row,iCol:n.Col,Affix:n.Affix,Navigate:a["default"]},data:function(){return{list:[]}},ready:function(){var e=this,t=this.$children[0].$children[1].$el.childNodes[1].querySelectorAll(".example");t.forEach(function(t){var o=t.querySelector("header span").innerHTML;e.list.push(o)})}}},134:function(e,t,o){var r,i;o(135),r=o(136),i=o(138),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},135:function(e,t){},136:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(137),a=r(i);t["default"]={props:{},data:function(){return{navigate:a["default"]}},computed:{},methods:{}}},137:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={guide:[{title:"介绍",path:"/docs/guide/introduce"},{title:"起步",path:"/docs/guide/start"},{title:"规范",path:"/docs/guide/standard"},{title:"更新日志",path:"/docs/guide/update"}],components:[{type:"Basic",list:[{title:"Layout 栅格",path:"/components/layout"},{title:"Button 按钮",path:"/components/button"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Form",list:[{title:"Radio 单选框",path:"/components/radio"},{title:"Checkbox 多选框",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]},{type:"View",list:[{title:"Progress 进度条",path:"/components/progress"},{title:"Badge 徽标数",path:"/components/badge"},{title:"Timeline 时间轴",path:"/components/timeline"},{title:"Tag 标签",path:"/components/tag"}]},{type:"Navigation",list:[{title:"Page 分页",path:"/components/page"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb"},{title:"Steps 步骤条",path:"/components/steps"}]},{type:"Chart",list:[{title:"Circle 进度环",path:"/components/circle"}]},{type:"Other",list:[{title:"Affix 图钉",path:"/components/affix"},{title:"BackTop 返回顶部",path:"/components/back-top"},{title:"Spin 加载中",path:"/components/spin"}]}]};t["default"]=o},138:function(e,t){e.exports=' <div class=navigate> <ul> <li v-for="item in navigate.guide"> <a v-link="{path: item.path}">{{ item.title }}</a> </li> <li> <div>组件</div> <ul> <li v-for="item in navigate.components"> <p>{{ item.type }}</p> <ul> <li v-for="component in item.list"> <a v-link="{path: component.path}">{{ component.title }}</a> </li> </ul> </li> </ul> </li> </ul> </div> '},139:function(e,t,o){e.exports=" <div class=wrapper> <div class=wrapper-header> <div class=wrapper-header-logo> <a v-link=\"{path: '/'}\"> <img src="+o(128)+'> </a> </div> </div> <div class=wrapper-container> <row> <i-col span=4 class=wrapper-navigate> <navigate></navigate> </i-col> <i-col span=20> <div class="wrapper-content ivu-article"> <slot></slot> </div> </i-col> </row> </div> </div> <div class=footer> <div class=footer-main> <row> <i-col span=5> <h4>GitHub</h4> <ul> <li> <a href=https://github.com/iview/iview target=_blank>iView</a> </li> <li> <a href=https://github.com/icarusion/vue-vueRouter-webpack target=_blank>vue+webpack工程</a> </li> </ul> </i-col> <i-col span=5> <h4>社区</h4> <ul> <li> <a href=https://github.com/iview/iview/issues target=_blank>反馈建议</a> </li> <li> <a href=https://github.com/iview/iview/issues/new target=_blank>提交Bug</a> </li> </ul> </i-col> <i-col span=5> <h4>相关站点</h4> <ul> <li> <a href="https://www.talkingcoder.com/?from=iview" target=_blank>TalkingCoder</a> - 有逼格的程序员社区 </li> <li> <a href=https://www.talkingdata.com/ target=_blank>TalkingData</a> - 移动·数据·价值 </li> </ul> </i-col> <i-col span=5 offset=4> <div class=footer-aside> <div class=footer-logo> <img src='+o(128)+'> </div> <div class=footer-author> Author: <a href="https://www.talkingcoder.com/aresn?from=iview" target=_blank>Aresn</a> </div> </div> </i-col> </row> </div> </div> '},140:function(e,t,o){var r,i;o(141),r=o(142),i=o(153),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},141:function(e,t){},142:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(143),a=r(i),n=o(16),c=o(144),d=r(c);t["default"]={components:{Icon:n.Icon},props:{lang:{type:String,"default":"javascript"},bg:{type:Boolean,"default":!1}},data:function(){return{code:"",copied:!1}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},compiled:function(){this.code=this.$els.code.innerHTML.replace(/\n/,""),this.$els.code.innerHTML=this.code,a["default"].highlightBlock(this.$els.code)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),o=new d["default"](".copy",{text:function(){return t}});o.on("success",function(t){t.clearSelection(),o.destroy(),e.copied=!0,setTimeout(function(){e.copied=!1},2e3)})}}}},153:function(e,t){e.exports=' <div _v-53d23a6d=""> <pre :class="{bg: bg}" _v-53d23a6d=""><code :class=language v-el:code="" _v-53d23a6d=""><slot _v-53d23a6d=""></slot></code></pre> <span class=copy @click=clip _v-53d23a6d=""> <icon type=clipboard size=18 v-show=!copied _v-53d23a6d=""></icon> <icon type=checkmark size=18 v-show=copied style=color:#5cb85c _v-53d23a6d=""></icon> </span> </div> '},155:function(e,t,o){var r,i;o(156),r=o(157),i=o(158),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},156:function(e,t){},157:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},158:function(e,t){e.exports=' <div class=anchor> <h1 v-if=h1 :id=title_link>{{ title }}</h1> <h2 v-if=h2 :id=title_link>{{ title }}</h2> <h3 v-if=h3 :id=title_link>{{ title }}</h3> <h4 v-if=h4 :id=title_link>{{ title }}</h4> <h5 v-if=h5 :id=title_link>{{ title }}</h5> <h6 v-if=h6 :id=title_link>{{ title }}</h6> <a :href="`#${title_link}`">#</a> </div> '},171:function(e,t,o){var r,i;o(172),r=o(173),i=o(174),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},172:function(e,t){},173:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(16);t["default"]={components:{Row:r.Row,iCol:r.Col,Icon:r.Icon},props:{title:{type:String,"default":""}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1}},computed:{codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e}},ready:function(){var e=this;this.$nextTick(function(){var t=e.$children[0].$children[0].$el.clientHeight,o=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=o,o<=t&&(e.showMore=!1),e.demo_height=t,e.ready=!0})}}},174:function(e,t){e.exports=' <row class=example :id=title> <i-col class=example-demo span=12> <div class=example-case> <slot name=demo></slot> </div> <header class=example-header> <span> {{ title }} <a :href="`#${title}`">#</a> </span> </header> <div class=example-desc> <slot name=desc></slot> </div> </i-col> <i-col class=example-code :style=codeHeight span=12> <slot name=code></slot> <div class=example-code-more v-if=showMore @click="showCode = !showCode"> <icon type=ios-arrow-down v-show=!showCode></icon> <icon type=ios-arrow-up v-show=showCode></icon> </div> </i-col> <div class=example-split></div> </row> '},204:function(e,t,o){var r,i;o(205),r=o(206),i=o(208),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options:e.exports).template=i)},205:function(e,t){},206:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=o(131),a=r(i),n=o(140),c=r(n),d=o(171),s=r(d),l=o(207),p=r(l),m=o(155),u=r(m),h=o(16),b=h.Breadcrumb.Item;t["default"]={components:{iArticle:a["default"],iCode:c["default"],Demo:s["default"],Anchor:u["default"],Breadcrumb:h.Breadcrumb,BreadcrumbItem:b,Icon:h.Icon},data:function(){return{code:p["default"]}}}},207:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={};o.base='\n<template>\n    <Breadcrumb>\n        <Breadcrumb-item href="/">Home</Breadcrumb-item>\n        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>\n        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>\n    </Breadcrumb>\n</template>\n<script>\n    import { Breadcrumb } from \'iview\';\n    const BreadcrumbItem = Breadcrumb.Item;\n    export default {\n        components: { Breadcrumb, BreadcrumbItem }\n    }\n</script>\n',o.icon='\n<template>\n    <Breadcrumb>\n        <Breadcrumb-item href="/">\n            <Icon type="ios-home-outline"></Icon> Home\n        </Breadcrumb-item>\n        <Breadcrumb-item href="/components/breadcrumb">\n            <Icon type="social-buffer-outline"></Icon> Components\n        </Breadcrumb-item>\n        <Breadcrumb-item>\n            <Icon type="pound"></Icon> Breadcrumb\n        </Breadcrumb-item>\n    </Breadcrumb>\n</template>\n<script>\n    import { Breadcrumb, Icon } from \'iview\';\n    const BreadcrumbItem = Breadcrumb.Item;\n    export default {\n        components: { Breadcrumb, BreadcrumbItem, Icon }\n    }\n</script>\n',o.separator='\n<style>\n    .demo-breadcrumb-separator{\n        color: #ff5500;\n        padding: 0 5px;\n    }\n</style>\n<template>\n    <Breadcrumb separator=">">\n        <Breadcrumb-item href="/">Home</Breadcrumb-item>\n        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>\n        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>\n    </Breadcrumb>\n    <Breadcrumb separator="<b class=\'demo-breadcrumb-separator\'>=></b>">\n        <Breadcrumb-item href="/">Home</Breadcrumb-item>\n        <Breadcrumb-item href="/components/breadcrumb">Components</Breadcrumb-item>\n        <Breadcrumb-item>Breadcrumb</Breadcrumb-item>\n    </Breadcrumb>\n</template>\n<script>\n    import { Breadcrumb } from \'iview\';\n    const BreadcrumbItem = Breadcrumb.Item;\n    export default {\n        components: { Breadcrumb, BreadcrumbItem }\n    }\n</script>\n',t["default"]=o},208:function(e,t){e.exports=' <i-article> <article> <h1>Breadcrumb 面包屑</h1> <anchor title=概述 h2></anchor> <p>显示网站的层级结构，告知用户当前所在位置，以及在需要向上级导航时使用。</p> <anchor title=代码示例 h2></anchor> <demo title=基础用法> <div slot=demo> <breadcrumb> <breadcrumb-item href=/ >Home</breadcrumb-item> <breadcrumb-item href=/components/breadcrumb>Components</breadcrumb-item> <breadcrumb-item>Breadcrumb</breadcrumb-item> </breadcrumb> </div> <div slot=desc> <p>最基础的用法，通过设置<code>href</code>属性添加链接。</p> </div> <i-code lang=html slot=code>{{ code.base }}</i-code> </demo> <demo title=带图标的> <div slot=demo> <breadcrumb> <breadcrumb-item href=/ > <icon type=ios-home-outline></icon> Home </breadcrumb-item> <breadcrumb-item href=/components/breadcrumb> <icon type=social-buffer-outline></icon> Components </breadcrumb-item> <breadcrumb-item> <icon type=pound></icon> Breadcrumb </breadcrumb-item> </breadcrumb> </div> <div slot=desc> <p>可自定义每项的内容，比如带有一个图标。</p> </div> <i-code lang=html slot=code>{{ code.icon }}</i-code> </demo> <demo title=分隔符> <div slot=demo> <breadcrumb separator=">"> <breadcrumb-item href=/ >Home</breadcrumb-item> <breadcrumb-item href=/components/breadcrumb>Components</breadcrumb-item> <breadcrumb-item>Breadcrumb</breadcrumb-item> </breadcrumb> <breadcrumb separator="<b class=\'demo-breadcrumb-separator\'>=></b>"> <breadcrumb-item href=/ >Home</breadcrumb-item> <breadcrumb-item href=/components/breadcrumb>Components</breadcrumb-item> <breadcrumb-item>Breadcrumb</breadcrumb-item> </breadcrumb> </div> <div slot=desc> <p>通过设置<code>separator</code>属性来自定义分隔符，比如<code> > </code>，也可以接受自定义的HTML字符串。</p> </div> <i-code lang=html slot=code>{{ code.separator }}</i-code> </demo> <div class=api> <anchor title=API h2></anchor> <anchor title="Breadcrumb props" h3></anchor> <table> <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>separator</td> <td>自定义分隔符</td> <td>String | Element String</td> <td>/</td> </tr> </tbody> </table> <anchor title="Breadcrumb.Item props" h3></anchor> <table> <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>href</td> <td>链接，不传则没有链接</td> <td>String</td> <td>-</td> </tr> </tbody> </table> </div> </article> </i-article> '}});