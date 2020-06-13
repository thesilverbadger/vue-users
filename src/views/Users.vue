<template>
  <div>
    <h2>Users</h2>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="user.id" v-for="user in users">
          <td>{{ user.givenName }}</td>
          <td>
            <a v-bind="user.id">Edit</a>
          </td>
        </tr>
      </tbody>
    </table>
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