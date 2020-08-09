// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import './styles/_main.scss'
import DefaultLayout from '~/layouts/Default.vue'
import './zopim';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function (Vue, { appOptions, router, head, isClient }) {
  Vue.use(AOS.init());
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'http://fonts.googleapis.com/css?family=Lato&subset=latin,latin-ext'
  })
  

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })
  
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  head.script.push({
    src: 'https://static.zdassets.com/ekr/snippet.js?key=ebd1d5ac-b3c0-4bfe-a265-02e961779c67',
  })


  const opts = { }
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);

}
