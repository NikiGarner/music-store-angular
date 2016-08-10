import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
  selector: 'new-album',
  outputs: ['onSubmitNewAlbum'],
  template: `
  <div>
    <h3>Add an album</h3>
    <input placeholder="Album name" class="input-lg" #newName>
    <input placeholder="Artist name" class="input-lg" #newArtist>
    <input placeholder="Price" class="input-lg" #newPrice>
    <input placeholder="Genre" class="input-lg" #newGenre>
    <button (click)="addAlbum(newName, newArtist, newPrice, newGenre)">Add</button>
  </div>
  `
})
export class NewAlbumComponent {
  public onSubmitNewAlbum: EventEmitter<String[]> = new EventEmitter();
  constructor(){
    this.onSubmitNewAlbum = new EventEmitter()
  }
  addAlbum(userAlbumName: HTMLInputElement, userArtistName: HTMLInputElement, userPrice: HTMLInputElement, userGenre: HTMLInputElement){
    this.onSubmitNewAlbum.emit([userAlbumName.value, userArtistName.value, userPrice.value, userGenre.value]);
    userAlbumName.value="";
    userArtistName.value="";
    userPrice.value="";
    userGenre.value="";
  }
}
