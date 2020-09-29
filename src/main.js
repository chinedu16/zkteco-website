// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import "./styles/_main.scss";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import DefaultLayout from "~/layouts/Default.vue";
import "aos/dist/aos.css";
import InfiniteLoading from "vue-infinite-loading";
import InstantSearch from 'vue-instantsearch';



export default function(Vue, { appOptions, router, head, isClient }) {
  if (isClient) {
    // const Zopim = require("./zopim");
    const AOS = require("aos");
    Vue.use(AOS.init({ once: true }));
    Vue.use(InstantSearch);
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

  head.script.push({
    src:
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit",
    body: true,
  });

  head.script.push({
    id:"ze-snippet" ,
    src: "https://static.zdassets.com/ekr/snippet.js?key=ebd1d5ac-b3c0-4bfe-a265-02e961779c67"
  });

  const opts = {}; //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify);
  Vue.use(InfiniteLoading);

  appOptions.vuetify = new Vuetify(opts);
}
