<template>
  <div id="right-caret">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.263246 7.01739H12.0352L6.63167 1.61388L7.98254 0.263L15.7018 7.9823L7.98254 15.7016L6.63167 14.3507L12.0352 8.94721H0.263246V7.01739V7.01739Z"
        fill="#78BC27"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
    },
    height: {
      type: String,
    },
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
#right-caret {
  cursor: pointer;
  margin-top: 5px;
  margin-left: 10px;
  &:hover {
    transition: all 0.4s;
    svg {
      g {
        path {
          fill: #00acee;
        }
      }
    }
  }
}
</style>
