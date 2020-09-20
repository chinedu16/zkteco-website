<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="download-center">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt; <a href="/">Support</a> &gt;
              Download Center
            </div>
          </div>
        </section>

        <div class="download_search pt-10 pb-10">
          <input
            type="text"
            v-model="name"
            placeholder="Please Input Keyword "
            class="search-input mt-5 w-full"
          />
          <p></p>
        </div>

        <div class="educational_details">
          <v-card>
            <v-tabs v-model="tab" background-color="#f7f7f7">
              <v-tabs-slider color="#78bc27"></v-tabs-slider>
              <v-tab
                style="color: #484748 !important;"
                v-for="item in downloads"
                :key="item.id"
              >
                {{ item.node.name }}
              </v-tab>
            </v-tabs>

            <!-- <v-tabs-items v-model="tab">
                <v-tab-item v-for="notes in item.node.download" :key="notes.id">
                  <v-card flat>
                    <v-card-text>{{ notes.name }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items> -->
          </v-card>
        </div>
      </div>
    </div>
  </layout>
</template>

<static-query>
query {
  allStrapiDownloadCenters {
    edges {
      node{
        id
        name
        download {
          id
          name
          file {
            id
            name
            updated_by
            size
            url
            ext
            caption
          }
        }
      }
    }
  }
}
</static-query>

<script>
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
import EmptyState from "../components/Vectors/EmptyState";
import ProductSidebar from "../components/ProductCategoriesSidebar";
import moment from "moment";
export default {
  components: {
    Office,
    Message,
    Call,
    ProductSidebar,
    EmptyState,
  },

  metaInfo: {
    title:
      "Download Center",
  },

  data() {
    return {
      tab: null,
      items: [
        { tab: "One", content: "Tab 1 Content" },
        { tab: "Two", content: "Tab 2 Content" },
        { tab: "Three", content: "Tab 3 Content" },
        { tab: "Four", content: "Tab 4 Content" },
        { tab: "Five", content: "Tab 5 Content" },
        { tab: "Six", content: "Tab 6 Content" },
        { tab: "Seven", content: "Tab 7 Content" },
        { tab: "Eight", content: "Tab 8 Content" },
        { tab: "Nine", content: "Tab 9 Content" },
        { tab: "Ten", content: "Tab 10 Content" },
        { tab: "Six", content: "Tab 6 Content" },
        { tab: "Seven", content: "Tab 7 Content" },
        { tab: "Eight", content: "Tab 8 Content" },
        { tab: "Nine", content: "Tab 9 Content" },
        { tab: "Ten", content: "Tab 10 Content" },
      ],
    };
  },
  computed: {
    downloads() {
      return this.$static.allStrapiDownloadCenters.edges;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
@import "../styles/base/_reset.scss";
.allproduct-headline-image {
  background-image: url("../assets/zkteco_headquarter_r 1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

.v-btn {
  color: #82bb31 !important;
}

.v-application .primary--text {
  color: #82bb31 !important;
}

#download-center {
  margin-bottom: 4rem;

  .download_search {
    input {
      width: 30%;
      color: inherit;
    }
  }
  .educational_details {
    width: 100%;
    height: auto;
    box-shadow: 0px 0px 7px 3px #f4f4f4;

    .v-tabs--active {
      color: black;
    }
    .v-card {
      .v-tabs {
        color: initial !important;
        .theme--light.v-tabs > .v-tabs-bar {
          background-color: greenyellow;
        }
      }
    }
  }
}
</style>
