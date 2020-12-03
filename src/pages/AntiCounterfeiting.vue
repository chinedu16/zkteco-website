<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="counterfeit">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl">
              <a href="/">Home Page</a> &gt; <g-link to="/after-sale">After Sales Service</g-link> &gt; Anti
              Counterfeit Enquiry
            </div>
          </div>
        </section>

        <div class="download_search pt-10 flex align-center">
          <div class="__title">Anti-counterfeit Enquiry：</div>
          <input
            type="text"
            v-model="name"
            placeholder="Please Input SN "
            class="search-input w-full"
          />
          <button>Search</button>
          <p></p>
        </div>
        <div class="conterfeit-table mt-10">
          <v-simple-table fixed-header height="300px">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">SN</th>
                  <th class="text-left">Model</th>
                  <th class="text-left">Manufacture Date</th>
                  <th class="text-left">Exclusive Area</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in desserts" :key="item.name">
                  <td>{{ item.name }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.calories }}</td>
                  <td>{{ item.calories }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
import EmptyState from "../components/Vectors/EmptyState";
import ProductSidebar from "../components/ProductCategoriesSidebar";
export default {
  components: {
    Office,
    Message,
    Call,
    ProductSidebar,
    EmptyState,
  },

  metaInfo: {
    title: "Anti-Counterfeiting",
  },

  data() {
    return {
      desserts: [],
    };
  },
};
</script>

<style lang="scss">
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/authentication.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

#counterfeit {
  margin-bottom: 4rem;

  .breadcrumbs {
    .position {
      .fl {
        a {
          &:hover {
            color: #78bc27;
          }
        }
      }
    }
  }
  .conterfeit-table {
    .v-data-table {
      table {
        thead {
          tr {
            th {
              font-size: 16px;
              background: #78bc27;
              color: white
            }
          }
        }
      }
    }
  }
  .download_search {
    .__title {
      font-size: 20px;
      font-weight: 600;
    }
    button {
      background: #82bb31;
      color: white;
      height: 50px;
      width: 142px;
      &:hover, &:focus {
        background: darken($color: #82bb31, $amount: 10%);
        outline: none;
      }
    }
    input {
      height: 50px;
      width: 30%;
      color: inherit;
      border-radius: inherit;
    }
  }
}
</style>
