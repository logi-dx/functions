import { is } from "../../src";

test('is.typeOf', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is('Hello World!').typeOf('string');

  // Assert.
  expect(actual).toBe(expected);
});
