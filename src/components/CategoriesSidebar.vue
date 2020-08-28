<template>
  <div class="">
    <div>
      <div class="header-title">
        Categories
      </div>
      <div class="my-10" id="myDiv">
        <g-link
          class="flex mb-7 pb-3 justify-between border-solid border-b links"
          v-for="category in categories"
          :key="category.node.id"
          :to="`/category/${category.node.slug}`"
        >
          <h4>
            <g-link :to="`/category/${category.node.slug}`" class="hover">{{
              category.node.name
            }}</g-link>
          </h4>
          <span class="number-categories flex justify-center h-6 w-6">{{
            category.node.articles.length
          }}</span>
        </g-link>
      </div>
    </div>
    <div>
      <div class="header-title">
        Recent News
      </div>
      <div class="my-10">
        <div
          class=" mb-7  align-center"
          v-for="article in articles.slice(0, 3)"
          :key="article.id"
        >
          <g-link class="flex align-center" :to="`/blog/${article.node.slug}`">
            <g-image
              :src="article.node.image[0].formats.thumbnail.url"
              class="rounded-full rounded-image "
              width="71"
              height="71"
            ></g-image>
            <p class="ml-5">{{ article.node.title }}</p>
          </g-link>
        </div>
      </div>
    </div>

    <div>
      <div id="subscriber-box" class="subscriber-box">
        <div class="flex">
          <MailOpen />
          <h4 class="ml-3">Subscribe</h4>
        </div>
        <input
          type="text"
          v-model="name"
          placeholder="Name"
          class="search-input mt-5 w-full"
        />
        <input
          type="text"
          v-model="email"
          placeholder="Email"
          class="search-input mt-5 mb-5 w-full"
        />
        <v-btn @click="sendEmail" dark>Subscribe</v-btn>

        <div v-if="showResponse" class="flex justify-center mt-3">
          Email Sent
        </div>
        <div v-if="showResponseError" class="flex justify-center mt-3">
          Something Went Wrong
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  allStrapiCategories {
    edges {
      node {
        id
        name
				slug
        articles {
          id
          title
          slug
          created_by
          created_at
          image {
            url
          }
        }
      }
    } 
  }
  allStrapiArticles {
    edges {
      node {
        id
        title
        slug
        updated_at
        categories {
          name
        }
        image {
          url
          name
          formats {
            thumbnail  {
              url
            }
          }
        }
      }
    } 
  }
}
</static-query>

<script>
import MailOpen from "../components/Vectors/MailOpen";

import api from "../api";

export default {
  data() {
    return {
      name: "",
      email: "",
      showResponse: false,
      showResponseError: false,
    };
  },
  components: {
    MailOpen,
  },
  methods: {
    async sendEmail() {
      const payload = {
        name: this.name,
        email: this.email,
      };
      try {
        const response = await api.subscriberEmail(payload);
        if (response) {
          this.showResponse = true;
          this.showResponseError = false;
        }
      } catch (error) {
        this.showResponse = false
        this.showResponseError = true
      }
    },
  },
  async mounted() {
    var header = document.getElementById("myDiv");
    var btns = header.getElementsByClassName("links");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  },
  computed: {
    categories() {
      return this.$static.allStrapiCategories.edges;
    },
    articles() {
      return this.$static.allStrapiArticles.edges;
    },
  },
};
</script>

<style lang="scss" scoped>
#subscriber-box {
  .v-input {
    .v-input__control {
      .v-input__slot {
        color: white !important;
      }
    }
  }
}
.number-categories {
  background: gainsboro;
  padding: 3px 12px;
}

/* Style the active class, and buttons on mouse-over */
.active,
.links:hover {
  // background-color: #78bc27;
  color: #78bc27 !important;

  span {
    background: #78bc27;
    color: white !important;
  }
}

.card-blog {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.subscriber-box {
  padding: 28px;
  background: #1a130c;
  border-radius: 5px;
  color: white;
  h4 {
    color: white;
  }

  .v-input {
    .v-text-field__slot {
      input {
        background: white;
        padding: 10px;
      }
    }
  }
}

.v-btn {
  background-color: green !important;
  width: 100%;
  color: white !important;
}

.rounded-image {
  width: 81px !important;
  height: 81px !important;
  object-fit: cover;
  border-radius: 9999%;
}
</style>
