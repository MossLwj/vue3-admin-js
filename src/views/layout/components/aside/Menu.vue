<template>
  <div>
    <template v-for="route in menu">
      <template v-if="!route.hidden">
        <!--   一级路由   -->
        <a-menu-item v-if="!route.children" :key="route.path">
          <span>{{ route.meta && route.meta.title }}</span>
        </a-menu-item>

        <!--   嵌套路由   -->
        <a-sub-menu v-else :key="route.path">
          <!--    title    -->
          <template #title>
            <span>
              {{ route.meta && route.meta.title }}
            </span>
          </template>
          <Menu :menu="route.children" />
          <!--          <template v-if="!route.children.children">-->
          <!--            <a-menu-item v-for="child in route.children" :key="child.path">-->
          <!--              {{ child.meta && child.meta.title }}-->
          <!--            </a-menu-item>-->
          <!--          </template>-->
          <!--          <template v-else>-->
          <!--            -->
          <!--          </template>-->
        </a-sub-menu>
      </template>
    </template>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    menu: {
      type: Object,
      default: () => ({})
    }
  },
  setup() {}
};
</script>
<style scoped></style>
