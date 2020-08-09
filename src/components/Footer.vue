<template>
  <section class="w-full">
    <div class="footer-image">
      <div class="footer-image-overlay">
        <div class="flex h-full w-full align-center">
          <div class="footer-icon-container w-full">
            <h2 class="mb-10" data-aos="fade-down" data-aos-duration="3000">Learn how ZKTeco helps you</h2>

            <p data-aos="zoom-out-up" data-aos-duration="4000">
              ZKTeco is a globally-renowned provider of security, access control
              and time management solutions
            </p>

            <div  data-aos="fade-up" data-aos-duration="5000" class="footer-image-icon justify-center mt-10 flex">
              <span class="mx-2 md:mx-20"><Call /></span>
              <span class="mx-2 md:mx-20"><User /></span>
              <span class="mx-2 md:mx-20"><Consultation /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="">
        <div class="footer-container ">
          <div class="flex align-center justify-center">
            <div
              class="w-full max-w-screen-xxl px-4 py-16 md:py-12 md:px-10 flex flex-col-reverse justify-between lg:flex-row"
            >
              <div
                class="left lg:w-7/12 flex flex-col justify-between mr-auto w-full sm:flex-row"
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
              <div
                class="right align-center md:w-4/12 lg:w-2/12 mb-20 text-white"
              >
                <div class="w-full">
                  <div class="mb-5">Follow Us</div>
                  <div class="flex align-center justify-between">
                    <Facebook color="white" height="24" width="20" />
                    <Twitter color="white" height="24" width="20" />
                    <Linkedin color="white" height="24" width="20" />
                    <GooglePlus color="white" height="24" width="20" />
                    <Youtube color="white" height="24" width="20" />
                  </div>
                  <button class="footer-cta" icon>
                    <MessageCircleIcon /> Online Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bottom-0 text-base md:h-16 footer-copy xl:w-full text-center pt-5 pb-5 "
    >
      Copyright © 2020 ZKTECO CO. LTD. All rights reserved
    </div>
  </section>
</template>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from "@/components/Logo";
import Facebook from "../components/Vectors/Facebook";
import Twitter from "../components/Vectors/Twitter";
import Linkedin from "../components/Vectors/Linkedin";
import GooglePlus from "../components/Vectors/GooglePlus";
import Youtube from "../components/Vectors/Youtube";
import { MessageCircleIcon } from "vue-feather-icons";
import Call from "../components/Vectors/light/Call";
import Consultation from "../components/Vectors/light/Consultation";
import User from "../components/Vectors/light/User";

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
            { title: "Notice", path: "blog" },
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
    MessageCircleIcon,
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
    Call,
    Consultation,
    User,
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
  height: 361px;
  object-fit: cover;
  position: relative;
  text-align: center;
  background-position: center center;
  background-size: cover;

  .footer-image-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;

    .footer-icon-container {
      h2,
      p,
      div {
        color: white !important;
      }
    }
  }
}

.footer-cta {
  background-color: green !important;
  width: 100%;
  height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 5px;
  background: #78bc27;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 27px !important;
}
.footer-cta svg {
  margin-right: 10px;
}
</style>
