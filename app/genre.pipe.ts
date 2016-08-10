import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var genreType = args[0];
    if (genreType === "pop") {
      return input.filter(function(album){
        return album.genre === "Pop";
      });
    } else if (genreType === "comedy"){
      return input.filter(function(album){
        return album.genre === "Comedy";
      });
    } else if (genreType === "rock"){
      return input.filter(function(album){
        return album.genre === "Rock";
      });
    } else {
      return input;
    }
  }
}
