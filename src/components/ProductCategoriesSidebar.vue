<template>
  <div class="md:m-0 mb-10 leftside-product " id="product-categories">
    <div>
      <div class="border">
        <v-card class="mx-auto">
          <v-list
            style="background: white!important"
            class="sidebar-border"
            v-for="item in productCategories"
            :key="item.id"
          >
            <v-list-group
              :value="getListName(item.node.slug, toggleComponent)"
              style="color: #78bc27!important;"
            >
              <template v-slot:activator>
                <g-link :to="`/product-categories/${item.node.slug}`">
                  <v-list-item-title>{{
                    item.node.name
                  }}</v-list-item-title></g-link
                >
              </template>

              <v-list-group
                style="color: #78bc27!important;"
                sub-group
                v-for="product in item.node.product_sub_categories"
                :key="product.id"
              >
                <template v-slot:activator>
                  <v-list-item-content>
                    <g-link :to="`/sub-categories/${product.slug}`"
                      ><v-list-item-title
                        >{{ product.name }}
                        </v-list-item-title
                      ></g-link
                    >
                  </v-list-item-content>
                </template>
              </v-list-group>
            </v-list-group>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  allStrapiProductCategories {
    edges {
      node {
        id
        name
        slug
				product_sub_categories {
          id
          name
          slug
        }
      }
    } 
  }
}
</static-query>

<script>
export default {
  props: ["toggle", "toggleComponent"],
  data() {
    return {};
  },
  components: {},
  computed: {
    productCategories() {
      return this.$static.allStrapiProductCategories.edges;
    },
  },
  methods: {
    getListName(name, itemProps) {
      if (name && itemProps) {
        if (name.toLowerCase() === itemProps.toLowerCase()) {
          return true;
        } else {
          return false;
        }
      } else {
        null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar-border {
  border-bottom: 1px solid #f5f5f5;
}

@media (min-width: 640px) {
  .leftside-product {
    width: 28%;
  }
}
</style>
