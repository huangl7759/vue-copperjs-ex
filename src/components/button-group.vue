<template>
  <div
    id="wl-btn-group"
    class="btn-group d-flex flex-nowrap"
    data-toggle="buttons"
  >
    <label class="btn btn-primary" v-for="item in options" :key="item.value">
      <input
        type="radio"
        class="sr-only"
        id="aspectRatio1"
        name="aspectRatio"
        @change="setValue"
        :value="item.value"
      />
      <span class="docs-tooltip" data-toggle="tooltip">
        {{ item.label }}
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "btns",
  model: {
    prop: "checked",
    event: "change",
  },
  props: {
    checked: [Number, String],
    options: Array,
  },
  methods: {
    setValue() {
      const checkVla = document.querySelector(
        "#wl-btn-group input[type='radio']:checked"
      ).value;
      this.$emit("change", checkVla);
    },
  },
};
</script>

<style  scoped>
</style>