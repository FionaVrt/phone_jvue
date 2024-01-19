<template>
  <router-view/>
  <nav>
      <router-link to="/">contact</router-link> |
      <router-link to="/Appelle">Appel</router-link> |
      <router-link to="/historie">Journal</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'App',
  }
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 390px;
  height: 760px;
  margin: 2vh auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  border: 5px solid black;
  border-top: 10px solid black;
  border-bottom: 25px solid black;
}

nav {
  padding: 10px 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  width: 100%;
  bottom: 0;
  background: orange;
}

nav a {
  font-size: 28px;
  font-weight: bold;
  padding: 0 2em;
  color: black;
  text-underline-offset: 5px;
}

nav a.router-link-exact-active {
  color: white;
}
</style>
