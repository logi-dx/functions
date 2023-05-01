import { is } from '../../src';

describe('is.empty', () => {
  test('array', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is([]).empty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('').empty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('valid object', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is({ length: 0 }).empty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('invalid object', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = false;

    // Act.
    const act = () => {
      actual = is({ foo: 'bar' }).empty();
    };

    // Assert.
    expect(act).toThrow(TypeError);
    expect(actual).toBe(expected);
  });
});
