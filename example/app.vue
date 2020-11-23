<template>
  <div>
    <copper :src="src" style="width: 960px" @confirm="confirm"></copper>
    <input type="file" ref="file" />
    <img :src="imgsrc" />
  </div>
</template>

<script>
import "../dist/css/cropper.min.css";
import { Copper } from "../dist/vue-cropper.common";
export default {
  data() {
    return {
      src: "./image.png",
      imgsrc: "",
    };
  },
  mounted() {
    const $this = this;
    this.$refs.file.addEventListener(
      "change",
      function () {
        $this.readFile(this.files[0]).then((rs) => {
          $this.src = rs;
        });
      },
      false
    );
  },
  methods: {
    confirm(url) {
      //this is the image after copper
      this.imgsrc = url;
    },
    readFile(fileObj) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        if (fileObj) {
          reader.readAsDataURL(fileObj);
        }
        reader.addEventListener("load", (_) => resolve(reader.result), false);
      });
    },
  },
  components: {
    Copper,
  },
};
</script>
