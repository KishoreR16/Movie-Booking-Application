import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Controller | booking', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:booking');
    assert.ok(controller);
  });
});
