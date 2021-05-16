import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "materialize-css/dist/js/materialize.min";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter("date", dateFilter);

firebase.initializeApp({
  apiKey: "AIzaSyDLCrD1HUfiUl8wIoXD0zYELSBmaGlVKzI",
  authDomain: "vue-crm-6ef6b.firebaseapp.com",
  projectId: "vue-crm-6ef6b",
  storageBucket: "vue-crm-6ef6b.appspot.com",
  messagingSenderId: "111253850068",
  appId: "1:111253850068:web:05da3186815d4a7e947841",
  measurementId: "G-30PGMQRE5B",
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
