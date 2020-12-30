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
