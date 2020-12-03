<template>
  <SemiLayout>
    <div class="flex align-center justify-center">
      <div class="breathing">
        <section class="contact-zk">
          <div class="flex align-center justify-center">
            <div class="w-full justify-between contact_container ">
              <div class="left">
                <div class="reach-us">
                  <h3>Contact Us</h3>
                  <span>Reach out to us from</span>
                </div>
                <div class="form-control">
                  <input v-model="name" type="text" placeholder="Full name" />
                </div>
                <div class="form-control">
                  <input
                    v-model="email"
                    type="text"
                    placeholder="Your email name"
                  />
                </div>
                <div class="form-control">
                  <textarea
                    name=""
                    id=""
                    v-model="message"
                    placeholder="Message"
                    rows="5"
                  ></textarea>
                </div>
                <div class="form-control">
                  <button @click="sendContact()">Submit</button>
                </div>
              </div>
              <div class="right">
                <g-image
                  style="width: 100%;"
                  src="../assets/full-map copy.png"
                  alt="Zkteco Location Map"
                ></g-image>
              </div>
            </div>
          </div>
        </section>
        <v-alert
          v-model="alert"
          border="left"
          close-text="Close Alert"
          dismissible
          dense
          text
          type="success"
        >
          Your request has been <strong>sent</strong> to our team. we will
          <strong>get in touch</strong> as soon as possible
        </v-alert>

        <v-alert
          v-model="showError"
          border="left"
          close-text="Close Alert"
          dismissible
          dense
          text
          type="warning"
        >
        Email must be a valid email
        </v-alert>
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
    title: "Contact Us",
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      alert: false,
      showError: false,
    };
  },
  methods: {
    async sendContact() {
      const payload = {
        full_name: this.name,
        email: this.email,
        message: this.message,
      };
      try {
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            payload.email
          )
        ) {
          const response = await api.contactForm(payload);
          if (response) {
            this.alert = true;
          }
        } else {
          this.showError = true;
        }
      } catch (error) {
        console.log(error);
        this.showError = true;
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
.image {
  position: relative;
  width: 100%;
  .contact-list-iinformation {
    color: #666666;
    padding: 20px;
    height: 100%;
  }
  .overlay {
    height: 100%;
    width: 100%;
    background: rgba(130, 187, 49, 0.22);
    position: absolute;
    padding: 40px;
  }
}

.contact_container {
  margin-top: 3rem;
  @include mq(md) {
    margin-top: 12rem;
    width: 100%;
    margin-bottom: 4rem;
  }

  .left {
    @include mq(md) {
      width: 50%;
    }
  }

  .right {
    height: 300px;
    width: 100%;
    margin-bottom: 2rem;
    @include mq(md) {
      width: 50%;
      height: unset;
      margin: 0;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .reach-us {
    margin-bottom: 30px;
    h3 {
      border-bottom: 4px solid #78bc27;
      width: 92px;
      padding-bottom: 5px;
      margin-bottom: 5px;
    }
  }
  .form-control {
    margin-top: 1rem;
    :not(:first-child) {
      margin-top: 2rem;
    }
    input,
    textarea {
      border: 1px solid #333;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      padding: 0px 20px;
      transition: all 0.5s;
      &:focus,
      &:active {
        border: 1px solid #78bc27 !important;
        outline: none;
      }
    }
    textarea {
      height: inherit !important;
    }
    button {
      text-transform: uppercase;
      background: #78bc27;
      color: white;
      font-weight: bold;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      padding: 0px 20px;
      transition: all 0.5s;
      &:hover,
      &:active {
        background: darken($color: #78bc27, $amount: 10%);

        border: none;
        outline: none;
      }
    }
  }
}
</style>
