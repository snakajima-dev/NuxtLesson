<template>
  <div class="contents-wrapper">
    <div class="info-wrapper">
      <div class="round-view">
        <p class="round-count">XX</p>
        <span class="round-text">ROUND</span>
      </div>
      <p class="life">&#9679; &#9679; &#9679; </p>
    </div>
    <div class="guest-wrapper">
      <span class="guests-count">参加者数:8</span>
      <ul class="guest-names">
        参加者:
        <li class="guest-name">あいうえお</li>
        <li class="guest-name">かきくけこ</li>
        <li class="guest-name">さしすせそ</li>
      </ul>
    </div>
    <form class="theme-setting-wrapper">
      <div class="theme-input">
        <input type="text" placeholder="トークテーマ:256文字以内"/>
      </div>
      <button type="submit" class="random-theme btn">トークテーマをランダムに設定する</button>
    </form>
    <button class="start-footer">
      ゲームスタート
    </button>
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

.theme-setting-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50vw;
}

.theme-input {
  width: 90%;
  margin: 0 auto;
}

.random-theme {
  width: fit-content;
  font-size: small;
  background-color: var(--main-color);
}

.start-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  color: white;
  border: none;
  background-color: var(--main-color);
}

.start-footer:active {
  color: var(--main-color);
  background-color: white;
  border: var(--main-color) 1px solid;
}

</style>
