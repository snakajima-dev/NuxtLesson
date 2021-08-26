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
    <div class="game-screen">
      <h1 class="talk-theme">こわいもの</h1>
      <div class="number-card">100</div>
    </div>
    <div class="out-footer">
      どぼん!
    </div>
  </div>
</template>

<style>

@import "static/css/root.css";

.contents-wrapper {
  min-height: 100vh;
  position: relative;
  background-color: var(--main-color);
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

.game-screen {
  color: white;
  text-align: center;
}

.talk-theme {
  font-size: 10vw;
}

.number-card {
  width: fit-content;
  margin: 0 auto;
  padding: 25vw 8vw;
  font-size: 25vw;
  border: white 2px solid;
  border-radius: 10px;
}

.out-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 15px 0;
  text-align: center;
  color: var(--main-color);
  border: none;
  background-color: white;
  box-sizing: border-box;
}

.out-footer:active {
  color: white;
  background-color: var(--main-color);
  border: white 1px solid;
}

</style>
