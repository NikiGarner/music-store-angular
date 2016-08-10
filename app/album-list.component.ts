import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  pipes: [GenrePipe],
  directives: [AlbumComponent],
  template: `
  <select (change)="onGenreChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="pop">Pop</option>
    <option value="comedy">Comedy</option>
    <option value="rock">Rock</option>
  </select>
    <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre"
    [album]="currentAlbum"></album-display>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: "all";

  onGenreChange(filterOption) {
    this.filterGenre = filterOption;
  }
}
