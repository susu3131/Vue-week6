import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//bootstrap 
import "bootstrap"; // 從nodeModule中載入Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; // Import css file

//axios
import axios from 'axios'
import vueaxios from 'vue-axios'

//Vueloading 
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// import VeeValidate from 'vee-validate'

//scss
import './assets/all.scss';

const app = createApp(App)

app.use(vueaxios,axios)
app.use(router)
app.use(VueLoading) // 元件註冊



app.mount('#app')
