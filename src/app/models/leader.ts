export interface Leader {
  id?: string;
  countryId?: string;
  name: string;
  sex: string;
  dateStart: Date;
  dateEnd?: Date;
  politicalParty: string;
  isInPower?: boolean;
}
