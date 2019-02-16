import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";

import "../node_modules/semantic-ui-css/semantic.min.css";

import Navbar from "./components/Navbar.vue";
import Register from "./components/Register.vue";
import Profile from "./components/Profile.vue";
import Page1 from "./components/Page1.vue";
import Page2 from "./components/Page2.vue";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

// *************** route  *************
const routes = [
  { path: "/navbar", component: Navbar },
  { path: "/register", component: Register },
  { path: "/profile/:name", component: Profile },
  { path: "/page1", component: Page1 },
  { path: "/page2", component: Page2 }
];
const router = new VueRouter({
  routes // short for `routes: routes`
});
// *************** route  *************

//**************** store **************
import page1 from "./store/Page1";

const store = new Vuex.Store({
  modules: {
    page1: page1
  }
});
//**************** store **************

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
