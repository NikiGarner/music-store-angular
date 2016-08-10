import { Component, EventEmitter } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { NewAlbumComponent } from './new-album.component';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],

  pipes: [GenrePipe, ArtistPipe],
  directives: [AlbumComponent, NewAlbumComponent],
  template: `
  <select (change)="onGenreChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="pop">Pop</option>
    <option value="comedy">Comedy</option>
    <option value="rock">Rock</option>
  </select>

  <select (change)="onArtistChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option *ngFor="#i of albumList">{{i.artist}}</option>
  </select>
    <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre | artist: filterArtist:artistList"
    [album]="currentAlbum"></album-display>
    <new-album (onSubmitNewAlbum) = "createAlbum($event[0], $event[1], $event[2], $event[3])"></new-album>
  `
})
export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: "all";
  public filterArtist: "all";

  onGenreChange(filterOption) {
    this.filterGenre = filterOption;
  }

  onArtistChange(artistFilterOption) {
    this.filterArtist = artistFilterOption;
  }

  createAlbum(name: string, artist: string, price: number, genre: string) {
    this.albumList.push(
      new Album(name, artist, price, genre)
    );
  }

}
