import { strings } from "../../src";

test('strings.isNotEmpty', () => {
  // Arrange.
  let actual: boolean;
  const expected: boolean = true;

  // Act.
  actual = strings('Hello world!').isNotEmpty();

  // Assert.
  expect(actual).toBe(expected);
});
