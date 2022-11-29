import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coords',
})
export class CoordsPipe implements PipeTransform {
  transform(coords: { lat: number; lng: number }): string {
    let latString: string = `${Math.floor(Math.abs(coords.lat)).toString()}°${
      coords.lat < 0 ? 'S' : 'N'
    }`;
    let lngString: string = `${Math.floor(Math.abs(coords.lng)).toString()}°${
      coords.lng < 0 ? 'O' : 'E'
    }`;

    return `${latString}, ${lngString}`;
  }
}
