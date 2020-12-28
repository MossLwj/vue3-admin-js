<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
    >
      <template v-for="route in routes">
        <template v-if="!route.hidden">
          <a-menu-item v-if="!route.children" :key="route.path">
            <span>{{ route.meta && route.meta.title }}</span>
          </a-menu-item>

          <a-sub-menu v-else :key="route.path">
            <template #title>
              <span>
                {{ route.meta && route.meta.title }}
              </span>
            </template>
            <template v-if="route.children.length">
              <a-menu-item v-for="child in route.children" :key="child.path">
                {{ child.meta && child.meta.title }}
              </a-menu-item>
            </template>
          </a-sub-menu>
        </template>
      </template>
    </a-menu>
  </div>
</template>
<script>
import { reactive, toRefs } from "vue";
//  路由
import { useRoute, useRouter } from "vue-router";

export default {
  name: "Aside",
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
