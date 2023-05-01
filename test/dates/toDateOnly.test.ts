import { dates } from '../../src';
import { DateOnly } from '../../src/dates/toDateOnly';

test('dates.toDateOnly', () => {
  // Arrange.
  const date: Date = new Date();
  let actual: DateOnly;
  const expected: DateOnly = {
    day: date.getDate(),
    month: date.getMonth() + 1,
    year: date.getFullYear(),
  };

  // Act.
  actual = dates(date).toDateOnly();

  // Assert.
  expect(actual).toStrictEqual(expected);
});
