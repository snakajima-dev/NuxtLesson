<template>
  <div class="contents-wrapper">
    <div class="register_wrapper">
      <h1 class="card-title">Register</h1>
      <form class="register-form" @submit.prevent="onClickSubmit">
        <div class="form-mailaddress">
          <input type="email" class="register-mailaddress"
                 placeholder="sample@mail.com" v-model="registerMailAddress" required>
          <p class="error-message">{{ Validation.mail }}</p>
        </div>
        <div class="form-password">
          <input type="password" class="register-password"
                 placeholder="password" v-model="registerPassword" required>
          <input type="password" class="password-confirm"
                 placeholder="confirm" v-model="registerPasswordConfirm" required>
          <p class="error-message">{{ Validation.password }}</p>
          <p class="error-message">{{ Validation.passwordConfirm }}</p>
        </div>
        <div class="form-send">
          <button type="submit">登録</button>
        </div>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  head() {
    return {title: "Account Register"}
  },
  data() {
    return {
      registerMailAddress: "",
      registerPassword: "",
      registerPasswordConfirm: "",
      Validation: {
        mail: "",
        password: "",
        passwordConfirm: ""
      }
    }
  },
  async asyncData({$axios}) {
    const items = await $axios.$get("http://localhost:5000/");
    console.log(items);
    return {items};
  },
  methods: {
    onClickSubmit() {
      let equalsResult = this.isEqualsPassword();
      console.log("ResultEquals:" + equalsResult);
      if (!equalsResult) return;
      this.$axios.$post("http://localhost:5000/registerUser",
        {
          registerMailAddress: this.registerMailAddress,
          registerPassword: this.registerPassword,
          registerPasswordConfirm: this.registerPasswordConfirm
        })
        .then(res => {
          console.log(res)
        })
        .catch((err) => console.log(err))
    },
    checkValidation() {

    },
    isEqualsPassword() {
      if (this.registerPassword !== this.registerPasswordConfirm) {
        this.Validation.passwordConfirm = "パスワードと確認パスワードが一致しません";
        console.log("FALSE");
        return false;
      } else {
        this.Validation.passwordConfirm = "";
        console.log("TRUE");
        return true;
      }
    }
  }
}
;
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

.register_wrapper {
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid rgb(87, 122, 237);
}

.card-title {
  margin: 10px 0 0 0;
  padding: 10px 15px;
  text-align: center;
  color: rgb(87, 122, 237);
  font-weight: 100;
}

.register-form {
  text-align: center;
}

.register-form input {
  width: 70%;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid rgb(87, 122, 237);
}

.register-form input:focus {
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
  color: rgb(87, 122, 237);
  font-size: 20px;
  padding: 5px 20px;
  border-radius: 5px;
  border: 1px solid rgb(87, 122, 237);
  background-color: white;
}

.form-send button:active {
  background-color: rgb(174, 188, 231);
}

.error-message {
  color: red;
  margin: 0;
}

</style>
