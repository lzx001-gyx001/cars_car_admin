<template>
  <div id="main" :class="{ close: this.isCollapse }">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "mainSpace",
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse,
    }),
    routerList() {
      return this.$router.options.routes;
    },
  },
};
</script>

<style scoped>
#main {
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 200px;
  /* background-color: rgb(240, 229, 229); */
  box-sizing: border-box;
  padding: 20px;
  padding-bottom: 0;
  transition: all 0.3s ease-in;
  overflow: auto;
}
.inner {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
}

#main.close {
  left: 64px;
}
</style>