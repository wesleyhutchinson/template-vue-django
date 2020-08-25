import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "@/App.vue";

import store from "@/store";
import router from "@/router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import BootstrapVue from "bootstrap-vue";
import "nprogress/nprogress.css";

import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

library.add(fab);
library.add(fas);
Vue.component("fa", FontAwesomeIcon);
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

//Automatic Global Base Component Registration
const requireComponent = require.context(
  "./components",
  false,
  /Base[A-Z]\w+\.(vue|js)$/
);

requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);

  const componentName = upperFirst(
    camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, "$1"))
  );

  Vue.component(componentName, componentConfig.default || componentConfig);
});

// Vue.use(VueRouter)

const vue = new Vue({
  router,
  store,
  render: (h) => h(App),
});

vue.$mount("#app");
