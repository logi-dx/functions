import { is } from '../../src';

describe('is.notWhiteSpace', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = false;

    // Act.
    const act = (): void => {
      actual = is(null).notWhiteSpace();
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
    actual = is('Hello world').notWhiteSpace();

    // Assert.
    expect(actual).toBe(expected);
  });
});
