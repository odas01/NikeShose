import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import 'aos/dist/aos.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
