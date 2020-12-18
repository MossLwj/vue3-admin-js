<template>
  <div class="account">
    <div class="form-wrap">
      <a-form
        name="custom-validation"
        ref="ruleForm"
        @finish="handleFinish"
        :model="account_form"
        :rules="rules"
      >
        <a-form-item name="username">
          <label>登录名</label>
          <a-input
            v-model:value="account_form.username"
            type="text"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="password">
          <label>密码</label>
          <a-input
            v-model:value="account_form.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item name="passwords">
          <label>确认密码</label>
          <a-input
            v-model:value="account_form.passwords"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item>
          <a-row :gutter="15">
            <a-col :spam="14">
              <label>验证码</label>
              <a-input
                maxLength="6"
                v-model:value="account_form.code"
                type="text"
                autocomplete="off"
              />
            </a-col>
            <a-col :span="10">
              <a-button
                @click="getCode()"
                type="primary"
                block
                :loading="button_loading"
                :disable="button_disable"
                >{{ button_text }}
              </a-button>
            </a-col>
          </a-row>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" html-type="submit" block>
            登录
          </a-button>
        </a-form-item>
      </a-form>
      <div class="text-center fs-12">
        <a href="" class="color-white">忘记密码</a>|
        <router-link to="/register">注册</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { message } from "ant-design-vue";
import { verifyPhone, verifyPassword, verifyCode } from "@/utils/verification";
import { reactive, toRefs } from "vue";

export default {
  name: "Register",
  setup() {
    const checkUsername = async (rule, value) => {
      if (!value) {
        return Promise.reject("请输入用户名");
      }
      if (!verifyPhone(value)) {
        return Promise.reject("请输入11位手机号码");
      } else {
        return Promise.resolve();
      }
    };

    const checkPassword = async (rule, value) => {
      const passwords = formConfig.account_form.passwords;

      if (!value) {
        return Promise.reject("请输入密码");
      }
      if (!verifyPassword(value)) {
        return Promise.reject("请输入6到20位的数字+英文");
      }
      if (passwords !== value) {
        return Promise.reject("输入的两次密码不一致");
      } else {
        return Promise.resolve();
      }
    };

    const checkPasswords = async (rule, value) => {
      if (!value) {
        return Promise.reject("请输入密码");
      }
      if (!verifyPassword(value)) {
        return Promise.reject("请输入6到20位的数字+英文密码");
      } else {
        return Promise.resolve();
      }
    };

    const checkCode = async (rule, value) => {
      if (!value) {
        return Promise.reject("请输入验证码");
      }
      if (!verifyCode(value)) {
        return Promise.reject("请输入6位的数字+英文验证码");
      } else {
        return Promise.resolve();
      }
    };

    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      },
      account_form: {
        username: "",
        password: "",
        passwords: "",
        code: ""
      },
      rules: {
        username: [{ validator: checkUsername, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        passwords: [{ validator: checkPasswords, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }]
      }
    });

    const codeConfig = reactive({
      button_text: "获取验证码",
      button_loading: false,
      button_disable: false,
      sec: 60,
      timer: null
    });

    const data = toRefs(formConfig);
    const code = toRefs(codeConfig);

    const handleFinish = () => {
      alert(111);
    };

    //  获取验证码
    const getCode = () => {
      //  校验用户名是否填写
      if (!formConfig.account_form.username) {
        message.info("请输入用户名");
      }

      //  如果定时器存在则清空定时器
      codeConfig.timer && clearInterval(codeConfig.timer);

      codeConfig.timer = setInterval(() => {
        const s = codeConfig.sec--;
        codeConfig.button_text = s + "秒";
        if (s === 0) {
          clearInterval(codeConfig.timer);
          codeConfig.button_text = "重新获取";
        }
      }, 1000);
    };

    return {
      ...data,
      ...code,
      getCode,
      handleFinish
    };
  }
};
</script>
<style lang="scss">
@import "styles.scss";
</style>
