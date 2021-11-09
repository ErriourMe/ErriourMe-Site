import 'viewerjs/dist/viewer.css'
import VueViewer from 'v-viewer'
import Vue from 'vue'
Vue.use(VueViewer, {
  defaultOptions: {
    fullscreen: false,
    transition: false,
  },
})
