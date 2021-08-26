<template>
  <div class="contents-wrapper">
    <div class="title-wrapper">
      <h1 class="title">ito 非公式アプリ</h1>
    </div>
    <form class="join-wrapper">
      <div class="password-wrapper">
        <span class="ps-text">参加者にパスワードを共有してください</span>
        <p class="password">A123456789</p>
      </div>
      <div class="name-wrapper">
        <input type="text" class="name" placeholder="ユーザー名:30文字以内">
      </div>
      <button class="start-btn btn" type="submit">開始する</button>
    </form>
  </div>
</template>


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

.join-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 85%;
  margin: 0 auto;
  padding: 10px 10px;
  border-radius: 10px;
  box-shadow: rgba(128, 128, 128, 0.27) 3px 3px 8px 2px;
}

.password-wrapper {
  width: 90%;
  text-align: center;
  border-bottom: var(--main-font-color) 1px solid;
}

.ps-text {
  font-size: smaller;
  color: var(--main-font-color);
}

.password {
  font-size: 8vw;
  font-weight: 900;
  color: var(--border-bottom-color);
}

.name-wrapper {
  width: 90%;
}

.name:focus {
  background-color: rgb(243, 255, 255);
}

.start-btn {
  background-color: var(--main-color);
}

</style>
