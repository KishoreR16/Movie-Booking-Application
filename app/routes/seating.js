import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class SeatingRoute extends Route {
  @service data;
  @service router;
  @service currentUser;
  beforeModel() {
    if (!this.currentUser.status) {
      this.router.transitionTo('ticketnew');
    }
  }
  async model() {
    this.data.seats = [];
    this.data.amount = 0;
  }
}
