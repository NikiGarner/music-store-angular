import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { AlbumListComponent } from './album-list.component';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <album-list [albumList]="albums"></album-list>
    </div>
  `
})
export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("Thriller", "Michael Jackson", 10, "Pop"),
      new Album("Delirious", "Eddie Murphy", 11, "Comedy"),
      new Album("Born in the USA", "Bruce Springsteen", 12, "Rock")
    ]
  }
}
