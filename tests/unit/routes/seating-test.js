import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Route | seating', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:seating');
    assert.ok(route);
  });
});
