<template>
  <div id="topBar" :class="{ close: this.isCollapse }">
    <el-row>
      <el-col>
        <el-container class="leftWrap">
          <div class="menuWrap" @click="handleClick">
            <!-- 折叠图标 -->
            <svg-icon iconClass="Collapse"></svg-icon>
          </div>
          <!-- 面包屑导航 -->
          <el-breadcrumb separator="/" class="bread">
            <el-breadcrumb-item :to="{ path: '/index' }"
              >首页</el-breadcrumb-item
            >
            <el-breadcrumb-item
              >{{ currentRoute.name || 404 }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-container>
      </el-col>
    </el-row>

    <ul class="userWrap">
      <li class="userItem1">
        {{
          this.$store.state.user.userInfo.email ||
          this.$store.state.user.userInfo.role||1
        }}
      </li>

      <li class="userItem" @click="logOut">登出</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  namespaced: "topBar",
  data() {
    return {
      breadItemName: this.$route.meta.name,
    };
  },
  computed: {
    ...mapState({
      isCollapse: (state) => state.app.isCollapse,
    }),
    currentRoute() {
      return {
        name: this.$route.meta.name,
      };
    },
  },
  methods: {
    handleClick() {
      this.$store.commit("app/setIsCollapse");
    },
    logOut() {
      console.log(123123123123123);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
#topBar {
  z-index: 1000;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 200px;
  right: 0;
  height: 70px;
  line-height: 70px;
  padding: 0 20px;
  background-color: #fff;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
  transition: all 0.3s ease-in;
  & .leftWrap {
    align-items: center;
  }
  & .menuWrap {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    -o-transition: all 0.5s;
  }

  & .menuWrap:hover {
    -webkit-transform: scale(1.5) rotate(180deg);
    -moz-transform: scale(1.5) rotate(1800deg);
    -o-transform: scale(1.5) rotate(1800deg);
  }

  .userWrap {
    position: relative;
    cursor: pointer;
    margin-right: 20px;
    // background-color: #fff;
    box-sizing: border-box;
    padding: 0 20px;

    & .userItem {
      display: none;
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      height: 70px;
      background: #e1e2e3;
      text-align: center;
      transition: all 0.5s linear;
      border: 1px solid #abcdef;
      border-top: none;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      box-sizing: border-box;
    }
  }
  // .userWrap:hover .userItem1 {
  //   background-color: #ddd;
  //   transition: all 2s ease;
  // }
  .userWrap:hover .userItem {
    display: block;
  }
}

#topBar.close {
  left: 64px;
}
</style>