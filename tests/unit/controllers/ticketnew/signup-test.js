import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Controller | ticketnew/signup', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:ticketnew/signup');
    assert.ok(controller);
  });
});
