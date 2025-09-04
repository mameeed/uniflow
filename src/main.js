import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import scrollToSection from "./helpers/scrollToSection.js";
import VueParallaxJs from 'vue-parallax-js'

// add vue-parallax-js to vue
import "@/assets/sass/common.scss";

Vue.config.productionTip = false;
Vue.prototype.$scrollToSection = scrollToSection;
Vue.use(VueParallaxJs)

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");
