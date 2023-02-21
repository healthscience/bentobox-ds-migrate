import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createPinia } from 'pinia'
import store from './store'
import i18n from './i18n'
// import NonReactive from 'vue-nonreactive'
import VueNativeSock from 'vue-native-websocket-vue3'
import VueDragscroll from 'vue-dragscroll'

const app = createApp(App)
app.use(router)
// app.use(createPinia())
app.mount('#app')
app.use(i18n)
// app.use(NonReactive)
app.use(VueDragscroll)

// 165.227.244.213:9888
app.use(VueNativeSock, 'wss://127.0.0.1:9888', {
  store: store,
  // format: 'json',
  reconnection: true,
  reconnectionAttempts: 5000,
  reconnectionDelay: 300
})
