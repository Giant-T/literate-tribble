import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coords',
})
export class CoordsPipe implements PipeTransform {
  transform(coords: { lat: number; lng: number }): string {
    let latString: string = this.formatNumber(coords.lat, 'S', 'N');
    let lngString: string = this.formatNumber(coords.lng, 'O', 'E');

    return `${latString}, ${lngString}`;
  }

  private formatNumber(
    number: number,
    lowerLetter: string,
    upperLetter: string
  ): string {
    return `${Math.floor(Math.abs(number)).toString()}°${
      number < 0 ? lowerLetter : upperLetter
    }
    `;
  }
}
