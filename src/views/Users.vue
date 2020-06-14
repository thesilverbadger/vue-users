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
            <a>Edit</a>
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