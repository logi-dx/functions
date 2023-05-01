import { strings } from "../../src";

test('strings.isEmpty', () => {
  // Arrange.
  let actual: boolean;
  const expected: boolean = true;

  // Act.
  actual = strings('').isEmpty();

  // Assert.
  expect(actual).toBe(expected);
});
