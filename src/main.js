// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import InfiniteLoading from "vue-infinite-loading";
import InstantSearch from "vue-instantsearch";
import DefaultLayout from "~/layouts/Default.vue";

import "./styles/_main.scss";
import "aos/dist/aos.css";
import Vuetify, {
  VApp,
  VContainer,
  VCard,
  VCardActions,
  VSheet,
  VBtn,
  VIcon,
  VProgressCircular,
  VCarousel,
  VCarouselItem,
  VList,
  VListItemGroup,
  VListItem,
  VListItemIcon,
  VListItemContent,
  VListItemTitle,
  VListItemSubtitle,
  VMenu,
  VNavigationDrawer,
  VBottomSheet,
  VBadge,
  VExpansionPanels,
  VExpansionPanel,
  VExpansionPanelHeader,
  VExpansionPanelContent,
  VTextField,
  VTextarea,
} from "vuetify/lib";

export default function(Vue, { head, isClient, appOptions }) {
  const options = {
    theme: {
      themes: {
        light: {
          primary: "#043cac",
          accent: "#4f9a07",
          anchor: "#da4f20",
          white: "#fff",
          glitter: "#e8edf7",
          platinum: "#f9f9f9",
          space: "#46494f",
          gunmetal: "#2f3239",
        },
      },
    },
    breakpoint: {
      thresholds: {
        xs: 480,
        sm: 640,
        md: 768,
        lg: 1024,
      },
    },
  };

  if (isClient) {
    const AOS = require("aos");
    Vue.use(AOS.init({ once: true }));
    Vue.use(InstantSearch);
  }

  Vue.component("Layout", DefaultLayout);
  Vue.use(InfiniteLoading);

  Vue.use(Vuetify, {
    components: {
      VApp,
      VContainer,
      VCard,
      VCardActions,
      VSheet,
      VBtn,
      VIcon,
      VProgressCircular,
      VCarousel,
      VCarouselItem,
      VList,
      VListItemGroup,
      VListItem,
      VListItemIcon,
      VListItemContent,
      VListItemTitle,
      VListItemSubtitle,
      VMenu,
      VNavigationDrawer,
      VBottomSheet,
      VBadge,
      VExpansionPanels,
      VExpansionPanel,
      VExpansionPanelHeader,
      VExpansionPanelContent,
      VTextField,
      VTextarea,
    },
  });
  appOptions.vuetify = new Vuetify(options);
}
