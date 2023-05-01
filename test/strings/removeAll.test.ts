import { strings } from "../../src";

test('strings.removeAll', () => {
  // Arrange.
  let actual: string;
  const expected: string = 'Heo word!';

  // Act.
  actual = strings('Hello world!').removeAll('l');

  // Assert.
  expect(actual).toBe(expected);
});
