import { is } from "../../src";

test('is.notString', () => {
  // Arrange.
  let actual: boolean = false;
  const expected: boolean = true;

  // Act.
  actual = is(123).notString();

  // Assert.
  expect(actual).toBe(expected);
});
