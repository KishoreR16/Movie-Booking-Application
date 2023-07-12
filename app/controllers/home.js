import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class HomeController extends Controller {
  @tracked length;
  get addIndicators() {
    for (let i = 0; i < this.length; i++) {
      const para = document.createElement('li');

      const element = document.getElementById('div1');
      element.appendChild(para);
    }
  }

  @action
  result() {
    const value = parseInt(document.getElementById('save').innerHTML);

    if (value % 2 == 0) {
      const adding = (document.getElementsByTagName('columnType')[
        value
      ].className = 'leftcolumn');
    } else {
      const adding = (document.getElementsByTagName('columnType')[
        value
      ].className = 'rightcolumn');
    }
  }
}
