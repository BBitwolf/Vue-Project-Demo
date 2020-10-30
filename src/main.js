import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css';
let vuetify = new Vuetify({
    icons: {
        iconfont: 'mdi',  // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    theme: {
        dark: false,
    },
    themes: {
        light: {
            primary: "#4682b4",
            secondary: "#b0bec5",
            accent: "#8c9eff",
            error: "#b71c1c",
        },
    },
})
Vue.use(Vuetify)

import router from './web_route'
import VueRouter from 'vue-router'
Vue.router = router
Vue.use(VueRouter)

import VuetifyImageClipper from "vuetify-image-clipper"
import "vuetify-image-clipper/dist/v-image-clipper.css"
Vue.use(VuetifyImageClipper)

Vue.config.productionTip = false

new Vue({
    vuetify,
    router,
    render: h => h(App),
}).$mount('#app')
