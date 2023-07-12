import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Controller | seating', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:seating');
    assert.ok(controller);
  });
});
