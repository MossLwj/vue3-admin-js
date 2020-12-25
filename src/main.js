import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//  配置国际化语言
import vueI18n from "./language";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(vueI18n)
  .mount("#app");
