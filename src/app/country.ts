import { Leader } from './leader';

export interface Country {
  id?: string;
  name: string;
  code: string;
  continent: string;
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
