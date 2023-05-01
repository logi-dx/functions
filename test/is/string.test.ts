import { is } from "../../src";

test('is.string', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is('Hello World!').string();

  // Assert.
  expect(actual).toBe(expected);
});
