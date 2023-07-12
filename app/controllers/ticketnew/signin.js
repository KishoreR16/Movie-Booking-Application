import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
export default class TicketnewSigninController extends Controller {
  @service router;
  @service('user-details') user;
  @service currentUser;
  @action
  signIn() {
    this.currentUser.username = document.getElementById('username').value;
    this.currentUser.password = document.getElementById('password').value;
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (this.currentUser.password.match(decimal)) {
      for (let i = 0; i < this.user.users.length; i++) {
        if (
          this.currentUser.username === this.user.users[i].username &&
          this.currentUser.password === this.user.users[i].password
        ) {
          console.log('logged in successfully');
          this.currentUser.status = true;
          this.router.transitionTo('home');
        }
      }

      document.getElementById('signin-result').innerText = 'wrong credentials';

    }
    else {
      alert('Password must contain a number,a uppercase character,a lowercase character and a special character');
    }

  }

  @action
  show1() {
    const password = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const type =
      password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    const color = togglePassword.style.color === 'green' ? 'black' : 'green';
    password.setAttribute('type', type);
    togglePassword.style.color = color;
  }
}
