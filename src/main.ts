import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
// import store from "./store";
import "./less/index.less";
import { createPinia } from "pinia";
import { ConfigProvider } from "vant";
import Vant from 'vant';
import 'vant/lib/index.css';
const app = createApp(App);

app.use(ConfigProvider);
app.use(Vant);
app.use(createPinia()).use(router).mount("#app");