import { is } from '../../src';

describe('is.null', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(null).null();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('undefined', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(undefined).null();

    // Assert.
    expect(actual).toBe(expected);
  });
});
