<template>
  <SemiLayout>
    <div class="h-32 "></div>
    <div class="flex justify-center align-center">
      <div class="breathing">
        <section class="flex justify-center">
          <div class="" id="categories-blogs-details">
            <CategoriesSidebar class="article__sidebar" />
            <div class="w-full article__item rightside-article">
              <div class="border">
                <g-image
                  data-aos="zoom-in"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                  class="w-full"
                  :src="article.image[0].url"
                  width="821"
                  height="384px"
                  style="height: 30rem; object-fit: cover;"
                ></g-image>
                <div class="article-body">
                  <h3 style="margin-bottom: 2rem;">{{ article.title }}</h3>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="4000"
                    class="hidden md:block"
                    data-aos-easing="ease-out-cubic"
                    v-html="article.body"
                  ></p>
                </div>
              </div>

              <!-- <div class="mt-10">
                <div class="header-title">
                  2 Comments
                </div>

                <div class="mt-10">
                  
                  <div class="flex mb-7 justify-between align-center">
                    <g-image
                      src="../assets/North Africa 1.png"
                      class="rounded-full"
                      width="71"
                      height="71"
                    ></g-image>
                    <div class="border py-3 px-7 ml-10">
                      <h5 class="text-bold">Sarah Bright</h5>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed aliquam, enim at laoreet malesuada, arcu ligula
                        hendrerit risus, sed iaculis quam justo eget enim.
                      </span>
                    </div>
                  </div>
                  <div class="flex mb-7 justify-between align-center">
                    <g-image
                      src="../assets/North Africa 1.png"
                      class="rounded-full"
                      width="71"
                      height="71"
                    ></g-image>
                    <div class="border py-3 px-7 ml-10">
                      <h5 class="text-bold">Sarah Bright</h5>
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed aliquam, enim at laoreet malesuada, arcu ligula
                        hendrerit risus, sed iaculis quam justo eget enim.
                      </span>
                    </div>
                  </div>
                </div>
              </div> -->
              <!-- <div class="mt-10">
                <div class="header-title">
                  Leave a Comment
                </div>
                <div>
                  <div class="mt-10">
                    <v-row>
                      <v-col cols="12" md="12">
                        <v-textarea
                          outlined
                          name="input-7-4"
                          label="Comments"
                        ></v-textarea>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          outlined
                          label="Name"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-text-field
                          outlined
                          label="E-mail"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" md="6">
                        <v-btn class="w-full" dark>Post Comments</v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </section>
      </div>
    </div>
  </SemiLayout>
</template>

<page-query>
query Articles($path: String!) {
  strapiArticles (path: $path) {
    id
    title
    body
    image {
      url
      name
    }
  }
}
</page-query>

