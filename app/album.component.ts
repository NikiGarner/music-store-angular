import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component({
    selector: 'album-display',
    inputs: ['album'],
  template: `
    <div>
      <label>{{album.name}}, by {{album.artist}}, \${{album.price}}. Genre: {{album.genre}}.</label>
    </div>
  `
})
export class AlbumComponent {
  public album: Album;
}
