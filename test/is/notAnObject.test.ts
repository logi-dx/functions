import { is } from '../../src';

describe('is.notAnObject', () => {
  test('integer', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(123).notAnObject();

    // Assert.
    expect(actual).toBe(expected);
  });

  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(null).notAnObject();

    // Assert.
    expect(actual).toBe(expected);
  });
});
