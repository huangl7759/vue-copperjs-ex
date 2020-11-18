<template>
  <svg class="svg-icon" :width="size" :height="size" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: "svg-icon",
  props: {
    name: {
      type: String,
    },
    size: {
      type: [String, Number],
      default: 12,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>