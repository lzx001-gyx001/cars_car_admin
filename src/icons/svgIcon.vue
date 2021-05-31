<template>
  <!--  -->
  <svg :style="{color}" :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "svgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    color: {
      type: String,
      default: "#fff"
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return `svg-icon ${this.className}`;
      } else {
        return `svg-icon`;
      }
    }
  }
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  font-size: 20px;
  margin-right: 10px;
  fill: currentColor;
  color: #000;
  vertical-align: middle;
}
</style>