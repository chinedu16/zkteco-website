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
              <a href="/">Home Page</a> &gt; <a href="/">Support</a> &gt; Anti
              Counterfeit Enquiry
            </div>
          </div>
        </section>

        <div class="download_search pt-10 flex align-center">
          <div class="title">Anti-counterfeit Enquiry：</div>
          <input
            type="text"
            v-model="name"
            placeholder="Please Input SN "
            class="search-input w-full"
          />
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
      "Anti-Counterfeiting",
  },

  data() {
    return {
      desserts: [
        
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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

.v-btn {
  color: #82bb31 !important;
}

.v-application .primary--text {
  color: #82bb31 !important;
}

#counterfeit {
  margin-bottom: 4rem;

  .download_search {
    input {
      width: 30%;
      color: inherit;
    }
  }
}
</style>
