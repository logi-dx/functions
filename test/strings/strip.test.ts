import { strings } from "../../src";

test('strings.strip', () => {
  // Arrange.
  let actual: string;
  const expected: string = 'Helloworld!';

  // Act.
  actual = strings('\n \t \r Hello world!').strip();

  // Assert.
  expect(actual).toBe(expected);
});
