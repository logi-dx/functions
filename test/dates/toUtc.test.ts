import { dates } from '../../src';

test('dates.toUtc', () => {
  // Arrange.
  let actual: string;
  const expected: string = new Date().toUTCString();

  // Act.
  actual = dates(new Date()).toUtc().toUTCString();

  // Assert.
  expect(actual).toStrictEqual(expected);
});
