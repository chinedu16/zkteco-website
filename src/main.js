// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import "./styles/_main.scss";
import DefaultLayout from "~/layouts/Default.vue";
import "aos/dist/aos.css";

export default function(Vue, { appOptions, router, head, isClient }) {
  if (isClient) {
    // const Zopim = require("./zopim");
    const AOS = require("aos");
    Vue.use(AOS.init({once: true}));
    // Vue.use(Zopim)
  }

  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css",
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900",
  });

  const opts = {} //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);

}
