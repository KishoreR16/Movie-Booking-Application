import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
export default class OrdersController extends Controller {
  @service data;

  get theatreName() {
    return this.data.theatreName;
  }

  get movieName() {
    return this.data.movieName;
  }

  get genre() {
    return this.data.genre;
  }

  get path() {
    return this.data.path;
  }

  get showTiming() {
    return this.data.showTiming;
  }

  get seats() {
    console.log(this.data.seats);
    return this.data.seats;
  }

  get amount() {
    return this.data.amount;
  }
}
