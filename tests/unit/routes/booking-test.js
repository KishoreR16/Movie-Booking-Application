import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Route | booking', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:booking');
    assert.ok(route);
  });
});
