<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home&nbsp;|&nbsp;</router-link>
      <router-link v-if="!isAuthenticated" to="/login">Login&nbsp;|&nbsp;</router-link>
      <router-link v-if="isAuthenticated" to="/logout">Logout&nbsp;|&nbsp;</router-link>
      <router-link v-if="isAuthenticated" to="/users">Users&nbsp;|&nbsp;</router-link>
      <router-link v-if="isAuthenticated" to="/users/new">New User</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import UserService from "./services/user.service";
export default {
  name: "App",
  data() {
    return {
      isAuthenticated: false
    };
  },
  created() {
    this.isAuthenticated = UserService.isUserAuthenticated();
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding-bottom: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
