import { module, test } from 'qunit';
import { setupTest } from 'booking/tests/helpers';

module('Unit | Route | ticketnew/signin', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:ticketnew/signin');
    assert.ok(route);
  });
});
