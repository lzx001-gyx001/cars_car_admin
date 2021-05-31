<template>
  <div id="navBar" :class="{ close: this.isCollapse }">
    <el-menu
      class="navBarMenu"
      :default-active="$route.path"
      :collapse="$store.state.app.isCollapse"
      background-color="#344a5f"
      text-color="#fff"
      active-text-color="#fff"
      router
    >
      <!--  background-color="#344a5f"
        text-color="#fff"
        active-text-color="#fff" -->
      <template v-for="(item, index) in routerList">
        <el-submenu :index="index + ''" :key="item.id" v-if="!item.meta.hidden">
          <!-- 1级菜单 -->
          <template slot="title">
            <svg-icon :iconClass="item.name"></svg-icon>
            <span ref="spanMenu" slot="title">{{ item.meta.name }}</span>
          </template>
          <!-- 子级菜单 -->
          <template v-for="subItem in item.children">
            <el-menu-item
              v-if="!subItem.meta.hidden"
              :index="subItem.path"
              :key="subItem.id"
              :route="subItem.path"
              >{{ subItem.meta.name }}</el-menu-item
            >
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "navBar",
  components: {},
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse,
    }),
    routerList() {
      return this.$router.options.routes
    },
  },
  data() {
    return {};
  },
  // watch: {
  //   isCollapse: function (newVal, oldVal) {
  //     //关闭是true
  //     if (newVal) {
  //       //关闭
  //       console.log(this.$refs["subSpanMenu"]);
  //       this.$refs["spanMenu"].forEach((item) => {
  //         item.innerText = "";
  //       });
  //     }
  //     // this.$refs.spanMenu.display = !this.refs.spanMenu.display
  //   },
  // },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
#navBar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 200px;
  /* overflow: hidden; */
  background-color: #344a5f;
  transition: width 0.3s ease-in;
  // transition-delay: .3s;
}
#navBar.close {
  width: 64px;
}

</style>
