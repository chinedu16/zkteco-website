<template>
  <v-app>
    <div class="font-sans antialiased text-ui-typo bg-ui-background">
      <div class="flex flex-col justify-start min-h-screen">
        <!-- <header
          ref="header"
          class="sticky top-0 z-10 w-full border-b bg-ui-background "
          @resize="setHeaderHeight"
        >
          <LayoutHeader />
        </header> -->

        <main
          class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background"
        >
          <div class="w-full pb-1">
            <slot />
          </div>

          <Footer />
        </main>
      </div>

      <!-- <div v-if="hasSidebar" class="fixed bottom-0 right-0 z-50 p-8 lg:hidden">
        <button
          class="p-3 text-white rounded-full shadow-lg bg-ui-primary hover:text-white"
          @click="sidebarOpen = !sidebarOpen"
        >
          <XIcon v-if="sidebarOpen" />
          <MenuIcon v-else />
        </button>
      </div> -->
    </div>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Sidebar from "@/components/Sidebar";
import LayoutHeader from "../components/LayoutHeaderSemi";
import Footer from "@/components/Footer";
import { MenuIcon, XIcon } from "vue-feather-icons";

export default {
  components: {
    Sidebar,
    LayoutHeader,
    Footer,
    MenuIcon,
    XIcon,
  },
  data() {
    return {
      headerHeight: 0,
      sidebarOpen: false,
      drawer: null,
    };
  },
  watch: {
    sidebarOpen: function(isOpen) {
      document.body.classList.toggle("overflow-hidden", isOpen);
    },
  },
  methods: {
    setHeaderHeight() {
      this.$nextTick(() => {
        this.headerHeight = this.$refs.header.offsetHeight;
      });
    },
  },
  computed: {
    sidebarStyle() {
      return {
        top: this.headerHeight + "px",
        height: `calc(100vh - ${this.headerHeight}px)`,
      };
    },
    hasSidebar() {
      return this.$page && this.headerHeight > 0;
    },
  },
  mounted() {
    this.setHeaderHeight();
  },
  metaInfo() {
    return {
      meta: [
        {
          key: "og:type",
          name: "og:type",
          content: "website",
        },
        {
          key: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          key: "og:image",
          name: "og:image",
          content: process.env.SITE_URL + "/logo.jpg",
        },
        {
          key: "twitter:image",
          name: "twitter:image",
          content: process.env.SITE_URL + "/logo.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.v-application {
  a {
    color: inherit !important;
  }
  .v-btn {
    // color: inherit !important;
  }

  .theme--light.v-list {
    color: white;
    background: rgba(0,0,0,0.85);
    
  }
  .theme--light.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
    color: #78bc27;    
  }
}

.flex {
  flex: none;
}

input {
  border-style: solid !important;
}

.v-btn {
  box-shadow: none;
  background-color: transparent !important;
  &::before {
    background-color: transparent;
  }
}




.font-sans {
  font-family: "Lato" !important;
}

header {
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
}

</style>
