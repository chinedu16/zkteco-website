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
        d="M15.7368 8.98258H3.96482L9.36833 14.3861L8.01746 15.737L0.298157 8.01767L8.01746 0.298371L9.36833 1.64925L3.96482 7.05276H15.7368V8.98258Z"
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
  margin-top: 2px;
  margin-right: 5px;
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
