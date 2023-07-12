import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class TicketnewController extends Controller {
  @action
  link1() {
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    link1.style.color = 'black';
    link1.style.textDecoration = 'underline';
    link2.style.color = 'red';
    link2.style.textDecoration = 'none';
    const hideImg = document.getElementsByClassName('auth-image')[0];
    hideImg.style.visibility = 'hidden';
  }

  @action
  link2() {
    const link1 = document.getElementById('link1');
    const link2 = document.getElementById('link2');
    link1.style.color = 'red';
    link1.style.textDecoration = 'none';
    link2.style.color = 'black';
    link2.style.textDecoration = 'underline';
    const hideImg = document.getElementsByClassName('auth-image')[0];
    hideImg.style.visibility = 'hidden';
  }
}
