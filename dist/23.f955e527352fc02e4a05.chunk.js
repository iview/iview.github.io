webpackJsonp([23],{128:function(e,t,i){e.exports=i.p+"b26b7f1de822ee64bc4b201ee9f40c16.png"},131:function(e,t,i){var n,o;i(132),n=i(133),o=i(139),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)},132:function(e,t){},133:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(134),l=n(o),a=i(16);t["default"]={components:{Row:a.Row,iCol:a.Col,Affix:a.Affix,Navigate:l["default"]},data:function(){return{list:[]}},ready:function(){var e=this,t=this.$children[0].$children[1].$el.childNodes[1].querySelectorAll(".example");t.forEach(function(t){var i=t.querySelector("header span").innerHTML;e.list.push(i)})}}},134:function(e,t,i){var n,o;i(135),n=i(136),o=i(138),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)},135:function(e,t){},136:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(137),l=n(o);t["default"]={props:{},data:function(){return{navigate:l["default"]}},computed:{},methods:{}}},137:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={guide:[{title:"介绍",path:"/docs/guide/introduce"},{title:"起步",path:"/docs/guide/start"},{title:"规范",path:"/docs/guide/standard"},{title:"更新日志",path:"/docs/guide/update"}],components:[{type:"Basic",list:[{title:"Layout 栅格",path:"/components/layout"},{title:"Button 按钮",path:"/components/button"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Form",list:[{title:"Radio 单选框",path:"/components/radio"},{title:"Checkbox 多选框",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]},{type:"View",list:[{title:"Progress 进度条",path:"/components/progress"},{title:"Badge 徽标数",path:"/components/badge"},{title:"Timeline 时间轴",path:"/components/timeline"},{title:"Tag 标签",path:"/components/tag"}]},{type:"Navigation",list:[{title:"Page 分页",path:"/components/page"},{title:"Breadcrumb 面包屑",path:"/components/breadcrumb"},{title:"Steps 步骤条",path:"/components/steps"}]},{type:"Chart",list:[{title:"Circle 进度环",path:"/components/circle"}]},{type:"Other",list:[{title:"Affix 图钉",path:"/components/affix"},{title:"BackTop 返回顶部",path:"/components/back-top"},{title:"Spin 加载中",path:"/components/spin"}]}]};t["default"]=i},138:function(e,t){e.exports=' <div class=navigate> <ul> <li v-for="item in navigate.guide"> <a v-link="{path: item.path}">{{ item.title }}</a> </li> <li> <div>组件</div> <ul> <li v-for="item in navigate.components"> <p>{{ item.type }}</p> <ul> <li v-for="component in item.list"> <a v-link="{path: component.path}">{{ component.title }}</a> </li> </ul> </li> </ul> </li> </ul> </div> '},139:function(e,t,i){e.exports=" <div class=wrapper> <div class=wrapper-header> <div class=wrapper-header-logo> <a v-link=\"{path: '/'}\"> <img src="+i(128)+'> </a> </div> </div> <div class=wrapper-container> <row> <i-col span=4 class=wrapper-navigate> <navigate></navigate> </i-col> <i-col span=20> <div class="wrapper-content ivu-article"> <slot></slot> </div> </i-col> </row> </div> </div> <div class=footer> <div class=footer-main> <row> <i-col span=5> <h4>GitHub</h4> <ul> <li> <a href=https://github.com/iview/iview target=_blank>iView</a> </li> <li> <a href=https://github.com/icarusion/vue-vueRouter-webpack target=_blank>vue+webpack工程</a> </li> </ul> </i-col> <i-col span=5> <h4>社区</h4> <ul> <li> <a href=https://github.com/iview/iview/issues target=_blank>反馈建议</a> </li> <li> <a href=https://github.com/iview/iview/issues/new target=_blank>提交Bug</a> </li> </ul> </i-col> <i-col span=5> <h4>相关站点</h4> <ul> <li> <a href="https://www.talkingcoder.com/?from=iview" target=_blank>TalkingCoder</a> - 有逼格的程序员社区 </li> <li> <a href=https://www.talkingdata.com/ target=_blank>TalkingData</a> - 移动·数据·价值 </li> </ul> </i-col> <i-col span=5 offset=4> <div class=footer-aside> <div class=footer-logo> <img src='+i(128)+'> </div> <div class=footer-author> Author: <a href="https://www.talkingcoder.com/aresn?from=iview" target=_blank>Aresn</a> </div> </div> </i-col> </row> </div> </div> '},140:function(e,t,i){var n,o;i(141),n=i(142),o=i(153),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)},141:function(e,t){},142:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(143),l=n(o),a=i(16),c=i(144),s=n(c);t["default"]={components:{Icon:a.Icon},props:{lang:{type:String,"default":"javascript"},bg:{type:Boolean,"default":!1}},data:function(){return{code:"",copied:!1}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},compiled:function(){this.code=this.$els.code.innerHTML.replace(/\n/,""),this.$els.code.innerHTML=this.code,l["default"].highlightBlock(this.$els.code)},methods:{clip:function(){var e=this,t=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),i=new s["default"](".copy",{text:function(){return t}});i.on("success",function(t){t.clearSelection(),i.destroy(),e.copied=!0,setTimeout(function(){e.copied=!1},2e3)})}}}},153:function(e,t){e.exports=' <div _v-53d23a6d=""> <pre :class="{bg: bg}" _v-53d23a6d=""><code :class=language v-el:code="" _v-53d23a6d=""><slot _v-53d23a6d=""></slot></code></pre> <span class=copy @click=clip _v-53d23a6d=""> <icon type=clipboard size=18 v-show=!copied _v-53d23a6d=""></icon> <icon type=checkmark size=18 v-show=copied style=color:#5cb85c _v-53d23a6d=""></icon> </span> </div> '},155:function(e,t,i){var n,o;i(156),n=i(157),o=i(158),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)},156:function(e,t){},157:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},158:function(e,t){e.exports=' <div class=anchor> <h1 v-if=h1 :id=title_link>{{ title }}</h1> <h2 v-if=h2 :id=title_link>{{ title }}</h2> <h3 v-if=h3 :id=title_link>{{ title }}</h3> <h4 v-if=h4 :id=title_link>{{ title }}</h4> <h5 v-if=h5 :id=title_link>{{ title }}</h5> <h6 v-if=h6 :id=title_link>{{ title }}</h6> <a :href="`#${title_link}`">#</a> </div> '},171:function(e,t,i){var n,o;i(172),n=i(173),o=i(174),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)},172:function(e,t){},173:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(16);t["default"]={components:{Row:n.Row,iCol:n.Col,Icon:n.Icon},props:{title:{type:String,"default":""}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1}},computed:{codeHeight:function(){var e={};return this.ready&&(this.showCode?e.height=this.code_height+"px":e.height=this.demo_height+"px"),e}},ready:function(){var e=this;this.$nextTick(function(){var t=e.$children[0].$children[0].$el.clientHeight,i=e.$children[0].$children[1].$el.clientHeight+20;e.code_height=i,i<=t&&(e.showMore=!1),e.demo_height=t,e.ready=!0})}}},174:function(e,t){e.exports=' <row class=example :id=title> <i-col class=example-demo span=12> <div class=example-case> <slot name=demo></slot> </div> <header class=example-header> <span> {{ title }} <a :href="`#${title}`">#</a> </span> </header> <div class=example-desc> <slot name=desc></slot> </div> </i-col> <i-col class=example-code :style=codeHeight span=12> <slot name=code></slot> <div class=example-code-more v-if=showMore @click="showCode = !showCode"> <icon type=ios-arrow-down v-show=!showCode></icon> <icon type=ios-arrow-up v-show=showCode></icon> </div> </i-col> <div class=example-split></div> </row> '},253:function(e,t,i){var n,o;i(254),n=i(255),o=i(257),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),o&&(("function"==typeof e.exports?e.exports.options:e.exports).template=o)},254:function(e,t){},255:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=i(131),l=n(o),a=i(140),c=n(a),s=i(171),p=n(s),d=i(256),r=n(d),m=i(155),b=n(m),f=i(16),v=f.Timeline.Item;t["default"]={components:{iArticle:l["default"],iCode:c["default"],Demo:p["default"],Anchor:b["default"],Timeline:f.Timeline,TimelineItem:v,Icon:f.Icon},data:function(){return{code:r["default"]}}}},256:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};i.base='\n<style scoped>\n    .time{\n        font-size: 14px;\n        font-weight: bold;\n    }\n    .content{\n        padding-left: 10px;\n    }\n</style>\n<template>\n    <Timeline>\n        <Timeline-item>\n            <p class="time">1976年</p>\n            <p class="content">Apple I 问世</p>\n        </Timeline-item>\n        <Timeline-item>\n            <p class="time">1984年</p>\n            <p class="content">发布 Macintosh</p>\n        </Timeline-item>\n        <Timeline-item>\n            <p class="time">2007年</p>\n            <p class="content">发布 iPhone</p>\n        </Timeline-item>\n        <Timeline-item>\n            <p class="time">2010年</p>\n            <p class="content">发布 iPad</p>\n        </Timeline-item>\n        <Timeline-item>\n            <p class="time">2011年10月5日</p>\n            <p class="content">史蒂夫·乔布斯去世</p>\n        </Timeline-item>\n    </Timeline>\n</template>\n<script>\n    import { Timeline } from \'iview\';\n    const TimelineItem = Timeline.Item;\n    export default {\n        components: { Timeline, TimelineItem }\n    }\n</script>\n',i.color='\n<template>\n    <Timeline>\n        <Timeline-item color="green">发布1.0版本</Timeline-item>\n        <Timeline-item color="green">发布2.0版本</Timeline-item>\n        <Timeline-item color="red">严重故障</Timeline-item>\n        <Timeline-item color="blue">发布3.0版本</Timeline-item>\n    </Timeline>\n</template>\n<script>\n    import { Timeline } from \'iview\';\n    const TimelineItem = Timeline.Item;\n    export default {\n        components: { Timeline, TimelineItem }\n    }\n</script>\n',i.pending="\n<template>\n    <Timeline pending>\n        <Timeline-item>发布1.0版本</Timeline-item>\n        <Timeline-item>发布2.0版本</Timeline-item>\n        <Timeline-item>发布3.0版本</Timeline-item>\n        <Timeline-item><a href=\"#\">查看更多</a></Timeline-item>\n    </Timeline>\n</template>\n<script>\n    import { Timeline } from 'iview';\n    const TimelineItem = Timeline.Item;\n    export default {\n        components: { Timeline, TimelineItem }\n    }\n</script>\n",i.dot='\n<template>\n    <Timeline>\n        <Timeline-item color="green">\n            <Icon type="trophy" slot="dot"></Icon>\n            <span>发布里程碑版本</span>\n        </Timeline-item>\n        <Timeline-item>发布1.0版本</Timeline-item>\n        <Timeline-item>发布2.0版本</Timeline-item>\n        <Timeline-item>发布3.0版本</Timeline-item>\n    </Timeline>\n</template>\n<script>\n    import { Timeline } from \'iview\';\n    const TimelineItem = Timeline.Item;\n    export default {\n        components: { Timeline, TimelineItem }\n    }\n</script>\n',t["default"]=i},257:function(e,t){e.exports=' <i-article _v-bb91f240=""> <article _v-bb91f240=""> <h1 _v-bb91f240="">Timeline 时间轴</h1> <anchor title=概述 h2="" _v-bb91f240=""></anchor> <p _v-bb91f240="">对一系列信息进行时间排序时，垂直地展示。</p> <anchor title=代码示例 h2="" _v-bb91f240=""></anchor> <demo title=基础用法 _v-bb91f240=""> <div slot=demo _v-bb91f240=""> <timeline _v-bb91f240=""> <timeline-item _v-bb91f240=""> <p class=time _v-bb91f240="">1976年</p> <p class=content _v-bb91f240="">Apple I 问世</p> </timeline-item> <timeline-item _v-bb91f240=""> <p class=time _v-bb91f240="">1984年</p> <p class=content _v-bb91f240="">发布 Macintosh</p> </timeline-item> <timeline-item _v-bb91f240=""> <p class=time _v-bb91f240="">2007年</p> <p class=content _v-bb91f240="">发布 iPhone</p> </timeline-item> <timeline-item _v-bb91f240=""> <p class=time _v-bb91f240="">2010年</p> <p class=content _v-bb91f240="">发布 iPad</p> </timeline-item> <timeline-item _v-bb91f240=""> <p class=time _v-bb91f240="">2011年10月5日</p> <p class=content _v-bb91f240="">史蒂夫·乔布斯去世</p> </timeline-item> </timeline> </div> <div slot=desc _v-bb91f240=""> <p _v-bb91f240="">最简单定义一个时间轴的用法。</p> </div> <i-code lang=html slot=code _v-bb91f240="">{{ code.base }}</i-code> </demo> <demo title=圆圈颜色 _v-bb91f240=""> <div slot=demo _v-bb91f240=""> <timeline _v-bb91f240=""> <timeline-item color=green _v-bb91f240="">发布1.0版本</timeline-item> <timeline-item color=green _v-bb91f240="">发布2.0版本</timeline-item> <timeline-item color=red _v-bb91f240="">严重故障</timeline-item> <timeline-item color=blue _v-bb91f240="">发布3.0版本</timeline-item> </timeline> </div> <div slot=desc _v-bb91f240=""> <p _v-bb91f240="">用各种颜色来标识不同状态，可以使用<code _v-bb91f240="">green</code>、<code _v-bb91f240="">red</code>、<code _v-bb91f240="">blue</code>或自定义的颜色，默认是 blue 。</p> </div> <i-code lang=html slot=code _v-bb91f240="">{{ code.color }}</i-code> </demo> <demo title=最后一个 _v-bb91f240=""> <div slot=demo _v-bb91f240=""> <timeline pending="" _v-bb91f240=""> <timeline-item _v-bb91f240="">发布1.0版本</timeline-item> <timeline-item _v-bb91f240="">发布2.0版本</timeline-item> <timeline-item _v-bb91f240="">发布3.0版本</timeline-item> <timeline-item _v-bb91f240=""><a href=# _v-bb91f240="">查看更多</a></timeline-item> </timeline> </div> <div slot=desc _v-bb91f240=""> <p _v-bb91f240="">通过添加<code _v-bb91f240="">pending</code>属性来标记最后一个为幽灵节点，标识还未完成。</p> </div> <i-code lang=html slot=code _v-bb91f240="">{{ code.pending }}</i-code> </demo> <demo title=自定义时间轴点 _v-bb91f240=""> <div slot=demo _v-bb91f240=""> <timeline _v-bb91f240=""> <timeline-item color=green _v-bb91f240=""> <icon type=trophy slot=dot _v-bb91f240=""></icon> <span _v-bb91f240="">发布里程碑版本</span> </timeline-item> <timeline-item _v-bb91f240="">发布1.0版本</timeline-item> <timeline-item _v-bb91f240="">发布2.0版本</timeline-item> <timeline-item _v-bb91f240="">发布3.0版本</timeline-item> </timeline> </div> <div slot=desc _v-bb91f240=""> <p _v-bb91f240="">接受一个 slot 来自定义轴点的内容，比如一个图标。</p> </div> <i-code lang=html slot=code _v-bb91f240="">{{ code.dot }}</i-code> </demo> <div class=api _v-bb91f240=""> <anchor title=API h2="" _v-bb91f240=""></anchor> <anchor title="Timeline props" h3="" _v-bb91f240=""></anchor> <table _v-bb91f240=""> <thead _v-bb91f240=""> <tr _v-bb91f240=""> <th _v-bb91f240="">属性</th> <th _v-bb91f240="">说明</th> <th _v-bb91f240="">类型</th> <th _v-bb91f240="">默认值</th> </tr> </thead> <tbody _v-bb91f240=""> <tr _v-bb91f240=""> <td _v-bb91f240="">pending</td> <td _v-bb91f240="">指定是否最后一个节点为幽灵节点</td> <td _v-bb91f240="">Boolean</td> <td _v-bb91f240="">false</td> </tr> </tbody> </table> <anchor title="Timeline.Item props" h3="" _v-bb91f240=""></anchor> <table _v-bb91f240=""> <thead _v-bb91f240=""> <tr _v-bb91f240=""> <th _v-bb91f240="">属性</th> <th _v-bb91f240="">说明</th> <th _v-bb91f240="">类型</th> <th _v-bb91f240="">默认值</th> </tr> </thead> <tbody _v-bb91f240=""> <tr _v-bb91f240=""> <td _v-bb91f240="">color</td> <td _v-bb91f240="">圆圈颜色，可选值为<code _v-bb91f240="">blue</code>、<code _v-bb91f240="">red</code>、<code _v-bb91f240="">green</code>，或自定义色值</td> <td _v-bb91f240="">String</td> <td _v-bb91f240="">blue</td> </tr> </tbody> </table> <anchor title="Timeline.Item slot" h3="" _v-bb91f240=""></anchor> <table _v-bb91f240=""> <thead _v-bb91f240=""> <tr _v-bb91f240=""> <th _v-bb91f240="">名称</th> <th _v-bb91f240="">说明</th> </tr> </thead> <tbody _v-bb91f240=""> <tr _v-bb91f240=""> <td _v-bb91f240="">dot</td> <td _v-bb91f240="">自定义时间轴点内容</td> </tr> <tr _v-bb91f240=""> <td _v-bb91f240="">无</td> <td _v-bb91f240="">基本内容</td> </tr> </tbody> </table> </div> </article> </i-article> '}});