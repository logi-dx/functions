import { is } from '../../src';

describe('is.notNumeric', () => {
  test('number', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(123.456).notNumeric();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('Hello World!').notNumeric();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('NaN', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(NaN).notNumeric();

    // Assert.
    expect(actual).toBe(expected);
  });
});
