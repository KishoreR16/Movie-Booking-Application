import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TicketnewSigninRoute extends Route {
  @service router;
  @service('user-details') user;
  @service currentUser;
  beforeModel() {
    console.log(this.currentUser.username);
    console.log(this.currentUser.password);
    console.log('the length is ' + this.user.users.length);
    if (
      this.currentUser.username != null &&
      this.currentUser.password != null
    ) {
      console.log('inside if');
      for (let i = 0; i < this.user.users.length; i++) {
        console.log('inside for');
        console.log(this.user.users[i].username);
        console.log(this.user.users[i].password);
        if (
          this.user.users[i].username === this.currentUser.username &&
          this.user.users[i].password === this.currentUser.password
        ) {
          console.log('success');
          this.currentUser.status = true;
          console.log(this.currentUser.status);
          this.router.transitionTo('home');
        }
      }
    } else {
      this.router.transitionTo('ticketnew.signin');
    }
  }
}
