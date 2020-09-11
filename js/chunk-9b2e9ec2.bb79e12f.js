(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b2e9ec2"],{"064b":function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-collapse-item",{attrs:{disabled:e.disabled,name:e.p+"-"+e.title}},[l("template",{slot:"title"},[l("div",{staticStyle:{width:"100%","font-size":"16px"},on:{click:e.modify}},[e._v(" "+e._s(e.title)+" ")])]),e._t("default")],2)],1)},o=[],s=l("4360");function i(e){s["a"].commit("modifyActiveCards",e)}var r={data(){return{p:""===this.prefix?this.$route.name:this.prefix}},props:{title:{type:String,default:""},disabled:{type:Boolean,default:!1},remember:{type:Boolean,default:!0},prefix:{type:String,default:""}},methods:{modify(){this.remember&&(""===this.prefix?i(this.$route.name+"-"+this.title):i(this.prefix+"-"+this.title))}}},n=r,c=(l("37b0"),l("2877")),d=Object(c["a"])(n,a,o,!1,null,"74180b3e",null);t["a"]=d.exports},"37b0":function(e,t,l){"use strict";var a=l("5f02"),o=l.n(a);o.a},"5f02":function(e,t,l){},"6c4f":function(e,t,l){"use strict";function a(e,t,l){return"undefined"===typeof t||""==t||/^\d+(ns|us|µs|ms|s|m|h)$/.test(t)?l():l(new Error("该字段必须以ns、us或µs、ms、s、m、h时间单位结尾，例如300ms"))}function o(e,t,l){return"undefined"===typeof t||""==t||/^[0-9]*$/.test(t)?l():l(new Error("该字段不能包含除数字以外的其他字符"))}l.d(t,"b",(function(){return a})),l.d(t,"a",(function(){return o}))},9641:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-card",{staticClass:"box-card item"},[l("el-collapse",{attrs:{value:e.activeList}},[e._t("default")],2)],1)],1)},o=[],s={computed:{activeList(){return this.$ls.get("active_cards")}}},i=s,r=l("2877"),n=Object(r["a"])(i,a,o,!1,null,"db2c75f6",null);t["a"]=n.exports},efaa:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("el-form",{ref:"config",attrs:{"label-position":"top",model:e.config,rules:e.serviceConfigRules,"status-icon":""}},[l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("melody-card",[l("melody-card-item",{attrs:{title:"Service Name"}},[l("el-form-item",{attrs:{label:"Name"}},[l("el-input",{attrs:{placeholder:"My Service"},model:{value:e.config.name,callback:function(t){e.$set(e.config,"name",t)},expression:"config.name"}}),l("div",{staticClass:"fs12"},[e._v(" 友好的名称，标题，日期，版本或任何其他简短描述，可帮助您在打开时识别JSON文件。 ")])],1)],1),l("melody-card-item",{attrs:{title:"Available hosts"}},[l("el-form-item",[l("div",{staticClass:"fs12"},[e._v(" 在此处添加Melody用于检索数据的所有地址，以及是否由服务发现解决的地址： ")]),l("el-radio-group",{attrs:{size:"small"},model:{value:e.curSDType,callback:function(t){e.curSDType=t},expression:"curSDType"}},[l("el-radio-button",{attrs:{label:"static address resolution"}},[e._v(" Static address resolution ")]),l("el-radio-button",{attrs:{label:"Etcd",disabled:e.etcdDisabled}},[e._v(" Etcd ")]),l("el-radio-button",{attrs:{label:"DNS SRV"}},[e._v(" DNS SRV ")]),l("el-radio-button",{attrs:{label:"Custom service discovery"}},[e._v(" Custom service discovery ")])],1),l("el-input",{staticStyle:{"margin-top":"10px","margin-bottom":"10px"},attrs:{placeholder:"address"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveAvailableHosts(t)}},model:{value:e.curAvailableHost,callback:function(t){e.curAvailableHost=t},expression:"curAvailableHost"}},[l("template",{slot:"prepend"},[l("el-checkbox",{model:{value:e.disableSanitize,callback:function(t){e.disableSanitize=t},expression:"disableSanitize"}},[e._v("disable sanitize")])],1)],2),l("div",e._l(e.availableHosts,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handleAvailableHostsTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),1),l("div",{staticClass:"fs12"},[e._v(" Melody连接到的地址。一些有效的示例: "),l("code",[e._v("https://myapi")]),e._v("，"),l("code",[e._v("amqp://host")]),e._v("， "),l("code",[e._v("192.0.2.1:25")]),e._v("，"),l("code",[e._v("my.service.tld")]),e._v("。 ")]),l("div",{staticClass:"fs12"},[e._v(" 当不需要为协议检查地址字符串时，请选择disable sanitize。 ")])],1)],1),l("melody-card-item",{attrs:{title:"Timeouts and TTL"}},[l("div",{staticClass:"sf12"},[e._v(" 除非在每个endpoint中明确覆盖，否则以下所有设置将在所有backend中使用 ")]),l("el-form-item",{attrs:{label:"Backend Timeout",prop:"timeout"}},[l("el-input",{attrs:{placeholder:"3000ms"},model:{value:e.config.timeout,callback:function(t){e.$set(e.config,"timeout",t)},expression:"config.timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 与您的后端的所有连接的默认timeout(从Melody发出请求到收到响应)。 以后可以在具体的endpoint上再覆盖此值。 ")])],1),l("el-form-item",{attrs:{label:"Default Cache TTL",prop:"cache_ttl"}},[l("el-input",{attrs:{placeholder:"300s"},model:{value:e.config.cache_ttl,callback:function(t){e.$set(e.config,"cache_ttl",t)},expression:"config.cache_ttl"}}),l("div",{staticClass:"fs12"},[e._v(" 请求"),l("code",[e._v("header")]),e._v("会加上 "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank"}},[l("code",[e._v("Cache-Control")])]),e._v("，此值只对"),l("code",[e._v("Get")]),e._v("请求生效。 ")])],1)],1)],1),l("melody-card",[l("melody-card-item",{attrs:{title:"Cross-origin resource sharing (CORS)"}},[l("el-form-item",[l("el-switch",{on:{change:e.swtichCORS},model:{value:e.openCORS,callback:function(t){e.openCORS=t},expression:"openCORS"}})],1),e.openCORS?[l("el-form-item",{attrs:{label:"Allowed methods"}},[l("el-checkbox-group",{attrs:{size:"small"},model:{value:e.melody_cors.allow_methods,callback:function(t){e.$set(e.melody_cors,"allow_methods",t)},expression:"melody_cors.allow_methods"}},[l("el-checkbox",{attrs:{label:"GET",border:""}}),l("el-checkbox",{attrs:{label:"POST",border:""}}),l("el-checkbox",{attrs:{label:"HEAD",border:""}}),l("el-checkbox",{attrs:{label:"PUT",border:""}}),l("el-checkbox",{attrs:{label:"DELETE",border:""}}),l("el-checkbox",{attrs:{label:"CONNECT",border:""}}),l("el-checkbox",{attrs:{label:"OPTIONS",border:""}}),l("el-checkbox",{attrs:{label:"TRACE",border:""}}),l("el-checkbox",{attrs:{label:"PATCH",border:""}})],1)],1),l("el-form-item",{attrs:{label:"Allowed origins"}},[l("el-input",{attrs:{placeholder:"https://example.com"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveOrigin(t)}},model:{value:e.curOrigin,callback:function(t){e.curOrigin=t},expression:"curOrigin"}}),e._l(e.melody_cors.allow_origins,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handleAllowedOriginsTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),l("div",{staticClass:"fs12"},[e._v(" 添加您要接受的来源，或将"),l("code",[e._v("*")]),e._v("用作任何来源。 ")])],2),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Allowed headers"}},[l("el-input",{attrs:{placeholder:"Accept-Language"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveAllowHeader(t)}},model:{value:e.curAllowHeader,callback:function(t){e.curAllowHeader=t},expression:"curAllowHeader"}}),e._l(e.melody_cors.allow_headers,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handleAllowedHeadersTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),l("div",{staticClass:"fs12"},[e._v(" 响应"),l("code",[e._v("header")]),e._v("会加上 "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Headers",target:"_blank"}},[l("code",[e._v("Access-Control-Allow-Headers")])]),e._v("。 ")])],2)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Expose headers"}},[l("el-input",{attrs:{placeholder:"Accept-Language"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveExposeHeader(t)}},model:{value:e.curExposeHeader,callback:function(t){e.curExposeHeader=t},expression:"curExposeHeader"}}),e._l(e.melody_cors.expose_headers,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handleExposeHeadersTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),l("div",{staticClass:"fs12"},[e._v(" 响应"),l("code",[e._v("header")]),e._v("会加上 "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Expose-Headers",target:"_blank"}},[l("code",[e._v("Access-Control-Expose-Headers")])]),e._v("。 ")])],2)],1)],1),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Allow credentials"}},[l("el-switch",{model:{value:e.melody_cors.allow_credentials,callback:function(t){e.$set(e.melody_cors,"allow_credentials",t)},expression:"melody_cors.allow_credentials"}}),l("div",{staticClass:"fs12"},[e._v(" 响应"),l("code",[e._v("header")]),e._v("会加上 "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials",target:"_blank"}},[l("code",[e._v("Access-Control-Allow-Credentials")])]),e._v("。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Max age",prop:"extra_config.melody_cors.max_age"}},[l("el-input",{attrs:{placeholder:"12h"},model:{value:e.melody_cors.max_age,callback:function(t){e.$set(e.melody_cors,"max_age",t)},expression:"melody_cors.max_age"}}),l("div",{staticClass:"fs12"},[e._v(" 响应"),l("code",[e._v("header")]),e._v("会加上 "),l("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Access-Control-Max-Age",target:"_blank"}},[l("code",[e._v("Access-Control-Max-Age")])]),e._v("。 ")])],1)],1)],1)]:e._e()],2)],1),l("melody-card",[l("melody-card-item",{attrs:{title:"Early Warning"}},[l("div",{staticClass:"fs12"},[e._v(" 下面的所有设置都是系统层级的，在这里设置一个或多个值意味着定义系统层级中预警的设置。 "),l("br"),e._v("有效内存单位为: k, m E.g: 1m ")]),l("el-form-item",{attrs:{label:"NumGC",prop:"NumGC"}},[l("el-input",{attrs:{placeholder:"10"},model:{value:e.melody_alert.NumGC,callback:function(t){e.$set(e.melody_alert,"NumGC",t)},expression:"melody_alert.NumGC"}}),l("div",{staticClass:"fs12"},[e._v(" GC的平均次数，一般超过10次则表示GC较为频繁。 ")])],1),l("el-form-item",{attrs:{label:"NumGoroutine",prop:"NumGoroutine"}},[l("el-input",{attrs:{placeholder:"50"},model:{value:e.melody_alert.NumGoroutine,callback:function(t){e.$set(e.melody_alert,"NumGoroutine",t)},expression:"melody_alert.NumGoroutine"}}),l("div",{staticClass:"fs12"},[e._v(" Goroutine的数量，一般超过50则表示引擎压力较大。 ")])],1),l("el-form-item",{attrs:{label:"Sys",prop:"Sys"}},[l("el-input",{attrs:{placeholder:"250m"},model:{value:e.melody_alert.Sys,callback:function(t){e.$set(e.melody_alert,"Sys",t)},expression:"melody_alert.Sys"}}),l("div",{staticClass:"fs12"},[e._v(" 系统所占的总内存大小，一般超过250m则表示系统内存过大。 ")])],1),l("el-form-item",{attrs:{label:"HeapSys",prop:"HeapSys"}},[l("el-input",{attrs:{placeholder:"150m"},model:{value:e.melody_alert.HeapSys,callback:function(t){e.$set(e.melody_alert,"HeapSys",t)},expression:"melody_alert.HeapSys"}}),l("div",{staticClass:"fs12"},[e._v(" 系统中的堆内存大小，一般超过150m则表示堆内存过大。 ")])],1),l("el-form-item",{attrs:{label:"StackSys",prop:"StackSys"}},[l("el-input",{attrs:{placeholder:"150m"},model:{value:e.melody_alert.StackSys,callback:function(t){e.$set(e.melody_alert,"StackSys",t)},expression:"melody_alert.StackSys"}}),l("div",{staticClass:"fs12"},[e._v(" 系统中的栈内存大小，一般超过150m则表示栈内存过大。 ")])],1),l("el-form-item",{attrs:{label:"MCacheSys",prop:"MCacheSys"}},[l("el-input",{attrs:{placeholder:"50m"},model:{value:e.melody_alert.MCacheSys,callback:function(t){e.$set(e.melody_alert,"MCacheSys",t)},expression:"melody_alert.MCacheSys"}}),l("div",{staticClass:"fs12"},[e._v(" 系统中的缓存内存大小，一般超过50m则表示缓存内存过大。 ")])],1),l("el-form-item",{attrs:{label:"MSpanSys",prop:"MSpanSys"}},[l("el-input",{attrs:{placeholder:"10m"},model:{value:e.melody_alert.MSpanSys,callback:function(t){e.$set(e.melody_alert,"MSpanSys",t)},expression:"melody_alert.MSpanSys"}}),l("div",{staticClass:"fs12"},[e._v(" 系统中的最大对象所占的内存大小，一般超过10m则表示对象内存过大。 ")])],1)],1)],1)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("melody-card",[l("melody-card-item",{attrs:{title:"HTTP Server settings"}},[l("el-form-item",{attrs:{label:"Port",prop:"port"}},[l("el-input",{attrs:{placeholder:"8080",autocomplete:"off"},model:{value:e.config.port,callback:function(t){e.$set(e.config,"port",t)},expression:"config.port"}}),l("div",{staticClass:"fs12"},[e._v(" Melody用来监听连接的端口，默认为"),l("code",[e._v("8080")]),e._v("。 也可以在启动时使用标志"),l("code",[e._v("-p")]),e._v("指定该端口。 ")])],1),l("el-form-item",{attrs:{label:"Enable HTTPS"}},[l("el-switch",{on:{change:e.swtichEnableHTTPS},model:{value:e.openEnableHTTPS,callback:function(t){e.openEnableHTTPS=t},expression:"openEnableHTTPS"}})],1),e.openEnableHTTPS?[l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Public key"}},[l("el-input",{attrs:{placeholder:"/path/to/cert.pem",autocomplete:"off"},model:{value:e.config.tls.public_key,callback:function(t){e.$set(e.config.tls,"public_key",t)},expression:"config.tls.public_key"}}),l("div",{staticClass:"fs12"},[e._v(" 公钥的绝对路径或相对于当前工作目录的相对路径 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Private key"}},[l("el-input",{attrs:{placeholder:"/path/to/key.pem",autocomplete:"off"},model:{value:e.config.tls.private_key,callback:function(t){e.$set(e.config.tls,"private_key",t)},expression:"config.tls.private_key"}}),l("div",{staticClass:"fs12"},[e._v(" 私钥的绝对路径或相对于当前工作目录的相对路径 ")])],1)],1)],1)]:e._e(),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"HTTP Read Timeout",prop:"read_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.read_timeout,callback:function(t){e.$set(e.config,"read_timeout",t)},expression:"config.read_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 读取整个HTTP请求（包括body）的最大持续时间。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"HTTP Write Timeout",prop:"write_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.write_timeout,callback:function(t){e.$set(e.config,"write_timeout",t)},expression:"config.write_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 超时写入响应之前的最大持续时间 ")])],1)],1)],1),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"HTTP Read Header Timeout",prop:"read_header_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.read_header_timeout,callback:function(t){e.$set(e.config,"read_header_timeout",t)},expression:"config.read_header_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 读取header花费的最长时间 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"HTTP Idle Timeout",prop:"idle_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.idle_timeout,callback:function(t){e.$set(e.config,"idle_timeout",t)},expression:"config.idle_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 启用Keepalive时等待下一个请求的最长时间 ")])],1)],1)],1)],2),l("melody-card-item",{attrs:{title:"Options"}},[l("el-form-item",{attrs:{label:"Output encoding"}},[l("el-select",{model:{value:e.config.output_encoding,callback:function(t){e.$set(e.config,"output_encoding",t)},expression:"config.output_encoding"}},e._l(e.output_encoding,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),l("el-form-item",{attrs:{label:"Allow non-RESTful resource naming"}},[l("el-switch",{model:{value:e.config.disable_rest,callback:function(t){e.$set(e.config,"disable_rest",t)},expression:"config.disable_rest"}})],1)],1)],1),l("melody-card",[l("melody-card-item",{attrs:{title:"Bot monitor"}},[l("el-form-item",[l("el-switch",{on:{change:e.swtichBotDetector},model:{value:e.openBotDetector,callback:function(t){e.openBotDetector=t},expression:"openBotDetector"}})],1),e.openBotDetector?[l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Whitelist"}},[l("el-input",{attrs:{placeholder:"MyAndroidClient/1.0"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveWhitelist(t)}},model:{value:e.curWhitelist,callback:function(t){e.curWhitelist=t},expression:"curWhitelist"}}),e._l(e.melody_botmonitor.whitelist,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handleWhitelistTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),l("div",{staticClass:"fs12"},[e._v(" 受信任的User-Agent列表(精确匹配) ")])],2)],1),l("el-col",{staticClass:"container",attrs:{span:11}},[l("el-form-item",{attrs:{label:"Blacklist"}},[l("el-input",{attrs:{placeholder:"axios/0.17.1"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.saveBlacklist(t)}},model:{value:e.curBlacklist,callback:function(t){e.curBlacklist=t},expression:"curBlacklist"}}),e._l(e.melody_botmonitor.blacklist,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handleBlacklistTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),l("div",{staticClass:"fs12"},[e._v(" 立即拒绝的User-Agent列表(精确匹配) ")])],2)],1)],1),l("el-form-item",{attrs:{label:"Patterns"}},[l("el-input",{attrs:{placeholder:"(facebookexternalhit)/.*"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.savePatterns(t)}},model:{value:e.curPatterns,callback:function(t){e.curPatterns=t},expression:"curPatterns"}}),e._l(e.melody_botmonitor.patterns,(function(t,a){return l("el-tag",{key:a,style:0==a?{}:{"margin-left":"10px"},attrs:{closable:"",type:"info"},on:{close:function(l){return e.handlePatternsTagClose(t)}}},[e._v(" "+e._s(t)+" ")])})),l("div",{staticClass:"fs12"},[e._v(" 拒绝被正则表达式匹配到的User-Agent。 ")])],2),l("el-form-item",{attrs:{label:"Cache size"}},[l("el-input-number",{model:{value:e.melody_botmonitor.cacheSize,callback:function(t){e.$set(e.melody_botmonitor,"cacheSize",t)},expression:"melody_botmonitor.cacheSize"}}),l("div",{staticClass:"fs12"},[e._v(" 缓存用户代理的数量，以加快检测的速度。使用0表示不缓存。 ")])],1)]:e._e()],2)],1)],1)],1),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:23}},[l("melody-card",[l("melody-card-item",{attrs:{title:"HTTP Client settings (高级)"}},[l("div",{staticClass:"fs12"},[e._v(" 这些是用于处理查询后端的HTTP客户端的特定设置。您通常不需要设置这些值。 ")]),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:7}},[l("el-form-item",{attrs:{label:"IDLE Connection Timeout",prop:"idle_connection_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.idle_connection_timeout,callback:function(t){e.$set(e.config,"idle_connection_timeout",t)},expression:"config.idle_connection_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 在keep-alive的情况下，空闲连接在关闭自身之前将保持空闲的最长时间。"),l("code",[e._v("0")]),e._v("表示无限制。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:7}},[l("el-form-item",{attrs:{label:"Response Header Timeout",prop:"response_header_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.response_header_timeout,callback:function(t){e.$set(e.config,"response_header_timeout",t)},expression:"config.response_header_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 发送请求后，等待服务器的响应头的时间。该时间不包括读取响应正文的时间。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:7}},[l("el-form-item",{attrs:{label:"Expect Continue Timeout",prop:"expect_continue_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.expect_continue_timeout,callback:function(t){e.$set(e.config,"expect_continue_timeout",t)},expression:"config.expect_continue_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 如果在header中存在"),l("code",[e._v('"Expect: 100-continue"')]),e._v(" ，那么这个时间则是在发送请求的header之后等待服务器第一次响应的时间。"),l("code",[e._v("0")]),e._v("表示无限制。 ")])],1)],1)],1),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:5}},[l("el-form-item",{attrs:{label:"Maximum IDLE connections",prop:"max_idle_connections"}},[l("el-input",{attrs:{placeholder:"0",autocomplete:"off"},model:{value:e.config.max_idle_connections,callback:function(t){e.$set(e.config,"max_idle_connections",t)},expression:"config.max_idle_connections"}}),l("div",{staticClass:"fs12"},[e._v(" 所有主机之间的最大空闲（keep-alive）连接数。 "),l("code",[e._v("0")]),e._v("表示无限制。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:5}},[l("el-form-item",{attrs:{label:"Maximum IDLE connections per host",prop:"max_idle_connections_per_host"}},[l("el-input",{attrs:{placeholder:"0",autocomplete:"off"},model:{value:e.config.max_idle_connections_per_host,callback:function(t){e.$set(e.config,"max_idle_connections_per_host",t)},expression:"config.max_idle_connections_per_host"}}),l("div",{staticClass:"fs12"},[e._v(" 每个主机允许的最大空闲连接数。默认为"),l("code",[e._v("250")]),e._v("。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:5}},[l("el-form-item",{attrs:{label:"Disable Keep-Alives"}},[l("el-switch",{model:{value:e.config.disable_keep_alives,callback:function(t){e.$set(e.config,"disable_keep_alives",t)},expression:"config.disable_keep_alives"}}),l("div",{staticClass:"fs12"},[e._v(" 如果设置，则防止在不同的HTTP请求之间重用TCP连接。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:5}},[l("el-form-item",{attrs:{label:"Disable Compression"}},[l("el-switch",{model:{value:e.config.disable_compression,callback:function(t){e.$set(e.config,"disable_compression",t)},expression:"config.disable_compression"}}),l("div",{staticClass:"fs12"},[e._v(" 如果设置，则阻止传输请求压缩的带有 "),l("code",[e._v('"Accept-Encoding: gzip"')]),e._v("请求头的请求。 ")])],1)],1)],1),l("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-around"}},[l("el-col",{staticClass:"container",attrs:{span:7}},[l("el-form-item",{attrs:{label:"Dialer Timeout",prop:"dialer_timeout"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.dialer_timeout,callback:function(t){e.$set(e.config,"dialer_timeout",t)},expression:"config.dialer_timeout"}}),l("div",{staticClass:"fs12"},[e._v(" 拨号等待连接完成的最长时间。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:7}},[l("el-form-item",{attrs:{label:"Dialer Fallback Delay",prop:"dialer_fallback_delay"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.dialer_fallback_delay,callback:function(t){e.$set(e.config,"dialer_fallback_delay",t)},expression:"config.dialer_fallback_delay"}}),l("div",{staticClass:"fs12"},[e._v(" FallbackDelay指定在生成RFC 6555快速后备连接之前要等待的时间。 也就是说，这是在假设IPv6配置错误并退回到IPv4之前等待IPv6成功的时间。如果为零，则使用默认延迟300ms。 ")])],1)],1),l("el-col",{staticClass:"container",attrs:{span:7}},[l("el-form-item",{attrs:{label:"Dialer Keep-Alive",prop:"dialer_keep_alive"}},[l("el-input",{attrs:{placeholder:"0s",autocomplete:"off"},model:{value:e.config.dialer_keep_alive,callback:function(t){e.$set(e.config,"dialer_keep_alive",t)},expression:"config.dialer_keep_alive"}}),l("div",{staticClass:"fs12"},[e._v(" TCP心跳检测时间间隔。默认为15s。 ")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],s=l("9641"),i=l("064b"),r=l("6c4f"),n={name:"Service",data(){let e=this.$store.getters.serviceConfig;return{config:e,serviceConfigRules:{extra_config:{melody_cors:{max_age:[{validator:r["b"],trigger:"blur"}]}},port:[{validator:r["a"],trigger:"blur"}],read_timeout:[{validator:r["b"],trigger:"blur"}],timeout:[{validator:r["b"],trigger:"blur"}],cache_ttl:[{validator:r["b"],trigger:"blur"}],write_timeout:[{validator:r["b"],trigger:"blur"}],idle_timeout:[{validator:r["b"],trigger:"blur"}],read_header_timeout:[{validator:r["b"],trigger:"blur"}],idle_connection_timeout:[{validator:r["b"],trigger:"blur"}],response_header_timeout:[{validator:r["b"],trigger:"blur"}],expect_continue_timeout:[{validator:r["b"],trigger:"blur"}],max_idle_connections:[{validator:r["a"],trigger:"blur"}],max_idle_connections_per_host:[{validator:r["a"],trigger:"blur"}],dialer_timeout:[{validator:r["b"],trigger:"blur"}],dialer_fallback_delay:[{validator:r["b"],trigger:"blur"}],dialer_keep_alive:[{validator:r["b"],trigger:"blur"}]},etcdDisabled:void 0==e.extra_config.melody_etcd,disableSanitize:!1,curSDType:"static address resolution",curAvailableHost:"",availableHosts:this.$store.getters.availableHosts,output_encoding:[{value:"json",label:"JSON"},{value:"string",label:"String(text/plain)"},{value:"no-op",label:"No-op(just proxy)"}],openEnableHTTPS:void 0!==e.tls,openCORS:void 0!==e.extra_config.melody_cors,openBotDetector:void 0!==e.extra_config.melody_botmonitor,curOrigin:"",curAllowHeader:"",curExposeHeader:"",curWhitelist:"",curBlacklist:"",curPatterns:"",tls:void 0==e.tls?{public_key:"",private_key:""}:e.tls,melody_cors:void 0==e.extra_config.melody_cors?{allow_origins:["*"],expose_headers:["Content-Length"],max_age:"12h",allow_methods:["GET","POST"],allow_headers:["*"],allow_credentials:!1}:e.extra_config.melody_cors,melody_botmonitor:void 0==e.extra_config.melody_botmonitor?{cacheSize:0,whitelist:[],blacklist:[],patterns:[]}:e.extra_config.melody_botmonitor,melody_alert:void 0==e.extra_config.melody_alert?{NumGC:"10",NumGoroutine:"50",Sys:"250m",HeapSys:"150m",StackSys:"150m",MCacheSys:"50m",MSpanSys:"20m"}:e.extra_config.melody_alert}},components:{MelodyCard:s["a"],MelodyCardItem:i["a"]},methods:{saveAvailableHosts(){-1==this.availableHosts.indexOf(this.curSDType.split(" ")[0]+" - "+this.curAvailableHost)?(this.availableHosts.push(this.curSDType.split(" ")[0]+" - "+this.curAvailableHost),this.$store.commit("setAvailableHosts",this.availableHosts),this.curAvailableHost=""):this.$message({message:"请勿重复添加"})},saveOrigin(){let e=this.melody_cors.allow_origins;-1==e.indexOf(this.curOrigin)?(e.push(this.curOrigin),this.melody_cors.allow_origins=e,this.curOrigin=""):this.$message({message:"请勿重复添加"})},saveAllowHeader(){let e=this.melody_cors.allow_headers;-1==e.indexOf(this.curAllowHeader)?(e.push(this.curAllowHeader),this.melody_cors.allow_headers=e,this.curAllowHeader=""):this.$message({message:"请勿重复添加"})},saveExposeHeader(){let e=this.melody_cors.expose_headers;-1==e.indexOf(this.curExposeHeader)?(e.push(this.curExposeHeader),this.melody_cors.expose_headers=e,this.curExposeHeader=""):this.$message({message:"请勿重复添加"})},saveWhitelist(){let e=this.melody_botmonitor.whitelist;-1==e.indexOf(this.curWhitelist)?(e.push(this.curWhitelist),this.melody_botmonitor.whitelist=e,this.curWhitelist=""):this.$message({message:"请勿重复添加"})},saveBlacklist(){let e=this.melody_botmonitor.blacklist;-1==e.indexOf(this.curBlacklist)?(e.push(this.curBlacklist),this.melody_botmonitor.blacklist=e,this.curBlacklist=""):this.$message({message:"请勿重复添加"})},savePatterns(){let e=this.melody_botmonitor.patterns;-1==e.indexOf(this.curPatterns)?(e.push(this.curPatterns),this.melody_botmonitor.patterns=e,this.curPatterns=""):this.$message({message:"请勿重复添加"})},handleAvailableHostsTagClose(e){this.availableHosts.splice(this.availableHosts.indexOf(e),1),this.$store.commit("setAvailableHosts",this.availableHosts)},handleAllowedOriginsTagClose(e){this.melody_cors.allow_origins.splice(this.melody_cors.allow_origins.indexOf(e),1)},handleAllowedHeadersTagClose(e){this.melody_cors.allow_headers.splice(this.melody_cors.allow_headers.indexOf(e),1)},handleExposeHeadersTagClose(e){this.melody_cors.expose_headers.splice(this.melody_cors.expose_headers.indexOf(e),1)},handleWhitelistTagClose(e){this.melody_botmonitor.whitelist.splice(this.melody_botmonitor.whitelist.indexOf(e),1)},handleBlacklistTagClose(e){this.melody_botmonitor.blacklist.splice(this.melody_botmonitor.blacklist.indexOf(e),1)},handlePatternsTagClose(e){this.melody_botmonitor.patterns.splice(this.melody_botmonitor.patterns.indexOf(e),1)},swtichEnableHTTPS(e){e?this.config.tls=this.tls:delete this.config.tls},swtichCORS(e){e?this.$store.commit("setExtraConfig",{name:"melody_cors",config:this.melody_cors}):this.$store.commit("removeExtraConfig",{name:"melody_cors"})},swtichBotDetector(e){e?this.$store.commit("setExtraConfig",{name:"melody_botmonitor",config:this.melody_botmonitor}):this.$store.commit("removeExtraConfig",{name:"melody_botmonitor"})}},beforeRouteLeave(e,t,l){this.$refs.config.validate(e=>{e?l():this.$alert("填写正确的内容","发生错误",{confirmButtonText:"好滴"})})},watch:{config:{handler:function(){this.$refs.config.validate().catch(e=>{console.log(e)}),this.$store.commit("updateServiceConfig",this.config),this.$store.commit("removeUselessPropsAtServiceConfigLevel")},deep:!0},melody_cors:{handler:function(){this.$refs.config.validate(e=>{e&&this.$store.commit("setExtraConfig",{name:"melody_cors",config:this.melody_cors})})},deep:!0},melody_botmonitor:{handler:function(){this.$store.commit("setExtraConfig",{name:"melody_botmonitor",config:this.melody_botmonitor})},deep:!0},melody_alert:{handler:function(){this.$store.commit("setExtraConfig",{name:"melody_alert",config:this.melody_alert})},deep:!0}}},c=n,d=l("2877"),m=Object(d["a"])(c,a,o,!1,null,"1aa8a1d9",null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-9b2e9ec2.bb79e12f.js.map