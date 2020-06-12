<template>
  <div>
    <h2>Login</h2>
    <form>
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" v-model="name" required autofocus />
      </div>
      <div>
        <label for="password">Password</label>
        <div>
          <input id="key" type="password" v-model="key" required />
        </div>
      </div>
      <div>
        <button type="submit" @click="handleSubmit">Login</button>
      </div>
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