// Imports
import Vue from 'vue'
import '@/plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'

// Plugins
import VueScrollReveal from 'vue-scroll-reveal';

// Layouts
import Default from '@/layouts/Default'
import Admin from '@/layouts/Admin'
import Landing from '@/layouts/Landing'

// Global css
import '../public/theme.css'

// Global declaration for layouts
Vue.component('default-layout', Default)
Vue.component('admin-layout', Admin)
Vue.component('landing-layout', Landing)

// Plugins use
Vue.use(VueScrollReveal);

// Vue global
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
