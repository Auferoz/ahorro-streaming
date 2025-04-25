// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContratacionStreaming from '../views/ContratacionStreaming.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ContratacionStreaming', name: 'ContratacionStreaming', component: ContratacionStreaming }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
