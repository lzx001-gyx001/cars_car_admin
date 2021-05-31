<template>
  <el-row class="container" id="login">
    <!-- canvas -->
    <div class="canvaszz" :style="{ height: screenHeight + 'px' }"></div>
    <canvas id="canvas" :style="{ height: screenHeight + 'px' }"></canvas>
    <!-- 表单 -->
    <div class="center">
      <el-row class="row-in">
        <el-col :span="24">
          <el-card class="formWrap">
            <!-- 顶部按钮 -->
            <el-row class="row-in">
              <el-col :span="24" class="row-in">
                <el-button type="success" @click="handleTopBtnClick('login')"
                  >登录</el-button
                >
                <el-button type="success" @click="handleTopBtnClick('reg')"
                  >注册</el-button
                >
              </el-col>
            </el-row>
            <el-form
              style="width: 350px"
              :rules="rules"
              :model="formData"
              ref="loginForm"
              size="medium"
            >
              <!-- 账号 -->
              <el-form-item prop="email">
                <label>账号:</label>
                <el-input v-model="formData.email" clearable></el-input>
              </el-form-item>
              <!-- 密码 -->
              <el-form-item prop="pwd">
                <label>密码:</label>
                <el-input
                  type="text"
                  v-model="formData.password"
                  clearable
                ></el-input>
              </el-form-item>
              <!-- 重复密码 -->
              <el-form-item prop="repwd" v-if="!isLogin">
                <label>重复密码:</label>
                <el-input
                  type="password"
                  v-model="formData.rePassword"
                  autocomplete="off"
                  clearable
                ></el-input>
              </el-form-item>
              <!-- 用户名 -->
              <el-form-item prop="repwd" v-if="!isLogin">
                <label>重复密码:</label>
                <el-input
                  type="text"
                  v-model="formData.username"
                  autocomplete="off"
                  clearable
                ></el-input>
              </el-form-item>

              <el-form-item v-if="!isLogin" prop="sms" style="margin-top: 38px">
                <el-row :gutter="20">
                  <el-col :span="15">
                    <el-input
                      clearable
                      type="text"
                      v-model="formData.code"
                    ></el-input>
                  </el-col>
                  <el-col :span="9">
                    <el-button
                      class="submit"
                      :disabled="!this.smsIsDisabled"
                      @click="handleGetCode"
                      >{{ smsBtnText }}</el-button
                    >
                  </el-col>
                </el-row>
              </el-form-item>

              <!-- 登录按钮 -->
              <el-button
                type="primary"
                @click="submitForm"
                class="submit"
                style="margin-top: 30px"
                >{{ btnText }}</el-button
              >
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import {
  validateUsername,
  validateLoginPWD,
  filterSpecialCharacters,
} from "@/utils/validate";
import { getCode, reg, localLogin } from "@/api/login";
import RunCanvas from "./bg_canvas.js";
// import { login } from "../../service/loginService";
export default {
  name: "Login",
  components: {},
  computed: {
    btnText() {
      //登录注册按钮文字显示
      return this.isLogin == true ? "登录" : "注册";
    },
    smsIsDisabled() {
      //获取验证码按钮是否禁用
      return validateUsername(filterSpecialCharacters(this.formData.email));
    },
  },
  data() {
    //验证账号
    let validateLoginId = (rule, value, callback) => {
      this.formData.email = filterSpecialCharacters(value); //过滤特殊字符
      value = this.formData.email;
      if (value === "") {
        callback(new Error("请输入账号"));
      } else if (!validateUsername(value)) {
        callback(new Error("账号格式有误"));
      } else {
        callback();
      }
    };
    //验证密码
    let validatePwd = (rule, value, callback) => {
      this.formData.pwd = filterSpecialCharacters(value); //过滤特殊字符
      value = this.formData.password;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    //验证确认密码
    let validateRepwd = (rule, value, callback) => {
      this.formData.rePassword = filterSpecialCharacters(value); //过滤特殊字符
      value = this.formData.rePassword;
      // value = filterSpecialCharacters(value); //过滤特殊字符
      if (!value) {
        callback(new Error("确认密码不能为空"));
      } else if (value != this.formData.pwd) {
        callback(new Error("两次密码输入不一致"));
      } else {
        callback();
      }
    };
    return {
      screenHeight: window.innerHeight, // 屏幕高度
      lock: true, //获取验证码上锁
      smsBtnText: "获取验证码", //获取验证码按钮文本
      timer: null, //存放获取验证码的定时器
      isLogin: true, //登录还是注册
      formData: {
        email: "123123@qq.com", //595469645@qq.com
        password: "123123", //admin123
        rePassword: "", //admin123
        username: "", //用户名
        code: "",
      },
      rules: {
        email: [{ validator: validateLoginId, trigger: "blur" }],
        pwd: [{ validator: validatePwd, trigger: "blur" }],
        repwd: [{ validator: validateRepwd, trigger: "blur" }],
      },
    };
  },
  methods: {
    //提交按钮
    async submitForm() {
      //本地登录
      let data = {
        email: this.formData.email,
        password: this.formData.password,
      };
      try {
        let res = await this.$store.dispatch("user/localLoginAction", data);
        if (res.code == 0 && res.data) {
          //res.code 本地接口  res.status渡一接口
          // console.log("登录成功",res);
          console.log("跳转");
          this.$router.push({
            name:"Control"
          });
        }
      } catch (error) {
        console.log(error);
      }
    },
    resetForm() {
      this.$refs["loginForm"].resetFields();
    },
    handleTopBtnClick(type) {
      this.isLogin = type == "login" ? true : false;
      this.$refs["loginForm"].resetFields();
    },
    //获取验证码
    handleGetCode() {
      if (!this.lock) {
        return;
      }
      this.lock = false;
      clearInterval(this.timer);
      this.changeSmsBtnInnerText(() => {
        this.lock = true;
      });
      let data = {
        email: this.formData.email,
      };
      console.log(data);
      getCode(data)
        .then((res) => {
          console.log("****", res);
        })
        .catch((err) => {
          console.log("******", err);
        });
    },
    //控制获取验证码按钮的文字
    changeSmsBtnInnerText(callback) {
      this.smsBtnText = "发送中";

      let second = 3;
      this.timer = setInterval(() => {
        let str = "发送中";
        if (second <= 0) {
          clearInterval(this.timer);
          this.smsBtnText = "获取验证码";

          callback();
          return;
        }
        second--;
        this.smsBtnText = str + second;
      }, 1000);
    },
  },
  created() {},
  mounted() {
    window.onresize = function () {
      // 定义窗口大小变更通知事件
      this.screenHeight = document.documentElement.clientHeight; // 窗口高度
    };
    // RunCanvas(window, document)();//canvas启动
  },
  watch: {
    screenHeight: function (val) {
      // 监听屏幕高度变化
      var oIframe = document.getElementById("login");
      oIframe.style.height = Number(val) + "px"; // '120'是页面布局调整，可去除
    },
  },
};
</script>
<style lang="scss" scopted >
.container {
  position: relative;
  background-image: url("../../assets/bg.png");
  background-color: #24292e;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100vh;
  /* background-color: #777; */
}
.row-in {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.submit {
  box-sizing: border-box;
  display: block;
  width: 100%;
  /* margin-top: 30px; */
}
.center {
  z-index: 20;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.formWrap {
  background-color: transparent !important;
  color: #fff !important;
  box-shadow: 1px 1px 3px 1px #fff !important;
  padding-bottom: 10px;
}
canvas {
  width: 100%;
  height: auto /*默认全屏显示 可自己设置高度640px*/;
  display: inline-block;
  vertical-align: baseline;
  position: absolute;
  z-index: -1;
}
.canvaszz {
  width: 100%;
  // background: url("../../assets/bg.png") no-repeat;
  // height: 640px;
  position: absolute;
  z-index: 10;
  filter: alpha(opacity=40);
  -moz-opacity: 0.4;
  -khtml-opacity: 0.4;
  opacity: 0.4;
}
</style>