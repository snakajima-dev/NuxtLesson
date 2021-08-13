<template>
  <div class="contents-wrapper">
    <div class="login_wrapper">
      <h1 class="card-title">Login</h1>
      <form class="login-form" action="#">
        <div class="form-mailaddress">
          <input type="email" class="login-mailaddress" placeholder="sample@mail.com" v-model="loginMailAddress"
                 required>
        </div>
        <div class="form-password">
          <input type="password" class="login-password" placeholder="password" v-model="loginPassword" required>
          <input type="password" class="password-confirm" placeholder="confirm" v-model="loginPasswordConfirm" required>
        </div>
        <div class="for-get-password">
          <nuxt-link to="/register">
            <span>パスワードを忘れたら... &iquest;</span>
          </nuxt-link>
        </div>
      </form>
    </div>
    <div class="form-send">
      <button type="submit" @click="submitClick">送信</button>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {title: "Login"}
  },
  data() {
    return {
      loginMailAddress: null,
      loginPassword: null,
      loginPasswordConfirm: null
    }
  },
  async asyncData({$axios}) {
    const items = await $axios.$get("http://localhost:5000/")
    console.log(items)
    return {items};
  },
  methods: {
    submitClick: () => {
      console.log("ClickFunction{SubmitClick}")
    }
  }
};
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.contents-wrapper {
  height: 100%;
}

.login_wrapper {
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  background-color: rgb(87, 122, 237);
}

.card-title {
  margin: 10px 0 0 0;
  padding: 10px 15px;
  text-align: center;
  color: white;
}

.login-form {
  text-align: center;
}

.login-form input {
  width: 70%;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid black;
}

.login-form input:focus {
  outline: 0;
  background-color: #e3ffff;
}

.form-mailaddress {
  margin-bottom: 30px;
}

.form-password input {
  margin: 15px 0;
}

.for-get-password {
  width: 100%;
  text-align: center;
}

.for-get-password a {
  color: white;
  text-decoration: none;
}

.form-send {
  margin: 20px 0;
  text-align: center;
}

.form-send button {
  color: white;
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid rgb(87, 122, 237);
  background-color: rgb(87, 122, 237);
}

.form-send button:active {
  background-color: rgb(79, 93, 139);
}

</style>
