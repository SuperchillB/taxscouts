import {
  isNotEmptyArray,
  getUniqueArrayByKey,
} from '../../../src/utils/arrays';

describe('Arrays - unit tests', () => {
  it('isNotEmptyArray', () => {
    const array = [1, 2, 3];
    expect(isNotEmptyArray(array)).to.equal(true);

    const emptyArray = [];
    expect(isNotEmptyArray(emptyArray)).to.equal(false);
  });

  it('getUniqueArrayByKey', () => {
    const array = [
      { id: 1, b: 'test' },
      { id: 1, b: 'something' },
      { id: 2, b: 'tables' },
      { id: 3, b: 'chairs' },
      { id: 2, b: 'tables' },
      { id: 4, b: 'lampshade' },
    ];

    const expected = [
      { id: 1, b: 'something' },
      { id: 2, b: 'tables' },
      { id: 3, b: 'chairs' },
      { id: 4, b: 'lampshade' },
    ];
    const result = getUniqueArrayByKey(array, 'id');

    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      expect(element.id).to.equal(expected[index].id);
      expect(element.b).to.equal(expected[index].b);
    }

    expect(getUniqueArrayByKey([], 'id').length).to.equal(0);
  });
});
