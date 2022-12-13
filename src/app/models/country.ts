import { Continent } from './continent';
import { Leader } from './leader';

export interface Country {
  id?: string;
  name: string;
  code: string;
  continent: Continent;
  area: number;
  formattedArea?: string;
  languages: string[];
  isNato: boolean;
  capital: {
    name: string;
    coords: {
      lat: number;
      lng: number;
    };
    link?: string;
  };
  leaders: Leader[];
}
