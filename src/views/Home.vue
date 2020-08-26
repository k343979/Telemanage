<template>
  <div id="Home">
    <div class="home-flex">
      <Side></Side>
      <Card></Card>
    </div>
  </div>
</template>
<script>
import Side from "../components/Side"
import Card from "../components/Card";
export default {
  components: {
    Side,
    Card
  }
};
</script>

<style>
.home-flex {
  display: flex;
}
</style>