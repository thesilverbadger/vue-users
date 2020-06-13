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
import Axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      name: "",
      key: ""
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      if (this.key.length > 0) {
        Axios.post("https://localhost:5001/api/Authorization/token", {
          clientName: this.name,
          key: this.key
        })
          .then(response => {
            localStorage.setItem("jwt", response.data.token);

            if (localStorage.getItem("jwt") != null) {
              this.$emit("loggedIn");
              if (this.$route.params.nextUrl != null) {
                this.$router.push(this.$route.params.nextUrl);
              } else {
                this.$router.push("Users");
              }
            }
          })
          .catch(function(error) {
            console.error(error.response);
          });
      }
    }
  }
};
</script>