import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OrdersRoute extends Route {
  @service router;

  @service currentUser;
  beforeModel() {
    if (!this.currentUser.status) {
      this.router.transitionTo('ticketnew');
    }
  }
}
