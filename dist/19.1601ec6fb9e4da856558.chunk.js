webpackJsonp([19],{139:function(e,t,i){e.exports=i.p+"b26b7f1de822ee64bc4b201ee9f40c16.png"},142:function(e,t,i){var o,n;i(143),o=i(144),n=i(150),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).template=n)},143:function(e,t){},144:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(145),s=o(n),l=i(16);t["default"]={components:{Row:l.Row,iCol:l.Col,Affix:l.Affix,Navigate:s["default"]},data:function(){return{list:[]}},ready:function(){var e=this,t=this.$children[0].$children[1].$el.childNodes[1].querySelectorAll(".example");t.forEach(function(t){var i=t.querySelector("header span").innerHTML;e.list.push(i)})}}},145:function(e,t,i){var o,n;i(146),o=i(147),n=i(149),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).template=n)},146:function(e,t){},147:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(148),s=o(n);t["default"]={props:{},data:function(){return{navigate:s["default"]}},computed:{},methods:{}}},148:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={guide:[{title:"介绍",path:"/docs/guide/introduce"},{title:"起步",path:"/docs/guide/start"},{title:"规范",path:"/docs/guide/standard"},{title:"更新日志",path:"/docs/guide/update"}],components:[{type:"Basic",list:[{title:"Layout 栅格",path:"/components/layout"},{title:"Button 按钮",path:"/components/button"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Form",list:[{title:"Radio 单选框",path:"/components/radio"},{title:"Checkbox 多选框",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]},{type:"View",list:[{title:"Alert 警告提示",path:"/components/alert"},{title:"Progress 进度条",path:"/components/progress"},{title:"Badge 徽标数",path:"/components/badge"},{title:"Collapse 折叠面板",path:"/components/collapse"},{title:"Timeline 时间轴",path:"/components/timeline"},{title:"Tag 标签",path:"/components/tag"}]},{type:"Navigation",list:[{title:"Page 分页",path:"/components/page"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb"},{title:"Steps 步骤条",path:"/components/steps"}]},{type:"Chart",list:[{title:"Circle 进度环",path:"/components/circle"}]},{type:"Other",list:[{title:"Affix 图钉",path:"/components/affix"},{title:"BackTop 返回顶部",path:"/components/back-top"},{title:"Spin 加载中",path:"/components/spin"}]}]};t["default"]=i},149:function(e,t){e.exports=' <div class=navigate> <ul> <li v-for="item in navigate.guide"> <a v-link="{path: item.path}">{{ item.title }}</a> </li> <li> <div>组件</div> <ul> <li v-for="item in navigate.components"> <p>{{ item.type }}</p> <ul> <li v-for="component in item.list"> <a v-link="{path: component.path}">{{ component.title }}</a> </li> </ul> </li> </ul> </li> </ul> </div> '},150:function(e,t,i){e.exports=" <div class=wrapper> <div class=wrapper-header> <div class=wrapper-header-logo> <a v-link=\"{path: '/'}\"> <img src="+i(139)+'> </a> </div> </div> <div class=wrapper-container> <row> <i-col span=4 class=wrapper-navigate> <navigate></navigate> </i-col> <i-col span=20> <div class="wrapper-content ivu-article"> <slot></slot> </div> </i-col> </row> </div> </div> <div class=footer> <div class=footer-main> <row> <i-col span=5> <h4>GitHub</h4> <ul> <li> <a href=https://github.com/iview/iview target=_blank>iView</a> </li> <li> <a href=https://github.com/icarusion/vue-vueRouter-webpack target=_blank>vue+webpack工程</a> </li> </ul> </i-col> <i-col span=5> <h4>社区</h4> <ul> <li> <a href=https://github.com/iview/iview/issues target=_blank>反馈建议</a> </li> <li> <a href=https://github.com/iview/iview/issues/new target=_blank>提交Bug</a> </li> </ul> </i-col> <i-col span=5> <h4>相关站点</h4> <ul> <li> <a href="https://www.talkingcoder.com/?from=iview" target=_blank>TalkingCoder</a> - 有逼格的程序员社区 </li> <li> <a href=https://www.talkingdata.com/ target=_blank>TalkingData</a> - 移动·数据·价值 </li> </ul> </i-col> <i-col span=5 offset=4> <div class=footer-aside> <div class=footer-logo> <img src='+i(139)+'> </div> <div class=footer-author> Author: <a href="https://www.talkingcoder.com/aresn?from=iview" target=_blank>Aresn</a> </div> </div> </i-col> </row> </div> </div> '},151:function(e,t,i){var o,n;i(152),o=i(153),n=i(164),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).template=n)},152:function(e,t){},153:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(154),s=o(n),l=i(16),a=i(155),c=o(a);t["default"]={components:{Icon:l.Icon},props:{lang:{type:String,"default":"javascript"},bg:{type:Boolean,"default":!1}},data:function(){return{code:"",copied:!1}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},compiled:function(){this.code=this.$els.code.innerHTML.replace(/\n/,""),this.$els.code.innerHTML=this.code,s["default"].highlightBlock(this.$els.code)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),i=new c["default"](".copy",{text:function(){return t}});i.on("success",function(t){t.clearSelection(),i.destroy(),e.copied=!0,setTimeout(function(){e.copied=!1},2e3)})}}}},164:function(e,t){e.exports=' <div _v-53d23a6d=""> <pre :class="{bg: bg}" _v-53d23a6d=""><code :class=language v-el:code="" _v-53d23a6d=""><slot _v-53d23a6d=""></slot></code></pre> <span class=copy @click=clip _v-53d23a6d=""> <icon type=clipboard size=18 v-show=!copied _v-53d23a6d=""></icon> <icon type=checkmark size=18 v-show=copied style=color:#5cb85c _v-53d23a6d=""></icon> </span> </div> '},166:function(e,t,i){var o,n;i(167),o=i(168),n=i(169),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).template=n)},167:function(e,t){},168:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},169:function(e,t){e.exports=' <div class=anchor> <h1 v-if=h1 :id=title_link>{{ title }}</h1> <h2 v-if=h2 :id=title_link>{{ title }}</h2> <h3 v-if=h3 :id=title_link>{{ title }}</h3> <h4 v-if=h4 :id=title_link>{{ title }}</h4> <h5 v-if=h5 :id=title_link>{{ title }}</h5> <h6 v-if=h6 :id=title_link>{{ title }}</h6> <a :href="`#${title_link}`">#</a> </div> '},182:function(e,t,i){var o,n;i(183),o=i(184),n=i(185),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).template=n)},183:function(e,t){},184:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(16);t["default"]={components:{Row:o.Row,iCol:o.Col,Icon:o.Icon},props:{title:{type:String,"default":""}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1}},computed:{codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e}},ready:function(){var e=this;this.$nextTick(function(){var t=e.$children[0].$children[0].$el.clientHeight,i=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=i,i<=t&&(e.showMore=!1),e.demo_height=t,e.ready=!0})}}},185:function(e,t){e.exports=' <row class=example :id=title> <i-col class=example-demo span=12> <div class=example-case> <slot name=demo></slot> </div> <header class=example-header> <span> {{ title }} <a :href="`#${title}`">#</a> </span> </header> <div class=example-desc> <slot name=desc></slot> </div> </i-col> <i-col class=example-code :style=codeHeight span=12> <slot name=code></slot> <div class=example-code-more v-if=showMore @click="showCode = !showCode"> <icon type=ios-arrow-down v-show=!showCode></icon> <icon type=ios-arrow-up v-show=showCode></icon> </div> </i-col> <div class=example-split></div> </row> '},247:function(e,t,i){var o,n;i(248),o=i(249),n=i(251),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),n&&(("function"==typeof e.exports?e.exports.options:e.exports).template=n)},248:function(e,t){},249:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var n=i(142),s=o(n),l=i(151),a=o(l),c=i(182),p=o(c),d=i(250),r=o(d),h=i(166),u=o(h),f=i(16);t["default"]={components:{iArticle:s["default"],iCode:a["default"],Demo:p["default"],Anchor:u["default"],Spin:f.Spin,Icon:f.Icon,Row:f.Row,iCol:f.Col,Button:f.Button},data:function(){return{code:r["default"],spinShow:!0}}}},250:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};i.base="\n<template>\n    <Spin></Spin>\n</template>\n<script>\n    import { Spin } from 'iview';\n    export default {\n        components: { Spin }\n    }\n</script>\n",i.size='\n<template>\n    <Spin size="small"></Spin>\n    <Spin></Spin>\n    <Spin size="large"></Spin>\n</template>\n<script>\n    import { Spin } from \'iview\';\n    export default {\n        components: { Spin }\n    }\n</script>\n',i.fix="\n<style>\n    .demo-spin-container{\n    \tdisplay: inline-block;\n        width: 200px;\n        height: 100px;\n        position: relative;\n        border: 1px solid #eee;\n    }\n</style>\n<template>\n    <div class=\"demo-spin-container\">\n        <Spin fix></Spin>\n    </div>\n</template>\n<script>\n    import { Spin } from 'iview';\n    export default {\n        components: { Spin }\n    }\n</script>\n",i.custom='\n<style>\n    .demo-spin-icon-load{\n        animation: ani-demo-spin 1s linear infinite;\n    }\n    @keyframes ani-demo-spin {\n        from { transform: rotate(0deg);}\n        50%  { transform: rotate(180deg);}\n        to   { transform: rotate(360deg);}\n    }\n    .demo-spin-col{\n        height: 100px;\n        position: relative;\n        border: 1px solid #eee;\n    }\n</style>\n<template>\n    <Row>\n        <i-col class="demo-spin-col" span="8">\n            <Spin fix>加载中...</Spin>\n        </i-col>\n        <i-col class="demo-spin-col" span="8">\n            <Spin fix>\n                <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>\n                <div>Loading</div>\n            </Spin>\n        </i-col>\n        <i-col class="demo-spin-col" span="8">\n            <Spin fix>\n                <div class="loader">\n                    <svg class="circular" viewBox="25 25 50 50">\n                        <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10">\n                    </svg>\n                </div>\n            </Spin>\n        </i-col>\n    </Row>\n</template>\n<script>\n    // 部分样式代码冗长，未作展示\n    import { Spin, Icon, Row, Col } from \'iview\';\n    export default {\n        components: { Spin, Icon, Row, iCol: Col }\n    }\n</script>\n',i.status='\n<template>\n    <div class="demo-spin-article">\n        <h3>登金陵凤凰台</h3>\n        <address>李白</address>\n        <article>\n            <p>凤凰台上凤凰游，凤去台空江自流。</p>\n            <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>\n            <p>三山半落青天外，二水中分白鹭洲。</p>\n            <p>总为浮云能蔽日，长安不见使人愁。</p>\n        </article>\n        <Spin size="large" fix v-if="spinShow"></Spin>\n    </div>\n    <Button type="primary" @click="spinShow = !spinShow">Toggle Change</Button>\n</template>\n<script>\n    import { Spin, Button } from \'iview\';\n    export default {\n        components: { Spin, Button },\n        data () {\n            return {\n                spinShow: true\n            }\n        }\n    }\n</script>\n',t["default"]=i},251:function(e,t){e.exports=' <i-article> <article> <h1>Spin 加载中</h1> <anchor title=概述 h2></anchor> <p>当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。</p> <demo title=基础用法> <div slot=demo> <spin></spin> </div> <div slot=desc> <p>最简单使用 Spin 的方法。</p> </div> <i-code lang=html slot=code>{{ code.base }}</i-code> </demo> <demo title=各种尺寸> <div slot=demo> <row> <i-col span=8> <spin size=small></spin> </i-col> <i-col span=8> <spin></spin> </i-col> <i-col span=8> <spin size=large></spin> </i-col> </row> </div> <div slot=desc> <p>通过设置<code>size</code>属性为<code>large</code>和<code>small</code>将 Spin 设置为大和小尺寸，不设置为默认（中）尺寸。</p> </div> <i-code lang=html slot=code>{{ code.size }}</i-code> </demo> <demo title=居中固定> <div slot=demo> <div class=demo-spin-container> <spin fix></spin> </div> </div> <div slot=desc> <p>在容器内部垂直居中固定，需要父级有<code>relative</code>或<code>absolute</code>。</p> </div> <i-code lang=html slot=code>{{ code.fix }}</i-code> </demo> <demo title=自定义内容> <div slot=demo> <row> <i-col class=demo-spin-col span=8> <spin fix>加载中...</spin> </i-col> <i-col class=demo-spin-col span=8> <spin fix> <icon type=load-c size=18 class=demo-spin-icon-load></icon> <div>Loading</div> </spin> </i-col> <i-col class=demo-spin-col span=8> <spin fix> <div class=loader> <svg class=circular viewBox="25 25 50 50"> <circle class=path cx=50 cy=50 r=20 fill=none stroke-width=5 stroke-miterlimit=10> </circle></svg> </div> </spin> </i-col> </row> </div> <div slot=desc> <p>自定义 Spin 的内容，可以是简单的文字，也可以是很复杂的动画。</p> </div> <i-code lang=html slot=code>{{ code.custom }}</i-code> </demo> <demo title=状态切换> <div slot=demo> <div class=demo-spin-article> <h3>登金陵凤凰台</h3> <address>李白</address> <article> <p>凤凰台上凤凰游，凤去台空江自流。</p> <p>吴宫花草埋幽径，晋代衣冠成古丘。</p> <p>三山半落青天外，二水中分白鹭洲。</p> <p>总为浮云能蔽日，长安不见使人愁。</p> </article> <spin size=large fix v-if=spinShow></spin> </div> <button type=primary @click="spinShow = !spinShow">Toggle Change</button> </div> <div slot=desc> <p>控制 Spin 组件的显示和消失。</p> </div> <i-code lang=html slot=code>{{ code.status }}</i-code> </demo> <div class=api> <anchor title=API h2></anchor> <anchor title="Spin props" h3></anchor> <table> <thead> <tr> <th>属性</th> <th>说明</th> <th>类型</th> <th>默认值</th> </tr> </thead> <tbody> <tr> <td>size</td> <td>Spin尺寸，可选值为<code>large</code>和<code>small</code>或者不设置</td> <td>String</td> <td>-</td> </tr> <tr> <td>fix</td> <td>是否固定，需要父级有<code>relative</code>或<code>absolute</code></td> <td>Boolean</td> <td>false</td> </tr> </tbody> </table> <anchor title="Spin slot" h3></anchor> <table> <thead> <tr> <th>名称</th> <th>说明</th> </tr> </thead> <tbody> <tr> <td>无</td> <td>自定义 Spin 的内容，设置slot后，默认的样式不生效</td> </tr> </tbody> </table> </div> </article> </i-article> '}});