import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router"; // Agrega el import del router

if (window.location.origin.includes("localhost")) {
  window.dataLayer = window.dataLayer || [];
  console.log("dataLayer local activado");
}

const app = createApp(App);

app.use(router); // Usa el router

app.mount("#app");
