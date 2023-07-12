import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Service | userDetails', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:user-details');
    assert.ok(service);
  });
});
