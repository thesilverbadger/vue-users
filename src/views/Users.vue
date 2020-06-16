<template>
  <div>
    <h2>Users</h2>
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="user.id" v-bind:item="user" v-for="user in users">
          <td>{{ user.givenName }}</td>
          <td>{{ user.familyName }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="{ name: 'UsersEdit', params: { id: user.id } }">Edit</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import dataservice from "../services/data.service";

export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  methods: {},
  async created() {
    this.users = await dataservice.get("api/users");
  }
};
</script>