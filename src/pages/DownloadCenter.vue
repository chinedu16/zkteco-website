<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
      <div class="overlay">
        <div class="page-header_wrap">
          <div class="page-heading">
            <h1>Download</h1>
          </div>
          <ul class="coustom-breadcrumb">
            <li><g-link to="/">Home</g-link></li> |
            <li>Download Center</li>
          </ul>
        </div>
      </div>
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
          <p></p>
        </div>

        <div class="educational_details">
          <v-card color="basil">
            <v-tabs
              v-model="tab"
              background-color="transparent"
              color="basil"
              grow
            >
              <v-tab v-for="item in downloads" :key="item.id">
                {{ item.node.name }}
              </v-tab>
            </v-tabs>

            <v-tabs-items style="padding: 45px;" v-model="tab">
              <v-tab-item v-for="item in downloads" :key="item.id">
                <v-card
                  color="basil"
                  flat
                  v-for="notes in item.node.download"
                  :key="notes.id"
                >
                  <div class="downloads_container">
                    <div class="download_left">
                      <div style="align-items: center; display: flex;">
                        <div class="ms">
                          <g-image
                            src="../assets/download-2.png"
                            alt="Download"
                          />
                        </div>
                        <div class="tit" style="margin-left: 20px;">
                          {{ notes.name }}
                        </div>
                      </div>
                      <div class="size">Size: {{ notes.file[0].size }}MB</div>
                    </div>
                    <div class="download_right">
                      <g-link download :to="notes.file[0].size"
                        >Download</g-link
                      >

                      <div class="date">Update Time：{{ getTime(notes.file[0].updated_at) }}</div>
                    </div>
                  </div>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
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
            updated_at
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
export default {
  components: {},

  metaInfo: {
    title: "Download Center",
  },

  data() {
    return {
      tab: null,
    };
  },
  computed: {
    downloads() {
      return this.$static.allStrapiDownloadCenters.edges;
    },
  },
  methods: {
    getTime(date) {
      var dayjs = require('dayjs')
      return dayjs(date).format('DD/MM/YYYY');
    },
  }
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

#download-center {
  margin-bottom: 4rem;

  .download_search {
    input {
      width: 30%;
      color: inherit;
    }
  }

  .downloads_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 25px 0;
    border-bottom: 1px dashed #e6e6e6;

    .download_right {
      display: flex;
      flex-direction: column;
      align-items: flex-end;

      a {
        display: block;
        width: 120px;
        height: 40px;
        line-height: 38px;
        border: 1px solid #e6e6e6;
        text-align: center;
        margin-bottom: 10px;
        float: right;
        transition: all 0.5s;

        &:hover {
          color: white!important;
          background: #7cbd27;
          border: none;
        }
      }
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
