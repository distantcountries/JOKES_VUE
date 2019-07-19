<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar-brand">
        <router-link to="/" style="color:black">Home</router-link> |
        <router-link to="/trivia" style="color:black">Trivia App</router-link> |
        <router-link to="/chuck" style="color:black">ChuckNorris</router-link>
      </nav>
      <hr>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color:black;
}

</style>
