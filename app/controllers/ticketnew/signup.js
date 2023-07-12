import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class TicketnewSignupController extends Controller {
  @service('user-details') user;

  @action
  signUp() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.match(decimal) && confirmPassword.match(decimal)) {

      if (password === confirmPassword) {
        document.getElementById('signup-result').innerText =
          'Your Account has been created successfully!!!';
        console.log('in check');
        this.user.addUserData(username, password);
      } else {
        document.getElementById('signup-result').innerText =
          "Passwords doesn't match";
      }
    }
    else {
      alert('Password must contain a number,a uppercase character,a lowercase character and a special character');
    }

  }

  @action
  show1() {
    const togglePassword = document.getElementById('togglePassword');
    const password = document.getElementById('password');
    const type =
      password.getAttribute('type') === 'password' ? 'text' : 'password';
    const color = togglePassword.style.color === 'green' ? 'black' : 'green';
    password.setAttribute('type', type);
    togglePassword.style.color = color;
  }

  @action
  show2() {
    const togglePassword = document.getElementById('toggleConfirmPassword');
    const password = document.getElementById('confirmPassword');
    const type =
      password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    const color = togglePassword.style.color === 'green' ? 'black' : 'green';
    password.setAttribute('type', type);
    togglePassword.style.color = color;
  }
}
