<template>
  <div class="contents-wrapper">
    <div class="title-wrapper">
      <h1 class="title">ito 非公式アプリ</h1>
    </div>
    <div class="login_wrapper">
      <form class="login-form" action="#">
        <input type="text" maxlength="30"
               class="login-mailaddress"
               placeholder="ユーザー名:30文字以内"
               v-model="loginMailAddress"
               required>
        <input type="password"
               class="login-password"
               placeholder="パスワード:30文字以内"
               v-model="loginPassword" required>
        <div class="send">
          <button type="submit" @click="submitClick">参加する</button>
        </div>
      </form>
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
  margin: 0;
}

.contents-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.title-wrapper {
  text-align: center;
  color: gray;
  margin: 25vw 0;
}

.login_wrapper {
  margin: 0 auto;
  padding: 40px 0;
  width: 90%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 2px 3px 15px 2px;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.login_wrapper input {
  display: block;
  margin: 20px auto;
  padding: 5px 20px;
  width: 70%;
  border: none;
  border-bottom: 1px solid gray;
  outline: none;
}

.login_wrapper input:focus {
  border-bottom: #0b92ef solid 1px;
}

.send {
  margin: 20px auto 0 auto;
}

.send button {
  padding: 10px 60px;
  color: white;
  background-color: #202644;
  border-radius: 20px;
  border: none;
}

.send button:active {
  color: #202644;
  background-color: white;
  border: #202644 solid 1px;
}

</style>
