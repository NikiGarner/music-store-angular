import {Component, EventEmitter} from 'angular2/core';
import {AlbumComponent} from './album.component';

@Component({
  selector: 'shopping-cart',

  template: `
    <b>Total in Cart: </b>
  `
})
export class ShoppingCartComponent {
  public total: number;

  addToTotal(price: number): void {

  }
}
