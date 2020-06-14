<template>
  <div class>
    <h2>Login</h2>
    <form>
      <div class="form-group">
        <label for="name">Email address</label>
        <input
          type="email"
          class="form-control"
          id="name"
          name="name"
          v-model="name"
          autofocus
          required
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input class="form-control" id="key" type="password" v-model="key" required />
      </div>
      <button class="btn btn-primary" type="submit" @click="handleSubmit">Login</button>
    </form>
  </div>
</template>

<script>
import dataService from "../services/data.service";

export default {
  name: "Login",
  data() {
    return {
      name: "",
      key: ""
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      if (this.key.length > 0) {
        const response = await dataService.post("api/Authorization/token", {
          clientName: this.name,
          key: this.key
        });

        localStorage.setItem("jwt", response.token);

        if (localStorage.getItem("jwt") != null) {
          this.$emit("loggedIn");
          if (this.$route.params.nextUrl != null) {
            this.$router.push(this.$route.params.nextUrl);
          } else {
            this.$router.push("Users");
          }
        }
      }
    }
  }
};
</script>