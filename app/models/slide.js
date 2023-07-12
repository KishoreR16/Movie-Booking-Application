import Model, { attr } from '@ember-data/model';

export default class SlideModel extends Model {
  @attr name;
  @attr path;
  @attr active;
}
