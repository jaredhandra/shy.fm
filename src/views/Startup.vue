<template>
  <div class="container">
    <div id="start-button">
      <button>Start</button>
      <div class="shy-os">shyOS</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Startup',
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  background-image: url("../assets/eden.png");
  display: flex;
  height: inherit;
  justify-content: center;
  align-items: center;
}
.shy-os {
  font-family: FantasmaRegular;
  font-size: 64px;
  padding-top: 20px;
}
</style>