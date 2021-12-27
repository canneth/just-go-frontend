
// TODO: Adapt this to actual backend.
interface PlaceData {
  id: string;
  name: string;
  placeType: string;
  address: string;
  openStatus: boolean;
  openingTime: string;
  closingTime: string;
  contactNumber: string;
  tags: string[];
};

export default PlaceData;