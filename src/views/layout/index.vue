<template>
  <div>
    <topBar></topBar>
    <navBar></navBar>
    <mianBar></mianBar>
  </div>
</template>

<script>
import navBar from "./components/nav";
import topBar from "./components/topBar";
import mianBar from "./components/main";
export default {
  components: {
    navBar,
    topBar,
    mianBar,
  },
};
</script>

<style>
</style>