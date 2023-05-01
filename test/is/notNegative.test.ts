import { is } from "../../src";

describe('is.notNegative', () => {
  test('null', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(null).notNegative();
    
    // Assert.
    expect(actual).toBe(expected);
  });

  test('string', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is('Hello world!').notNegative();
    
    // Assert.
    expect(actual).toBe(expected);
  });

  test('positive', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(123).notNegative();
    
    // Assert.
    expect(actual).toBe(expected);
  });

  test('zero', () => {
    // Arrange.
    let actual: boolean = false;
    const expected: boolean = true;

    // Act.
    actual = is(0).notNegative();
    
    // Assert.
    expect(actual).toBe(expected);
  });
});
