<template>
  <div id="consultation">
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 42.8224H40V18H21V42.8224ZM22.4544 19.4544H38.5456V41.368H22.4544V19.4544Z"
        fill="white"
      />
      <path d="M26.0923 20.921H34.9078V22.3755H26.0923V20.921Z" fill="white" />
      <path d="M23.9089 23.842H37.0911V25.2964H23.9089V23.842Z" fill="white" />
      <path d="M27.5479 26.763H37.0911V28.2174H27.5479V26.763Z" fill="white" />
      <path d="M27.5479 29.684H37.0911V31.1384H27.5479V29.684Z" fill="white" />
      <path d="M27.5479 32.605H37.0911V34.0594H27.5479V32.605Z" fill="white" />
      <path d="M27.5479 35.526H37.0911V36.9804H27.5479V35.526Z" fill="white" />
      <path d="M23.9089 26.763H26.0923V28.2174H23.9089V26.763Z" fill="white" />
      <path d="M23.9089 29.684H26.0923V31.1384H23.9089V29.684Z" fill="white" />
      <path d="M23.9089 32.605H26.0923V34.0594H23.9089V32.605Z" fill="white" />
      <path d="M23.9089 35.526H26.0923V36.9804H23.9089V35.526Z" fill="white" />
      <circle cx="30" cy="30" r="29.5" stroke="white" />
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

<style lang="scss">
#consultation {
  cursor: pointer;
  &:hover {
    svg {
      circle {
        stroke: #78bc27;
      }
      path {
        z-index: 40;
        fill: #78bc27;
      }
    }
  }
}
</style>
