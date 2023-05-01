import { is } from "../../src";

test('is.notTypeOf', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is(123).notTypeOf('string');

  // Assert.
  expect(actual).toBe(expected);
});
