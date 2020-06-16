<template>
  <div>
    <h2>Users</h2>
    <UserList />
  </div>
</template>

<script>
import UserList from "../components/UserList";

export default {
  name: "Users",
  components: {
    UserList
  }
};
</script>