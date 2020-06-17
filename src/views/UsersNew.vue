<template>
  <div>
    <h2>New User</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          name="email"
          v-model="email"
          autofocus
          required
        />
      </div>
      <div class="form-group">
        <label for="givenName">Given Name</label>
        <input
          type="text"
          class="form-control"
          id="givenName"
          name="givenName"
          v-model="givenName"
          required
        />
      </div>
      <div class="form-group">
        <label for="familyName">Family Name</label>
        <input
          type="text"
          class="form-control"
          id="familyName"
          name="familyName"
          v-model="familyName"
          required
        />
      </div>
      <button class="btn btn-primary" type="submit">Save</button>
      <router-link class="btn btn-link" :to="{ name: 'Users' }">Back</router-link>
    </form>
  </div>
</template>

<script>
import dataService from "../services/data.service";

export default {
  name: "UsersNew",
  data() {
    return {
      email: "",
      givenName: "",
      familyName: ""
    };
  },
  methods: {
    async onSubmit() {
      const response = await dataService.post("api/users", {
        email: this.email,
        givenName: this.givenName,
        familyName: this.familyName
      });

      console.log(response);
      this.$router.push({ name: "Users" });
    }
  }
};
</script>