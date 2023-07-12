import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class HomeRoute extends Route {
  @service store;
  @service router;
  @service currentUser;

  beforeModel() {
    if (!this.currentUser.status) {
      this.router.transitionTo('ticketnew');
    }
  }

  async model() {
    return RSVP.hash({
      slides: this.store.findAll('slide'),
      movies: this.store.findAll('movie'),
    });
  }
  setupController(controller, model) {
    super.setupController(controller, model.slides);
    controller.length = model.slides.length;
  }

  // @action
  // loading(transition, originRoute) {
  //   console.log('loading');
  //   // let controller = this.controllerFor('load');
  //   // controller.set('currentlyLoading', true);
  //   // return true; // allows the loading template to be shown
  // }

  @action
  error(error, transition) {
    console.log('error');
    this.intermediateTransitionTo('error');
  }
}
