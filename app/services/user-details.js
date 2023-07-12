import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

class UserData {
  username;
  password;
  constructor(username, password) {
    console.log('inside constructor');
    this.username = username;
    this.password = password;
  }
}

export default class UserDetailsService extends Service {
  @tracked users = [];

  addUserData(username, password) {
    console.log('inside function');
    let newUser = new UserData(username, password);
    this.users.push(newUser);
  }
}
