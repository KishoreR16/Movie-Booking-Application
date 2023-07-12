import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookingRoute extends Route {
  @service store;
  @service router;
  @service('user-details') user;
  @service currentUser;
  async model(params) {
    const { movie_name } = params;
    const data = await this.store.findAll('movie');
    const movie = data.find(({ name }) => name === movie_name);
    return movie;
  }

  beforeModel() {
    if (!this.currentUser.status) {
      this.router.transitionTo('ticketnew');
    }
  }
}
