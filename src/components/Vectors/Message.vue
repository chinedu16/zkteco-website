<template>
  <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.9287 0H1.07159L15.0002 11.4729L29.0862 0.0321429C29.0347 0.0170759 28.982 0.00634068 28.9287 0Z" fill="#78BC27"/>
<path d="M15.676 13.6885C15.2813 14.0117 14.7133 14.0117 14.3186 13.6885L0 1.89207V20.3571C0 20.9488 0.479694 21.4285 1.07145 21.4285H28.9285C29.5203 21.4285 30 20.9488 30 20.3571V2.05065L15.676 13.6885Z" fill="#78BC27"/>
</svg>

</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40,
    },
  },

  computed: {
    getWidth() {
      return this.width;
    },

    getHeight() {
      return Math.ceil((this.getWidth / 48) * 48);
    },
  },
};
</script>
