import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import piniaPluginPersist from 'pinia-plugin-persist'
import {createPinia} from 'pinia';
import './mock.js'; 

const app = createApp(App);

app.use(router);
app.use(ElementPlus);
const pinia=createPinia()
pinia.use(piniaPluginPersist)
app.use(pinia)
app.mount('#app');
