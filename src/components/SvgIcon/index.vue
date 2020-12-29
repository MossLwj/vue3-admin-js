<template>
  <svg class="svg-class">
    <use :href="'#icon-' + iconName" />
  </svg>
</template>
<script>
export default {
  name: "SvgIcon",
  props: {
    iconName: {
      type: String,
      default: ""
    }
  },
  setup() {
    //  获取当前svg目录下所有为svg的文件
    const req = require.context("../../assets/svg", false, /\.svg/);
    //  解析获取的svg文件的文件名，并返回
    const requireAll = requireContext => {
      return requireContext.keys().map(requireContext);
    };
    requireAll(req);
  }
};
</script>
<style lang="scss" scoped>
.svg-class {
  width: 1em;
  height: 1em;
  fill: currentColor;
}
</style>
