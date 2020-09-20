<template>
  <layout>
    <div class="allproduct-headline-image headline" style="height: 300px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="solutions">
      <div class="breathing w-full">
        <section class="breadcrumbs pt-4 flex">
          <div class="position clearfix caseList-nav">
            <div class="fl"><a href="/">Home Page</a> &gt; Solution</div>
          </div>
        </section>

        <div class="solution_title pt-10">
          <h2>ZKTeco Solutions</h2>
          <p v-if="allSolutionCategories.length > 0">
            <span
              >ZKTeco has developed professional industry solutions for
              different industries' properties and scale</span
            >
          </p>
          <p></p>
        </div>

        <div class="section_cards" v-if="allSolutionCategories">
          <div
            class="section_card"
            v-for="solution in allSolutionCategories"
            :key="solution.id"
          >
            <div class="container">
              <div class="overlay"></div>
              <g-image :src="solution.image[0].url" alt="" />
              <div class="text">
                <h3>{{ solution.title }}</h3>
                <div class="cases_content"></div>
                <g-link :to="`/solution-details/${solution.slug}`"
                  >Learn More</g-link
                >
              </div>
            </div>
          </div>
        </div>
        <div v-if="allSolutionCategories.length < 0">
            <h2>No Solution</h2>
        </div>
      </div>
    </div>
  </layout>
</template>

