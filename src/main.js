import { createApp } from 'vue'
import './style.css'
import App from './deft.vue'
import router from './router';

const app = createApp(App);
app.mount('#app');
app.use(router);
