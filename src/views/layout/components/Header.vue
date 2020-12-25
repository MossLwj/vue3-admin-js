<template>
  <div id="header">
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
              <span>中文</span>
              <span>英文</span>
            </a-menu-item>
            <a-menu-divider />
            <a-menu-item key="2">
              <a href="javascript:;">退出</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
</style>
