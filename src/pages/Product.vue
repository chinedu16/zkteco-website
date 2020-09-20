<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 28rem;">
      <div class="footer-image-overlay"></div>
    </div>
    <div
      class="flex justify-center align-center w-full"
      style="background: #f5f5f5;"
    >
      <div class=" breathing" style="background: #f5f5f5;">
        <section class=" pt-4 flex justify-center">
          <div class="pro-search  w-full max-w-screen-xxl clearfix">
            <img class="w-full" src="../assets/roadmap.png" alt="" />
          </div>
        </section>

        <section class="flex pb-12 pt-10 justify-center">
          <div class="product-cat__container w-full ">
            <ProductSidebar />
            <div class="rightside-product">
              <div>
                <div class="rightside-product__item">
                  <div
                    class="flex"
                    v-for="product in loadedPosts"
                    :key="product.node.id"
                  >
                    <div class="flex product-container relative">
                      <div class="h-32 product-image-container">
                        <g-image
                          class="w-full h-full object-contain"
                          width="201"
                          height="105"
                          :src="
                            product.node.images[0]
                              ? product.node.images[0].url
                              : '../assets/Logo-2.png'
                          "
                        >
                        </g-image>
                      </div>
                      <span
                        v-if="dateWithinWeek(product.updated_at)"
                        class="label-new"
                        ><img src="../assets/new.png" alt="BioTime 8.0"
                      /></span>
                      <g-link :to="`/product/${product.node.slug}`" style="margin-bottom: 10px; font-size: 23px; font-weight: bolder;letter-spacing: 0px;color: #78bc27!important;">
                        {{ product.node.name }}
                      </g-link>
                      <g-link class="more" :to="`/product/${product.node.slug}`"
                        >Learn more</g-link
                      >
                    </div>
                  </div>
                </div>
                <ClientOnly>
                  <infinite-loading
                    @infinite="infiniteHandler"
                    spinner="spiral"
                  >
                    <div slot="no-more">
                      You've scrolled through all the posts ;)
                    </div>
                    <div slot="no-results">
                      Sorry, no posts yet :(
                    </div>
                  </infinite-loading>
                </ClientOnly>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </layout>
</template>

<page-query>
query ($page: Int) {
  products: allStrapiProducts(perPage: 12, page: $page) @paginate{
    pageInfo {
      totalPages
      currentPage
    }
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
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
import ProductSidebar from "../components/ProductCategoriesSidebar";
import moment from "moment";
export default {
  components: {
    Office,
    Message,
    Call,
    ProductSidebar,
  },

  metaInfo: {
    title:
      "access control panel,access control,access control and security,access control and security providers in Nigeria,access control barriers,access control board,access control card reader,access control cards,access control companies,access control companies in lagos,access control companies in nigeria,Access Control Devices,access control door,access control door hardware,access control door lock,access control door system,access control equipment,access control equipments,access control exit button,access control facial recognition,access control fingerprint,access control for doors,access control for glass door,access control for glass doors,access control gates,access control glass door,access control hardware,access control hardware in Nigeria,access control in nigeria,access control keypad,access control kit,access control management software,access control non touch,access control non touch solutions,Access Control Panel,ACCESS CONTROL READER,access control security,access control system,access control technology,Access Control Terminal,access control terminal,access control training,access control training in nigeria,access control turnstiles,ALL-IN 1 ACCESS CONTROL,automatic turnstile,biometric access control,biometric access control system,biometric capture software,biometric data capture,biometric device cost,biometric Devices,biometric door lock,biometric door lock biometric,biometric fingerpint scanner price,biometric fingerprint device,biometric id card machine,biometric identification,biometric identification system,Biometric Scanner,Biometric System,Biometric Technology in Nigeria,door locks in lagos,door locks in nigeria,Drop Arm Tripod Standard,Drop Arm Tripod Turnstile,Dual-lane Full Height Turnstile Standard,entry access control gates,Exit Button,Exit Button No Touch,Exit Button push,face recognition access,facial recognition access control,facial recognition biometrics,facial recognition prices,facial recognition system,Fingerprint Access Control,FINGERPRINT ACCESS CONTROL,Fingerprint Access Control Terminal with ADMS,ID,fingerprint reader,fingerprint scanner,Flap Barrier,Full Height Turnstile,Full Height Turnstile Four Arms,gate control,gate turnstile,gate turnstile cost,Hand Held Metal Detector,hardware access control,METAL DETECTOR,Motorized tripod turnstile,Parking Control,Security solutions,Security solutions in nigeria,Security solutions training,security turnstiles prices,Speedgate,Standalone device Parking barrier,Swing Barrier,Time Attendance and Access Control Device,tripod turnstile,turnstile access control,turnstile door,turnstile entrance,turnstile entry system,turnstile for sale,turnstile gate atomated ,turnstile gate,turnstile gate barrier,turnstile gate price,turnstile gate with card reader,turnstile system,turnstiles prices in Nigeria,Walk Through Metal Detector,ZKteco in nigeria,ZKteco product in nigeria,ZKteco products in nigeria,,Touchless devices,Touchless biometrics,FACE RECOGNITION ATTENDANCE KIOSK,FACIAL ATTENDANCE DEVICE,FACIAL RECOGNITION,facial recognition algorithm,facial recognition app,facial recognition attendance system,facial recognition search,facial recognition software,facial recognition technology,palm action recognition,PALM ATTENDANCE DEVICE,palm print recognition advantages and disadvantages,PALM RECOGNITION,palm recognition biometrics,palm recognition devices in Nigeria,palm recognition system,palm recognition using image processing,palm vein recognition algorithm,palm vein recognition biometrics,palm vein recognition system abstract,secure palm vein recognition system,Touchless devices in Nigeria,non-touch door opener,no-touch door opener,no-touch devices,non-touch exit button,non touch machine,no touch machine,smart temperature measurement,fever alarm,fever detection,Indoor Human Disinfection Systems,Sterilizer Disinfection Equipment,Ultrasonic Sterilization Equipments,Mobile Temperature Measurement,,American Deadbolt Bluetooth Lock,American Deadbolt Bluetooth Lock price,American Standard Mortise Hotel Lock,Best smart locks,Bluetooth Lock,Bluetooth Lock in nigeria,door locks in nigeria,door locks prices,Electric Lock,Electric Lock Bracket,Electric Lock Bracket,Electric Lock in Nigeria,Electronic hotel lock,ELOCK KEY,European Standard Mortise Hotel Lock with 5 latches,Fingerprint Lock,Fingerprint Lock in nigeria,Glass door lock,Glass door lock in nigeria,Hotel lock,Hotel lock provider in nigeria,MAGNETIC LOCK,Secure Smart Lock providers in nigeria,Smart lock jiji,smart lock jumia,smart locks brands,smart locks compatible with ,smart locks deadbolt,smart locks digital keys,smart locks door locks,smart locks for doors,smart locks for hotels,smart locks for office,smart locks ghana,Smart locks nigeria,what is a smart locks,,Analog Camera,cctv,cctv camera,cctv camera accessories,cctv camera app,cctv camera bulb,cctv camera cable,cctv camera cable price,cctv camera circuit diagram,cctv camera companies in lagos,cctv camera company in nigeria,cctv camera components,cctv camera connection,cctv camera connection diagram,cctv camera cost,cctv camera images,cctv camera installation,cctv camera jumia,cctv camera meaning,cctv camera pictures,cctv camera price,cctv camera types,cctv connector,cctv control,cctv dealer,cctv dome camera,cctv jiji,CCTV konga,CCTV providers in Nigeria,CCTV Surveillance,Digital Camera,dvr recorder,HD Camera,hidden cctv camera,home security cameras,ip camera,Office security camera,outdoor security camera,security camera,Security Cameras for Banks,wireless cctv,wireless security camera,Zoom IP Camera,,best time and attendance system ,biometric attendance,biometric attendance machine,biometric attendance machine,biometric attendance software,Biometric Attendance system,biometric attendance system,biometric capture device,biometric fingerprint machine,facial recognition attendance system,fingerprint time attendance machine biometric,time & attendance management,time & attendance software,time & attendance solutions,time & attendance system,time and attendance in nigeria,time and attendance biometric system,time and attendance capture system,time and attendance collection system,time and attendance login,time and attendance policy,time and attendance software,time and attendance ghana,time and attendance system benefits,time and attendance system for small business,time and attendance system hardware,time and attendance systems for small businesses,TIME ATTENDANCE DEVICE,TIME ATTENDANCE,time attendance face machine,time attendance face recognition,time attendance form,time attendance free,time attendance free download,time attendance free software,time attendance machine battery,time attendance machine brands,time attendance system ,time attendance system face recognition,time attendance system free,TIME ATTENDANCE TERMINAL,,x ray machine price,x ray machine parts,x ray machine baggage scanner,x ray machine parts and functions,x ray machine for sale,x ray machine price in ghana,x ray machine price in nigeria,x ray machine definition,x ray machine airport,x ray machine function,x ray machine benefits,x ray machine brands,x ray machine buy,x ray machine buy online,x ray machine cost,x ray machine digital,x ray machine digital price,x ray machine for security,x ray machine healthcare,x ray machine components,x ray machine in airport,x ray machine dimensions,x ray machine description,x ray machine equipment,x ray machine in hospital,x ray machine how it works,x ray machine hospital,x ray machine repair jobs,x ray machine installation,x ray machine how to use,baggage scanner,Scanner,boom barrier",
  },
  
  data() {
    return {
      loadedPosts: [],
      currentPage: 1,
      page: 1,
      todayDate: new Date(),
      theTime: false,
      products: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
      ],
    };
  },
  methods: {
    dateWithinWeek(date) {
      const checkDateWithinWeek = moment(date).isSame(new Date(), "week");
      return checkDateWithinWeek;
    },
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.products.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/product/${this.currentPage + 1}`);
        if (data.products.edges.length) {
          this.currentPage = data.products.pageInfo.currentPage;
          this.loadedPosts.push(...data.products.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    },
  },
  mounted() {
    this.theTime = moment().isoWeek();
  },
  created() {
    this.loadedPosts.push(...this.$page.products.edges);
  },
  computed: {
    allProduct() {
      return this.$page.products.edges;
    },
    pageInfos() {
      return this.$page.products.pageInfo.totalPages;
    },
  },
};
</script>

<style lang="scss" scoped>
.allproduct-headline-image {
  background-image: url("../assets/allProductImage.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}
.product-container {
  width: 100%;
  border-radius: 5px;
  height: 260px;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  transition: all 0.5s;
  padding: 20px;
  height: 309px;

  &:hover {
    box-shadow: 0 0 15px 0px #ddd;

    .more {
      transition: all 0.5s;
      color: #fff !important;
      background: #78bc27;
      border: 1px solid #78bc27;
    }
  }
}

.v-btn {
  color: #82bb31 !important;
}
.more {
  border: 1px solid #e6e6e6;
  line-height: 28px;
  padding: 0px 8px;
}
.v-list .v-list-item--active,
.v-list .v-list-item--active .v-icon {
  color: #82bb31 !important;
}

.v-application .primary--text {
  color: #82bb31 !important;
}

.label-new {
  position: absolute;
  top: 21px;
  left: 20px;
}

@media (min-width: 640px) {
  .rightside-product {
    width: 70%;
    background: white;
  }
}

.product-image-container {
  width: 211px;
  height: 151px;

  img {
    object-fit: contain;
  }
}

.product-list {
  display: grid;
  grid-template-columns: repeat(3, 260px);
  grid-gap: 20px;

  a {
    border-radius: 5px;
    border: 1px solid #edeeed;
    h2 {
      text-align: center;
    }
  }
}
</style>
