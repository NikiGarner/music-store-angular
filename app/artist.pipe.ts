import {Pipe, PipeTransform} from 'angular2/core';
import {Album} from './album.model';

@Pipe({
  name: "artist",
  pure: false
})

export class ArtistPipe implements PipeTransform {
  transform(input: Album[], args) {
    var artistName = args[0];
    console.log(args);
    if (artistName === "all" ) {
      return input;
    } else {
      return input.filter(function(album){
        return album.artist === artistName;
      });
    }
  }
}
