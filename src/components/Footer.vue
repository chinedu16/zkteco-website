<template>
  <section id="footer-main" class="footer-main w-full  b-0">
    <div class="footer-image">
      <g-image src="../assets/Footer-image (1).webp" width="640" height="360" quality="70"/>
      <div class="footer-image-overlay">
        <div class="flex justify-center h-full align-center">
          <div class="footer-icon-container breathing w-full">
            <h2 class="mb-10">
              Learn how ZKTeco helps you
            </h2>

            <p>
              ZKTeco is a globally-renowned provider of security, access control
              and time management solutions
            </p>

            <div
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
                    <a href=" https://api.whatsapp.com/send?phone=2348175555514&text=&source=&data=&app_absent=">
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
                <g-link to="https://www.facebook.com/zktecowa"><Facebook color="white" height="24" width="20" /></g-link>
                <g-link to="https://twitter.com/ZKTeco_WA"><Twitter color="white" height="24" width="20" /></g-link>
                <g-link to="https://www.instagram.com/zkteco_wa/"><Instagram color="white" height="24" width="20" /></g-link>
                <g-link to="https://api.whatsapp.com/send?phone=2348175555514&text=&source=&data=&app_absent="><Whatsapp color="white" height="24" width="20" /></g-link>
                <g-link to="https://www.linkedin.com/company/zkteco-wa/?viewAsMember=true"><Linkedin color="white" height="24" width="20" /></g-link>
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
import Instagram from "../components/Vectors/Instagram";
import Whatsapp from "../components/Vectors/Whatsapp";
import Linkedin from "../components/Vectors/Linkedin";
import Call from "../components/Vectors/light/Call";
import Consultation from "../components/Vectors/light/Consultation";
import User from "../components/Vectors/light/User";

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
            // { title: "Our Team", path: "about" },
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
            { title: "Download Center", path: "download-center" },
            { title: "After Sales Service", path: "after-sale" },
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
  height: 361px;
  position: relative;
  text-align: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .footer-image-overlay {
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;
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
