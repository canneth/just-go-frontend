
import PlaceData from '@/models/PlaceData';
import getPrefixedOsmId from './getPrefixedOsmId';

describe(`getPrefixedOsmId(osmId: PlaceData['osm_id'], osmType: PlaceData['osm_type'])`, () => {
  it('throws an error if an invalid osmType is provided', () => {
    expect(() => getPrefixedOsmId(4324245, 'some type of rubbish' as PlaceData['osm_type'])).toThrowError();
  });
  it(`if osmType === 'node', prepends 'N' to osmId and returns the concatenated string`, () => {
    const osmId = 342345;
    const osmType = 'node';
    const osmIdWithType = getPrefixedOsmId(osmId, osmType);
    const expectedResult = `N${osmId}`;
    expect(osmIdWithType).toBe(expectedResult);
  });
  it(`if osmType === 'way', prepends 'W' to osmId and returns the concatenated string`, () => {
    const osmId = 342345;
    const osmType = 'way';
    const osmIdWithType = getPrefixedOsmId(osmId, osmType);
    const expectedResult = `W${osmId}`;
    expect(osmIdWithType).toBe(expectedResult);
  });
  it(`if osmType === 'relation', prepends 'R' to osmId and returns the concatenated string`, () => {
    const osmId = 342345;
    const osmType = 'relation';
    const osmIdWithType = getPrefixedOsmId(osmId, osmType);
    const expectedResult = `R${osmId}`;
    expect(osmIdWithType).toBe(expectedResult);
  });
});