<template>
  <div class="auth-page">
    <div class="auth-page-wrapper">
      <img class="auth-page-logo" src="/images/logo.svg" alt="auth-page logo" />
    </div>
    <div class="auth-page__picture">
      <img src="/images/welcome/1.png" alt="auth-page-picture" />
    </div>
    <form>
      <el-input
        placeholder="Логин"
        v-model="login"
        class="auth-page__input"
      ></el-input>
      <el-input
        placeholder="Пароль"
        v-model="password"
        show-password
        class="auth-page__input"
      ></el-input>
      <el-button
        type="primary"
        @click="checkAuth"
        :disabled="!validation"
        class="width-full"
        >Авторизоваться</el-button
      >
    </form>
  </div>
</template>

<script>
export default {
  name: "Auth",

  data() {
    return {
      auth: false,
      password: "",
      login: ""
    };
  },

  created() {
    if (window.localStorage.getItem("auth-success")) {
      this.auth = true;
    }
  },

  methods: {
    checkAuth() {
      window.localStorage.setItem("auth-success", true);

      this.auth = true;
      this.$router.push({
        path: "/"
      });
    }
  },

  computed: {
    validation() {
      return !!this.login && !!this.password;
    }
  }
};
</script>

<style lang="scss">
.auth-page {
  height: 100vh;
  width: 100vw;
  background-color: #e4dfda;
  padding: 63px 16px 0;
  &__input {
    margin-bottom: 15px;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  .width-full {
    width: 100%;
    box-shadow: 0px 4px 17px rgba(0, 0, 0, 0.25);
  }
}
</style>
