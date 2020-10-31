import VueRouter from 'vue-router'

import Main from './pages/Main'
import Error404 from './pages/404'
import BaseLayout from './pages/Layout'

import VImageClipper from './pages/v-image-clipper-demo'
import VDateSelectionDemo from './pages/v-date-selection-demo'

const publicPath = process.env.NODE_ENV === 'production' ? '/Vue-Project-Demo' : ''

const routes = [

    { path: publicPath, name: 'base_layout', component: BaseLayout, children: [
        { path: '/', name: 'main', component: Main, meta: { auth: null, title: 'Home' } },
        { path: '/vuetify-image-clipper', name: 'VImageClipper', component: VImageClipper, meta: { auth: null, title: 'vuetify-immge-clipper' } },
        { path: '/vuetify-date-selection', name: 'VDateSelectionDemo', component: VDateSelectionDemo, meta: { auth: null, title: 'vuetify-immge-clipper' } },
    ] },

    { path: '*', name: '404', component: Error404, meta: { auth: null, title: '404' } },
]

const router = new VueRouter({
    history: true,
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

export default router