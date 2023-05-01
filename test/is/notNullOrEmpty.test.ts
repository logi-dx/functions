import { is } from '../../src';

describe('is.notNullOrEmpty', () => {
  test('string', () => {
    // Arrange.
    const expected: boolean = true;
    let actual: boolean = false;

    // Act.
    actual = is('Hello World').notNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('array', () => {
    // Arrange.
    const expected: boolean = true;
    let actual: boolean = false;

    // Act.
    actual = is([1, 2, 3]).notNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('valid object', () => {
    // Arrange.
    const expected: boolean = true;
    let actual: boolean = false;

    // Act.
    actual = is({ length: 123 }).notNullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('invalid object', () => {
    // Arrange.
    const expected: boolean = false;
    let actual: boolean = false;

    // Act.
    const act = () => {
      actual = is({ foo: 'bar' }).notNullOrEmpty();
    };

    // Assert.
    expect(act).toThrow(TypeError);
    expect(actual).toBe(expected);
  });
});
