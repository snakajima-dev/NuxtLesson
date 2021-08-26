<template>
  <div class="contents-wrapper">
    <div class="info-wrapper">
      <div class="round-view">
        <p class="round-count">XX</p>
        <span class="round-text">ROUND</span>
      </div>
      <p class="life">&#9679; &#9679; &#9679; </p>
    </div>
    <h1 class="result-title">Result</h1>
    <div class="guest-wrapper">
      <span class="guests-count">参加者数:8</span>
      <ul class="guest-names">
        参加者:
        <li class="guest-name">あいうえお</li>
        <li class="guest-name">かきくけこ</li>
        <li class="guest-name">さしすせそ</li>
      </ul>
    </div>
    <div class="button_wrapper">
      <nuxt-link class="button" to="#">次のターンへ</nuxt-link>
      <nuxt-link class="button" to="#">ゲームから抜ける</nuxt-link>
    </div>
  </div>
</template>

<style>

@import "static/css/root.css";

.contents-wrapper {
  min-height: 100vh;
  position: relative;
}

.info-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border-bottom-color) 1px solid;
  color: var(--main-font-color);
}

.round-view {
  display: flex;
  flex-direction: row;
  vertical-align: bottom;
}

.round-count {
  font-size: 6vw;
}

.round-text {
  margin-top: 5px;
}

.life {
  font-size: 10vw;
  margin-right: 10px;
}

.result-title {
  color: var(--main-font-color);
}

.guest-wrapper {
  display: flex;
  flex-direction: column;
  font-size: smaller;
  color: var(--main-font-color);
}

.guests-count, .guest-names {
  margin: 10px 0 0 10px;
}

.guest-names {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
}

.guest-name::after {
  content: ',';
}

.guest-name:last-child::after {
  content: none;
}

.button_wrapper {
  width: fit-content;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  margin: 50vw auto;
}

.button {
  text-align: center;
  padding: 10px 15vw;
  color: white;
  border-radius: 20px;
  border: none;
  text-decoration: none;
}

.button:first-child {
  background-color: var(--sub-color);
}

.button:last-child {
  background-color: var(--main-color);
}

</style>
