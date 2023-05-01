import { is } from "../../src";

describe('is.notPositive', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(null).notPositive();
    
    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('Hello world!').notPositive();
    
    // Assert.
    expect(actual).toBe(expected);
  });

  test('negative', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(-1).notPositive();
    
    // Assert.
    expect(actual).toBe(expected);
  });

  test('zero', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(0).notPositive();
    
    // Assert.
    expect(actual).toBe(expected);
  });
});
