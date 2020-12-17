<template>
  <div class="account">
    <div class="form-wrap">
      <a-form name="custom-validation" ref="ruleForm">
        <a-form-item>
          <label>登录名</label>
          <a-input type="text" autocomplete="off" />
        </a-form-item>
        <a-form-item>
          <label>密码</label>
          <a-input type="password" autocomplete="off" />
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
import { reactive, toRefs } from "vue";

export default {
  name: "Login",
  setup() {
    const formConfig = reactive({
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
    });

    const data = toRefs(formConfig);

    return {
      ...data
    };
  }
};
</script>
<style lang="scss">
@import "styles.scss";
</style>
