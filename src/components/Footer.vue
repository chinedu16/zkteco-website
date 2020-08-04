<template>
  <section class="w-full">
    <div class=" ">
      <div class="">
        <div
          class="footer-container px-4 py-5 lg:py-5 lg:px-10 flex flex-col-reverse justify-between lg:flex-row"
        >
          <div
            class="left lg:w-4/5 flex flex-col justify-between mr-auto w-full sm:flex-row"
          >
            <ul
              class="w-full text-white"
              v-for="nav in navlinks"
              :key="nav.title"
            >
              <li class="flex mb-6 font-bold text-base">{{ nav.title }}</li>
              <g-link
                class="flex mb-4 hover"
                v-for="subNav in nav.items"
                :key="subNav.title"
                :to="subNav.path"
                >{{ subNav.title }}</g-link
              >
            </ul>
          </div>
          <div class="right align-center md:w-5/12 mb-20 text-white">
            <div class="w-full">
              <div class="flex justify-between">
                <Facebook />
                <Twitter />
                <Linkedin />
                <GooglePlus />
                <Youtube />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-0 text-base xl:w-full text-center pt-5 pb-5 ">
      Copyright © 2020 ZKTECO CO. LTD. All rights reserved
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    siteName
    settings {
      web
      github
      twitter
      nav {
        links {
          path
          title
        }
      }
    }
  }
}
</static-query>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from "@/components/Logo";
import Facebook from "../components/Vectors/Facebook";
import Twitter from "../components/Vectors/Twitter";
import Linkedin from "../components/Vectors/Linkedin";
import GooglePlus from "../components/Vectors/GooglePlus";
import Youtube from "../components/Vectors/Youtube";

import {
  SunIcon,
  MoonIcon,
  GlobeIcon,
  GithubIcon,
  TwitterIcon,
} from "vue-feather-icons";

const Search = () =>
  import(/* webpackChunkName: "search" */ "@/components/Search").catch(
    (error) => console.warn(error)
  );

export default {
  data() {
    return {
      navlinks: [
        {
          title: "About Us",
          items: [
            { title: "We give the best Services", path: "about" },
            { title: "Our Mission", path: "about" },
            { title: "Our Team", path: "about" },
          ],
        },
        {
          title: "News Center",
          items: [
            { title: "News", path: "blog" },
            { title: "Security Bulletins", path: "blog" },
            { title: "Notice", path: "blog"},
            { title: "Events", path: "blog" },
            { title: "Newsletter", path: "blog" },
            { title: "New Realease", path: "blog" },
          ],
        },
        {
          title: "Contact Us",
          items: [
            { title: "Project Consultation", path: "contact" },
            { title: "Online Purchase", path: "contact" },
            { title: "Sales Consultation", path: "contact" },
          ],
        },
        {
          title: "Support",
          items: [
            { title: "Training Center" },
            { title: "Guidelines on the Use of Biometric Data" },
            { title: "Download Center" },
            { title: "Service & Bulletins" },
          ],
        },
        {
          title: "Related Websites",
          items: [
            { title: "ZKTeco POS Website", path: "https://zktecopos.com/" },
          ],
        },
      ],
    };
  },
  components: {
    Logo,
    Search,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    GlobeIcon,
    GithubIcon,
    TwitterIcon,
    Facebook,
    Twitter,
    Youtube,
    Linkedin,
    GooglePlus,
  },

  computed: {
    meta() {
      return this.$static.metadata;
    },
    settings() {
      return this.meta.settings;
    },
  },
};
</script>

<style lang="scss">
header {
  svg:not(.feather-search) {
    &:hover {
      @apply text-ui-primary;
    }
  }
}

.nav-link {
  &.active {
    @apply text-ui-primary font-bold border-ui-primary;
  }
}

.footer-image {
  background-image: url("../assets/pens-near-keyboard-and-paper-clips-1558690 1.png");
  height: 445px;
  // display: flex;
  align-items: flex-end;
}
</style>
