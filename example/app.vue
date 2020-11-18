<template>
  <div>
    <m-copper :src="src" style="width: 960px" @confirm="confirm"></m-copper>
    <input type="file" ref="file" />
    <img :src="imgsrc" />
  </div>
</template>

<script>
// import MCopper from "../src/copper";
import MCopper from "../src/index";
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
    MCopper,
  },
};
</script>
