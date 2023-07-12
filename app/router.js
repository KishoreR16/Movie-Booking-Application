import EmberRouter from '@ember/routing/router';
import config from 'booking/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*path' });
  this.route('home');
  this.route('movies', { path: '/movies/:movie_name' });
  this.route('booking', { path: '/booking/:movie_name' });
  this.route('seating');
  this.route('orders');
  this.route('error');
  this.route('loading');
  this.route('ticketnew', function () {
    this.route('signin');
    this.route('signup');
  });
});
