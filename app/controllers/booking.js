import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
export default class BookingController extends Controller {
  @service data;
  @action
  updatePoster(path, genre) {
    this.data.theatreName = null;
    this.data.showTiming = null;
    this.data.path = path;
    this.data.genre = genre;
  }
}
