import { createRouter,createWebHistory } from 'vue-router'
import Home from './components/Home'
import CV from './components/DownloudeCV.vue'
import OrderProject from './components/OrderProject'

    const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/cvpage', name: 'CV', component: CV},
    { path: '/OrderProject', name: 'Order-Project', component: OrderProject},
]
    const router = createRouter({
      history:createWebHistory(),
        routes
    })


export default router;