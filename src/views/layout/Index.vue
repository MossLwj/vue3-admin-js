<template>
  <a-layout id="components-layout-demo-custom-trigger" style="height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
        <LayoutAside />
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <LayoutHeader />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px'
        }"
      >
        <LayoutMain />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import LayoutAside from "./components/aside/Index";
import LayoutMain from "./components/Main";
import LayoutHeader from "./components/Header";
import { reactive, toRefs } from "vue";
export default {
  name: "Index",
  components: {
    LayoutAside,
    LayoutHeader,
    LayoutMain
  },
  setup() {
    const data = reactive({
      selectedKeys: ["1"],
      collapsed: false
    });

    return {
      ...toRefs(data)
    };
  }
};
</script>

<style lang="scss" scoped></style>
