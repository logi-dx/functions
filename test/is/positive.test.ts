import { is } from '../../src';

describe('is.positive', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(null).positive();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is('Hello world!').positive();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('negative', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(-1).positive();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('zero', () => {
    // Arrange.
    let actual: boolean = true;
    const expected: boolean = false;

    // Act.
    actual = is(0).positive();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('positive', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(123).positive();

    // Assert.
    expect(actual).toBe(expected);
  });
});
