import Vue from "vue/dist/vue.common.js"

import todo from "./todo.vue";
import modelexample from "./modelexample.vue";
import TabsExample from "./TabsExample.vue";
import JsonExample from "./Jsonexample.vue";
import vueCommon from "vue/dist/vue.common.js";
Vue.component("to-do", todo);
vue.component("model-example", modelexample);
vue.component("tabs-example",TabsExample)

let app = new Vue ({
    el: "#app",

})