class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(values, callback) {
    if (process.env.REACT_APP_ADMIN_UNAME === values[0] && process.env.REACT_APP_ADMIN_PWORD === values[1]) {
      this.authenticated = true;
      callback();
    } else {
      this.authenticated = false;
      alert('Incorrect details');
    }
  }

  logout(callback) {
    this.authenticated = false;

    callback();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();