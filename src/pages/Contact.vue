<template>
  <SemiLayout>
    <div class="flex align-center justify-center">
      <div class="breathing">
        <section class="contact-zk">
          <div class="flex align-center justify-center">
            <div class="w-full justify-between contact_container ">
              <div class="contact-right flex">
                <div class="flex justify-center align-center">
                  <div class="contact-box w-full">
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
              </div>
              <div class="contact-left">
                <g-image src="../assets/map-image.png" class="w-full">
                </g-image>
              </div>
            </div>
          </div>
        </section>
      </div>
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

</style>
