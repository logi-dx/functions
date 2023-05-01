import { is } from '../../src';

describe('is.notAnInteger', () => {
  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('Hello world!').notAnInteger();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(null).notAnInteger();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('float', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(123.456).notAnInteger();

    // Assert.
    expect(actual).toBe(expected);
  });
});
