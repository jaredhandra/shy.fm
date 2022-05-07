<template>
  <div class="container">
    <div id="start-button">
      <span class="system">INITIATE SHY.FM</span>
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

  #start-button {
    margin-bottom: 20px;
    padding: 10px;
    border: 1px solid transparent;
    outline: 1px solid rgb(126,129,168);
    background: rgba(194,195,214,0.15);
    cursor: pointer;
    .system {
      font-family: FerriteCoreDXRegular;
      font-size: 32px;
    }
  }
}

</style>