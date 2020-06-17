const userService = {
  isUserAuthenticated() {
    return localStorage.getItem("jwt") ? true : false;
  },
  getUser() {
    //TODO
    //return localStorage.getItem("user") toJson...
  },
  logout() {
    localStorage.removeItem("jwt");
  },
};

export default userService;
