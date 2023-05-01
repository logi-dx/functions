import { is } from '../../src';

describe('is.anObject', () => {
  test('object', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is({}).anObject();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('null', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(null).anObject();

    // Assert.
    expect(actual).toBe(expected);
  });
});
