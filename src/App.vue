<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/plants">Plants</router-link> |
    <router-link to="/garden">My garden</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
[class$="-container"] {
  max-width: 1200px;
  margin: 20px auto;
}
html {
  background-color: #effcf7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
