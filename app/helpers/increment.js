import { helper } from '@ember/component/helper';
import { tracked } from '@glimmer/tracking';
export default helper(function increment(params /*, named*/) {
  const a = parseInt(document.getElementById('save').innerHTML);
  document.getElementById('save').innerHTML = a + 1;
});
