<template>
  <v-app>
    <Hydrate ssr-only>
    <v-main>
      <LayoutHeader />
      <div class="w-full pb-1">
        <slot />
      </div>
      <Footer />
    </v-main>
    </Hydrate>
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

import LayoutHeader from "@/components/LayoutHeaderSemi";
import Footer from "@/components/Footer";
import Hydrate from 'lazy-hydration';

export default {
  components: {
    LayoutHeader,
    Footer,
    Hydrate
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
  // border-style: solid !important;
}

.v-btn {
  box-shadow: none;
  background-color: transparent !important;
  &::before {
    background-color: transparent;
  }
}

.font-sans {
  font-family: 'Lato', sans-serif !important;
}
</style>
