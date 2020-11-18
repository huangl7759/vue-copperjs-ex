<template>
  <div class="container">
    <div class="img">
      <img id="image" :src="src" />
    </div>
    <div class="preview-container">
      <div class="preview lg"></div>
      <button-group
        class="wl-groups"
        v-model="val"
        @change="onValChange"
        :options="aspectRatioArray"
      ></button-group>

      <div class="f-r">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            data-method="zoom"
            data-option="0.1"
            title="放大"
            @click="zoom(0.1)"
          >
            <span class="docs-tooltip" data-toggle="tooltip" title="放大">
              <svg-icon name="search-plus"></svg-icon>
            </span>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-method="zoom"
            data-option="-0.1"
            title="缩小"
            @click="zoom(-0.1)"
          >
            <span class="docs-tooltip" data-toggle="tooltip">
              <svg-icon name="search-minus"></svg-icon>
            </span>
          </button>
        </div>

        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            data-method="rotate"
            data-option="-45"
            title="左转45度"
            @click="rotate(-45)"
          >
            <span class="docs-tooltip" data-toggle="tooltip">
              <svg-icon name="undo"></svg-icon>
            </span>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-method="rotate"
            data-option="45"
            title="右转45度"
            @click="rotate(45)"
          >
            <span class="docs-tooltip" data-toggle="tooltip">
              <svg-icon name="repeat"></svg-icon>
            </span>
          </button>
        </div>
      </div>

      <div class="f-r">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            data-method="zoom"
            data-option="0.1"
            title="拖拽模式"
            @click="setDragMode('move')"
          >
            <span class="docs-tooltip" data-toggle="tooltip">
              <svg-icon name="arrows"></svg-icon>
            </span>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-method="zoom"
            data-option="-0.1"
            title="裁剪模式"
            @click="setDragMode('crop')"
          >
            <span class="docs-tooltip" data-toggle="tooltip">
              <svg-icon name="crop"></svg-icon>
            </span>
          </button>
        </div>

        <div class="btn-group">
          <button
            type="button"
            class="btn btn-primary"
            data-method="zoom"
            data-option="0.1"
            title="重置"
            @click="reset"
          >
            <span class="docs-tooltip" data-toggle="tooltip">
              <svg-icon name="refresh-full"></svg-icon>
            </span>
          </button>
        </div>
      </div>

      <div class="f-r"></div>
      <button
        type="button"
        class="btn btn-success"
        data-dismiss="modal"
        @click="confirm"
      >
        确认裁剪
      </button>
    </div>
  </div>
</template>

<script>
import "cropperjs/dist/cropper.css";
import "./css/base.css";
import Cropper from "cropperjs";
import ButtonGroup from "./components/button-group.vue";
import SvgIcon from "./components/svg-icon.vue";
export default {
  data() {
    return {
      cropper: null,
      val: 0,
      aspectRatioArray: [
        {
          label: "16:9",
          value: 16 / 9,
        },
        {
          label: "4:3",
          value: 4 / 3,
        },
        {
          label: "1:1",
          value: 1 / 1,
        },
      ],
      scaleArray: [
        {
          label: "16:9",
          value: 16 / 9,
        },
        {
          label: "16:9",
          value: 16 / 9,
        },
      ],
      rotateArray: [],
    };
  },
  props: {
    aspectRatio: {
      type: Number,
      default: 16 / 9,
    },
    src: {
      type: String,
      default: "",
    },
  },
  components: {
    ButtonGroup,
    SvgIcon,
  },
  mounted() {
    const image = document.getElementById("image");
    const $this = this;
    const cropper = new Cropper(image, {
      aspectRatio: this.aspectRatio,
      preview: ".preview",
      ready() {
        $this.cropper = this.cropper;
      },
    });
  },
  methods: {
    confirm() {
      const dataURL = this.cropper.getCroppedCanvas().toDataURL("image/png");
      this.$emit("confirm", dataURL);
    },
    reset() {
      return this.cropper.reset();
    },
    onValChange(val) {
      this.setAspectRatio(+val);
    },
    setDragMode(val) {
      return this.cropper.setDragMode(val);
    },
    zoom(val) {
      return this.cropper.zoom(val);
    },
    rotate(val) {
      return this.cropper.rotate(val);
    },
    setImageSrc(url, hasSameSize) {
      return this.cropper.replace(url, hasSameSize);
    },
    setAspectRatio(aspectRatio) {
      return this.cropper.setAspectRatio(aspectRatio);
    },
    getCroppedCanvas(option) {
      return this.cropper.getCroppedCanvas(option);
    },
  },
  watch: {
    src(newValue, oldValue) {
      this.setImageSrc(newValue);
    },
  },
};
</script>

<style  scoped>
/* @import url("https://use.fontawesome.com/releases/v5.13.0/css/all.css"); */
div {
  width: 100%;
}
/* Limit image width to avoid overflow the container */
img {
  max-width: 100%; /* This rule is very important, please do not ignore this! */
}
.container {
  display: flex;
  justify-content: flex-start;
}
.container .img {
  flex: 1;
}
.preview-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 240px;
  padding: 012px;
}
.preview-container .preview {
  height: 120px;
  overflow: hidden;
}
.preview-container .lg {
  width: 100%;
}
.preview-container .md {
  width: 50%;
}

.preview-container .sm {
  width: 20%;
}

.wl-groups {
  padding: 4px 0;
}
.f-r {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 0 4px 0;
}
.f-r > .btn-group {
  width: 90px;
}
</style>