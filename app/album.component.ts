import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';
import { ShoppingCartComponent } from './shopping-cart.component';

@Component({
    selector: 'album-display',
    inputs: ['album'],
    outputs: ['toggleCart'],
    directives: [ShoppingCartComponent],
  template: `
    <div>
      <label>{{album.name}}, by {{album.artist}}, \${{album.price}}. Genre: {{album.genre}}.</label>
      <input (change)="addToCart(album.price)" type="checkbox" value="true"> Add to Cart
    </div>
  `
})
export class AlbumComponent {
  public album: Album;
  public toggleCart: EventEmitter<number>
  constructor(){
    this.toggleCart = new EventEmitter;
  }
  addToCart(albumPrice: number){
    this.toggleCart.emit(albumPrice);
    console.log(albumPrice);
  }
}
