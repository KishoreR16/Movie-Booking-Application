import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
  // @attr id;
  @attr name;
  @attr path;
  @attr genre;
  @attr rating;
  @attr language;
  @attr about;
  @attr cast;
  @attr crew;
  @attr theatres;
}
