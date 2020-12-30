<template>
  <div>
    <h1 id="logo">
      <img :src="logo" alt="前端" />
    </h1>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="selectMenu"
      @openChange="openMenu"
    >
      <template v-for="item in routes" :key="item.path">
        <template v-if="!item.hidden">
          <template v-if="!item.children">
            <a-menu-item :key="item.path">
              <router-link :to="item.path">
                <span class="anticon">
                  <svg-icon iconName="home" />
                </span>
                <!--                <i-->
                <!--                  class="icon icon-size-21 mb&#45;&#45;5"-->
                <!--                  :class="item.meta && item.meta.icon"-->
                <!--                />-->
                <span>
                  {{ item.meta && item.meta.title }}
                </span>
              </router-link>
            </a-menu-item>
          </template>
          <template v-else>
            <Menu :menu-info="item" :key="item.path" />
          </template>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
//  路由
import { useRouter } from "vue-router";

import Menu from "./Menu";

export default {
  name: "Aside",
  components: {
    Menu
  },
  setup() {
    const { options } = useRouter();

    const routes = options.routes;
    console.log(options);
    const menuConfig = reactive({
      collapsed: false,
      selectedKeys: localStorage.getItem("selectedKeys")
        ? [localStorage.getItem("selectedKeys")]
        : [],
      openKeys: localStorage.getItem("openKeys")
        ? JSON.parse(localStorage.getItem("openKeys"))
        : [],
      preOpenKeys: ["sub1"],
      logo: require("@/assets/images/logo.png")
    });

    const selectMenu = ({ key }) => {
      menuConfig.selectedKeys = [key];
      localStorage.setItem("selectedKeys", [key]);
    };

    const openMenu = openKeys => {
      menuConfig.openKeys = openKeys;
      localStorage.setItem("openKeys", JSON.stringify(openKeys));
    };

    return {
      ...toRefs(menuConfig),
      routes,
      selectMenu,
      openMenu
    };
  }
};
</script>
<style lang="scss" scoped>
#logo {
  padding: 24px 0 20px;
  border: 1px solid #000;
  text-align: center;
  img {
    display: inline-block;
  }
}
</style>
