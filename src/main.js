import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap"
import "./assets/sass/app.scss"
import "../node_modules/bootswatch/dist/lumen/bootstrap.min.css";
import "jquery";
import "popper.js";
import VueSession from 'vue-session';
        Vue.use(VueSession);
        import vSelect from "vue-select";
        Vue.component("v-select", vSelect);
import VueCookies from 'vue-cookies'
// default options config: { expires: '1d', path: '/', domain: '', secure: '', sameSite: 'Lax' }
Vue.use(VueCookies, { expires: '7d'})
import VueProgressBar from "vue-progressbar";
const options = {
  color: "#6EC164",
  failedColor: "#e3342f",
  thickness: "3px",
  transition: {
    speed: "0.9s",
    opacity: "0.9s",
    termination: 1000
  },
  autoRevert: true,
  location: "top",
  inverse: false
};
Vue.use(VueProgressBar, options);
import axiosService from 'axios'
const axios = axiosService.create({
  baseURL: process.env.VUE_APP_BASE_API
});
Vue.config.productionTip = false
// axios with axios retry
import VueNoty from 'vuejs-noty';
Vue.use(VueNoty);
Vue.use(VueNoty, {
  progressBar: true,
  layout: 'topRight',
  theme: 'metroui',
  timeout: 4000
});

Vue.prototype.$axios = axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
