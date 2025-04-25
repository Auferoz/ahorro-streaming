// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

if (window.location.origin.includes("localhost")) {
  window.dataLayer = window.dataLayer || [];
  console.log("dataLayer local activado");
}

createApp(App)
  .use(router)
  .mount('#app')


