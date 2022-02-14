
type Latitude = number;
type Longitude = number;
export type LatLonCoords = [Latitude, Longitude];

export function haversineDistance(p1: LatLonCoords, p2: LatLonCoords) {
  const earthRadius = 6371e3; // in m.
  const p1LatInRadians = p1[0] * Math.PI / 180;
  const p2LatInRadians = p2[0] * Math.PI / 180;
  const deltaLat = (p2[0] - p1[0]) * Math.PI / 180;
  const deltaLon = (p2[1] - p1[1]) * Math.PI / 180;

  const a =
    Math.sin(deltaLat / 2) ** 2
    + Math.sin(deltaLon / 2) ** 2 * Math.cos(p1LatInRadians) * Math.cos(p2LatInRadians);

  return 2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}