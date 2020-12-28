<template>
  <div>
    <a-sub-menu :key="menuInfo.path" v-bind="$attrs">
      <template #title>
        <i
          class="icon icon-size-21 mb--5"
          :class="menuInfo.meta && menuInfo.meta.icon"
        />
        {{ menuInfo.meta && menuInfo.meta.title }}
      </template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.path">
            <router-link :to="item.path">
              <i
                class="icon icon-size-21 mb--5"
                :class="item.meta && item.meta.icon"
              />
              {{ item.meta && item.meta.title }}
            </router-link>
          </a-menu-item>
        </template>
        <template v-else>
          <Menu :menu-info="item" :key="item.path" />
        </template>
      </template>
    </a-sub-menu>
  </div>
</template>
<script>
export default {
  name: "Menu",
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    console.log(props.menuInfo);
  }
};
</script>
<style scoped></style>
