<template>
  <div id="facebook">
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.3443 3.05176e-05H1.65571C0.741193 3.05176e-05 0 0.741221 0 1.65574V28.3442C0 29.2586 0.741193 30 1.65571 30H16.024V18.3824H12.1144V13.8548H16.024V10.5159C16.024 6.64107 18.3906 4.53114 21.8472 4.53114C23.503 4.53114 24.9261 4.65433 25.3407 4.70941V8.75887L22.9434 8.75999C21.0635 8.75999 20.6995 9.65326 20.6995 10.9641V13.8548H25.1829L24.5992 18.3824H20.6995V30H28.3443C29.2587 30 30 29.2586 30 28.3442V1.65574C30 0.741221 29.2587 3.05176e-05 28.3443 3.05176e-05Z"
        :fill="color"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40,
    },
    height: {
      type: Number,
      default: 40,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
#facebook {
  cursor: pointer;
  &:hover {
    transition: all .4s;
    svg {
      path {
        fill: #3b5998;
      }
    }
  }
}
</style>
