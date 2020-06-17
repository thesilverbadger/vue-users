<template>
  <div>
    <h2>Logout</h2>
    <button class="btn btn-warning" @click="logout">Confirm</button>
  </div>
</template>

<script>
import userService from "../services/user.service";
export default {
  name: "Logout",
  methods: {
    logout() {
      userService.logout();
      this.$router.push({ name: "Index" });
    }
  }
};
</script>