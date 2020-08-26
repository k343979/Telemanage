<template>
  <div class="Card">
    <div class="Card-box">
      <div class="Card-title">
        <h1 class="Card-logo">未提出BOX</h1>
      </div>
      <div class="list">
        <p>{{ $store.state.tasks }}</p>
      </div>
    </div>
    <div class="Card-box">
      <div class="Card-title">
        <h1 class="Card-logo">提出BOX</h1>
      </div>
      <div class="list">
        <p>{{ $store.state.tasks }}</p>
      </div>
    </div>
    <div class="Card-box">
      <div class="Card-title">
        <h1 class="Card-logo">完了BOX</h1>
      </div>
      <div class="list">
        <p>{{ $store.state.tasks }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Card {
  display: flex;
  width: 1230px;
  justify-content: space-around;
}

.Card-box {
  width: 27%;
  height: 580px;
  border: 1px solid #000;
  margin-top: 50px;
}

.Card-title {
  font-size: 20px;
  background: #444;
  color: #ffffff;
  width: 100%;
  height: 70px;
  text-align: center;
  line-height: 70px;
}
</style>

