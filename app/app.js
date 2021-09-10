import Vue from "nativescript-vue";
import VueDevtools from "nativescript-vue-devtools";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";

import App from "./components/App";

if (process.env.NODE_ENV !== "production") {
  Vue.use(VueDevtools);
}

Vue.config.silent = process.env.NODE_ENV === "production";

Vue.registerElement(
  "RadSideDrawer",
  () => require("nativescript-ui-sidedrawer/vue").RadSideDrawer
);

Vue.use(RadSideDrawer);

new Vue({
  render: h => h("frame", [h(App)])
}).$start();
