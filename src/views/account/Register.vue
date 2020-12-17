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
        <a-form-item>
          <label>密码</label>
          <a-input
            v-model:value="account_form.password"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item>
          <label>确认密码</label>
          <a-input
            v-model:value="account_form.passwords"
            type="password"
            autocomplete="off"
          />
        </a-form-item>
        <a-form-item>
          <label>验证码</label>
          <a-input
            v-model:value="account_form.code"
            type="password"
            autocomplete="off"
          />
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
import { checkPhone } from "@/utils/verification";
import { reactive, toRefs } from "vue";

export default {
  name: "Register",
  setup() {
    const checkUsername = async (rule, value) => {
      if (!value) {
        return Promise.reject("请输入用户名");
      }
      if (!checkPhone(value)) {
        return Promise.reject("请输入11位手机号码");
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
        username: [{ validator: checkUsername, tigger: "change" }]
      }
    });

    const data = toRefs(formConfig);

    const handleFinish = () => {
      alert(111);
    };

    return {
      ...data,
      handleFinish
    };
  }
};
</script>
<style lang="scss">
@import "styles.scss";
</style>
