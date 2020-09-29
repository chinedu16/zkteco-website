<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="faq">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt;
              <g-link to="/search">Search</g-link>
            </div>
          </div>
        </section>

        <div class="">
          <div class="search-container" id="search-container">
            <ais-instant-search
              :search-client="searchClient"
              index-name="dev_zkteco"
            >
              <div class="search-panel">
                <div class="search-panel__results">
                  <ais-search-box
                    placeholder="Search here…"
                    class="searchbox"
                    v-model="search"
                  />
                  <ais-hits>
                    <template slot="item" slot-scope="{ item }">
                      <g-link :to="`/product/${item.slug}`" style="display: flex;">
                        <div v-if="item.images" class="template-image">
                          <g-image
                            :src="item.images[0] ? item.images[0].url : ''"
                          ></g-image>
                        </div>

                        <div class="template-text">
                          <h1>
                            <ais-highlight :hit="item" attribute="name" />
                          </h1>
                          <p v-html="item.description">
                            <ais-highlight
                              :hit="item"
                              attribute="description"
                            />
                          </p>
                          <div>
                            <ais-highlight :hit="item" attribute="created_at" />
                          </div>
                        </div>
                      </g-link>
                    </template>
                  </ais-hits>

                  <div class="pagination"><ais-pagination /></div>
                </div>
              </div>
            </ais-instant-search>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<static-query>
query {
    allStrapiFaqs {
    edges {
      node{
        id
        name
        content {
          id
          title
          description
        }
      }
    }
  }
}
</static-query>

<script>
import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/algolia-min.css";

export default {
  components: {},

  props: {
    searchQuery: {
      type: String,
    },
  },

  metaInfo: {
    title: "Search ZKTeco West Africa",
  },

  data() {
    return {
      search: "",
      searchClient: algoliasearch(
        "PU7YBKHAE1",
        "faec1fbb3f516cc1c73d800b79f3c779"
      ),
    };
  },
  mounted() {
    this.search = this.$route.params.search;
  },
  computed: {
    faqs() {
      return this.$static.allStrapiFaqs.edges;
    },
    filteredList() {
      return this.$static.allStrapiFaqs.edges.filter((res) => {
        return res.node.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>

<style lang="scss">
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/faq.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

.v-application ol,
.v-application ul {
  padding: 0px;
}
#search-container {
  margin-top: 40px;

  .ais-InstantSearch {
    .ais-SearchBox-reset {
      display: none;
    }
    .search-panel {
      .search-panel__results {
        .searchbox {
          input {
            color: #78bc27;
            border: 1px solid #78bc27;
            border-radius: 5px;
            height: 40px;
            width: 25%;
          }
        }
        .ais-Hits {
          margin-top: 40px;
          .ais-Hits-list {
            padding: 0px !important;
            @include mq(md) {
              display: grid;
              // grid-template-columns: repeat(4, 1fr);
              grid-gap: 20px;
            }
            .ais-Hits-item {
              width: 100%;
              color: #484748 !important;
              display: flex;
              border: none;

              cursor: pointer;
              &:hover {
                transition: all 0.7s;
                h1 {
                  span {
                    color: #78bc27;
                  }
                }
              }
              h1 {
                span {
                  font-size: 20px;
                  font-weight: 600;
                }
              }

              .template-image {
                width: 15%;
                height: 130px;

                img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }
              }

              .template-text {
                margin-left: 20px;
                width: 80%;

                p {
                  font-size: 18px;
                  line-height: 28px;
                  margin: 15px 0;
                  height: 56px;
                  overflow: hidden;
                }
              }
            }
          }
        }
        .pagination {
          margin: 40px 0px;
          .ais-Pagination-item--selected {
            .ais-Pagination-link {
              background-color: #78bc27;
              border-color: #78bc27;
              color: white !important;
            }
          }
        }
      }
    }
  }
}
</style>
