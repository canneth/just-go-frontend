
// TODO: Adapt this to actual backend.
// Check the docs: https://developers.google.com/maps/documentation/places/web-service/details
export interface PlaceData {
  id: string;
  // place_id: string;
  name: string;
  placeType: string;
  address: string;
  openStatus: boolean;
  openingTime: string;
  closingTime: string;
  contactNumber: string;
  tags: string[];
};

export interface FavouritePlaceCardData {
  id: string;
  placeId: string;
  name: string;
  placeType: string;
  tags: string[];
  photoReference: string;
};


