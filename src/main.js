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
    const AOS = require("aos");
    Vue.use(AOS.init({ once: true }));
    Vue.use(InstantSearch);
  }

  Vue.component("Layout", DefaultLayout);

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
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

  const opts = {};
  Vue.use(Vuetify);
  Vue.use(InfiniteLoading);

  appOptions.vuetify = new Vuetify(opts);
}
