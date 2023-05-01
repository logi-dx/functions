import { dates } from '../../src';

test('dates.toUtc', () => {
  // Arrange.
  let actual: string;
  const expected: string = new Date().toUTCString();

  // Act.
  actual = dates(new Date()).utcNow().toUTCString();

  // Assert.
  expect(actual).toStrictEqual(expected);
});
