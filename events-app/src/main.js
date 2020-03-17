import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './../node_modules/bulma/css/bulma.css';

//sets up the app in development mode
Vue.config.productionTip = false
// New Vue instance is required for every Vue application
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
