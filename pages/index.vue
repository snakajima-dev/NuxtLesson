<template>
  <div class="contents-wrapper">
    <div class="title-wrapper">
      <h1 class="title">ito 非公式アプリ</h1>
    </div>
    <div class="button_wrapper">
      <nuxt-link class="button" to="#">親として開始する</nuxt-link>
      <nuxt-link class="button" to="#">参加者として参加する</nuxt-link>
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
@import "static/css/root.css";

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

.button_wrapper {
  width: fit-content;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}

.button {
  text-align: center;
  padding: 10px 30px;
  color: white;
  border-radius: 20px;
  border: none;
  text-decoration: none;
}

.button:first-child {
  background-color: var(--main-color);
}

.button:last-child {
  background-color: var(--sub-color);
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

</style>
