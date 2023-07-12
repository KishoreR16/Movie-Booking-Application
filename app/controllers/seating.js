import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SeatingController extends Controller {
  @service data;
  queryParams = ['movieName', 'theatreName', 'show', 'row', 'col'];
  @tracked movieName;
  @tracked theatreName;
  @tracked show;
  @tracked row;
  @tracked col;
  @action
  onLoad() {
    this.data.movieName = this.movieName;
    this.data.theatreName = this.theatreName;
    this.data.showTiming = this.show;

    let seatingData = '';
    let ascii = 65;
    for (let i = 0; i < this.row; i++) {
      seatingData += '<div class="row">';
      ascii += i;
      for (let j = 0; j < this.col; j++) {
        seatingData +=
          '<div class="seat ' +
          String.fromCharCode(ascii) +
          j +
          '"><button class="select-seat">';
        seatingData += "<i class='fas fa-couch'></i>";
        seatingData += '</button></div>';
      }
      ascii = 65;
      seatingData += '</div>';
    }
    seatingData +=
      "<br><br><div style='text-align:center;font-size:16px;font-weight:bold;'>---------------------------------------------------------------------<br>All eyes this way please!</div>";
    document.getElementsByClassName('seating')[0].innerHTML = seatingData;
  }

  get movieGenre() {
    return this.data.genre;
  }

  get moviePath() {
    return this.data.path;
  }

  get updateSeats() {
    let seats = document.getElementsByClassName('select-seat');
    this.data.seats = [];

    for (let i = 0; i < seats.length; i++) {
      $(seats[i]).click(() => {
        $(seats[i]).toggleClass('active');
        const value = $(seats[i]).parent().attr('class');
        let className = $(seats[i]).attr('class');
        if (className.includes('active')) {
          this.data.seats.push($(seats[i]).parent().attr('class'));
          $(seats[i]).css('color', 'white');
          this.data.amount += 200;
        } else {
          this.data.seats = this.data.seats.filter((item) => item !== value);
          $(seats[i]).css('color', 'black');
          this.data.amount -= 200;
        }
        this.data.seats = this.data.seats.sort();
      });
    }
  }

  get toggleEnable() {
    if (this.data.amount == 0) {
      return false;
    } else {
      return true;
    }
  }
}
