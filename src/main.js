import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//套件
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file
import axios from 'axios'//axios

//Vueloading 套件
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// import VeeValidate from 'vee-validate'

//scss
import './assets/all.scss';

const app = createApp(App)

app.use(router)
app.use(VueLoading) // 元件註冊



app.mount('#app')
