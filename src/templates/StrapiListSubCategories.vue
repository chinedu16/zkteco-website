<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 28rem;">
      <div class="footer-image-overlay">
          
      </div>
    </div>
    <div
      class="flex breathing justify-center align-center w-full"
      style="background: #f5f5f5;"
    >
      <section class="pb-12 pt-10 w-full">
        <h1
          style="font-weight: 600; text-transform: uppercase; text-align: center; font-size: 30px; font-weight: bolder; line-height: 1.2em;"
        >
          Sub Categories Name
        </h1>
        <div class="sub-cat-container">
          <div class="sub-categories">
            <div><Linkedin height="100" width="200" /></div>
            <h2>Time Attendance</h2>
          </div>
          <div class="sub-categories">
            <div><Linkedin height="100" width="200" /></div>
            <h2>POS</h2>
          </div>
          <div class="sub-categories">
            <div><Linkedin height="100" width="200" /></div>
            <h2>Online Stack</h2>
          </div>
          <div class="sub-categories">
            <div><Linkedin height="100" width="200" /></div>
            <h2>Online Stack</h2>
          </div>
        </div>
      </section>
    </div>
  </layout>
</template>

<page-query>
query ProductCategories($path: String!) {
  strapiProductCategories (path: $path) {
    id
    name
    slug
  }
  allStrapiProducts {
    edges {
      node {
        id
        name
        slug
        images {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import Linkedin from "../components/Vectors/POS";
export default {
  components: {
    Linkedin,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.allproduct-headline-image {
  background-image: url("../assets/subproduct.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}
.sub-cat-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  margin-top: 40px;

  .sub-categories {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;

    h2 {
      color: #7cbd27;
      font-size: 27px;
    }
  }
}
</style>
