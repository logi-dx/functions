import { is } from '../../src';

describe('is.whiteSpace', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = false;

    // Act.
    const act = (): void => {
      actual = is(null).whiteSpace();
    };

    // Assert.
    expect(act).toThrow(TypeError);
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('').whiteSpace();

    // Assert.
    expect(actual).toBe(expected);
  });
});
