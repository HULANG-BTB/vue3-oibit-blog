import 'normalize.css/normalize.css' // 在最前面引入 后续样式覆盖

import ElementPlus from 'element-plus' // 引入 element-plus
import 'element-plus/lib/theme-chalk/index.css' // 引入 css 样式文件

import '@/styles/index.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus) // 注册 ElementPlus
app.mount('#app')
