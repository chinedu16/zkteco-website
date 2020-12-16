<template>
  <v-app>
    <v-main>
      <LayoutHeader />
      <div class="w-full pb-1">
        <slot />
      </div>
      <Footer />
    </v-main>
  </v-app>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    author
    twitter {
      site
      creator
    }
  }
}
</static-query>

<script>
import LayoutHeader from "@/components/LayoutHeader";
import Footer from "@/components/Footer";

export default {
  metaInfo () {
    return {
      meta: [
        { key: 'author', name: 'author', content: this.$static.metadata.author },
        { key: 'twitter:site', name: 'twitter:site', content: this.$static.metadata.twitter.site },
        { key: 'twitter:creator', name: 'twitter:creator', content: this.$static.metadata.twitter.creator }
      ]
    }
  },
  components: {
    LayoutHeader,
    Footer
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
    text-decoration: none;
  }

  .theme--light.v-list {
    color: white;
    background: rgba(0, 0, 0, 0.85);
  }

  .theme--light.v-btn {
    color: white;
    letter-spacing: 0px;
    font-size: 16px;
    text-transform: inherit;
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
