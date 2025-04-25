import { createRouter, createWebHashHistory } from 'vue-router'
// Actualización: importa Home desde el archivo correcto
import Home from '../views/Home.vue'
import ContratacionStreaming from '../views/ContratacionStreaming.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ContratacionStreaming', name: 'ContratacionStreaming', component: ContratacionStreaming },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
