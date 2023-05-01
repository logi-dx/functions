import { dates } from '../../src';
import { DateTime } from '../../src/dates/toDateTime';

test('dates.toDateTime', () => {
  // Arrange.
  const date: Date = new Date();
  let actual: DateTime;
  const expected: DateTime = {
    second: date.getSeconds(),
    minute: date.getMinutes(),
    hour: date.getHours(),
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  // Act.
  actual = dates(date).toDateTime();

  // Assert.
  expect(actual).toStrictEqual(expected);
});
