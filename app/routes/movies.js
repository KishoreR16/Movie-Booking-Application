import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
export default class MoviesRoute extends Route {
  @service store;
  @service data;
  @service router;
  @service currentUser;
  async model(params) {
    this.data.path = null;
    this.data.genre = null;
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