<page-query>
query Solutions($path: String!) {
  strapiSolutionCategories (path: $path) {
    id
    slug
    name
    solutions {
          id
          slug
          title
          image {
            url
          }
        }
  }
}
</page-query>

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
      "access control panel,access control,access control and security,access control and security providers in Nigeria,access control barriers,access control board,access control card reader,access control cards,access control companies,access control companies in lagos,access control companies in nigeria,Access Control Devices,access control door,access control door hardware,access control door lock,access control door system,access control equipment,access control equipments,access control exit button,access control facial recognition,access control fingerprint,access control for doors,access control for glass door,access control for glass doors,access control gates,access control glass door,access control hardware,access control hardware in Nigeria,access control in nigeria,access control keypad,access control kit,access control management software,access control non touch,access control non touch solutions,Access Control Panel,ACCESS CONTROL READER,access control security,access control system,access control technology,Access Control Terminal,access control terminal,access control training,access control training in nigeria,access control turnstiles,ALL-IN 1 ACCESS CONTROL,automatic turnstile,biometric access control,biometric access control system,biometric capture software,biometric data capture,biometric device cost,biometric Devices,biometric door lock,biometric door lock biometric,biometric fingerpint scanner price,biometric fingerprint device,biometric id card machine,biometric identification,biometric identification system,Biometric Scanner,Biometric System,Biometric Technology in Nigeria,door locks in lagos,door locks in nigeria,Drop Arm Tripod Standard,Drop Arm Tripod Turnstile,Dual-lane Full Height Turnstile Standard,entry access control gates,Exit Button,Exit Button No Touch,Exit Button push,face recognition access,facial recognition access control,facial recognition biometrics,facial recognition prices,facial recognition system,Fingerprint Access Control,FINGERPRINT ACCESS CONTROL,Fingerprint Access Control Terminal with ADMS,ID,fingerprint reader,fingerprint scanner,Flap Barrier,Full Height Turnstile,Full Height Turnstile Four Arms,gate control,gate turnstile,gate turnstile cost,Hand Held Metal Detector,hardware access control,METAL DETECTOR,Motorized tripod turnstile,Parking Control,Security solutions,Security solutions in nigeria,Security solutions training,security turnstiles prices,Speedgate,Standalone device Parking barrier,Swing Barrier,Time Attendance and Access Control Device,tripod turnstile,turnstile access control,turnstile door,turnstile entrance,turnstile entry system,turnstile for sale,turnstile gate atomated ,turnstile gate,turnstile gate barrier,turnstile gate price,turnstile gate with card reader,turnstile system,turnstiles prices in Nigeria,Walk Through Metal Detector,ZKteco in nigeria,ZKteco product in nigeria,ZKteco products in nigeria,,Touchless devices,Touchless biometrics,FACE RECOGNITION ATTENDANCE KIOSK,FACIAL ATTENDANCE DEVICE,FACIAL RECOGNITION,facial recognition algorithm,facial recognition app,facial recognition attendance system,facial recognition search,facial recognition software,facial recognition technology,palm action recognition,PALM ATTENDANCE DEVICE,palm print recognition advantages and disadvantages,PALM RECOGNITION,palm recognition biometrics,palm recognition devices in Nigeria,palm recognition system,palm recognition using image processing,palm vein recognition algorithm,palm vein recognition biometrics,palm vein recognition system abstract,secure palm vein recognition system,Touchless devices in Nigeria,non-touch door opener,no-touch door opener,no-touch devices,non-touch exit button,non touch machine,no touch machine,smart temperature measurement,fever alarm,fever detection,Indoor Human Disinfection Systems,Sterilizer Disinfection Equipment,Ultrasonic Sterilization Equipments,Mobile Temperature Measurement,,American Deadbolt Bluetooth Lock,American Deadbolt Bluetooth Lock price,American Standard Mortise Hotel Lock,Best smart locks,Bluetooth Lock,Bluetooth Lock in nigeria,door locks in nigeria,door locks prices,Electric Lock,Electric Lock Bracket,Electric Lock Bracket,Electric Lock in Nigeria,Electronic hotel lock,ELOCK KEY,European Standard Mortise Hotel Lock with 5 latches,Fingerprint Lock,Fingerprint Lock in nigeria,Glass door lock,Glass door lock in nigeria,Hotel lock,Hotel lock provider in nigeria,MAGNETIC LOCK,Secure Smart Lock providers in nigeria,Smart lock jiji,smart lock jumia,smart locks brands,smart locks compatible with ,smart locks deadbolt,smart locks digital keys,smart locks door locks,smart locks for doors,smart locks for hotels,smart locks for office,smart locks ghana,Smart locks nigeria,what is a smart locks,,Analog Camera,cctv,cctv camera,cctv camera accessories,cctv camera app,cctv camera bulb,cctv camera cable,cctv camera cable price,cctv camera circuit diagram,cctv camera companies in lagos,cctv camera company in nigeria,cctv camera components,cctv camera connection,cctv camera connection diagram,cctv camera cost,cctv camera images,cctv camera installation,cctv camera jumia,cctv camera meaning,cctv camera pictures,cctv camera price,cctv camera types,cctv connector,cctv control,cctv dealer,cctv dome camera,cctv jiji,CCTV konga,CCTV providers in Nigeria,CCTV Surveillance,Digital Camera,dvr recorder,HD Camera,hidden cctv camera,home security cameras,ip camera,Office security camera,outdoor security camera,security camera,Security Cameras for Banks,wireless cctv,wireless security camera,Zoom IP Camera,,best time and attendance system ,biometric attendance,biometric attendance machine,biometric attendance machine,biometric attendance software,Biometric Attendance system,biometric attendance system,biometric capture device,biometric fingerprint machine,facial recognition attendance system,fingerprint time attendance machine biometric,time & attendance management,time & attendance software,time & attendance solutions,time & attendance system,time and attendance in nigeria,time and attendance biometric system,time and attendance capture system,time and attendance collection system,time and attendance login,time and attendance policy,time and attendance software,time and attendance ghana,time and attendance system benefits,time and attendance system for small business,time and attendance system hardware,time and attendance systems for small businesses,TIME ATTENDANCE DEVICE,TIME ATTENDANCE,time attendance face machine,time attendance face recognition,time attendance form,time attendance free,time attendance free download,time attendance free software,time attendance machine battery,time attendance machine brands,time attendance system ,time attendance system face recognition,time attendance system free,TIME ATTENDANCE TERMINAL,,x ray machine price,x ray machine parts,x ray machine baggage scanner,x ray machine parts and functions,x ray machine for sale,x ray machine price in ghana,x ray machine price in nigeria,x ray machine definition,x ray machine airport,x ray machine function,x ray machine benefits,x ray machine brands,x ray machine buy,x ray machine buy online,x ray machine cost,x ray machine digital,x ray machine digital price,x ray machine for security,x ray machine healthcare,x ray machine components,x ray machine in airport,x ray machine dimensions,x ray machine description,x ray machine equipment,x ray machine in hospital,x ray machine how it works,x ray machine hospital,x ray machine repair jobs,x ray machine installation,x ray machine how to use,baggage scanner,Scanner,boom barrier",
  },
  
  data() {
    return {};
  },
  computed: {
    allSolutionCategories() {
      return this.$page.strapiSolutionCategories.solutions;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.allproduct-headline-image {
  background-image: url("../assets/solution-image.jpg");
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

#solutions {
  margin-bottom: 4rem;
  .solution_title {
    text-align: center;
    p {
      margin: 25px 0 40px;
    }
  }

  .section_cards {
    @include mq(md) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
    }
    @include mq(lg) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 20px;
    }

    .section_card {
      height: 389px;
      cursor: pointer;
      &:hover {
        .container {
          .overlay {
            opacity: 1;
          }
          .text {
            a {
              opacity: 1;
            }
          }
        }
      }
      .container {
        position: relative;
        height: 100%;
        color: white;

        .overlay {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          width: 100%;
          opacity: 0;
          transition: 0.5s ease;
          background: rgba(0, 0, 0, 0.5);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .text {
          top: 0px;
          padding: 40px 20px;
          padding-top: 110px;
          position: absolute;
          z-index: 1;
          height: 100%;

          .cases_content {
            height: 88px;
            overflow: hidden;
            line-height: 22px !important;
            font-size: 18px !important;
            margin-top: 10px !important;
            text-align: left !important;
            font-weight: normal !important;
            font-style: normal !important;
            font-size: 16px !important;
          }

          a {
            font-size: 16px;
            display: inline-block;
            width: 120px;
            height: 40px;
            background: #78bc27;
            text-align: center;
            color: #fff;
            transition: 0.5s ease;
            opacity: 0;
            line-height: 40px;
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
