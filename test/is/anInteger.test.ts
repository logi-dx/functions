import { is } from '../../src';

describe('is.anInteger', () => {
  test('integer', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(123).anInteger();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('float', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(123.456).anInteger();

    // Assert.
    expect(actual).toBe(expected);
  });
});
