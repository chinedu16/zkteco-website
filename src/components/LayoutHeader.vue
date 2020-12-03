<template>
  <div id="header-main" class="border-ui-primary">
    <div id="globalnavcontainer" class="globalnavcontainer">
      <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        id="globalnavtop"
        class="header-fixed-top header-trans-top flex"
      >
        <div class="flex justify-center align-center w-full">
          <div class="breathing w-full">
            <div class="flex" style="justify-content: flex-end;">
              <g-link to="/about" class="px-4 hover">About us </g-link>
              |
              <g-link
                :to="`/category/${articles[0].node.slug}`"
                class="px-4 hover"
              >
                News Center </g-link
              >| <g-link to="/contact" class="px-4 hover">Contact us </g-link> |
              <g-link class="pl-2 pr-2 hover"> <World class="mr-2" /> |</g-link>
              <div id="google_translate_element"></div>
              <g-link class="pl-2 pr-2 hover">Login</g-link>
              <g-link class="pl-2 pr-2 hover">Register</g-link>
              <ToggleDarkMode class="ml-2 hover sm:ml-8">
                <template slot="default" slot-scope="{ dark }">
                  <MoonIcon v-if="dark" size="1.5x" />
                  <SunIcon v-else size="1.5x" />
                </template>
              </ToggleDarkMode>
            </div>
          </div>
        </div>
      </div>

      <div id="globalnav" class="header-fixed ">
        <div class="flex justify-center align-center">
          <div class="globalnav breathing w-full">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              class="flex logo-menu"
            >
              <g-link class="logo_image_container" to="/" title="Home">
                <!-- <Logo :width="40" color1="white" /> -->
                <g-image :src="logo.url" alt="zkteco west africa logo"></g-image>
              </g-link>
              <div class="top-navbar logo-menu__menu" id="navigation">
                <div class="flex items-start ml-5 navigation-dropdown">
                  <div class="dropdown">
                    <button class="dropbtn">
                      <g-link class="dropbtn" to="/product">Products</g-link>
                    </button>
                    <div class="dropdown-content">
                      <li v-for="(item, index) in products" :key="index">
                        <g-link :to="`/product-categories/${item.node.slug}`">{{
                          item.node.name
                        }}</g-link>
                      </li>
                    </div>
                  </div>
                  <div class="dropdown">
                    <button class="dropbtn">
                      <g-link class="dropbtn" to="/solution">Solutions</g-link>
                    </button>
                    <div class="dropdown-content">
                      <li v-for="(item, index) in solutionsCat" :key="index">
                        <g-link
                          :to="`/solution-categories/${item.node.slug}`"
                          >{{ item.node.name }}</g-link
                        >
                      </li>
                    </div>
                  </div>
                  <div class="dropdown">
                    <button class="dropbtn">Support</button>
                    <div class="dropdown-content">
                      <li v-for="(item, index) in supports" :key="index">
                        <g-link :to="`${item.path}`">{{ item.title }}</g-link>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="search-header" style="position: relative;">
              <input
                class="search-input"
                type="text"
                placeholder="Search.."
                name="search"
                v-model="search_query"
              />
              <button
                style="position: absolute; right: 8px; top: 9px;"
                type="submit"
                @click="searchEntry"
              >
                <SearchIcon />
              </button>
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
                  ><h4>Products</h4></g-link
                >
              </v-list-tile-title>

              <v-list-tile-title>
                <h4>Solution</h4>
                <div
                  style="margin: 0.5rem 2rem;"
                  v-for="(item, index) in solutionsCat"
                  :key="index"
                >
                  <g-link :to="`/solution-categories/${item.node.slug}`">{{
                    item.node.name
                  }}</g-link>
                </div>
              </v-list-tile-title>
              <v-list-tile-title>
                <h4>Support</h4>
                <div
                  style="margin: 0.5rem 2rem;"
                  v-for="(item, index) in supports"
                  :key="index"
                >
                  <g-link :to="item.path">{{ item.title }}</g-link>
                </div>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/about">
                  <h4>About Us</h4>
                </g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/category/events"> <h4>News Center</h4></g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/contact"> <h4>Contact us</h4></g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/"> <h4>Login</h4></g-link>
              </v-list-tile-title>
              <v-list-tile-title>
                <g-link to="/"> <h4>Register</h4></g-link>
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
  allStrapiProductCategories(sortBy: "created_at", order: ASC) {
    edges {
      node {
        id
        name
        slug
        created_at
        product_sub_categories {
          id
          name
          slug
        }
      }
    } 
  }
  allStrapiCategories {
    edges{
      node{
        id
        name
        slug
      }
    }
  }
  allStrapiHomePages {
    edges {
      node{
        logo {
          url
        }
      }
    }
  }
  allStrapiSolutionCategories {
    edges {
      node {
        id
        name
        slug
        solutions {
          id
          slug
          title
          image {
            url
          }
        }
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
      search_query: '',
      closeOnClick: true,
      closeOnContentClick: true,
      menuHover: false,
      drawer: null,
      solutions: [
        { title: "Classified by Industry", path: "/solution" },
        { title: "Classified by Application", path: "/solution" },
      ],
      supports: [
        { title: "Download Center", path: "/download-center" },
        { title: "After Sales Service", path: "/after-sale" },
      ],
    };
  },

  computed: {
    products() {
      return this.$static.allStrapiProductCategories.edges;
    },
    articles() {
      return this.$static.allStrapiCategories.edges;
    },
    logo() {
      return this.$static.allStrapiHomePages.edges[0].node.logo;
    },
    solutionsCat() {
      return this.$static.allStrapiSolutionCategories.edges;
    },
  },
  async mounted() {
    this.$nextTick(() => {
      this.googleTranslateInit();
    });
    window.onscroll = function() {
      "use strict";
      const myHeader = document.getElementById("globalnav");
      const myHeaderTop = document.getElementById("globalnavtop");
      if (document.documentElement.scrollTop >= 10) {
        myHeader ? myHeader.classList.add("header-trans") : null;
        myHeaderTop ? myHeaderTop.classList.add("header-trans-top") : null;
      } else {
        myHeader ? myHeader.classList.remove("header-trans") : null;
        myHeaderTop ? myHeaderTop.classList.remove("header-trans-top") : null;
      }
    };
  },
  methods: {
    searchEntry () {
      if (this.search_query !== "") {
        this.$router.push({path: '/search/' , query: {search: this.search_query }})
      } else {
        return;
      }
    },
    googleTranslateInit: function() {
      let checkIfGoogleLoaded = setInterval(() => {
        if (google) {
          if (google.translate.TranslateElement != null) {
            clearInterval(checkIfGoogleLoaded);
            this.googleTranslateElement("google_translate_element");
          }
        } else {
          return;
        }
      }, 100);
    },
    googleTranslateElement: function(id) {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "es,fr",
          layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        id
      );
    },
  },
};
</script>

<style lang="scss">
.custom-class {
  color: #78bc27 !important;
}

.dropbtn {
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  outline: none;
}

.dropbtn:active,
.dropbtn:focu {
  outline: none;
  box-shadow: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0.95;
  border-radius: 4px;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content li {
  list-style-type: none;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  color: #78bc27 !important;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown:hover .dropbtn {
  color: #78bc27;
}

.search-input {
  color: #78bc27;
  border: 1px solid #78bc27;
  border-radius: 5px;
  height: 40px;
  overflow: hidden;
  padding: 0px 10px;
  &:hover,
  &:focus {
    outline: none;
  }
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
    background: white !important;
    color: black;
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
