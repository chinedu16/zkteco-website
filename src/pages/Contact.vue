<template>
  <SemiLayout>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="mt-24 md:mt-0 about-zk flex flex-col lg:flex-row justify-between">
        <div class="lg:w-2/5">
          <div
            class="contact-box w-full mb-10 p-10 lg:w-2/6 lg:absolute text-white"
          >
            <div>  
              <div
                v-for="item in contact"
                :key="item.id"
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                class="flex mb-7 "
              >
                <Office />
                <div class="ml-6">
                  <div class="font-bold text-xl">{{ item.name }}:</div>
                  <span>{{ item.description }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:-m-24">
          <g-image src="../assets/map-image.png"> </g-image>
        </div>
      </section>
    </div>
  </SemiLayout>
</template>

<page-query>
query {
  allStrapiContactUses {
    edges {
      node {
        id
        contact {
          name
          id
          description
          icon {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import SemiLayout from "../layouts/SemiDefault";
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
export default {
  components: {
    Office,
    Message,
    Call,
    SemiLayout,
  },
  computed: {
    contact() {
      return this.$page.allStrapiContactUses.edges[0].node.contact;
    },
  },
};
</script>

<style lang="scss" scoped>
.contact-box {
  left: 190px;
  top: 130px;
  background: #1a130c;
  border-radius: 0px 70px 70px 0px;
}
</style>
