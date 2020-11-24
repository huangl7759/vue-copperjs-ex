# vue-copperjs-ex

## Desc

a vue copper component based on cropperjs

![vue-copperjs-ex screencast](./screenshoot.png "vue-copperjs-ex")

## Usage

### Install

```bash
npm install vue-copperjs-ex --save
```
### ES6
```javascript
import { Copper } from "../dist/vue-cropper.common";

import "vue-cropperjs-ex/dist/css/cropper.min.css"
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
```

### Props
| Property | Description |
|:--|:--|
| src | the path of the image ,might be a repative path or an image from CDN |
| confirm | trigger when the click the confirm button |

## Contribution

## License

[MIT](http://opensource.org/licenses/MIT)