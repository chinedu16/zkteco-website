<template>
  <section id="footer-main" class="footer-main w-full  b-0">
    <div class="footer-image">
      <div class="footer-image-overlay">
        <div class="flex justify-center h-full align-center">
          <div class="footer-icon-container breathing w-full">
            <h2 class="mb-10" data-aos="fade-down" data-aos-duration="3000">
              Learn how ZKTeco helps you
            </h2>

            <p data-aos="zoom-out-up" data-aos-duration="4000">
              ZKTeco is a globally-renowned provider of security, access control
              and time management solutions
            </p>

            <div
              data-aos="fade-up"
              data-aos-duration="5000"
              class="footer-image-icon justify-center mt-10 flex"
            >
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span dark v-bind="attrs" v-on="on" class="mx-2">
                    <a href="2348175555512"><Call /></a>
                  </span>
                </template>
                <span>Call Us</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span dark v-bind="attrs" v-on="on" class="mx-2">
                    <a href="https://wa.me/2348175555512?text=I'm%20interested">
                  <User/></a>
                  </span>
                </template>
                <span>Whatsapp</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span dark v-bind="attrs" v-on="on" class="mx-2">
                    <a href="mailto:sales@zkteco-wa.com"> <Consultation /></a>
                  </span>
                </template>
                <span>Email</span>
              </v-tooltip>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-container">
      <div class="flex align-center justify-center">
        <div class="breathing w-full footer-item-container">
          <div class="left-side">
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
          <div class="right-side">
            <div class="w-full">
              <div class="mb-5">Follow Us</div>
              <div class="flex align-center justify-between">
                <Facebook color="white" height="24" width="20" />
                <Twitter color="white" height="24" width="20" />
                <Instagram color="white" height="24" width="20" />
                <Whatsapp color="white" height="24" width="20" />
                <Linkedin color="white" height="24" width="20" />
              </div>
              <button class="footer-cta" icon>
                <MessageCircleIcon /> Online Consultation
              </button>
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
import Instagram from "../components/Vectors/Instagram";
import Whatsapp from "../components/Vectors/Whatsapp";
import Linkedin from "../components/Vectors/Linkedin";
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
            { title: "News", path: "/category/events" },
            { title: "Security Bulletins", path: "/category/events" },
            { title: "Notice", path: "/category/events" },
            { title: "Events", path: "/category/events" },
            { title: "Newsletter", path: "/category/events" },
            { title: "New Realease", path: "/category/events" },
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
    Instagram,
    Linkedin,
    Twitter,
    Whatsapp,
    Call,
    Consultation,
    User,
  },
};
</script>

<style lang="scss">
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
