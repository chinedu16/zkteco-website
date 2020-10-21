<template>
  <layout>
    <div class="contact-headline-image headline" style="height: 630px;">
      <div class="footer-image-overlay"></div>
    </div>
    <div class="flex align-center" id="aftersales">
      <div
        class="flex justify-center align-center w-full"
        style="background: #ffffff;"
      >
        <div class="breathing w-full">
          <div class="contact-info pb-10">
            <div class="left">
              <h2>Contact Info</h2>
              <div class="right-content">
                <div
                  class="form-control"
                  v-for="item in contact"
                  :key="item.id"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <div class="icon">
                    <img :src="item.icon.url" alt="" />
                  </div>
                  <div class="text">
                    <label for="">{{ item.name }}: </label>
                    <p v-html="item.description"></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="right">
              <h2>Get in touch with us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse nulla quam, pulvinar a nisl sed, molestie feugiat
                ipsum. Nullam massa augue, tincidunt eget faucibus eu, pulvinar
                a ante.
              </p>

              <div class="right_content">
                <div class="form-control">
                  <label for="">Your name</label>
                  <input v-model="input.full_name" type="text" />
                </div>
                <div class="form-control">
                  <label for="">Your Email *</label>
                  <input v-model="input.email" type="text" />
                </div>
                <div class="form-control">
                  <label for="">Your Message *</label>
                  <textarea
                    v-model="input.message"
                    cols="30"
                    rows="7"
                  ></textarea>
                </div>
                <button @click="sendContactRequest()">SEND MESSAGE</button>
                <span
                  style="margin-left: 30px; color: green;"
                  v-if="showResponse"
                  >Success, you have made contact with zkteco</span
                >
                <span
                  style="margin-left: 30px; color: red;"
                  v-if="showResponseError"
                  >Error sending form information</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
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
import api from "../api";
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
  metaInfo: {
    title: "Contact Us at ZKTeco west africa",
  },
  data() {
    return {
      input: {
        full_name: "",
        message: "",
        email: "",
      },
      showResponse: false,
      showResponseError: false,
    };
  },
  methods: {
    async sendContactRequest() {
      try {
        const response = await api.contactForm(this.input);
        if (response) {
          this.showResponse = true;
          this.showResponseError = false;
        }
      } catch (error) {
        this.showResponse = false;
        this.showResponseError = true;
      }
    },
  },
  computed: {
    contact() {
      return this.$page.allStrapiContactUses.edges[0].node.contact;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/base/_variable.scss";
@import "../styles/base/mixins";
.contact-headline-image {
  background-image: url("../assets/full-map.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
  z-index: 1;
}

.contact-info {
  margin-top: 60px;

  @include mq(md) {
    display: flex;
    justify-content: space-between;
  }
  h2 {
    font-size: 22px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  .left {
    @include mq(md) {
      width: 35%;
    }
    .form-control {
      display: flex;
      margin: 10px 0px 22px;
      .icon {
        width: 30%;
        img {
          width: 60px;
        }
      }
      .text {
        width: 70%;
        label {
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }
  .right {
    @include mq(md) {
      width: 60%;
    }
    .right_content {
      margin-top: 2rem;

      button {
        margin-top: 1rem;
        background: #78bc27;
        color: white;
        height: 45px;
        border-radius: 4px;
        font-weight: bolder;
        padding: 8px 25px;
        &:hover {
          background: darken($color: #78bc27, $amount: 10%);
        }
      }
      .form-control {
        margin: 20px 0px;
        display: flex;
        flex-direction: column;

        input {
          height: 45px;
          background: #eee;
          margin-top: 16px;
          border-radius: 4px;
          padding: 0px 15px;
          transition: all 0.5s;
          &:focus {
            outline: none;
            border: 1px solid #78bc27;
          }
        }
        textarea {
          background: #eee;
          margin-top: 16px;
          border-radius: 4px;
          padding: 10px 15px;
          &:focus {
            outline: none;
            border: 1px solid #78bc27;
          }
        }
      }
    }
  }
}
</style>
