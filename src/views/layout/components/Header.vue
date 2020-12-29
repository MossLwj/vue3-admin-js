<template>
  <div id="header">
    <a-button
      type="primary"
      @click="toggleCollapsed"
      style="margin-bottom: 16px"
    >
      <MenuUnfoldOutlined v-if="collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <div class="header-menu">
      <a-dropdown>
        <a class="ant-dropdown-link" @click="e => e.preventDefault()">
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item key="0">
              18265895689
            </a-menu-item>
            <a-menu-item key="1">
              <div class="menu-item menu-lang">
                <span
                  v-for="item in langTypes"
                  :key="item.value"
                  @click="toggleLanguage(item.value)"
                  :class="{ current: currentLanguage === item.value }"
                >
                  {{ item.label }}
                </span>
              </div>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <a href="javascript:;">{{ $t("header_menu.logout") }}</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from "vue";
import { useI18n } from "vue-i18n";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons-vue";

export default {
  name: "Header",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  },
  setup() {
    //  通过getCurrentInstance()方法获取上下文信息
    const { emit } = getCurrentInstance();

    const { locale } = useI18n({ useScope: "global" });

    const config = reactive({
      langTypes: [
        { label: "中文", value: "ch" },
        { label: "English", value: "en" }
      ],
      currentLanguage: "ch"
    });

    /**
     * 切换中英文
     * @param value
     */
    const toggleLanguage = value => {
      locale.value = value;
      config.currentLanguage = value;
    };

    /**
     * 收缩左侧菜单点击事件
     */
    const toggleCollapsed = () => {
      emit("collapsed");
    };

    return {
      ...toRefs(config),
      toggleLanguage,
      toggleCollapsed
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  padding: 0 20px;
  height: 64px;
  .header-menu {
    float: right;
  }
}
.menu-lang {
  span {
    margin-right: 10px;
    font-size: 14px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
}
.current {
  color: #42b983;
}
</style>
