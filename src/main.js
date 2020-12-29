import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// ant-design-vue
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

//  配置国际化语言
import vueI18n from "./language";

//  svg文件解析
import "@/js/svg";
//  引入SvgIcon组件
import SvgIcon from "@/components/SvgIcon";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .use(vueI18n)
  .component("svg-icon", SvgIcon)
  .mount("#app");
