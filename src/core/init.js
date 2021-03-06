import Vue from 'vue'
import VueStorage from 'vue-ls'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import JsonViewer from 'vue-json-viewer'

import config from '@/config/defaultSetting'

Vue.use(VueStorage, config.storageOptions)
Vue.use(ElementUI)
Vue.use(JsonViewer)
