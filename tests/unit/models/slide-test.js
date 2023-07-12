import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Model | slide', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('slide', {});
    assert.ok(model);
  });
});
