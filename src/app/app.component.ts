import { Component } from '@angular/core';
import { MainService } from './app.main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  filteredItems: any;
  poster: string;
  details = {
    url: '',
    actors: '',
    director: '',
    name: '',
    description: '',
    release: '',
    review: []
  };


  constructor(private _MainService: MainService) {
    this._MainService.getData()
      .subscribe((res) => {
        this.data = res;
        this.filteredItems = this.data;
        this.selectDtails(this.filteredItems[0]);
      })
  }

  assign() {
    this.filteredItems = Object.assign([], this.data);
    this.selectDtails(this.filteredItems[0]);
  }

  textFilter(name: string) {
    name = name.trim();
    if(!name) {
      this.assign();
    }
    this.filteredItems = Object.assign([], this.data).filter(
      item => item.title.toLowerCase().indexOf(name.toLowerCase()) > -1
    )
    this.selectDtails(this.filteredItems[0]);
  }

  selectFilter(selected: string) {
    this.filteredItems = Object.assign([], this.data).filter(
      (item, index) => {
        if (item.genres.includes(selected) || selected === '') {
          return item;
        }
      }
    )
    this.selectDtails(this.filteredItems[0]);
  }

  selectDtails(detailData: any) {
    this.details = {
      url: detailData.poster,
      actors: detailData.actors,
      director: detailData.director,
      name: detailData.title,
      description: detailData.story,
      release: detailData.release,
      review: detailData.review || [],
    };
    this.poster = detailData.poster;
  }

  addReview(add: any) {
    if (!add) { return; }
    this.details.review.push(add);
  }
}
