<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <Menu :menu="routes" />
    </a-menu>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
//  路由
import { useRoute, useRouter } from "vue-router";

import Menu from "./Menu";

export default {
  name: "Aside",
  components: {
    Menu
  },
  setup() {
    console.log(useRoute());
    console.log(useRouter());
    const { options } = useRouter();

    const routes = options.routes;

    const menuConfig = reactive({
      collapsed: false,
      selectedKeys: ["1"],
      openKeys: ["sub1"],
      preOpenKeys: ["sub1"]
    });

    return {
      ...toRefs(menuConfig),
      routes
    };
  }
};
</script>
<style scoped></style>
