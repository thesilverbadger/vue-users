<template>
  <div>
    <h2>Users</h2>
    <div v-bind:key="user.id" v-for="user in users">
      <h4>{{ user.givenName }}</h4>
    </div>
  </div>
</template>

<script>
import Axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  methods: {},
  created() {
    const token = localStorage.getItem("jwt");
    console.log(token);
    Axios.get("https://localhost:5001/api/users", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        this.users = response.data;
      })
      .catch(function(error) {
        console.error(error.response);
      });
  }
};
</script>