import { is } from '../../src';

describe('is.nullOrEmpty', () => {
  test('string', () => {
    // Arrange.
    const expected: boolean = true;
    let actual: boolean = false;
    const input: string = '\r\r\n\n\t\t\t  \t\t \n\n\n';

    // Act.
    actual = is(input).nullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('array', () => {
    // Arrange.
    const expected: boolean = true;
    let actual: boolean = false;

    // Act.
    actual = is([]).nullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('valid object', () => {
    // Arrange.
    const expected: boolean = true;
    let actual: boolean = false;

    // Act.
    actual = is({ length: 0 }).nullOrEmpty();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('invalid object', () => {
    // Arrange.
    const expected: boolean = false;
    let actual: boolean = false;

    // Act.
    const act = () => {
      actual = is({ foo: 'bar' }).nullOrEmpty();
    };

    // Assert.
    expect(act).toThrow(TypeError);
    expect(actual).toBe(expected);
  });
});
