<template>
  <div>
    <h2>Edit {{givenName}} {{familyName}}</h2>
    <form>
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
      <button class="btn btn-primary" type="submit" @click="handleSubmit">Save</button>
    </form>
  </div>
</template>

<script>
import dataService from "../services/data.service";
export default {
  name: "",
  data() {
    return {
      email: "",
      givenName: "",
      familyName: "",
      id: 0
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      const response = await dataService.put("api/users", {
        id: this.id,
        email: this.email,
        givenName: this.givenName,
        familyName: this.familyName
      });

      console.log(response);
      this.$router.push({ name: "Users" });
    }
  },
  async created() {
    console.log(this.$route.params.id);
    const user = await dataService.get(`api/users/${this.$route.params.id}`);
    this.email = user.email;
    this.givenName = user.givenName;
    this.familyName = user.familyName;
    this.id = user.id;
  }
};
</script>