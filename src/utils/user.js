export default class User {


    static getUser() {
      const user = JSON.parse(window.localStorage.getItem('user'));
      return user;
    }

    static setUser(user) {
      window.localStorage.setItem('user', JSON.stringify(user));
    }

   /*  static get() {
      // return null; // Not login
      return {
        id: 1,
        name: 'Admin Adminovich',
        // role: 'user', // User role
        role: 'admin', // Admin role
      };
    } */


  }
  