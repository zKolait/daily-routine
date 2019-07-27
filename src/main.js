// Imports
import Vue from 'vue'
import '@/plugins/axios'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/store'
import VueCookies from 'vue-cookies'

// Plugins
import VueScrollReveal from 'vue-scroll-reveal';
import ApexCharts from 'apexcharts';

// Layouts
import Default from '@/layouts/Default'
import Dashboard from '@/layouts/Dashboard'
import Landing from '@/layouts/Landing'

// Global css
import '../public/theme.css'

// Global declaration for layouts
Vue.component('default-layout', Default)
Vue.component('dashboard-layout', Dashboard)
Vue.component('landing-layout', Landing)

// Plugins use
Vue.use(VueScrollReveal);
Vue.use(VueCookies);

// Vue global
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
