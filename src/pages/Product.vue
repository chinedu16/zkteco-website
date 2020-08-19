<template>
  <layout>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="about-zk flex flex-col lg:flex-row justify-between">
        <div class=" lg:w-2/5">
          <div
            class="flex items-center mb-10 mt-10 justify-center w-64 h-16 border-page text-color-zkteco-green font-black text-xl"
          >
            PRODUCTS
          </div>
        </div>
      </section>
      <section>
        <div class="md:flex justify-between">
          <div class="md:w-1/5 md:m-0 mb-10">
            <div>
              <div class="border">
                <v-card class="mx-auto" width="300">
                  <v-list>
                    <v-list-group>
                      <template v-slot:activator>
                        <v-list-item-title
                          >Visible Light Product</v-list-item-title
                        >
                      </template>

                      <v-list-group sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Andriod</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                      <v-list-group no-action sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Linux</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>

                      <v-list-group sub-group no-action>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>IOS</v-list-item-title>
                          </v-list-item-content>
                        </template>
                        <v-list-item v-for="(crud, i) in cruds" :key="i">
                          <v-list-item-title
                            v-text="crud[0]"
                          ></v-list-item-title>
                        </v-list-item>
                      </v-list-group>
                    </v-list-group>
                  </v-list>
                  <v-list>
                    <v-list-group>
                      <template v-slot:activator>
                        <v-list-item-title
                          >Body Temperature and Mask
                          Detection</v-list-item-title
                        >
                      </template>
                    </v-list-group>
                  </v-list>

                  <v-list>
                    <v-list-group>
                      <template v-slot:activator>
                        <v-list-item-title
                          >Premium Product Line</v-list-item-title
                        >
                      </template>
                      <v-list-group sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Green Label</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                      <v-list-group no-action sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>BioPro Series</v-list-item-title>
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                    </v-list-group>
                  </v-list>

                  <v-list>
                    <v-list-group>
                      <template v-slot:activator>
                        <v-list-item-title>Time Attendance</v-list-item-title>
                      </template>
                      <v-list-group sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title
                              >Biometric T&A Device</v-list-item-title
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                      <v-list-group no-action sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title
                              >RFID Attendance</v-list-item-title
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                      <v-list-group sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title
                              >Portable Device</v-list-item-title
                            >
                          </v-list-item-content>
                        </template>
                      </v-list-group>
                    </v-list-group>
                  </v-list>

                  <v-list>
                    <v-list-group>
                      <template v-slot:activator>
                        <v-list-item-title>Access Control</v-list-item-title>
                      </template>

                      <v-list-group no-action sub-group>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title
                              >Standalone Device</v-list-item-title
                            >
                          </v-list-item-content>
                        </template>

                        <v-list-item>
                          <v-list-item-title>Fingerprint</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>Multi-Biometric</v-list-item-title>
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title>RFID</v-list-item-title>
                        </v-list-item>
                      </v-list-group>

                      <v-list-group sub-group no-action>
                        <template v-slot:activator>
                          <v-list-item-content>
                            <v-list-item-title>Control Panel</v-list-item-title>
                          </v-list-item-content>
                        </template>
                        <v-list-item>
                          <v-list-item-title
                            >Elevator Control Panel</v-list-item-title
                          >
                        </v-list-item>
                        <v-list-item>
                          <v-list-item-title
                            >Access Control Panel</v-list-item-title
                          >
                        </v-list-item>
                      </v-list-group>
                    </v-list-group>
                  </v-list>
                </v-card>
              </div>
            </div>
          </div>
          <div class="md:w-9/12">
            <div>
              <div
                class="flex mb-10 flex-col md:grid md:grid-cols-3 lg:grid-cols-3 row-gap-12"
              >
                <div class="flex justify-center md:m-0" v-for="product in products" :key="product.id">
                  <div class="flex product-container w-full md:w-4/5 flex-col text-center">
                    <g-image
                      class=""
                      width="201"
                      height="105"
                      src="../assets/D2S 1.png"
                    ></g-image>
                    <g-link to="/product-details/">
                      <v-btn class="mt-8">DSS</v-btn>
                    </g-link>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <v-pagination color="#82BB31" circle v-model="page" :length="5"></v-pagination>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </layout>
</template>

<script>
import Office from "../components/Vectors/Office";
import Message from "../components/Vectors/Message";
import Call from "../components/Vectors/Call";
export default {
  components: {
    Office,
    Message,
    Call,
  },

  data() {
    return {
      page: 1,
      admins: [["Management", "people_outline"], ["Settings", "settings"]],
      cruds: [
        ["Create", "add"],
        ["Read", "insert_drive_file"],
        ["Update", "update"],
        ["Delete", "delete"],
      ],
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
};
</script>

<style lang="scss" scoped>
.product-container {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  height: 260px;
  display: flex !important;
  justify-content: center;
  align-items: center;
  transition: 0.7s;

  &:hover {
    box-shadow: 0px 4px 4px rgba(130, 187, 49, 0.3);
  }
}

.v-btn {
  background-color: #82bb31 !important;
  border-radius: 5px;
  color: white !important;
}

.v-list .v-list-item--active,
.v-list .v-list-item--active .v-icon {
  color: #82bb31 !important;
}


</style>
