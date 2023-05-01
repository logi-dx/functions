import { is } from '../../src';

describe('is.notEmpty', () => {
  test('array', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is([1, 2, 3]).notEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('Hello World!').notEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('valid object', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is({ length: 123 }).notEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('invalid object', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = false;

    // Act.
    const act = () => {
      actual = is({ foo: 'bar' }).notEmpty();
    };

    // Assert.
    expect(act).toThrow(TypeError);
    expect(actual).toBe(expected);
  });
});