<script>
import SemiLayout from "../layouts/SemiDefault";
import MailOpen from "../components/Vectors/MailOpen";
import CategoriesSidebar from "../components/CategoriesSidebar";
export default {
  components: {
    MailOpen,
    CategoriesSidebar,
    SemiLayout,
  },
  metaInfo: {
    title:
      "access control panel,access control,access control and security,access control and security providers in Nigeria,access control barriers,access control board,access control card reader,access control cards,access control companies,access control companies in lagos,access control companies in nigeria,Access Control Devices,access control door,access control door hardware,access control door lock,access control door system,access control equipment,access control equipments,access control exit button,access control facial recognition,access control fingerprint,access control for doors,access control for glass door,access control for glass doors,access control gates,access control glass door,access control hardware,access control hardware in Nigeria,access control in nigeria,access control keypad,access control kit,access control management software,access control non touch,access control non touch solutions,Access Control Panel,ACCESS CONTROL READER,access control security,access control system,access control technology,Access Control Terminal,access control terminal,access control training,access control training in nigeria,access control turnstiles,ALL-IN 1 ACCESS CONTROL,automatic turnstile,biometric access control,biometric access control system,biometric capture software,biometric data capture,biometric device cost,biometric Devices,biometric door lock,biometric door lock biometric,biometric fingerpint scanner price,biometric fingerprint device,biometric id card machine,biometric identification,biometric identification system,Biometric Scanner,Biometric System,Biometric Technology in Nigeria,door locks in lagos,door locks in nigeria,Drop Arm Tripod Standard,Drop Arm Tripod Turnstile,Dual-lane Full Height Turnstile Standard,entry access control gates,Exit Button,Exit Button No Touch,Exit Button push,face recognition access,facial recognition access control,facial recognition biometrics,facial recognition prices,facial recognition system,Fingerprint Access Control,FINGERPRINT ACCESS CONTROL,Fingerprint Access Control Terminal with ADMS,ID,fingerprint reader,fingerprint scanner,Flap Barrier,Full Height Turnstile,Full Height Turnstile Four Arms,gate control,gate turnstile,gate turnstile cost,Hand Held Metal Detector,hardware access control,METAL DETECTOR,Motorized tripod turnstile,Parking Control,Security solutions,Security solutions in nigeria,Security solutions training,security turnstiles prices,Speedgate,Standalone device Parking barrier,Swing Barrier,Time Attendance and Access Control Device,tripod turnstile,turnstile access control,turnstile door,turnstile entrance,turnstile entry system,turnstile for sale,turnstile gate atomated ,turnstile gate,turnstile gate barrier,turnstile gate price,turnstile gate with card reader,turnstile system,turnstiles prices in Nigeria,Walk Through Metal Detector,ZKteco in nigeria,ZKteco product in nigeria,ZKteco products in nigeria,,Touchless devices,Touchless biometrics,FACE RECOGNITION ATTENDANCE KIOSK,FACIAL ATTENDANCE DEVICE,FACIAL RECOGNITION,facial recognition algorithm,facial recognition app,facial recognition attendance system,facial recognition search,facial recognition software,facial recognition technology,palm action recognition,PALM ATTENDANCE DEVICE,palm print recognition advantages and disadvantages,PALM RECOGNITION,palm recognition biometrics,palm recognition devices in Nigeria,palm recognition system,palm recognition using image processing,palm vein recognition algorithm,palm vein recognition biometrics,palm vein recognition system abstract,secure palm vein recognition system,Touchless devices in Nigeria,non-touch door opener,no-touch door opener,no-touch devices,non-touch exit button,non touch machine,no touch machine,smart temperature measurement,fever alarm,fever detection,Indoor Human Disinfection Systems,Sterilizer Disinfection Equipment,Ultrasonic Sterilization Equipments,Mobile Temperature Measurement,,American Deadbolt Bluetooth Lock,American Deadbolt Bluetooth Lock price,American Standard Mortise Hotel Lock,Best smart locks,Bluetooth Lock,Bluetooth Lock in nigeria,door locks in nigeria,door locks prices,Electric Lock,Electric Lock Bracket,Electric Lock Bracket,Electric Lock in Nigeria,Electronic hotel lock,ELOCK KEY,European Standard Mortise Hotel Lock with 5 latches,Fingerprint Lock,Fingerprint Lock in nigeria,Glass door lock,Glass door lock in nigeria,Hotel lock,Hotel lock provider in nigeria,MAGNETIC LOCK,Secure Smart Lock providers in nigeria,Smart lock jiji,smart lock jumia,smart locks brands,smart locks compatible with ,smart locks deadbolt,smart locks digital keys,smart locks door locks,smart locks for doors,smart locks for hotels,smart locks for office,smart locks ghana,Smart locks nigeria,what is a smart locks,,Analog Camera,cctv,cctv camera,cctv camera accessories,cctv camera app,cctv camera bulb,cctv camera cable,cctv camera cable price,cctv camera circuit diagram,cctv camera companies in lagos,cctv camera company in nigeria,cctv camera components,cctv camera connection,cctv camera connection diagram,cctv camera cost,cctv camera images,cctv camera installation,cctv camera jumia,cctv camera meaning,cctv camera pictures,cctv camera price,cctv camera types,cctv connector,cctv control,cctv dealer,cctv dome camera,cctv jiji,CCTV konga,CCTV providers in Nigeria,CCTV Surveillance,Digital Camera,dvr recorder,HD Camera,hidden cctv camera,home security cameras,ip camera,Office security camera,outdoor security camera,security camera,Security Cameras for Banks,wireless cctv,wireless security camera,Zoom IP Camera,,best time and attendance system ,biometric attendance,biometric attendance machine,biometric attendance machine,biometric attendance software,Biometric Attendance system,biometric attendance system,biometric capture device,biometric fingerprint machine,facial recognition attendance system,fingerprint time attendance machine biometric,time & attendance management,time & attendance software,time & attendance solutions,time & attendance system,time and attendance in nigeria,time and attendance biometric system,time and attendance capture system,time and attendance collection system,time and attendance login,time and attendance policy,time and attendance software,time and attendance ghana,time and attendance system benefits,time and attendance system for small business,time and attendance system hardware,time and attendance systems for small businesses,TIME ATTENDANCE DEVICE,TIME ATTENDANCE,time attendance face machine,time attendance face recognition,time attendance form,time attendance free,time attendance free download,time attendance free software,time attendance machine battery,time attendance machine brands,time attendance system ,time attendance system face recognition,time attendance system free,TIME ATTENDANCE TERMINAL,,x ray machine price,x ray machine parts,x ray machine baggage scanner,x ray machine parts and functions,x ray machine for sale,x ray machine price in ghana,x ray machine price in nigeria,x ray machine definition,x ray machine airport,x ray machine function,x ray machine benefits,x ray machine brands,x ray machine buy,x ray machine buy online,x ray machine cost,x ray machine digital,x ray machine digital price,x ray machine for security,x ray machine healthcare,x ray machine components,x ray machine in airport,x ray machine dimensions,x ray machine description,x ray machine equipment,x ray machine in hospital,x ray machine how it works,x ray machine hospital,x ray machine repair jobs,x ray machine installation,x ray machine how to use,baggage scanner,Scanner,boom barrier",
  },
  data() {
    return {
      page: 1,
      categories: [
        { title: "News", total: "4" },
        { title: "Notice", total: "4" },
        { title: "Security Bulletins", total: "4" },
        { title: "Events", total: "4" },
        { title: "Newsletter", total: "4" },
        { title: "New Release", total: "4" },
      ],
      blogs: [
        { title: "News", total: "4" },
        { title: "Notice", total: "4" },
        { title: "Security Bulletins", total: "4" },
        { title: "New Release", total: "4" },
      ],
    };
  },

  computed: {
    article() {
      return this.$page.strapiArticles;
    },
  },
};
</script>

<style lang="scss" scoped>
.number-categories {
  background: gainsboro;
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

@media (min-width: 640px) {
  .rightside-article {
    width: 71%;
  }
}



.article-body {
  padding: 40px;
}

.theme--light.v-input:not(.v-input--is-disabled) input{
  color:#fff;
}
</style>
