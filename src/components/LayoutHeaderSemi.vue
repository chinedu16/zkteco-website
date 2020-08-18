<template>
  <div id="header-main" class="border-ui-primary">
    <div class="container globalnavcontainer">
      <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        id="globalnavtop"
        class="header-fixed-top breathing header-trans-top flex"
      >
        <g-link to="/about" class="px-4 hover">About us </g-link>
        |
        <g-link to="/category/events" class="px-4 hover"> News Center </g-link>|
        <g-link to="/contact" class="px-4 hover">Contact us </g-link> |
        <g-link class="pl-2 pr-2 hover">
          <World class="mr-2" /> Region/Language |</g-link
        >
        <g-link class="pl-2 pr-2 hover">Login</g-link>
        <g-link class="pl-2 pr-2 hover">Register</g-link>
        <ToggleDarkMode class="ml-2 hover sm:ml-8">
          <template slot="default" slot-scope="{ dark }">
            <MoonIcon v-if="dark" size="1.5x" />
            <SunIcon v-else size="1.5x" />
          </template>
        </ToggleDarkMode>
      </div>

      <div class="globalnav breathing header-trans header-fixed" id="">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          class="flex logo-menu"
        >
          <g-link to="/" title="Home">
            <Logo :width="40" color1="white" />
          </g-link>
          <div
            class=" top-navbar"
            id="navigation"
          >
            <div class="flex items-start ml-5 navigation-dropdown">
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="tracking-normal normal-case text-base"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Product
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in products" :key="index">
                    <g-link :to="`/product-categories/${item.node.slug}`">
                      <v-list-item-title>{{
                        item.node.name
                      }}</v-list-item-title>
                    </g-link>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="tracking-normal normal-case text-base"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Solution
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in solution" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu open-on-hover offset-y>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    class="tracking-normal normal-case text-base"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Support
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in support" :key="index">
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>

        <div class="search-header relative">
          <input
            class="search-input"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class=""></button>
        </div>


        <button
          class="hamburger-header"
          data-target="#navigation"
          @click.stop="drawer = true"
        >
          <AlignJustifyIcon size="2x" class="custom-class" />
        </button>
      </div>
    </div>

    <v-dialog
      v-model="drawer"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card class="m-4">
        <v-toolbar flat color="">
          <v-spacer></v-spacer>
          <v-btn icon @click.native="drawer = false">
            <XIcon size="2x" class="custom-class" />
          </v-btn>
        </v-toolbar>

        <v-list>
          <v-list-tile>
            <v-list-tile-content class="grid">
              <v-list-tile-title>
                <g-link :to="`/product-categories/${products[0].node.slug}`"
                  >Product</g-link
                >
              </v-list-tile-title>
              <v-list-tile-title>
                Solution
              </v-list-tile-title>
              <v-list-tile-title>
                Support
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/about">About us</g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/category/events"> News Center </g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/contact">Contact us</g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                Login
              </v-list-tile-title>
              <v-list-tile-title>
                Register
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<static-query>
query {
  allStrapiProductCategories {
    edges {
      node {
        id
        name
        slug
      }
    } 
  }
}
</static-query>

<script>
import ToggleDarkMode from "@/components/ToggleDarkMode";
import Logo from "@/components/Logo";
import World from "@/components/Vectors/World";
import SearchIcon from "@/components/Vectors/Search";
import {
  SunIcon,
  MoonIcon,
  GlobeIcon,
  GithubIcon,
  TwitterIcon,
  AlignJustifyIcon,
  XIcon,
} from "vue-feather-icons";

export default {
  components: {
    Logo,
    World,
    SearchIcon,
    ToggleDarkMode,
    SunIcon,
    MoonIcon,
    AlignJustifyIcon,
    XIcon,
    GlobeIcon,
    GithubIcon,
    TwitterIcon,
  },

  data() {
    return {
      drawer: null,
      product: [
        { title: "Time Management" },
        { title: "Access Control" },
        { title: "Green Label" },
        { title: "Video Surveillance" },
        { title: "Smart Lock" },
        { title: "Multi-purpose Integration" },
        { title: "POS" },
        { title: "Biometrics" },
        { title: "Entrance Control" },
        { title: "Security Inspection" },
        { title: "ECO Product" },
      ],
      solution: [
        { title: "Classified by Industry" },
        { title: "Classified by Application" },
      ],
      support: [
        { title: "Training Center" },
        { title: "Download Center" },
        { title: "After-sales Service" },
        { title: "Service & Bulletins" },
      ],
    };
  },

  computed: {
    products() {
      return this.$static.allStrapiProductCategories.edges;
    },
  },
  async mounted() {
    window.onscroll = function() {
      "use strict";
      const myHeader = document.getElementById("globalnav");
      const myHeaderTop = document.getElementById("globalnavtop");
      if (document.documentElement.scrollTop >= 10) {
        // myHeader ? myHeader.classList.add("header-trans") : null;
        myHeaderTop ? myHeaderTop.classList.add("header-trans-top") : null;
      } else {
        // myHeader ? myHeader.classList.remove("header-trans") : null;
        // myHeaderTop.classList.remove("header-trans-top");
      }
    };
  },
};
</script>

<style lang="scss">
.custom-class {
  color: black !important;
}

.search-input {
  color: #78bc27;
  border: 1px solid #78bc27;
}
.v-application {
  .v-menu__content {
    .v-list {
      .v-list-item {
        cursor: pointer;
        // border-bottom: 1px solid #e2e8f0;
        color: white !important;
        .v-list-item__title {
          font-size: 16px !important;
        }

        &:hover {
          .v-list-item__title {
            color: #78bc27 !important;
          }
        }
      }
    }
  }
}

.v-dialog {
  .v-card {
    background: rgba(0, 0, 0, 0.85) !important;
    .theme--light.v-toolbar.v-sheet {
      background-color: rgba(120, 188, 39, 0.5) !important;
    }
  }
}
v-list-tile-title {
  padding: 20px 24px;

  transition: all 0.5s;
  &:hover {
    color: #78bc27;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #666;
  }
}
</style>
