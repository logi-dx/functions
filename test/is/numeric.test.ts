import { is } from '../../src';

describe('is.numeric', () => {
  test('number', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(123.456).numeric();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is('Hello World!').numeric();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('NaN', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(NaN).numeric();

    // Assert.
    expect(actual).toBe(expected);
  });
});
