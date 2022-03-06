
import PlaceData from '@/models/PlaceData';

export default function getPrefixedOsmId(osmId: PlaceData['osm_id'], osmType: PlaceData['osm_type']) {
  switch (osmType) {
    case 'node': return `N${osmId}`;
    case 'way': return `W${osmId}`;
    case 'relation': return `R${osmId}`;
    default: throw new Error(`Invalid osmType argument! osmType must be one of 'node', 'way' or 'relation'.`);
  }
}