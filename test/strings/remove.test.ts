import { strings } from '../../src';

test('strings.remove', () => {
  // Arrange.
  let actual: string;
  const expected: string = 'Helo world!';

  // Act.
  actual = strings('Hello world!').remove('l');

  // Assert.
  expect(actual).toBe(expected);
});
