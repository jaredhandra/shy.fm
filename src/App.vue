<template>
  <div id="app">
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
    <router-view />
  </div>
</template>

<style lang="scss">
html, body {
  margin: 0px;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
@font-face {
  font-family: FantasmaRegular;
  src: url("fonts/Fantasma-Regular.ttf")  format("truetype");
}

@font-face {
  font-family: FerriteCoreDXRegular;
  src: url("fonts/FerriteCoreDX-Regular.ttf")  format("truetype");
}
</style>
