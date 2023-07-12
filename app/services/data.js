import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DataService extends Service {
  @tracked theatreName;
  @tracked movieName;
  @tracked showTiming;
  @tracked amount = 0;
  @tracked path;
  @tracked genre;
  @tracked seats = [];
}
