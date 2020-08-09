<template>
  <SemiLayout>
    <div class="container px-4 py-5 lg:py-5 lg:px-10">
      <section class="about-zk flex flex-col lg:flex-row justify-between">
        <div class=" lg:w-2/5">
          

          <div class="contact-box w-full mb-10 p-10 lg:w-2/6 lg:absolute text-white">
            <div>
              <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" class="flex mb-7">
                <Office />
                <div class="ml-6">
                  <div class="font-bold text-xl">Office address:</div>
                  <span
                    >64, Adetokunbo Ademola street, Victoria Island Lagos.</span
                  >
                </div>
              </div>
              <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" class="flex mb-7">
                <Message />
                <div class="ml-6">
                  <div class="font-bold text-xl">Call for enquiries:</div>
                  <span
                    >Call.: (234)-817-5555-512, (234)-817-5555-513 WhatsApp
                    only: (234)-817-5555-514</span
                  >
                </div>
              </div>
              <div data-aos="fade-left" data-aos-easing="ease-out-cubic" data-aos-duration="4000" class="flex mb-7">
                <Call />
                <div class="ml-6">
                  <div class="font-bold text-xl">Email address:</div>
                  <span
                    >sales@zkteco-wa.com If the problem is not solved properly,
                    please send a mail to: service@zkteco-wa.com</span
                  >
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
    SemiLayout
	}
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
