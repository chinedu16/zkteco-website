<template>
  <semiLayout>
    <!-- <div class="pt-8 md:pt-16">
      <h1 class="text-center font-bold text-4xl text-ui-primary">Oh no! There is nothing here.</h1>
    </div>
    <div class="mb-10 flex items-center justify-center">
      <g-link to="/" class="font-bold border-b border-ui-primary text-xl">Go back</g-link>.
    </div> -->
    <div id="four_o_four" class="flex justify-center align-center">
      <div class="breathing">
        <section class="flex justify-center">
          
          <div class="error-container">
            <fourOfour/>
            <h1>Oops!</h1>
            <h5>Looks like you got lost</h5>
            <div class="">
              The page you are looking for does not exist.
              <g-link to="/">Go back</g-link> to choose a new direction
            </div>
            <g-link to="/"><button>BACK</button></g-link>
          </div>
        </section>
      </div>
    </div>
  </semiLayout>
</template>

<script>
import semiLayout from "../layouts/SemiDefault";
import fourOfour from "../components/Vectors/404";
export default {
  components: {
    semiLayout,
    fourOfour
  },
  metaInfo: {
    title: "404 - Nothing here",
  },
};
</script>

<style lang="scss">
#four_o_four {
  .error-container {
    margin-top: 10rem;
    margin-bottom: 3rem;
    text-align: center;
    a {
      outline: none;
    }

    button {
      margin-top: 60px;
      background: #659a18;
      border-radius: 4px;
      height: 69px;
      width: 130px;
      font-weight: bold;
      color: white;
      &:focus {
        outline: none;
      }
      &:hover {
        background: darken($color: #659a18, $amount: 10%);
      }
    }
    h1 {
      font-weight: 600;
      font-size: 64px;
    }
    h5 {
      font-weight: 500;
      font-size: 24px;
      margin-top: 30px;
    }
    div {
      margin-top: 19px;
      font-weight: 500;
      font-size: 15px;
    }
  }
}
</style>
