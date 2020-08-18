<template>
  <v-app>
    <div class="font-sans antialiased text-ui-typo bg-ui-background">
      <div class="flex flex-col justify-start min-w-screen min-h-screen">
        <header
          class="sticky top-0 z-10 bg-ui-background "
        >
          <LayoutHeader />
        </header>
        <main
          class="container relative flex flex-wrap justify-start flex-1 w-full bg-ui-background"
        >
          <div class="w-full pb-1">
            <slot />
          </div>
          <Footer />
        </main>
      </div>
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
import LayoutHeader from "@/components/LayoutHeader";
import Footer from "@/components/Footer";

export default {
  components: {
    LayoutHeader,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.v-application {
  a {
    color: inherit !important;
  }

  .theme--light.v-list {
    color: white;
    background: rgba(0, 0, 0, 0.85);
  }

  .theme--light.v-btn {
    color: white !important;
    &:hover {
      color: #78bc27 !important;
    }
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
</style>
